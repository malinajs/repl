let __app_onerror = console.error;


const configure = (option) => {
  __app_onerror = option.onerror;
};


const isFunction = fn => typeof fn == 'function';


const isObject = d => typeof d == 'object';


const safeCall = fn => {
  try {
    return fn?.();
  } catch (e) {
    __app_onerror(e);
  }
};

function WatchObject(fn, cb) {
  this.fn = fn;
  this.cb = cb;
  this.value = NaN;
  this.ro = false;
  this.cmp = null;
}


const cd_watchObject = (fn, cb, option) => {
  let w = new WatchObject(fn, cb);
  option && Object.assign(w, option);
  return w;
};


function $watch(cd, fn, callback, w) {
  w = cd_watchObject(fn, callback, w);
  cd.watchers.push(w);
  return w;
}

function $watchReadOnly(cd, fn, callback) {
  return $watch(cd, fn, callback, { ro: true });
}

function addEvent(cd, el, event, callback) {
  if(!callback) return;
  el.addEventListener(event, callback);
  cd_onDestroy(cd, () => {
    el.removeEventListener(event, callback);
  });
}

function cd_onDestroy(cd, fn) {
  if(fn) cd._d.push(fn);
}

function $$removeItem(array, item) {
  let i = array.indexOf(item);
  if(i >= 0) array.splice(i, 1);
}

function $ChangeDetector(parent) {
  this.parent = parent;
  this.children = [];
  this.watchers = [];
  this._d = [];
  this.prefix = [];
}

$ChangeDetector.prototype.new = function() {
  let cd = new $ChangeDetector(this);
  this.children.push(cd);
  return cd;
};

$ChangeDetector.prototype.destroy = function(option) {
  cd_destroy(this, option);
};

const cd_component = cd => {
  while(cd.parent) cd = cd.parent;
  return cd.component;
};

const cd_new = () => new $ChangeDetector();

const cd_attach = (parent, cd) => {
  if(cd) {
    cd.parent = parent;
    parent.children.push(cd);
  }
};

let destroyResults = null;

const cd_destroy = (cd, option) => {
  if(option !== false && cd.parent) $$removeItem(cd.parent.children, cd);
  cd.watchers.length = 0;
  cd.prefix.length = 0;
  cd._d.forEach(fn => {
    let p = safeCall(fn);
    p && destroyResults && destroyResults.push(p);
  });
  cd._d.length = 0;
  cd.children.map(cd => cd.destroy(false));
  cd.children.length = 0;
};

const isArray = (a) => Array.isArray(a);

const compareArray = (a, b) => {
  let a0 = isArray(a);
  let a1 = isArray(b);
  if(a0 !== a1) return true;
  if(!a0) return a !== b;
  if(a.length !== b.length) return true;
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) return true;
  }
  return false;
};


function $$compareArray(w, value) {
  if(!compareArray(w.value, value)) return 0;
  if(isArray(value)) w.value = value.slice();
  else w.value = value;
  w.cb(w.value);
  return w.ro ? 0 : 1;
}


const compareDeep = (a, b, lvl) => {
  if(lvl < 0 || !a || !b) return a !== b;
  if(a === b) return false;
  let o0 = isObject(a);
  let o1 = isObject(b);
  if(!(o0 && o1)) return a !== b;

  let a0 = isArray(a);
  let a1 = isArray(b);
  if(a0 !== a1) return true;

  if(a0) {
    if(a.length !== b.length) return true;
    for(let i = 0; i < a.length; i++) {
      if(compareDeep(a[i], b[i], lvl - 1)) return true;
    }
  } else {
    let set = {};
    for(let k in a) {
      if(compareDeep(a[k], b[k], lvl - 1)) return true;
      set[k] = true;
    }
    for(let k in b) {
      if(set[k]) continue;
      return true;
    }
  }

  return false;
};

