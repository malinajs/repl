let __app_onerror = console.error;


const configure = (option) => {
    __app_onerror = option.onerror;
};


const isFunction = fn => typeof fn == 'function';


const safeCall = fn => {
    try {
        return isFunction(fn) && fn();
    } catch (e) {
        __app_onerror(e);
    }
};

function $watch(cd, fn, callback, w) {
    if(!w) w = {};
    w.fn = fn;
    w.cb = callback;
    if(!('value' in w)) w.value = NaN;
    cd.watchers.push(w);
    return w;
}
function $watchReadOnly(cd, fn, callback) {
    return $watch(cd, fn, callback, {ro: true});
}
function addEvent(cd, el, event, callback) {
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
    if(i>=0) array.splice(i, 1);
}
function $ChangeDetector(parent) {
    this.parent = parent;
    this.children = [];
    this.watchers = [];
    this._d = [];
    this.prefix = [];
    this.$$ = parent?.$$;
}
$ChangeDetector.prototype.new = function() {
    var cd = new $ChangeDetector(this);
    this.children.push(cd);
    return cd;
};

$ChangeDetector.prototype.destroy = function(option) {
    if(option !== false && this.parent) $$removeItem(this.parent.children, this);
    this.watchers.length = 0;
    this.prefix.length = 0;
    this._d.map(safeCall);
    this._d.length = 0;
    this.children.map(cd => cd.destroy(false));
    this.children.length = 0;
};


const isArray = (a) => Array.isArray(a);

const compareArray = (a, b) => {
    let a0 = isArray(a);
    let a1 = isArray(b);
    if(a0 !== a1) return true;
    if(!a0) return a !== b;
    if(a.length !== b.length) return true;
    for(let i=0;i<a.length;i++) {
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
    let o0 = typeof(a) == 'object';
    let o1 = typeof(b) == 'object';
    if(!(o0 && o1)) return a !== b;

    let a0 = isArray(a);
    let a1 = isArray(b);
    if(a0 !== a1) return true;

    if(a0) {
        if(a.length !== b.length) return true;
        for(let i=0;i<a.length;i++) {
            if(compareDeep(a[i], b[i], lvl-1)) return true;
        }
    } else {
        let set = {};
        for(let k in a) {
            if(compareDeep(a[k], b[k], lvl-1)) return true;
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

    if(typeof(d) == 'object') {
        if(d instanceof Date) return d;
        if(d instanceof Element) return d;
        if(isArray(d)) return d.map(i => cloneDeep(i, lvl-1));
        let r = {};
        for(let k in d) r[k] = cloneDeep(d[k], lvl-1);
        return r;
    }
    return d;
}
const $$cloneDeep = function(d) {
    return cloneDeep(d, 10);
};

function $$deepComparator(depth) {
    return function(w, value) {
        if(!compareDeep(w.value, value, depth)) return 0;
        w.value = cloneDeep(value, depth);
        w.cb(value);
        return w.ro ? 0 : 1;
    };
}
const $$compareDeep = $$deepComparator(10);

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
            for(i=0;i<cd.prefix.length;i++) cd.prefix[i]();
            for(i=0;i<cd.watchers.length;i++) {
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
            }            if(cd.children.length) queue.push.apply(queue, cd.children);
            cd = queue[index++];
        }
        loop--;
        if(!changes) break;
    }
    if(loop < 0) __app_onerror('Infinity changes: ', w);
}

let templatecache = {};
let templatecacheSvg = {};

let $$uniqIndex = 1;

const childNodes = 'childNodes';
const firstChild = 'firstChild';

let noop = a => a;

const insertAfter = (label, node) => {
    label.parentNode.insertBefore(node, label.nextSibling);
};

const createTextNode = (text) => {
    let f = document.createDocumentFragment();
    f.append(text);
    return f;
};

const $$htmlToFragment = (html) => {
    if(templatecache[html]) return templatecache[html].cloneNode(true);

    let t = document.createElement('template');
    t.innerHTML = html.replace(/<>/g, '<!---->');
    let result = t.content;
    templatecache[html] = result.cloneNode(true);
    return result;
};

