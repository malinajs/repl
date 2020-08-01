import Prism  from 'prismjs/components/prism-core.js';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';



langDefinitionMalina(Prism);
         
export function highlight(syntax,code){
    if(!['javascript','malina'].includes(syntax)) syntax='malina';
    const result = Prism.highlight(code, Prism.languages[syntax]);

    return result;
}

function langDefinitionMalina(Prism) {

    const expression = {            
        pattern: /\{[\s\S]*?\}/,
        inside:{
            'punctuation': /\{|\}$/,
            'eachfix':{
                pattern:/(?<=(each .+ as .+))[a-zA-Z$_0-9]+\s*\(.+\)\s*$/,
                inside:{
                    'javascript': /^[a-zA-Z$_0-9]+/
                }
            },
            'keyword':/([#:\/@](if|else|each|await|then|catch|html|slot|fragment))|\$element|\$event|\$onDestroy|\$onMount|\$props|\$attributes|\$emit/,
            'selector': /^:[A-Za-z0-9]+/,
            
            'javascript':{
                pattern:/[\s\S]+/,
                inside:Prism.languages.javascript
            }
        }
    }

    function getTag(validonly){

        return {
            pattern: /<\/?[^>\/]+\/?>/,
            inside:{
                'tagstart': {
                    pattern: /^<\/?[A-Za-z0-9-:]+/,
                    inside: {
                        'punctuation': /^<\/?/,
                        'keyword': /^(fragment|slot|[A-Z])[A-Za-z0-9-]*/,
                        'tag': /^[a-z][A-Za-z0-9-]*/, 
                        'selector': /^:[A-Za-z0-9]+/,
                    }
                },
                'expression':!validonly && expression,
                'attr-value':{
                    pattern:/(?<=\=)"[\S\s]*?(?<!\\)"|(?<=\=)"[^"]*|[^"]*"(?=(>|\s))|(?<=\=)'[\S\s]*?(?<!\\)'|(?<=\=)'[^']*|[^']*'(?=(>|\s))/,
                    inside:{
                        'punctuation': /^"|^'|"$|'$/
                    }
                },
                'ref':!validonly && {
                    pattern:/\s#([A-Za-z0-9_$]+)?/,
                    inside:{
                        'keyword':/(?<=\s)#/,
                        'javascript': /[A-Za-z0-9_$]+/
                    }
                },
                'action':!validonly && {
                    pattern:/\s(\*|use:|use)([A-Za-z0-9_$]+)?=?/,
                    inside:{
                        'keyword':/(?<=\s)(\*|use:|use)/,
                        'punctuation':/=$/,
                        'javascript': /[A-Za-z0-9_$]+/
                    }
                },
                'event':!validonly && {
                    pattern:/\s(@@|@|on:@?)([A-Za-z0-9_$:|]+)?/,
                    inside:{
                        'keyword':/(?<=\s)(@@|on:@?|@)/,
                        'javascript': /:[A-Za-z0-9_$]+/,
                        'attr-name': {
                            pattern: /[A-Za-z0-9|]+/,
                            inside: {
                                'italic':/(?<=\|)[A-Za-z0-9]+/
                            }
                        }
                    }
                },
                'bind':!validonly && [{
                    pattern:/\s(:|bind:)([A-Za-z0-9_$]+)?=?/,
                    inside:{
                        'keyword':/(?<=\s)(:|bind:)/,
                        'attr-name':/[a-z]+(?=\=)/,
                        'punctuation':/=$/,
                        'javascript': /[A-Za-z0-9_$]+/
                    }
                }],
                'style':!validonly && {
                    pattern:/\s(class:|style:)([A-Za-z0-9_$]+)?=?/,
                    inside:{
                        'keyword':/(?<=\s)(class:|style:)/,
                        'attr-name':/[a-z]+(?=\=)/,
                        'punctuation':/=$/,
                        'javascript': /[A-Za-z0-9_$]+/
                    }
                },
                'attr-name':/\s[a-z0-9-]+/,
                                
                'punctuation': /=|\/?>$/,
            }
        }
    }

	Prism.languages.malina = {
        'comment': /<!--[\s\S]*-->/,
        'script':{
            pattern:/<script[^>]*>[\s\S]*<\/script>/,
            inside:{
                'scriptag':{
                    pattern:/^<script[^>]*>|<\/script>$/,
                    inside:{
                        'htmltag':getTag(true)
                    }
                },
                'keyword':/\$:|\$onDestroy|\$onMount|\$props|\$attributes|\$emit/,
                'javascript':{
                    pattern:/[\s\S]+/,
                    inside:Prism.languages.javascript
                }
            }
        },
        'style':{
            pattern:/<style>[\s\S]*<\/style>/,
            inside:{
                'styletag':{
                    pattern:/^<style[^>]*>|<\/style>$/,
                    inside:{
                        'htmltag':getTag(true)
                    }
                },
                'css':{
                    pattern:/[\s\S]+/,
                    inside:Prism.languages.css
                }
            }
        },
		'html': getTag(),
        'expression':expression
	};
}
