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

const safeGroupCall = list => {
  try {
    list.forEach(fn => fn?.());
  } catch (e) {
    __app_onerror(e);
  }
};

const safeCallMount = (mountList, destroyList) => {
  mountList.forEach(fn => {
    let r = safeCall(fn);
    r && destroyList.push(r);
  });
};

let current_destroyList, current_mountList, current_cd, destroyResults;
const $onDestroy = fn => fn && current_destroyList.push(fn);
const $onMount = fn => current_mountList.push(fn);

function WatchObject(fn, cb) {
  this.fn = fn;
  this.cb = cb;
  this.value = NaN;
  this.cmp = null;
}

function $watch(fn, callback, option) {
  let w = new WatchObject(fn, callback);
  option && Object.assign(w, option);
  current_cd.watchers.push(w);
  return w;
}

function addEvent(el, event, callback) {
  if(!callback) return;
  el.addEventListener(event, callback);

  $onDestroy(() => {
    el.removeEventListener(event, callback);
  });
}

function $$removeItem(array, item) {
  let i = array.indexOf(item);
  if(i >= 0) array.splice(i, 1);
}

function $ChangeDetector(parent) {
  this.parent = parent;
  this.children = [];
  this.watchers = [];
  this.prefix = [];
}

const cd_component = cd => {
  while(cd.parent) cd = cd.parent;
  return cd.component;
};

const cd_new = () => new $ChangeDetector();

const cd_attach2 = (parent, cd) => {
  if(cd) {
    cd.parent = parent;
    parent.children.push(cd);
  }
};

const cd_attach = (cd) => cd_attach2(current_cd, cd);

const cd_detach = cd => $$removeItem(cd.parent.children, cd);

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
};


const fire = w => {
  if(w.cmp) w.cmp(w, w.fn());
  else {
    w.value = w.fn();
    w.cb(w.value);
  }
};