const $$htmlToFragmentClean = (html) => {
    if(templatecache[html]) return templatecache[html].cloneNode(true);

    let t = document.createElement('template');
    t.innerHTML = html.replace(/<>/g, '<!---->');
    let result = t.content;

    let it = document.createNodeIterator(result, 128);
    let n;
    while(n = it.nextNode()) {
        if(!n.nodeValue) n.parentNode.replaceChild(document.createTextNode(''), n);
    }    templatecache[html] = result.cloneNode(true);
    return result;
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
function $$removeElements(el, last) {
    let next;
    while(el) {
        next = el.nextSibling;
        el.remove();
        if(el == last) break;
        el = next;
    }
}
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


let _tick_list = [];
let _tick_planned = {};
function $tick(fn, uniq) {
    if(uniq) {
        if(_tick_planned[uniq]) return;
        _tick_planned[uniq] = true;
    }
    _tick_list.push(fn);
    if(_tick_planned.$tick) return;
    _tick_planned.$tick = true;
    setTimeout(() => {
        _tick_planned = {};
        let list = _tick_list;
        _tick_list = [];
        list.map(safeCall);
    }, 0);
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
function $$makeSpreadObject($cd, el, css) {
    let prev = {};
    let index = 0;
    let list = [];
    let defaultUsed = {};

    const props = Object.getOwnPropertyDescriptors(el.__proto__);

    const render = $$groupCall(function() {
        let obj, name, value, used = Object.assign({}, defaultUsed);
        for(let i=index-1; i>=0; i--) {
            obj = list[i];
            for(name in obj) {
                if(used[name]) continue;
                used[name] = true;
                value = obj[name];
                if(prev[name] == value) continue;
                prev[name] = value;

                if(props[name] && props[name].set) {
                    el[name] = value;
                } else {
                    if(value == null) el.removeAttribute(name);
                    else {
                        if(name == 'class' && css) value += ' ' + css;
                        el.setAttribute(name, value);
                    }
                }
            }
        }
    });

    return {
        spread: function(fn) {
            let i = index++;
            $watch($cd, fn, value => {
                list[i] = value;
                render();
            }, {ro: true, cmp: $$deepComparator(1)});
        },
        prop: function(name, fn) {
            let i = index++;
            list[i] = {};
            $watch($cd, fn, value => {
                list[i][name] = value;
                render();
            }, {ro: true});
        },
        attr: function(name, value) {
            let d = {};
            d[name] = value;
            list[index++] = d;
        },
        except: function(list) {
            list.forEach(n => defaultUsed[n] = true);
        }
    }
}

function $$groupCall(emit) {
    let id = `gc${$$uniqIndex++}`;
    const fn = function() {
        $tick(() => {
            fn.emit && fn.emit();
        }, id);
    };
    fn.emit = emit;
    return fn;
}
let current_component, $context;

const $onDestroy = fn => current_component._d.push(fn);
const $onMount = fn => current_component._m.push(fn);


const $insertElementByOption = ($label, $option, $element) => {
    if ($option.afterElement) {
        insertAfter($label, $element);
    } else {
        $label.innerHTML = '';
        $label.appendChild($element);
    }
};


const $readOnlyBase = {
    a: ($component) => {
        $component.$cd = {
            _d: $component._d,
            watchers: [],
            prefix: [],
            new: () => $component.$cd,
            destroy: noop,
            $$: $component
        };
    },
    b: ($component) => {
        let watchers = $component.$cd.watchers;
        let prefix = $component.$cd.prefix;
        while(watchers.length || prefix.length) {
            let wl = watchers.slice();
            watchers.length = 0;
            prefix.forEach(safeCall);
            prefix.length = 0;
            wl.forEach(w => w.cb(w.fn()));
        }
    }
};


const $base = {
    a: ($component) => {
        let $cd = new $ChangeDetector();
        $cd.$$ = $component;
        $onDestroy(() => $cd.destroy());

        let id = `a${$$uniqIndex++}`;
        let process;
        let apply = r => {
            if (process) return r;
            $tick(() => {
                try {
                    process = true;
                    $digest($cd);
                } finally {
                    process = false;
                }
            }, id);
            return r;
        };

        $component.$cd = $cd;
        $component.apply = apply;
        $component.push = apply;
    },
    b: ($component) => {
        $component.apply();
    }
};


const makeComponent = (init, $base) => {
    return ($element, $option={}) => {
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
        $base.a($component);

        try {
            $insertElementByOption($element, $option, init($option, $component.apply));
            $base.b($component);
        } finally {
            current_component = prev;
            $context = null;
        }

        $component._d.push(...$component._m.map(safeCall));
        return $component;
    };
};


const callComponent = (cd, context, component, el, option) => {
    option.afterElement = true;
    option.context = {...context};
    let $component = safeCall(() => component(el, option));
    if($component && $component.destroy) cd_onDestroy(cd, $component.destroy);
    return $component;
};

const autoSubscribe = (...list) => {
    list.forEach(i => {
        if(i.subscribe) {
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
    $watchReadOnly(cd, fn, value => {
        if(value) addClass(element, className);
        else element.classList.remove(className);
    });
};


const setClassToElement = (element, value) => {
    if(typeof element.className == 'string') element.className = value;
    else element.className.baseVal = value;
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
    $watchReadOnly(cd, () => '' + fn(), value => bindAttributeBase(element, name, value));
};


const bindAction = (cd, element, action, fn, subscribe) => {
    $tick(() => {
        let handler, value;
        if(fn) {
            value = fn();
            handler = action.apply(null, [element].concat(value));
        } else handler = action(element);
        if(handler?.destroy) cd_onDestroy(cd, handler.destroy);
        subscribe?.(cd, fn, handler, value);
    });
};


const __bindActionSubscribe = (cd, fn, handler, value) => {
    if(handler?.update && fn) {
        $watch(cd, fn, args => {
            handler.update.apply(handler, args);
        }, {cmp: $$deepComparator(1), value: cloneDeep(value, 1) });
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
        let result = [];
        if(defaults) result.push(defaults);
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
                    result.push(className);
                } else if(h !== true) {
                    result.push(name, h);
                }
            }
            let h2 = classMap[name];
            if(h2) {
                result.push(name, h2);
            } else if(!h) {
                result.push(name);
            }
        });
        return result.join(' ');
    }
};


const makeTree = (n, lvl) => {
    let p = null;
    while(n--) {
        let c = p ? Object.create(p) : {};
        lvl.push(c);
        p = c;
    }
    let root = Object.create(p);
    lvl.unshift(root);
    return root;
};


const spreadObject = (d, src) => {
    for(let k in src) d[k] = src[k];
    for(let k in d) {
        if(!(k in src)) delete d[k];
    }
};


const recalcAttributes = (props, skip) => {
    let result = {};
    for(let k in props)
        if(!skip[k]) result[k] = props[k];
    return result;
};


const bindPropToComponent = ($component, name, parentWatch, up) => {
    let getter = $component.exportedProps[name];
    if(!getter) return __app_onerror(`Component doesn't have prop ${name}`);

    let w = $watch($component.$cd, getter, value => {
        parentWatch.value = w.value;
        $component.$option.props[name] = value;
        up(value);
    }, { value: parentWatch.value, cmp: $$compareDeep });
    parentWatch.pair = value => w.value = value;
};


const makeExternalProperty = ($component, name, getter, setter) => {
    Object.defineProperty($component, name, {
        get: getter,
        set: v => {setter(v); $component.apply();}
    });
};


const attachSlotBase = ($context, $cd, slotName, label, props, placeholder) => {
    let $slot = $cd.$$.$option.slots?.[slotName];
    if($slot) $slot($cd, label, $context, props);
    else placeholder && placeholder();
};


const attachSlot = ($context, $cd, slotName, label, props, placeholder) => {
    let $slot = $cd.$$.$option.slots?.[slotName];
    if($slot) {
        let resultProps = {}, push;
        if(props) {
            let setter = (k) => {
                return v => {
                    resultProps[k] = v;
                    push?.();
                }
            };
            for(let k in props) {
                let v = props[k];
                if(isFunction(v)) {
                    fire($watch($cd, v, setter(k), {ro: true, cmp: $$compareDeep}));
                } else resultProps[k] = v;
            }
        }
        push = $slot($cd, label, $context, resultProps);
    } else placeholder && placeholder();
};


const makeSlot = (parentCD, fn) => {
    return (callerCD, label, $context, props) => {
        let $cd = parentCD.new();
        cd_onDestroy(callerCD, () => $cd.destroy());
        let r = fn($cd, $context, callerCD, props || {});
        insertAfter(label, r.el || r);
        $cd.$$.apply?.();
        return r.push;
    };
};


const makeSlotStatic = (fn) => {
    return (callerCD, label) => {
        insertAfter(label, fn());
    }
};


const makeFragmentSlot = (parentCD, fn) => {
    return (callerCD, label) => {
        let $cd = parentCD.new();
        cd_onDestroy(callerCD, () => $cd.destroy());
        insertAfter(label, fn($cd));
        $cd.$$.apply();
    }
};


const eachDefaultKey = (item, index, array) => typeof array[0] === 'object' ? item : index;


const attachAnchor = ($option, $cd, name, el) => {
    let fn = $option.anchor && $option.anchor[name];
    if(fn) cd_onDestroy($cd, fn(el));
};

function $$htmlBlock($cd, tag, fn) {
    let lastElement;
    let create = (html) => {
        let fr;
        if(tag.parentElement instanceof SVGElement) fr = svgToFragment(html);
        else fr = $$htmlToFragment(html);
        lastElement = fr.lastChild;
        insertAfter(tag, fr);
    };
    let destroy = () => {
        if(!lastElement) return;
        let next, el = tag.nextSibling;
        while(el) {
            next = el.nextSibling;
            el.remove();
            if(el == lastElement) break;
            el = next;
        }

        lastElement = null;
    };
    $watch($cd, fn, (html) => {
        destroy();
        if(html) create(html);
    }, {ro: true});
}

function $$ifBlock($cd, $parentElement, fn, tpl, build, tplElse, buildElse) {
    let childCD;
    let first, last;

    function create(fr, builder) {
        childCD = $cd.new();
        let tpl = fr.cloneNode(true);
        builder(childCD, tpl);
        first = tpl[firstChild];
        last = tpl.lastChild;
        insertAfter($parentElement, tpl);
    }
    function destroy() {
        if(!childCD) return;
        childCD.destroy();
        childCD = null;
        $$removeElements(first, last);
        first = last = null;
    }
    $watch($cd, fn, (value) => {
        if(value) {
            destroy();
            create(tpl, build);
        } else {
            destroy();
            if(buildElse) create(tplElse, buildElse);
        }
    });
}

function $$awaitBlock($cd, label, relation, fn, $$apply, build_main, tpl_main, build_then, tpl_then, build_catch, tpl_catch) {
    let promise, childCD;
    let first, last, status = 0;

    function remove() {
        if(!childCD) return;
        childCD.destroy();
        childCD = null;
        $$removeElements(first, last);
        first = last = null;
    }
    function render(build, tpl, value) {
        if(childCD) remove();
        if(!tpl) return;
        childCD = $cd.new();
        let fr = tpl.cloneNode(true);
        build(childCD, fr, value);
        $$apply();
        first = fr[firstChild];
        last = fr.lastChild;
        insertAfter(label, fr);
    }
    $watch($cd, relation, () => {
        let p = fn();
        if(status !== 1) render(build_main, tpl_main);
        status = 1;
        if(p && p instanceof Promise) {
            promise = p;
            promise.then(value => {
                status = 2;
                if(promise !== p) return;
                render(build_then, tpl_then, value);
            }).catch(value => {
                status = 3;
                if(promise !== p) return;
                render(build_catch, tpl_catch, value);
            });
        }
    }, {ro: true, cmp: $$deepComparator(1)});
}

function $$eachBlock($parentCD, label, onlyChild, fn, getKey, itemTemplate, bind) {
    let $cd = $parentCD.new();

    let mapping = new Map();
    let lastNode;
    let tplLength = itemTemplate[childNodes].length;

    $watch($cd, fn, (array) => {
        if(!array) array = [];
        if(typeof(array) == 'number') array = [...Array(array)].map((_,i) => i + 1);
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
            for(let i=0;i<array.length;i++) {
                ctx = mapping.get(getKey(array[i], i, array));
                if(ctx) {
                    ctx.a = true;
                    count++;
                }
            }

            if(!count && lastNode) {
                if(onlyChild) label.textContent = '';
                else $$removeElements(label.nextSibling, lastNode);
                $cd.children.forEach(cd => cd.destroy(false));
                $cd.children.length = 0;
                mapping.clear();
            } else {
                $cd.children = [];
                mapping.forEach(ctx => {
                    if(ctx.a) {
                        ctx.a = false;
                        $cd.children.push(ctx.cd);
                        return;
                    }
                    $$removeElements(ctx.first, ctx.last);
                    ctx.cd.destroy(false);
                });
            }
        }

        let i, item, next_ctx, ctx, nextEl;
        for(i=0;i<array.length;i++) {
            item = array[i];
            if(next_ctx) {
                ctx = next_ctx;
                next_ctx = null;
            } else ctx = mapping.get(getKey(item, i, array));
            if(ctx) {
                nextEl = i == 0 && onlyChild ? parentNode[firstChild] : prevNode.nextSibling;
                if(nextEl != ctx.first) {
                    let insert = true;

                    if(tplLength == 1 && (i + 1 < array.length) && prevNode && prevNode.nextSibling) {
                        next_ctx = mapping.get(getKey(array[i + 1], i + 1, array));
                        if(prevNode.nextSibling.nextSibling === next_ctx.first) {
                            parentNode.replaceChild(ctx.first, prevNode.nextSibling);
                            insert = false;
                        }
                    }

                    if(insert) {
                        let insertBefore = prevNode && prevNode.nextSibling;
                        let next, el = ctx.first;
                        while(el) {
                            next = el.nextSibling;
                            parentNode.insertBefore(el, insertBefore);
                            if(el == ctx.last) break;
                            el = next;
                        }
                    }
                }
                ctx.rebind(i, item);
            } else {
                let tpl = itemTemplate.cloneNode(true);
                let childCD = $cd.new();
                ctx = {cd: childCD};
                bind(ctx, tpl, item, i);
                ctx.first = tpl[firstChild];
                ctx.last = tpl.lastChild;
                parentNode.insertBefore(tpl, prevNode && prevNode.nextSibling);
            }
            prevNode = ctx.last;
            newMapping.set(getKey(item, i, array), ctx);
        }        lastNode = prevNode;
        mapping.clear();
        mapping = newMapping;
    }, {ro: true, cmp: $$compareArray});
}

export { $$addEventForComponent, $$awaitBlock, $$cloneDeep, $$compareArray, $$compareDeep, $$deepComparator, $$eachBlock, $$groupCall, $$htmlBlock, $$htmlToFragment, $$htmlToFragmentClean, $$ifBlock, $$makeSpreadObject, $$removeElements, $$removeItem, $ChangeDetector, $base, $context, $digest, $insertElementByOption, $makeEmitter, $onDestroy, $onMount, $readOnlyBase, $tick, $watch, $watchReadOnly, __app_onerror, __bindActionSubscribe, addClass, addEvent, addStyles, attachAnchor, attachSlot, attachSlotBase, autoSubscribe, bindAction, bindAttribute, bindAttributeBase, bindClass, bindInput, bindPropToComponent, bindStyle, bindText, callComponent, cd_onDestroy, childNodes, cloneDeep, configure, createTextNode, current_component, eachDefaultKey, fire, firstChild, getFinalLabel, insertAfter, isArray, isFunction, makeClassResolver, makeComponent, makeExternalProperty, makeFragmentSlot, makeSlot, makeSlotStatic, makeTree, noop, recalcAttributes, removeElementsBetween, setClassToElement, spreadObject, svgToFragment };