function cloneDeep(d, lvl) {
  if(lvl < 0 || !d) return d;

  if(isObject(d)) {
    if(d instanceof Date) return d;
    if(d instanceof Element) return d;
    if(isArray(d)) return d.map(i => cloneDeep(i, lvl - 1));
    let r = {};
    for(let k in d) r[k] = cloneDeep(d[k], lvl - 1);
    return r;
  }
  return d;
}

const $$cloneDeep = function(d) {
  return cloneDeep(d, 10);
};

function $$deepComparator(depth) {
  return function(w, value) {
    let diff = compareDeep(w.value, value, depth);
    diff && (w.value = cloneDeep(value, depth), !w.idle && w.cb(value));
    w.idle = false;
    return !w.ro && diff ? 1 : 0;
  };
}

const $$compareDeep = $$deepComparator(10);


const keyComparator = (w, value) => {
  let diff = false;
  for(let k in value) {
    if(w.value[k] != value[k]) diff = true;
    w.value[k] = value[k];
  }
  diff && !w.idle && w.cb(value);
  w.idle = false;
  return !w.ro && diff ? 1 : 0;
};


const fire = w => {
  if(w.cmp) w.cmp(w, w.fn());
  else {
    w.value = w.fn();
    w.cb(w.value);
  }
};

function $digest($cd) {
  let loop = 10;
  let w;
  while(loop >= 0) {
    let changes = 0;
    let index = 0;
    let queue = [];
    let i, value, cd = $cd;
    while(cd) {
      for(i = 0; i < cd.prefix.length; i++) cd.prefix[i]();
      for(i = 0; i < cd.watchers.length; i++) {
        w = cd.watchers[i];
        value = w.fn();
        if(w.value !== value) {
          if(w.cmp) {
            changes += w.cmp(w, value);
          } else {
            w.value = value;
            if(!w.ro) changes++;
            w.cb(w.value);
          }
        }
      }
      if(cd.children.length) queue.push.apply(queue, cd.children);
      cd = queue[index++];
    }
    loop--;
    if(!changes) break;
  }
  if(loop < 0) __app_onerror('Infinity changes: ', w);
}

let templatecache = {};
let templatecacheSvg = {};

const childNodes = 'childNodes';
const firstChild = 'firstChild';

let noop = a => a;

const insertAfter = (label, node) => {
  label.parentNode.insertBefore(node, label.nextSibling);
};

const createTextNode = (text) => document.createTextNode(text);

const $$htmlToFragment = (html, option) => {
  let result = templatecache[html];
  if(!result) {
    let t = document.createElement('template');
    t.innerHTML = html.replace(/<>/g, '<!---->');
    result = t.content;
    if(!(option & 2) && result.firstChild == result.lastChild) result = result.firstChild;
    templatecache[html] = result;
  }

  return option & 1 ? result.cloneNode(true) : result;
};

const $$htmlToFragmentClean = (html, option) => {
  let result = templatecache[html];
  if(!result) {
    let t = document.createElement('template');
    t.innerHTML = html.replace(/<>/g, '<!---->');
    result = t.content;

    let it = document.createNodeIterator(result, 128);
    let n;
    while(n = it.nextNode()) {
      if(!n.nodeValue) n.parentNode.replaceChild(document.createTextNode(''), n);
    }

    if(!(option & 2) && result.firstChild == result.lastChild) result = result.firstChild;
    templatecache[html] = result;
  }

  return option & 1 ? result.cloneNode(true) : result;
};


function svgToFragment(content) {
  if(templatecacheSvg[content]) return templatecacheSvg[content].cloneNode(true);
  let t = document.createElement('template');
  t.innerHTML = '<svg>' + content + '</svg>';

  let result = document.createDocumentFragment();
  let svg = t.content[firstChild];
  while(svg[firstChild]) result.appendChild(svg[firstChild]);
  templatecacheSvg[content] = result.cloneNode(true);
  return result;
}