function $digest($cd, flag) {
  let loop = 10;
  let w;
  while(loop >= 0) {
    let index = 0;
    let queue = [];
    let i, value, cd = $cd, changes = 0;
    while(cd) {
      for(i = 0; i < cd.prefix.length; i++) cd.prefix[i]();
      for(i = 0; i < cd.watchers.length; i++) {
        w = cd.watchers[i];
        value = w.fn();
        if(w.value !== value) {
          flag[0] = 0;
          if(w.cmp) {
            w.cmp(w, value);
          } else {
            w.cb(w.value = value);
          }
          changes += flag[0];
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
  let svg = t.content.firstChild;
  while(svg.firstChild) result.appendChild(svg.firstChild);
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
    let fn = option.events?.[name];
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


const makeApply = () => {
  let $cd = current_component.$cd = current_cd = cd_new();
  $cd.component = current_component;

  let planned, flag = [0];
  let apply = r => {
    flag[0]++;
    if(planned) return r;
    planned = true;
    $tick(() => {
      try {
        $digest($cd, flag);
      } finally {
        planned = false;
      }
    });
    return r;
  };

  current_component.apply = apply;
  current_component.push = apply;
  apply();
  return apply;
};


const makeComponent = (init) => {
  return ($option = {}) => {
    $context = $option.context || {};
    let prev_component = current_component,
      prev_cd = current_cd,
      $component = current_component = {
        $option,
        context: $context,
        exported: {}
      };
    current_cd = null;

    try {
      $component.$dom = init($option);
    } finally {
      current_component = prev_component;
      $context = null;
      current_cd = prev_cd;
    }

    return $component;
  };
};


const callComponent = (context, component, option = {}, propFn, cmp, setter, classFn) => {
  option.context = { ...context };
  let $component, parentWatch, parentCD = current_cd;

  if(propFn) {
    if(cmp) {
      parentWatch = $watch(propFn, value => {
        option.props = value;
        if($component) {
          $component.push?.();
          $component.apply?.();
        }
      }, { value: {}, cmp });
      fire(parentWatch);
    } else option.props = propFn();
  }

  if(classFn) {
    fire($watch(classFn, value => {
      option.$class = value;
      $component?.apply?.();
    }, { value: {}, cmp: keyComparator }));
  }

  $component = safeCall(() => component(option));
  if(setter && $component?.exportedProps) {
    let w = new WatchObject($component.exportedProps, value => {
      setter(value);
      cd_component(parentCD).apply();
      option.props = parentWatch.fn();
      $component.push();
    });
    Object.assign(w, { idle: true, cmp, value: parentWatch.value });
    $component.$cd.watchers.push(w);
  }

  return $component;
};


const attachDynComponent = (label, exp, bind) => {
  let parentCD = current_cd;
  let active, destroyList, $cd, $dom, finalLabel = getFinalLabel(label);
  const destroy = () => destroyList && safeGroupCall(destroyList);
  $onDestroy(destroy);

  $watch(exp, (component) => {
    destroy();
    if($cd) cd_detach($cd);
    if(active) removeElementsBetween(label, finalLabel);

    if(component) {
      destroyList = current_destroyList = [];
      $cd = current_cd = cd_new();
      try {
        $dom = bind(component).$dom;
      } finally {
        current_destroyList = null;
        current_cd = null;
      }
      cd_attach2(parentCD, $cd);
      insertAfter(label, $dom);
      active = true;
    } else {
      $cd = null;
      active = false;
      destroyList = null;
    }
  });
};


const autoSubscribe = (...list) => {
  list.forEach(i => {
    if(isFunction(i.subscribe)) {
      let unsub = i.subscribe(current_component.apply);
      if(isFunction(unsub)) $onDestroy(unsub);
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


const bindClass = (element, fn, className) => {
  $watch(fn, value => {
    if(value) addClass(element, className);
    else element.classList.remove(className);
  }, { value: false });
};


const setClassToElement = (element, value) => bindAttributeBase(element, 'class', value);


const bindClassExp = (element, fn) => {
  $watch(fn, value => setClassToElement(element, value), { value: '' });
};


const bindText = (element, fn) => {
  $watch(() => '' + fn(), value => {
    element.textContent = value;
  });
};


const bindStyle = (element, name, fn) => {
  $watch(fn, (value) => {
    element.style.setProperty(name, value);
  });
};


const bindAttributeBase = (element, name, value) => {
  if(value != null) element.setAttribute(name, value);
  else element.removeAttribute(name);
};


const bindAttribute = (element, name, fn) => {
  $watch(() => {
    let v = fn();
    return v == null ? v : '' + v;
  }, value => bindAttributeBase(element, name, value));
};


const bindAction = (element, action, fn, subscribe) => {
  let handler, value;
  if(fn) {
    value = fn();
    handler = action.apply(null, [element].concat(value));
  } else handler = action(element);
  if(isFunction(handler)) $onDestroy(handler);
  else {
    $onDestroy(handler?.destroy);
    subscribe?.(fn, handler, value);
    handler?.init && $onMount(handler.init);
  }
};


const __bindActionSubscribe = (fn, handler, value) => {
  if(handler?.update && fn) {
    $watch(fn, args => {
      handler.update.apply(handler, args);
    }, { cmp: $$deepComparator(1), value: cloneDeep(value, 1) });
  }
};


const bindInput = (element, name, get, set) => {
  let w = $watch(name == 'checked' ? () => !!get() : get, value => {
    element[name] = value == null ? '' : value;
  });
  addEvent(element, 'input', () => {
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


const makeExternalProperty = (name, getter, setter) => {
  let $component = current_component;
  Object.defineProperty($component, name, {
    get: getter,
    set: v => { setter(v); $component.apply(); }
  });
};


const eachDefaultKey = (item, index, array) => isObject(array[0]) ? item : index;


const attachAnchor = ($option, el, name) => {
  $option.anchor?.[name || 'default']?.(el);
};


const makeAnchor = (fn) => {
  let parentCD = current_cd;
  return ($dom) => {
    let prev = current_cd, $cd = current_cd = cd_new();
    cd_attach2(parentCD, $cd);
    $onDestroy(() => cd_detach($cd));
    try {
      fn($dom);
    } finally {
      current_cd = prev;
    }
  };
};


const spreadAttributes = (el, fn) => {
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
  $watch(fn, apply, {
    cmp: (_, state) => {
      apply(state);
      return 0;
    }
  });
};


const callExportedFragment = (childComponent, name, slot, events, props, cmp) => {
  let push, $dom;
  if(cmp) {
    let result;
    let w = $watch(props, (value) => {
      result = value;
      push?.();
    }, { value: {}, cmp });
    fire(w);
    props = () => result;
  }
  let fn = childComponent.exported[name];
  ([$dom, push] = fn(props, events, slot));
  return $dom;
};


const exportFragment = (name, fn) => {
  let childCD = current_cd;
  cd_component(childCD).exported[name] = (props, events, slot) => {
    let prev = current_cd, $cd = current_cd = cd_new();
    cd_attach2(childCD, $cd);
    $onDestroy(() => cd_detach($cd));
    let apply = cd_component(childCD).apply;
    apply();
    try {
      return [fn(props, events || {}, slot), apply];
    } finally {
      current_cd = prev;
    }
  };
};


const prefixPush = fn => {
  current_cd.prefix.push(fn);
  fn();
};


const unwrapProps = (props, fn) => {
  if(props) {
    if(isFunction(props)) prefixPush(() => fn(props()));
    else fn(props);
  }
};


const makeBlock = (fr, fn) => {
  return (v) => {
    let $dom = fr.cloneNode(true);
    fn?.($dom, v);
    return $dom;
  };
};


const makeBlockBound = (fr, fn) => {
  let parentCD = current_cd;
  return () => {
    let $dom = fr.cloneNode(true), prev = current_cd, $cd = current_cd = cd_new();
    cd_attach2(parentCD, $cd);
    $onDestroy(() => cd_detach($cd));
    try {
      fn($dom);
      return $dom;
    } finally {
      current_cd = prev;
    }
  };
};


const attachBlock = (label, $dom) => {
  if(!$dom) return;
  insertAfter(label, $dom.$dom || $dom);
};

const mergeEvents = (...callbacks) => {
  callbacks = callbacks.filter(i => i);
  return (e) => callbacks.forEach(cb => cb(e));
};

const mergeAllEvents = ($events, local) => {
  let result = Object.assign({}, $events);
  for(let e in local) {
    if(result[e]) result[e] = mergeEvents($events[e], local[e]);
    else result[e] = local[e];
  }
  return result;
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

const mount = (label, component, option) => {
  let app, first, last, destroyList = current_destroyList = [];
  current_mountList = [];
  try {
    app = component(option);
    let $dom = app.$dom;
    delete app.$dom;
    if($dom.nodeType == 11) {
      first = $dom.firstChild;
      last = $dom.lastChild;
    } else first = last = $dom;
    label.appendChild($dom);
    safeCallMount(current_mountList, destroyList);
  } finally {
    current_destroyList = null;
    current_mountList = null;
  }
  app.destroy = () => {
    safeGroupCall(destroyList);
    $$removeElements(first, last);
  };
  return app;
};

const mountStatic = (label, component, option) => {
  current_destroyList = [];
  current_mountList = [];
  try {
    let app = component(option);
    label.appendChild(app.$dom);
    safeGroupCall(current_mountList);
    return app;
  } finally {
    current_destroyList = null;
    current_mountList = null;
  }
};

const refer = (active, line) => {
  let result = [], i, v;
  const code = (x, d) => x.charCodeAt() - d;

  for(i = 0; i < line.length; i++) {
    let a = line[i];
    switch (a) {
      case '>':
        active = active.firstChild;
        break;
      case '+':
        active = active.firstChild;
      case '.':
        result.push(active);
        break;
      case '!':
        v = code(line[++i], 48) * 42 + code(line[++i], 48);
        while(v--) active = active.nextSibling;
        break;
      case '#':
        active = result[code(line[++i], 48) * 26 + code(line[++i], 48)];
        break;
      default:
        v = code(a, 0);
        if(v >= 97) active = result[v - 97];
        else {
          v -= 48;
          while(v--) active = active.nextSibling;
        }
    }
  }
  return result;
};

let create = (tag, html) => {
  let fr;
  if(tag.parentElement instanceof SVGElement) {
    let t = document.createElement('template');
    t.innerHTML = '<svg>' + html + '</svg>';
    fr = t.content.firstChild;
  } else {
    let t = document.createElement('template');
    t.innerHTML = html;
    fr = t.content;
  }
  let lastElement = fr.lastChild;
  insertAfter(tag, fr);
  return lastElement;
};

function $$htmlBlock(tag, fn) {
  let lastElement;
  let destroy = () => {
    if(!lastElement) return;
    $$removeElements(tag.nextSibling, lastElement);
    lastElement = null;
  };
  $watch(fn, (html) => {
    destroy();
    if(html) lastElement = create(tag, html);
  });
}

function $$htmlBlockStatic(tag, value) {
  create(tag, value);
}

function ifBlock(label, fn, parts, parentLabel) {
  let first, last, $cd, destroyList, parentCD = current_cd;
  $onDestroy(() => safeGroupCall(destroyList));

  function createBlock(builder) {
    let $dom;
    destroyList = current_destroyList = [];
    let mountList = current_mountList = [];
    $cd = current_cd = cd_new();
    try {
      $dom = builder();
    } finally {
      current_destroyList = null;
      current_mountList = null;
      current_cd = null;
    }
    cd_attach2(parentCD, $cd);
    if($dom.nodeType == 11) {
      first = $dom.firstChild;
      last = $dom.lastChild;
    } else first = last = $dom;
    if(parentLabel) label.appendChild($dom);
    else insertAfter(label, $dom);
    safeCallMount(mountList, destroyList);
  }

  function destroyBlock() {
    if(!first) return;
    destroyResults = [];
    safeGroupCall(destroyList);
    destroyList.length = 0;
    if($cd) {
      cd_detach($cd);
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

  $watch(fn, (value) => {
    destroyBlock();
    if(value != null) createBlock(parts[value]);
  });
}


function ifBlockReadOnly(label, fn, parts) {
  let value = fn();
  if(value != null) insertAfter(label, parts[value]());
}

function $$awaitBlock(label, relation, fn, build_main, build_then, build_catch) {
  let parentCD = current_cd, first, last, $cd, promise, destroyList, status = 0;
  $onDestroy(() => safeGroupCall(destroyList));

  function destroyBlock() {
    if(!first) return;

    safeGroupCall(destroyList);
    destroyList.length = 0;
    if($cd) {
      cd_detach($cd);
      $cd = null;
    }
    $$removeElements(first, last);
    first = last = null;
  }

  function render(builder, value) {
    destroyBlock();

    if(!builder) return;
    destroyList = current_destroyList = [];
    $cd = current_cd = cd_new();
    let $dom, mountList = current_mountList = [];
    try {
      $dom = builder(value);
    } finally {
      current_destroyList = current_mountList = current_cd = null;
    }
    cd_attach2(parentCD, $cd);
    if($dom.nodeType == 11) {
      first = $dom.firstChild;
      last = $dom.lastChild;
    } else first = last = $dom;
    insertAfter(label, $dom);
    safeCallMount(mountList, destroyList);
    cd_component(parentCD).apply();
  }

  $watch(relation, () => {
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
  }, { value: [], cmp: keyComparator });
}

const makeEachBlock = (fr, fn) => {
  return (item, index) => {
    let $dom = fr.cloneNode(true);
    return [$dom, fn($dom, item, index)];
  };
};


const makeEachSingleBlock = (fn) => {
  return (item, index) => {
    let [rebind, component] = fn(item, index);
    return [component.$dom, rebind];
  };
};


const makeEachElseBlock = (fn) => {
  return (label, onlyChild, parentCD) => {
    let first, last;
    let destroyList = current_destroyList = [];
    let $cd = current_cd = cd_new();
    try {
      let $dom = fn();
      if($dom.nodeType == 11) {
        first = $dom.firstChild;
        last = $dom.lastChild;
      } else first = last = $dom;
      cd_attach2(parentCD, $cd);
      if(onlyChild) label.appendChild($dom);
      else attachBlock(label, $dom);
    } finally {
      current_destroyList = null;
      current_cd = null;
    }

    return () => {
      $$removeElements(first, last);
      cd_detach($cd);
      safeGroupCall(destroyList);
    };
  };
};


function $$eachBlock(label, onlyChild, fn, getKey, bind, buildElseBlock) {
  let parentCD = current_cd;
  let eachCD = cd_new();
  cd_attach(eachCD);

  let mapping = new Map();
  let lastNode, vi = 0, p_promise = 0, p_destroy = 0, elseBlock;

  const destroyAll = () => {
    p_destroy && safeCall(() => mapping.forEach(ctx => ctx.d?.forEach(fn => fn())));
    mapping.clear();
  };

  $onDestroy(destroyAll);
  buildElseBlock && $onDestroy(() => elseBlock?.());

  $watch(fn, (array) => {
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
        eachCD.children.length = 0;
        destroyAll();

        if(destroyResults.length) {
          p_promise = 1;
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
          ctx.d && safeGroupCall(ctx.d);
          iterNodes(ctx.first, ctx.last, n => removedNodes.push(n));
        });

        if(destroyResults.length) {
          p_promise = 1;
          removedNodes.forEach(n => n.$$removing = true);
          Promise.allSettled(destroyResults).then(() => removedNodes.forEach(n => n.remove()));
        } else {
          removedNodes.forEach(n => n.remove());
        }
        destroyResults = null;
      }
    }

    if(elseBlock && array.length) {
      elseBlock();
      elseBlock = null;
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
        nextEl = i == 0 && onlyChild ? parentNode.firstChild : prevNode.nextSibling;
        if(p_promise) while(nextEl && nextEl.$$removing) nextEl = nextEl.nextSibling;
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
        ctx.rebind?.(item, i);
      } else {
        let $dom, rebind,
          d = current_destroyList = [],
          m = current_mountList = [],
          $cd = current_cd = cd_new();
        try {
          ([$dom, rebind] = bind(item, i));
        } finally {
          current_destroyList = current_mountList = current_cd = null;
        }
        ctx = { $cd, rebind };
        cd_attach2(eachCD, $cd);
        if($dom.nodeType == 11) {
          ctx.first = $dom.firstChild;
          ctx.last = $dom.lastChild;
        } else ctx.first = ctx.last = $dom;
        parentNode.insertBefore($dom, prevNode?.nextSibling);
        safeCallMount(m, d);
        if(d.length) {
          ctx.d = d;
          p_destroy = 1;
        }
      }
      prevNode = ctx.last;
      newMapping.set(key, ctx);
    }
    lastNode = prevNode;
    mapping.clear();
    mapping = newMapping;

    if(!array.length && !elseBlock && buildElseBlock) {
      elseBlock = buildElseBlock(label, onlyChild, parentCD);
    }
  }, { cmp: $$compareArray });
}

const invokeSlotBase = ($component, slotName, $context, props, placeholder) => {
  let $slot = $component.$option.slots?.[slotName || 'default'];
  return $slot ? $slot($component, $context, props) : placeholder?.();
};

const invokeSlot = ($component, slotName, $context, propsFn, placeholder, cmp) => {
  let $slot = $component.$option.slots?.[slotName || 'default'];

  if($slot) {
    let push, w = new WatchObject(propsFn, value => push(value));
    Object.assign(w, { value: {}, cmp, idle: true });
    fire(w);
    let $dom = $slot($component, $context, w.value);
    if($dom.$dom) {
      if($dom.push) {
        push = $dom.push;
        current_cd.watchers.push(w);
      }
      $dom = $dom.$dom;
    }
    return $dom;
  } else return placeholder?.();
};

const makeSlot = (fr, fn) => {
  let parentCD = current_cd;
  return (callerComponent, $context, props) => {
    let $dom = fr.cloneNode(true), prev = current_cd, $cd = current_cd = cd_new();
    cd_attach2(parentCD, $cd);
    $onDestroy(() => cd_detach($cd));
    parentCD.component.apply();
    try {
      return { $dom, push: fn($dom, $context, callerComponent, props) };
    } finally {
      current_cd = prev;
    }
  };
};

export { $$addEventForComponent, $$awaitBlock, $$cloneDeep, $$compareArray, $$compareDeep, $$deepComparator, $$eachBlock, $$htmlBlock, $$htmlBlockStatic, $$htmlToFragment, $$htmlToFragmentClean, $$removeElements, $$removeItem, $context, $digest, $makeEmitter, $onDestroy, $onMount, $tick, $watch, WatchObject, __app_onerror, __bindActionSubscribe, addClass, addEvent, addStyles, attachAnchor, attachBlock, attachDynComponent, autoSubscribe, bindAction, bindAttribute, bindAttributeBase, bindClass, bindClassExp, bindInput, bindStyle, bindText, callComponent, callExportedFragment, cd_attach, cd_attach2, cd_component, cd_detach, cd_new, cloneDeep, configure, createTextNode, current_cd, current_component, current_destroyList, current_mountList, destroyResults, eachDefaultKey, exportFragment, fire, getFinalLabel, ifBlock, ifBlockReadOnly, insertAfter, invokeSlot, invokeSlotBase, isArray, isFunction, iterNodes, keyComparator, makeAnchor, makeApply, makeBlock, makeBlockBound, makeClassResolver, makeComponent, makeEachBlock, makeEachElseBlock, makeEachSingleBlock, makeExternalProperty, makeRootEvent, makeSlot, mergeAllEvents, mergeEvents, mount, mountStatic, noop, prefixPush, refer, removeElementsBetween, setClassToElement, spreadAttributes, svgToFragment, unwrapProps };
