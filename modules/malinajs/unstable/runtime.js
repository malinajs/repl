let __app_onerror = console.error;

const configure = (option) => {
    __app_onerror = option.onerror;
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
const watchInit = (cd, fn, callback) => {
    let w = $watchReadOnly(cd, fn, callback);
    w.value = fn();
    return w.value;
};

function addEvent(cd, el, event, callback) {
    el.addEventListener(event, callback);
    cd_onDestroy(cd, () => {
        el.removeEventListener(event, callback);
    });
}
function cd_onDestroy(cd, fn) {
    cd.destroyList.push(fn);
}
function $$removeItem(array, item) {
    let i = array.indexOf(item);
    if(i>=0) array.splice(i, 1);
}
function $ChangeDetector(parent) {
    this.parent = parent;
    this.children = [];
    this.watchers = [];
    this.destroyList = [];
    this.prefix = [];
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
    this.destroyList.forEach(fn => {
        try {
            fn();
        } catch (e) {
            __app_onerror(e);
        }
    });
    this.destroyList.length = 0;
    this.children.forEach(cd => {
        cd.destroy(false);
    });
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

let templatecache = {false: {}, true: {}, svg: {}};

let $$uniqIndex = 1;

const $$childNodes = 'childNodes';

function $$htmlToFragment(html, lastNotTag) {
    lastNotTag = !!lastNotTag;
    if(templatecache[lastNotTag][html]) return templatecache[lastNotTag][html].cloneNode(true);

    let t = document.createElement('template');
    t.innerHTML = html;
    let result = t.content;
    if(lastNotTag && result.lastChild.nodeType == 8) result.appendChild(document.createTextNode(''));
    templatecache[lastNotTag][html] = result.cloneNode(true);
    return result;
}
function $$htmlToFragmentClean(html, lastNotTag) {
    lastNotTag = !!lastNotTag;
    if(templatecache[lastNotTag][html]) return templatecache[lastNotTag][html].cloneNode(true);
    let result = $$htmlToFragment(html, lastNotTag);
    let it = document.createNodeIterator(result, 128);
    let n;
    while(n = it.nextNode()) {
        if(!n.nodeValue) n.parentNode.replaceChild(document.createTextNode(''), n);
    }    templatecache[lastNotTag][html] = result.cloneNode(true);
    return result;
}
function svgToFragment(content) {
    if(templatecache.svg[content]) return templatecache.svg[content].cloneNode(true);
    let t = document.createElement('template');
    t.innerHTML = '<svg>' + content + '</svg>';

    let result = document.createDocumentFragment();
    let svg = t.content.firstChild;
    while(svg.firstChild) result.appendChild(svg.firstChild);
    templatecache.svg[content] = result.cloneNode(true);
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
        list.forEach(fn => {
            try {
                fn();
            } catch (e) {
                __app_onerror(e);
            }
        });
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
function $$makeSpreadObject2($cd, props) {
    let index = 0;
    let list = [];
    let self = {};
    let defaultUsed = {};

    const emit = $$groupCall(() => {
        self.build();
        self.emit && self.emit();
    });

    self.build = () => {
        let obj, name, used = Object.assign({}, defaultUsed);
        for(let i=index-1; i>=0; i--) {
            obj = list[i];
            for(name in obj) {
                if(used[name]) continue;
                used[name] = true;
                props[name] = obj[name];
            }
        }
    };

    self.spread = function(fn) {
        let i = index++;
        let value = fn();
        list[i] = value;
        $watch($cd, fn, value => {
            list[i] = value;
            emit();
        }, {ro: true, cmp: $$compareDeep, value: $$cloneDeep(value)});
    };
    self.prop = function(name, fn) {
        let value = fn();
        let i = index++;
        list[i] = {};
        list[i][name] = value;
        $watch($cd, fn, value => {
            list[i][name] = value;
            emit();
        }, {ro: true, cmp: $$compareDeep, value: $$cloneDeep(value)});
    };
    self.attr = function(name, value) {
        let d = {};
        d[name] = value;
        list[index++] = d;
    };
    self.except = function(list) {
        list.forEach(n => defaultUsed[n] = true);
    };
    return self;
}
function $$makeProp($component, $props, bound, name, getter, setter) {
    let value = $props[name];
    if(value !== void 0) setter(value);
    if((bound[name] || bound.$$spreading) && (bound[name] !== 2)) $component.push.push(() => setter($props[name]));
    $component.exportedProps[name] = true;

    Object.defineProperty($component, name, {
        get: getter,
        set: setter
    });
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
function $$makeApply($cd) {
    let id = `a${$$uniqIndex++}`;
    return function apply(r) {
        if(apply._p) return r;
        $tick(() => {
            try {
                apply._p = true;
                $digest($cd);
            } finally {
                apply._p = false;
            }
        }, id);
        return r;
    };
}

function $$makeComponent($element, $option) {
    let $component = {
        $cd: new $ChangeDetector(),
        exportedProps: {},
        push: []
    };

    $component.destroy = () => $component.$cd.destroy();
    $component.$$render = (rootTemplate) => {
        if ($option.afterElement) {
            $element.parentNode.insertBefore(rootTemplate, $element.nextSibling);
        } else {
            $element.innerHTML = '';
            $element.appendChild(rootTemplate);
        }
    };

    return $component;
}
const autoSubscribe = (cd, apply, obj) => {
    if(obj && 'value' in obj && obj.subscribe) {
        let unsub = obj.subscribe(apply);
        if(typeof unsub == 'function') cd_onDestroy(unsub);
    }
};

function $$componentCompleteProps($component, $$apply, $props) {
    let list = $component.push;
    let recalcAttributes, $attributes = $props;
    $component.push = () => {
        list.forEach(fn => fn());
        recalcAttributes();
        $$apply();
    };

    $attributes = {};
    for(let k in $props) {
        if(!$component.exportedProps[k]) {
            $attributes[k] = $props[k];
            recalcAttributes = 1;
        }
    }
    if(recalcAttributes) {
        recalcAttributes = () => {
            for(let k in $attributes) $attributes[k] = $props[k];
        };
    } else recalcAttributes = () => {};

    return $attributes;
}

const addStyles = (id, content) => {
    if(document.head.querySelector('style#' + id)) return;
    let style = document.createElement('style');
    style.id = id;
    style.innerHTML = content;
    document.head.appendChild(style);
};


const bindClass = (cd, element, fn, className) => {
    $watchReadOnly(cd, fn, value => {
        if(value) element.classList.add(className);
        else element.classList.remove(className);
    });
};


const setClassToElement = (element, value) => {
    if(typeof element.className == 'string') element.className = value;
    else element.className.baseVal = value;
};


const bindText = (cd, element, fn) => {
    $watchReadOnly(cd, fn, value => {
        element.textContent = value;
    });
};


const makeClassResolver = ($option, classMap, metaClass, mainName) => {
    if(!$option.$class) $option.$class = {};
    if(!mainName && metaClass.main) mainName = 'main';
    return line => {
        let result = [];
        line.trim().split(/\s+/).forEach(name => {
            let h = metaClass[name];
            if(h) {
                if(name === mainName && $option.$class.$$main) name = '$$main';
                let className = ($option.$class[name] || '').trim();
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

function $$htmlBlock($cd, tag, fn) {
    let lastElement;
    let create = (html) => {
        let fr = $$htmlToFragment(html);
        lastElement = fr.lastChild;
        tag.parentNode.insertBefore(fr, tag.nextSibling);
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
        first = tpl.firstChild;
        last = tpl.lastChild;
        $parentElement.parentNode.insertBefore(tpl, $parentElement.nextSibling);
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

function $$awaitBlock($cd, label, fn, $$apply, build_main, build_then, build_catch, tpl_main, tpl_then, tpl_catch) {
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
        first = fr.firstChild;
        last = fr.lastChild;
        label.parentNode.insertBefore(fr, label.nextSibling);
    }
    $watchReadOnly($cd, fn, p => {
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
    });
}

function $$eachBlock($parentCD, label, onlyChild, fn, getKey, itemTemplate, bind) {
    let $cd = $parentCD.new();

    let mapping = new Map();
    let lineArray = [];
    let lastNode;
    let tplLength = itemTemplate.childNodes.length;
    if(onlyChild) while(label.firstChild) label.firstChild.remove(); // FIXME

    $watch($cd, fn, (array) => {
        if(!array) array = [];
        if(typeof(array) == 'number') {
            lineArray.length = array;
            array--;
            while(array >= 0 && !lineArray[array]) lineArray[array] = array-- + 1;
            array = lineArray;
        } else if(!isArray(array)) array = [];

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
                ctx = mapping.get(getKey(array[i], i));
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
            } else ctx = mapping.get(getKey(item, i));
            if(ctx) {
                nextEl = i == 0 && onlyChild ? parentNode.firstChild : prevNode.nextSibling;
                if(nextEl != ctx.first) {
                    let insert = true;

                    if(tplLength == 1 && (i + 1 < array.length) && prevNode.nextSibling) {
                        next_ctx = mapping.get(getKey(array[i + 1], i + 1));
                        if(prevNode.nextSibling.nextSibling === next_ctx.first) {
                            parentNode.replaceChild(ctx.first, prevNode.nextSibling);
                            insert = false;
                        }
                    }

                    if(insert) {
                        let insertBefore = prevNode.nextSibling;
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
                ctx.first = tpl.firstChild;
                ctx.last = tpl.lastChild;
                parentNode.insertBefore(tpl, prevNode && prevNode.nextSibling);
            }
            prevNode = ctx.last;
            newMapping.set(getKey(item, i), ctx);
        }        lastNode = prevNode;
        mapping.clear();
        mapping = newMapping;
    }, {ro: true, cmp: $$compareArray});
}

export { $$addEventForComponent, $$awaitBlock, $$childNodes, $$cloneDeep, $$compareArray, $$compareDeep, $$componentCompleteProps, $$deepComparator, $$eachBlock, $$groupCall, $$htmlBlock, $$htmlToFragment, $$htmlToFragmentClean, $$ifBlock, $$makeApply, $$makeComponent, $$makeProp, $$makeSpreadObject, $$makeSpreadObject2, $$removeElements, $$removeItem, $ChangeDetector, $digest, $makeEmitter, $tick, $watch, $watchReadOnly, addEvent, addStyles, autoSubscribe, bindClass, bindText, cd_onDestroy, configure, getFinalLabel, isArray, makeClassResolver, removeElementsBetween, setClassToElement, svgToFragment, watchInit };