const iterNodes = (el, last, fn) => {
  let next;
  while(el) {
    next = el.nextSibling;
    fn(el);
    if(el == last) break;
    el = next;
  }
};


const $$removeElements = (el, last) => iterNodes(el, last, n => n.remove());


function removeElementsBetween(el, stop) {
  let next;
  el = el.nextSibling;
  while(el) {
    next = el.nextSibling;
    if(el == stop) break;
    el.remove();
    el = next;
  }
}

const getFinalLabel = n => {
  if(n.nextSibling) return n.nextSibling;
  let e = document.createTextNode('');
  n.parentNode.appendChild(e);
  return e;
};


const resolvedPromise = Promise.resolve();

function $tick(fn) {
  fn && resolvedPromise.then(fn);
  return resolvedPromise;
}


function $makeEmitter(option) {
  return (name, detail) => {
    let fn = option.events[name];
    if(!fn) return;
    let e = document.createEvent('CustomEvent');
    e.initCustomEvent(name, false, false, detail);
    fn(e);
  };
}


function $$addEventForComponent(list, event, fn) {
  let prev = list[event];
  if(prev) {
    if(prev._list) prev._list.push(fn);
    else {
      function handler(e) {
        handler._list.forEach(fn => {
          fn(e);
        });
      }
      handler._list = [prev, fn];
      list[event] = handler;
    }
  } else list[event] = fn;
}


let current_component, $context;

const $onDestroy = fn => current_component._d.push(fn);
const $onMount = fn => current_component._m.push(fn);


const $base = ($component) => {
  let $cd = cd_new();
  $cd.component = $component;
  $onDestroy(() => $cd.destroy());

  let planned;
  let apply = r => {
    if(planned) return r;
    planned = true;
    $tick(() => {
      try {
        $digest($cd);
      } finally {
        planned = false;
      }
    });
    return r;
  };

  $component.$cd = $cd;
  $component.apply = apply;
  $component.push = apply;
  apply();
};


const makeComponent = (init, $base) => {
  return ($option = {}) => {
    let prev = current_component;
    $context = $option.context || {};
    let $component = current_component = {
      $option,
      destroy: () => $component._d.map(safeCall),
      context: $context,
      exported: {},
      _d: [],
      _m: []
    };
    $base?.($component);

    try {
      $component.$dom = init($option, $component.apply);
    } finally {
      current_component = prev;
      $context = null;
    }

    $component._d.push(...$component._m.map(safeCall));
    return $component;
  };
};


const callComponent = (context, component, option = {}, propFn, cmp, setter, classFn) => {
  option.context = { ...context };
  let $component, parentWatch, childWatch, cd;

  if(propFn) {
    if(cmp) {
      cd = cd_new();
      parentWatch = $watch(cd, propFn, value => {
        option.props = value;
        if($component) {
          $component.push?.();
          childWatch && (childWatch.idle = true);
          $component.apply?.();
        }
      }, { ro: true, value: {}, cmp });
      fire(parentWatch);
    } else option.props = propFn();
  }

  if(classFn) {
    cd = cd || cd_new();
    fire($watch(cd, classFn, value => {
      option.$class = value;
      $component?.apply?.();
    }, { ro: true, value: {}, cmp: keyComparator }));
  }

  let anchors = option.anchor;
  if(anchors) {
    for(let name in anchors) {
      let a = anchors[name];
      let fn = a.$;
      if(fn) {
        cd = cd || cd_new();
        anchors[name] = el => {
          let $cd = cd_new();
          cd_attach(cd, $cd);
          fn($cd, el);
          return () => cd_destroy($cd);
        };
      }
    }
  }

  $component = safeCall(() => component(option));
  if(setter && $component?.exportedProps) {
    childWatch = $watch($component.$cd, $component.exportedProps, value => {
      setter(value);
      cd_component(cd).apply();
    }, { ro: true, idle: true, value: parentWatch.value, cmp });
  }
  return {
    $cd: cd,
    $dom: $component.$dom,
    destroy: $component.destroy,
    $component
  };
};


