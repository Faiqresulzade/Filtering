/*! This file is auto-generated */
!function(){"use strict";var e={d:function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{count:function(){return x}});var r=window.lodash;const t={HTMLRegExp:/<\/?[a-z][^>]*?>/gi,HTMLcommentRegExp:/<!--[\s\S]*?-->/g,spaceRegExp:/&nbsp;|&#160;/gi,HTMLEntityRegExp:/&\S+?;/g,connectorRegExp:/--|\u2014/g,removeRegExp:new RegExp(["[","!-/:-@[-`{-~","-¿×÷"," -⯿","⸀-⹿","]"].join(""),"g"),astralRegExp:/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,wordsRegExp:/\S\s+/g,characters_excluding_spacesRegExp:/\S/g,characters_including_spacesRegExp:/[^\f\n\r\t\v\u00AD\u2028\u2029]/g,l10n:{type:"words"}};function c(e,n){return n.replace(e.HTMLRegExp,"\n")}function o(e,n){return n.replace(e.astralRegExp,"a")}function u(e,n){return n.replace(e.HTMLEntityRegExp,"")}function l(e,n){return n.replace(e.connectorRegExp," ")}function i(e,n){return n.replace(e.removeRegExp,"")}function s(e,n){return n.replace(e.HTMLcommentRegExp,"")}function a(e,n){return e.shortcodesRegExp?n.replace(e.shortcodesRegExp,"\n"):n}function p(e,n){return n.replace(e.spaceRegExp," ")}function d(e,n){return n.replace(e.HTMLEntityRegExp,"a")}function g(e,n,t){var u,l;return e=(0,r.flow)(c.bind(null,t),s.bind(null,t),a.bind(null,t),o.bind(null,t),p.bind(null,t),d.bind(null,t))(e),null!==(u=null===(l=(e+="\n").match(n))||void 0===l?void 0:l.length)&&void 0!==u?u:0}function x(e,n,o){const d=function(e,n){var c,o;const u=(0,r.extend)({},t,n);return u.shortcodes=null!==(c=null===(o=u.l10n)||void 0===o?void 0:o.shortcodes)&&void 0!==c?c:[],u.shortcodes&&u.shortcodes.length&&(u.shortcodesRegExp=new RegExp("\\[\\/?(?:"+u.shortcodes.join("|")+")[^\\]]*?\\]","g")),u.type=e,"characters_excluding_spaces"!==u.type&&"characters_including_spaces"!==u.type&&(u.type="words"),u}(n,o);let x;switch(d.type){case"words":return x=d.wordsRegExp,function(e,n,t){var o,d;return e=(0,r.flow)(c.bind(null,t),s.bind(null,t),a.bind(null,t),p.bind(null,t),u.bind(null,t),l.bind(null,t),i.bind(null,t))(e),null!==(o=null===(d=(e+="\n").match(n))||void 0===d?void 0:d.length)&&void 0!==o?o:0}(e,x,d);case"characters_including_spaces":return x=d.characters_including_spacesRegExp,g(e,x,d);case"characters_excluding_spaces":return x=d.characters_excluding_spacesRegExp,g(e,x,d);default:return 0}}(window.wp=window.wp||{}).wordcount=n}();