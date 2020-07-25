import hljs from 'highlight.js/lib/core.js';
import xml from 'highlight.js/lib/languages/xml.js';
import js from 'highlight.js/lib/languages/javascript.js';
import css from 'highlight.js/lib/languages/css.js';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', js);
hljs.registerLanguage('css', css);
hljs.registerLanguage('malina', hljsDefineMalina);

export function highlight(syntax,code){
    if(!['html','xml','javascript','css','malina'].includes(syntax)) syntax='malina';
    return hljs.highlight(syntax,code).value;
}

function hljsDefineMalina(hljs) {
    return {
      subLanguage: "xml",
      contains: [
        hljs.COMMENT("<!--", "-->", {
          relevance: 10,
        }),
        {
          begin: /^(\s*)(<script(\s*context="module")?>)/gm,
          end: /^(\s*)(<\/script>)/gm,
          subLanguage: "javascript",
          excludeBegin: true,
          excludeEnd: true,
          contains:[
            { 
              begin: /^(\s*)(\$:)/gm,
              end: /(\s*)/gm,
              className: 'keyword'
            }
          ]
        },
        {
          begin: /^(\s*)(<style.*>)/gm,
          end: /^(\s*)(<\/style>)/gm,
          subLanguage: "css",
          excludeBegin: true,
          excludeEnd: true,
        },
        {
          begin: /\{/gm,
          end: /\}/gm,
          subLanguage: "javascript",
          contains:[
            {
              begin: /[\{]/, 
              end: /[\}]/, 
              skip: true
            },
            {
              begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
              className:'keyword',
              relevance: 10,
            }
          ],
        }
      ]
    }
  }