const attachDynComponent = (parentCD, label, exp, bind) => {
  let active, $cd, $dom, destroy, finalLabel = getFinalLabel(label);
  cd_onDestroy(parentCD, () => destroy?.());
  $watch(parentCD, exp, (component) => {
    destroy?.();
    if($cd) cd_destroy($cd);
    if(active) removeElementsBetween(label, finalLabel);

    if(component) {
      ({ $cd, $dom, destroy } = bind(component));
      cd_attach(parentCD, $cd);
      insertAfter(label, $dom);
      active = true;
    } else {
      destroy = null;
      $cd = null;
      active = false;
    }
  });
};


const autoSubscribe = (...list) => {
  list.forEach(i => {
    if(isFunction(i.subscribe)) {
      let unsub = i.subscribe(current_component.apply);
      if(isFunction(unsub)) cd_onDestroy(current_component, unsub);
    }
  });
};


const addStyles = (id, content) => {
  if(document.head.querySelector('style#' + id)) return;
  let style = document.createElement('style');
  style.id = id;
  style.innerHTML = content;
  document.head.appendChild(style);
};


const addClass = (el, className) => el.classList.add(className);


const bindClass = (cd, element, fn, className) => {
  $watch(cd, fn, value => {
    if(value) addClass(element, className);
    else element.classList.remove(className);
  }, { ro: true, value: false });
};


const setClassToElement = (element, value) => bindAttributeBase(element, 'class', value);


const bindClassExp = (cd, element, fn) => {
  $watch(cd, fn, value => setClassToElement(element, value), { ro: true, value: '' });
};


const bindText = (cd, element, fn) => {
  $watchReadOnly(cd, () => '' + fn(), value => {
    element.textContent = value;
  });
};


const bindStyle = (cd, element, name, fn) => {
  $watchReadOnly(cd, fn, (value) => {
    element.style[name] = value;
  });
};


const bindAttributeBase = (element, name, value) => {
  if(value != null) element.setAttribute(name, value);
  else element.removeAttribute(name);
};


const bindAttribute = (cd, element, name, fn) => {
  $watchReadOnly(cd, () => {
    let v = fn();
    return v == null ? v : '' + v;
  }, value => bindAttributeBase(element, name, value));
};


const bindAction = (cd, element, action, fn, subscribe) => {
  $tick(() => {
    let handler, value;
    if(fn) {
      value = fn();
      handler = action.apply(null, [element].concat(value));
    } else handler = action(element);
    cd_onDestroy(cd, handler?.destroy);
    subscribe?.(cd, fn, handler, value);
  });
};


const __bindActionSubscribe = (cd, fn, handler, value) => {
  if(handler?.update && fn) {
    $watch(cd, fn, args => {
      handler.update.apply(handler, args);
    }, { cmp: $$deepComparator(1), value: cloneDeep(value, 1) });
  }
};


const bindInput = (cd, element, name, get, set) => {
  let w = $watchReadOnly(cd, name == 'checked' ? () => !!get() : get, value => {
    element[name] = value == null ? '' : value;
  });
  addEvent(cd, element, 'input', () => {
    set(w.value = element[name]);
  });
};


const makeClassResolver = ($option, classMap, metaClass, mainName) => {
  if(!$option.$class) $option.$class = {};
  if(!mainName && metaClass.main) mainName = 'main';
  return (line, defaults) => {
    let result = {};
    if(defaults) result[defaults] = 1;
    line.trim().split(/\s+/).forEach(name => {
      let meta;
      if(name[0] == '$') {
        name = name.substring(1);
        meta = true;
      }
      let h = metaClass[name] || meta;
      if(h) {
        let className = ($option.$class[name === mainName ? '$$main' : name] || '').trim();
        if(className) {
          result[className] = 1;
        } else if(h !== true) {
          result[name] = 1;
          result[h] = 1;
        }
      }
      let h2 = classMap[name];
      if(h2) {
        result[name] = 1;
        result[h2] = 1;
      } else if(!h) {
        result[name] = 1;
      }
    });
    return Object.keys(result).join(' ');
  };
};


const makeExternalProperty = ($component, name, getter, setter) => {
  Object.defineProperty($component, name, {
    get: getter,
    set: v => { setter(v); $component.apply(); }
  });
};


const eachDefaultKey = (item, index, array) => isObject(array[0]) ? item : index;


const attachAnchor = ($option, $cd, el, name) => {
  let fn = $option.anchor?.[name || 'default'];
  if(fn) cd_onDestroy($cd, fn(el));
};


const spreadAttributes = (cd, el, fn) => {
  const props = Object.getOwnPropertyDescriptors(el.__proto__);
  let prev = {};
  const set = (k, v) => {
    if(k == 'style') el.style.cssText = v;
    else if(props[k]?.set) el[k] = v;
    else bindAttributeBase(el, k, v);
  };
  const apply = (state) => {
    for(let k in state) {
      let value = state[k];
      if(prev[k] != value) {
        set(k, value);
        prev[k] = value;
      }
    }
    for(let k in prev) {
      if(!(k in state)) {
        set(k, null);
        delete prev[k];
      }
    }
  };
  $watch(cd, fn, apply, {
    cmp: (_, state) => {
      apply(state);
      return 0;
    }
  });
};


const callExportedFragment = (childComponent, name, slot, events, props, cmp) => {
  let $cd, r;
  if(cmp) {
    $cd = cd_new();
    let fn = props, result;
    props = () => result;
    let w = $watch($cd, fn, (props) => {
      result = props;
      r?.push();
    }, { value: {}, cmp });
    fire(w);
  }
  let fn = childComponent.exported[name];
  r = fn(props, events, slot);
  r.$cd = $cd;
  return r;
};


const exportFragment = (childCD, name, fn) => {
  cd_component(childCD).exported[name] = (props, events, slot) => {
    let { $cd, $dom } = fn(props, events || {}, slot);
    cd_attach(childCD, $cd);
    let apply = cd_component(childCD).apply;
    return {
      $dom,
      destroy: () => $cd.destroy(),
      push: () => apply?.()
    };
  };
};


const prefixPush = ($cd, fn) => {
  $cd.prefix.push(fn);
  fn();
};


const unwrapProps = (cd, props, fn) => {
  if(props) {
    if(isFunction(props)) prefixPush(cd, () => fn(props()));
    else fn(props);
  }
};


const makeBlock = (fr, fn) => {
  return (v) => {
    let $dom = fr.cloneNode(true), $cd = cd_new();
    fn($cd, $dom, v);
    return { $cd, $dom };
  };
};


const makeBlockBound = (parentCD, fr, fn) => {
  return () => {
    let $dom = fr.cloneNode(true), $cd = cd_new();
    fn($cd, $dom);
    cd_attach(parentCD, $cd);
    return {
      $dom,
      destroy: () => cd_destroy($cd)
    };
  };
};


const makeStaticBlock = (fr, fn) => {
  return () => {
    let $dom = fr.cloneNode(true);
    fn?.($dom);
    return { $dom };
  };
};

const attachBlock = (cdo, label, block) => {
  if(!block) return;
  cd_onDestroy(cdo, block.destroy);
  cd_attach(cdo, block.$cd);
  insertAfter(label, block.$dom);
};


const mergeEvents = (...callbacks) => {
  callbacks = callbacks.filter(i => i);
  return (e) => callbacks.forEach(cb => cb(e));
};


const makeRootEvent = (root) => {
  let events = {}, nodes = [];

  if(root.nodeType == 11) {
    let n = root.firstElementChild;
    while(n) {
      nodes.push(n);
      n = n.nextElementSibling;
    }
  } else nodes = [root];

  $onDestroy(() => {
    for(let eventName in events) {
      nodes.forEach(n => n.removeEventListener(eventName, events[eventName]));
    }
  });
  return (target, eventName, callback) => {
    const key = `_$$${eventName}`;
    if(!events[eventName]) {
      let handler = events[eventName] = ($event) => {
        let top = $event.currentTarget;
        let el = $event.target;
        while(el) {
          el[key]?.($event);
          if(el == top || $event.cancelBubble) break;
          el = el.parentNode;
        }
      };
      nodes.forEach(n => n.addEventListener(eventName, handler));
    }
    target[key] = callback;
  };
};

function $$htmlBlock($cd, tag, fn) {
  let lastElement;
  let create = (html) => {
    let fr;
    if(tag.parentElement instanceof SVGElement) fr = svgToFragment(html);
    else fr = $$htmlToFragment(html, 3);
    lastElement = fr.lastChild;
    insertAfter(tag, fr);
  };
  let destroy = () => {
    if(!lastElement) return;
    $$removeElements(tag.nextSibling, lastElement);
    lastElement = null;
  };
  if($cd) {
    $watch($cd, fn, (html) => {
      destroy();
      if(html) create(html);
    }, { ro: true });
  } else create(fn());
}

function ifBlock(parentCD, label, fn, build, buildElse) {
  let first, last, $cd, destroy;
  cd_onDestroy(parentCD, () => destroy?.());

  function createBlock(builder) {
    let $dom;
    ({ $cd, destroy, $dom } = builder());
    cd_attach(parentCD, $cd);
    if($dom.nodeType == 11) {
      first = $dom[firstChild];
      last = $dom.lastChild;
    } else first = last = $dom;
    insertAfter(label, $dom);
  }

  function destroyBlock() {
    if(!first) return;
    destroyResults = [];
    destroy?.();
    destroy = null;
    if($cd) {
      cd_destroy($cd);
      $cd = null;
    }
    if(destroyResults.length) {
      let f = first, l = last;
      Promise.allSettled(destroyResults).then(() => {
        $$removeElements(f, l);
      });
    } else $$removeElements(first, last);
    first = last = null;
    destroyResults = null;
  }

  $watch(parentCD, fn, (value) => {
    if(value) {
      destroyBlock();
      createBlock(build);
    } else {
      destroyBlock();
      if(buildElse) createBlock(buildElse);
    }
  });
}


function ifBlockReadOnly(component, label, fn, build, buildElse) {
  function createBlock(builder) {
    let { destroy, $dom } = builder();
    cd_onDestroy(component, destroy);
    insertAfter(label, $dom);
  }

  if(fn()) createBlock(build);
  else if(buildElse) createBlock(buildElse);
}

function $$awaitBlock(parentCD, label, relation, fn, build_main, build_then, build_catch) {
  let first, last, $cd, destroy, promise, status = 0;
  cd_onDestroy(parentCD, () => destroy?.());

  function destroyBlock() {
    if(!first) return;
    destroy?.();
    destroy = null;
    if($cd) {
      cd_destroy($cd);
      $cd = null;
    }
    $$removeElements(first, last);
    first = last = null;
  }

  function render(builder, value) {
    destroyBlock();

    let $dom;
    ({ $cd, destroy, $dom } = builder(value));
    cd_attach(parentCD, $cd);
    if($dom.nodeType == 11) {
      first = $dom[firstChild];
      last = $dom.lastChild;
    } else first = last = $dom;
    insertAfter(label, $dom);
    cd_component(parentCD).apply();
  }

  $watch(parentCD, relation, () => {
    let p = fn();
    if(status !== 1) render(build_main);
    status = 1;
    if(p && p instanceof Promise) {
      promise = p;
      promise.then(value => {
        status = 2;
        if(promise !== p) return;
        render(build_then, value);
      }).catch(value => {
        status = 3;
        if(promise !== p) return;
        render(build_catch, value);
      });
    }
  }, { ro: true, value: [], cmp: keyComparator });
}

const makeEachBlock = (fr, fn) => {
  return (item, index) => {
    let $dom = fr.cloneNode(true), $cd = cd_new();
    let rebind = fn($cd, $dom, item, index);
    return { $cd, $dom, rebind };
  };
};


const makeStaticEachBlock = (fr, fn) => {
  return (item, index) => {
    let $dom = fr.cloneNode(true);
    let rebind = fn($dom, item, index);
    return { $dom, rebind };
  };
};


const makeEachSingleBlock = (fn) => {
  return (item, index) => {
    let [rebind, component] = fn(item, index);
    let { $cd, destroy, $dom } = component;
    return { $cd, destroy, $dom, rebind };
  };
};


function $$eachBlock($parentCD, label, onlyChild, fn, getKey, bind) {
  let eachCD = cd_new();
  cd_attach($parentCD, eachCD);

  let mapping = new Map();
  let lastNode, vi = 0;

  $watch(eachCD, fn, (array) => {
    if(!array) array = [];
    if(typeof (array) == 'number') array = [...Array(array)].map((_, i) => i + 1);
    else if(!isArray(array)) array = [];

    let newMapping = new Map();
    let prevNode, parentNode;
    if(onlyChild) {
      prevNode = null;
      parentNode = label;
    } else {
      prevNode = label;
      parentNode = label.parentNode;
    }

    if(mapping.size) {
      let ctx, count = 0;
      vi++;
      for(let i = 0; i < array.length; i++) {
        ctx = mapping.get(getKey(array[i], i, array));
        if(ctx) {
          ctx.a = vi;
          count++;
        }
      }

      if(!count && lastNode) {
        destroyResults = [];
        eachCD.children.forEach(cd => cd_destroy(cd, false));
        eachCD.children.length = 0;
        mapping.forEach(ctx => ctx.destroy?.());
        mapping.clear();

        if(destroyResults.length) {
          let removedNodes = [];
          iterNodes(onlyChild ? label.firstChild : label.nextSibling, lastNode, n => {
            n.$$removing = true;
            removedNodes.push(n);
          });
          Promise.allSettled(destroyResults).then(() => removedNodes.forEach(n => n.remove()));
        } else {
          if(onlyChild) label.textContent = '';
          else $$removeElements(label.nextSibling, lastNode);
        }

        destroyResults = null;
      } else if(count < mapping.size) {
        eachCD.children = [];
        destroyResults = [];
        let removedNodes = [];
        mapping.forEach(ctx => {
          if(ctx.a == vi) {
            ctx.$cd && eachCD.children.push(ctx.$cd);
            return;
          }
          ctx.$cd && cd_destroy(ctx.$cd, false);
          ctx.destroy?.();
          iterNodes(ctx.first, ctx.last, n => {
            n.$$removing = true;
            removedNodes.push(n);
          });
        });

        if(destroyResults.length) {
          Promise.allSettled(destroyResults).then(() => removedNodes.forEach(n => n.remove()));
        } else {
          removedNodes.forEach(n => n.remove());
        }
        destroyResults = null;
      }
    }

    let i, item, next_ctx, ctx, nextEl, key;
    for(i = 0; i < array.length; i++) {
      item = array[i];
      key = getKey(item, i, array);
      if(next_ctx) {
        ctx = next_ctx;
        next_ctx = null;
      } else ctx = mapping.get(key);
      if(ctx) {
        nextEl = i == 0 && onlyChild ? parentNode[firstChild] : prevNode.nextSibling;
        while(nextEl && nextEl.$$removing) nextEl = nextEl.nextSibling;
        if(nextEl != ctx.first) {
          let insert = true;

          if(ctx.first == ctx.last && (i + 1 < array.length) && prevNode?.nextSibling) {
            next_ctx = mapping.get(getKey(array[i + 1], i + 1, array));
            if(next_ctx && prevNode.nextSibling.nextSibling === next_ctx.first) {
              parentNode.replaceChild(ctx.first, prevNode.nextSibling);
              insert = false;
            }
          }

          if(insert) {
            let insertBefore = prevNode?.nextSibling;
            let next, el = ctx.first;
            while(el) {
              next = el.nextSibling;
              parentNode.insertBefore(el, insertBefore);
              if(el == ctx.last) break;
              el = next;
            }
          }
        }
        ctx.rebind?.(i, item);
      } else {
        let $dom;
        ({ $dom, ...ctx } = bind(item, i));
        cd_attach(eachCD, ctx.$cd);
        if($dom.nodeType == 11) {
          ctx.first = $dom[firstChild];
          ctx.last = $dom.lastChild;
        } else ctx.first = ctx.last = $dom;
        parentNode.insertBefore($dom, prevNode?.nextSibling);
      }
      prevNode = ctx.last;
      newMapping.set(key, ctx);
    }
    lastNode = prevNode;
    mapping.clear();
    mapping = newMapping;
  }, { ro: true, cmp: $$compareArray });
}

const invokeSlotBase = ($component, slotName, $context, props, placeholder) => {
  let $slot = $component.$option.slots?.[slotName || 'default'];
  return $slot ? $slot($component, $context, props) : placeholder?.();
};


const invokeSlot = ($component, slotName, $context, propsFn, placeholder, cmp) => {
  let $slot = $component.$option.slots?.[slotName || 'default'];

  if($slot) {
    let push, w, result;
    w = cd_watchObject(propsFn, value => push?.(value), { ro: true, value: {}, cmp });
    fire(w);
    ({ push, ...result } = $slot($component, $context, w.value));
    if(push) {
      result.$cd = cd_new();
      result.$cd.watchers.push(w);
    }
    return result;
  } else return placeholder?.();
};


const makeSlot = (parentCD, fr, fn) => {
  return (callerComponent, $context, props) => {
    let $dom = fr.cloneNode(true), $cd = cd_new();
    cd_attach(parentCD, $cd);
    return {
      $dom,
      destroy: () => cd_destroy($cd),
      push: fn($cd, $dom, $context, callerComponent, props)
    };
  };
};

export { $$addEventForComponent, $$awaitBlock, $$cloneDeep, $$compareArray, $$compareDeep, $$deepComparator, $$eachBlock, $$htmlBlock, $$htmlToFragment, $$htmlToFragmentClean, $$removeElements, $$removeItem, $base, $context, $digest, $makeEmitter, $onDestroy, $onMount, $tick, $watch, $watchReadOnly, __app_onerror, __bindActionSubscribe, addClass, addEvent, addStyles, attachAnchor, attachBlock, attachDynComponent, autoSubscribe, bindAction, bindAttribute, bindAttributeBase, bindClass, bindClassExp, bindInput, bindStyle, bindText, callComponent, callExportedFragment, cd_attach, cd_component, cd_destroy, cd_new, cd_onDestroy, cd_watchObject, childNodes, cloneDeep, configure, createTextNode, current_component, destroyResults, eachDefaultKey, exportFragment, fire, firstChild, getFinalLabel, ifBlock, ifBlockReadOnly, insertAfter, invokeSlot, invokeSlotBase, isArray, isFunction, iterNodes, keyComparator, makeBlock, makeBlockBound, makeClassResolver, makeComponent, makeEachBlock, makeEachSingleBlock, makeExternalProperty, makeRootEvent, makeSlot, makeStaticBlock, makeStaticEachBlock, mergeEvents, noop, prefixPush, removeElementsBetween, setClassToElement, spreadAttributes, svgToFragment, unwrapProps };
