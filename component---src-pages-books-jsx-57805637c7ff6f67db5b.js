(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/TSO":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n.n(a),c=n("xmTc"),u=n("qx5a"),s=n("vOnD"),l=n("Wbzz"),f=n("Q4RR"),p=n("tC44"),d=s.b.div.withConfig({displayName:"bookcard__Title",componentId:"i5zij-0"})(['font-family:"Noto Sans JP";font-weight:500;font-size:1.4rem;padding:5px 0;letter-spacing:0.3rem;line-height:1.6rem;color:',";margin:20px 0;margin-right:auto;"],p.a.BLACK),m=Object(s.b)(l.a).withConfig({displayName:"bookcard__Wrapper",componentId:"i5zij-1"})(["text-decoration:none;display:block;"]),y=s.b.div.withConfig({displayName:"bookcard__Container",componentId:"i5zij-2"})(["width:80%;box-sizing:border-box;padding:20px 0;display:flex;"]),h=s.b.img.withConfig({displayName:"bookcard__BookImage",componentId:"i5zij-3"})(["box-shadow:0 0 5px ",";width:100%;"],p.a.SHADOW_B),b=s.b.div.withConfig({displayName:"bookcard__Detail",componentId:"i5zij-4"})(["margin-left:5%;display:block;width:55%;"]),v=s.b.div.withConfig({displayName:"bookcard__Description",componentId:"i5zij-5"})(["text-decoration:none;color:",';font-family:"Noto Sans JP";font-weight:400;font-size:0.8rem;line-height:1.2rem;'],p.a.BLACK),g=Object(s.b)("div").withConfig({displayName:"bookcard___StyledDiv",componentId:"i5zij-6"})(["width:40%;"]),w=function(e){return o.a.createElement(m,{to:"/book/"+e.linkto},o.a.createElement(u.a,{barShow:"false",titleShow:"false",linkto:"/book/"+e.linkto},o.a.createElement(y,null,o.a.createElement(g,null,o.a.createElement(h,{src:e.bookimg})),o.a.createElement(b,null,o.a.createElement(f.a,null,e.badge),o.a.createElement(d,null,e.title),o.a.createElement(v,null,e.description)))))},x=s.b.div.withConfig({displayName:"bookcardmobile__Title",componentId:"sfo5fn-0"})(['font-family:"Noto Sans JP";font-weight:500;font-size:1.4rem;padding:5px 0;letter-spacing:0.3rem;line-height:1.6rem;color:',";margin:10px 0;margin-right:auto;"],p.a.BLACK),O=Object(s.b)(l.a).withConfig({displayName:"bookcardmobile__Wrapper",componentId:"sfo5fn-1"})(["text-decoration:none;display:block;"]),j=s.b.div.withConfig({displayName:"bookcardmobile__Container",componentId:"sfo5fn-2"})(["width:80%;box-sizing:border-box;padding:20px 0;text-align:center;"]),S=s.b.img.withConfig({displayName:"bookcardmobile__BookImage",componentId:"sfo5fn-3"})(["box-shadow:0 0 5px ",";width:100%;margin-bottom:10px;"],p.a.SHADOW_B),E=s.b.div.withConfig({displayName:"bookcardmobile__Description",componentId:"sfo5fn-4"})(["text-decoration:none;color:",';font-family:"Noto Sans JP";font-weight:400;font-size:0.8rem;line-height:1.2rem;'],p.a.BLACK),_=function(e){return o.a.createElement(O,{to:"/book/"+e.linkto},o.a.createElement(u.a,{barShow:"false",titleShow:"false",linkto:"/book/"+e.linkto},o.a.createElement(j,null,o.a.createElement(S,{src:e.bookimg}),o.a.createElement(f.a,null,e.badge),o.a.createElement(x,null,e.title),o.a.createElement(E,null,e.description))))},k=n("FwaM");n.d(t,"pageQuery",(function(){return I}));var C=Object(k.a)(w,_),I=(t.default=function(e){var t=e.data,n=(e.location,t.allMarkdownRemark.edges);return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement("title",null,"会誌紹介 | ",c.a.siteName),o.a.createElement("meta",{property:"og:title",content:"会誌紹介"})),o.a.createElement(u.a,{title:"会誌紹介",theme:"primary",seemoreShow:"False",barShow:"False"}),n.map((function(e){var t=e.node;return o.a.createElement(C,{key:t.id,title:t.frontmatter.title,linkto:t.frontmatter.path,bookimg:t.frontmatter.bookimg.childImageSharp.fluid.src,badge:t.frontmatter.badge,description:t.frontmatter.description})})))},"1975374914")},BJfS:function(e,t,n){n("pIFo");e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},BQrF:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("ZMKu"),c=n("tC44"),u=n("0lbV"),s=Object(a.b)(i.b.div).withConfig({displayName:"button__Wrapper",componentId:"sc-1yykufd-0"})(["width:auto;box-sizing:border-box;padding:10px 20px;margin:5px;background-color:",";box-shadow:"," ",","," ",";border-radius:10px;text-align:center;transition-duration:150ms;&:hover{box-shadow:"," ",","," ",";transform:scale(1.05);transition-duration:150ms;}"],c.a.BASE,u.a.SHADOW.Dark,c.a.SHADOW_B,u.a.SHADOW.Light,c.a.SHADOW_W,u.a.SHADOW.Dark,c.a.SHADOW_B,u.a.SHADOW.Light,c.a.SHADOW_W);s.defaultProps={textcolor:c.a.PRIMARY};var l=a.b.span.withConfig({displayName:"button__Content",componentId:"sc-1yykufd-1"})(['text-decoration:none;font-size:0.9rem;font-family:"Roboto","Noto Sans JP";color:',";font-weight:300;white-space:nowrap;"],(function(e){return function(e,t){switch(e){case"primary":case"reverse":return c.a.BASE;default:return t}}(e.theme,e.textcolor)}));l.defaultProps={textcolor:c.a.PRIMARY};t.a=function(e){return o.a.createElement(s,{whileHover:{scale:1.05},whileTap:{scale:.95}},o.a.createElement(l,{textcolor:e.textcolor,theme:e.theme},e.children))}},FwaM:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);n("LK8F"),n("dZ+Y"),n("8+KV"),n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("f3/d"),n("DNiP");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n("17x9"),s=n.n(u),l=n("QLaP"),f=n.n(l),p=n("pIsd"),d=n.n(p),m=function(){function e(e,t,n){var r=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){r.matches=r.nativeMediaQueryList.matches,r.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),y=s.a.oneOfType([s.a.string,s.a.object,s.a.arrayOf(s.a.object.isRequired)]),h=function(e){var t,n;function r(t){var n,r;return c(i(i(n=e.call(this,t)||this)),"queries",[]),c(i(i(n)),"getMatches",(function(){return function(e){var t=Object.keys(e);if(1===t.length&&"__DEFAULT__"===t[0])return e.__DEFAULT__;return e}(n.queries.reduce((function(e,t){var n,r=t.name,o=t.mqListener;return a({},e,((n={})[r]=o.matches,n))}),{}))})),c(i(i(n)),"updateMatches",(function(){var e=n.getMatches();n.setState((function(){return{matches:e}}),n.onChange)})),t.query||t.queries||t.query&&t.queries||f()(!1),void 0!==t.defaultMatches&&t.query&&"boolean"!=typeof t.defaultMatches&&f()(!1),void 0!==t.defaultMatches&&t.queries&&"object"!=typeof t.defaultMatches&&f()(!1),"object"!=typeof window?(r=void 0!==t.defaultMatches?t.defaultMatches:!!t.query||Object.keys(n.props.queries).reduce((function(e,t){var n;return a({},e,((n={})[t]=!0,n))}),{}),n.state={matches:r},i(n)):(n.initialize(),n.state={matches:void 0!==n.props.defaultMatches?n.props.defaultMatches:n.getMatches()},n.onChange(),n)}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u=r.prototype;return u.initialize=function(){var e=this,t=this.props.targetWindow||window;"function"!=typeof t.matchMedia&&f()(!1);var n=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(n).map((function(r){var o=n[r],a="string"!=typeof o?d()(o):o;return{name:r,mqListener:new m(t,a,e.updateMatches)}}))},u.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},u.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},u.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},u.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches,a="object"==typeof r?Object.keys(r).some((function(e){return r[e]})):r;return n?a?n(r):null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&a?o.a.Children.only(t)&&"string"==typeof o.a.Children.only(t).type?o.a.Children.only(t):o.a.cloneElement(o.a.Children.only(t),{matches:r}):null:null},r}(o.a.Component);c(h,"propTypes",{defaultMatches:s.a.oneOfType([s.a.bool,s.a.objectOf(s.a.bool)]),query:y,queries:s.a.objectOf(y),render:s.a.func,children:s.a.oneOfType([s.a.node,s.a.func]),targetWindow:s.a.object,onChange:s.a.func});var b=n("s/Ur"),v=n.n(b);t.a=function(e,t){return function(n){return o.a.createElement("div",null,o.a.createElement(v.a,{query:"(max-width: 768px)"},o.a.createElement(t,n)),o.a.createElement(v.a,{query:"(min-width: 769px)"},o.a.createElement(e,n)))}}},Q4RR:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("tC44"),c=a.b.div.withConfig({displayName:"badge__Wrapper",componentId:"sc-106jppv-0"})(["box-sizing:border-box;color:",";background-color:",';padding:7px 20px;font-family:"Noto Sans JP";border-radius:5px;font-size:0.8rem;font-weight:500;display:inline-block;'],(function(e){return e.textcolor}),(function(e){return e.color}));c.defaultProps={textcolor:i.a.BASE,color:i.a.PRIMARY};t.a=function(e){return o.a.createElement(c,{color:e.color,textcolor:e.textcolor},e.children)}},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),a=n("aCFj"),i=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),u=i.f,s=o(r),l={},f=0;s.length>f;)void 0!==(n=u(r,t=s[f++]))&&c(l,t,n);return l}})},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),a=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},pIsd:function(e,t,n){n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("BJfS"),o=function(e){var t="",n=Object.keys(e);return n.forEach((function(o,a){var i=e[o];(function(e){return/[height|width]$/.test(e)})(o=r(o))&&"number"==typeof i&&(i+="px"),t+=!0===i?o:!1===i?"not "+o:"("+o+": "+i+")",a<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=o(n),r<e.length-1&&(t+=", ")})),t):o(e)}},qx5a:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("Wbzz"),c=n("tC44"),u=n("0lbV"),s=n("BQrF"),l=function(e,t){switch(e){case"primary":case"reverse":return c.a.BASE;default:return t}},f=a.b.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1vdm5bs-0"})(["border-radius:10px;background:",";box-shadow:"," ",","," ",";width:90vw;max-width:900px;margin:40px 0px;display:flex;padding:20px;box-sizing:border-box;flex-direction:column;align-items:center;"],(function(e){return function(e,t){switch(e){case"primary":return c.a.PRIMARY;case"reverse":return c.a.BLACK;default:return t}}(e.theme,e.bgcolor)}),u.a.SHADOW.Dark,c.a.SHADOW_B,u.a.SHADOW.Light,c.a.SHADOW_W);f.defaultProps={bgcolor:c.a.BASE};var p=a.b.span.withConfig({displayName:"card__Title",componentId:"sc-1vdm5bs-1"})(['font-family:"Noto Sans JP";color:',";font-size:1.4rem;letter-spacing:0.5rem;margin-right:-0.5rem;font-weight:500;line-height:1.7rem;text-align:center;"],(function(e){return l(e.theme,e.color)}));p.defaultProps={color:c.a.BLACK};var d=a.b.div.withConfig({displayName:"card__Bar",componentId:"sc-1vdm5bs-2"})(["width:40px;height:2px;background-color:",";margin:20px 0;"],(function(e){return l(e.theme,e.color)}));d.defaultProps={color:c.a.BLACK};var m=a.b.div.withConfig({displayName:"card__SeeMoreWrapper",componentId:"sc-1vdm5bs-3"})(["margin-top:10px;margin-left:auto;"]),y=Object(a.b)(i.a).withConfig({displayName:"card__LinkT",componentId:"sc-1vdm5bs-4"})(["text-decoration:none;color:",";"],c.a.PRIMARY),h=a.b.span.withConfig({displayName:"card__SubTitle",componentId:"sc-1vdm5bs-5"})(["color:",';margin-top:20px;margin-bottom:20px;font-family:"Roboto, Noto Sans JP";letter-spacing:0.3rem;'],(function(e){return l(e.theme,e.color)}));h.defaultProps={color:c.a.BLACK};t.a=function(e){return o.a.createElement(f,{bgcolor:e.bgcolor,theme:e.theme},o.a.createElement(p,{style:{display:e.titleShow?"none":""},color:e.textcolor,theme:e.theme},e.title),o.a.createElement(h,{style:{display:e.subTitle?"":"none"}},"- ",e.subTitle," -"),o.a.createElement(d,{style:{display:e.barShow?"none":""},color:e.textcolor,theme:e.theme}),e.children,o.a.createElement(m,{style:{display:e.seemoreShow?"none":""}},o.a.createElement(y,{to:e.linkto},o.a.createElement(s.a,null,"SEE MORE"))))}},"s/Ur":function(e,t,n){var r;n("V+eJ"),n("91GP"),n("Oyvg"),n("f3/d"),n("2Spj"),n("WLL4"),n("jm62"),n("0l/t"),n("8+KV"),n("xfY5"),n("Tze0"),n("KKXr"),n("bWfx"),n("dZ+Y"),n("SRfc"),n("pIFo"),n("DNiP"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),"undefined"!=typeof self&&self,e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=n(1),a=n.n(o),i=n(7),c=n.n(i),u=n(2),s=n(9),l=n.n(s),f=n(10),p=n(5),d=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(u.a)(n)]=e[n],t}),{})},m=function(){var e=a.a.useRef(!1);return a.a.useEffect((function(){e.current=!0}),[]),e.current},y=function(e){var t=function(){return function(e){return e.query||Object(f.a)(e)}(e)},n=r(a.a.useState(t),2),o=n[0],i=n[1];return a.a.useEffect((function(){var e=t();o!==e&&i(e)}),[e]),o};t.a=function(e,t,n){var o=function(e){var t=a.a.useContext(p.a),n=function(){return d(e)||d(t)},o=r(a.a.useState(n),2),i=o[0],c=o[1];return a.a.useEffect((function(){var e=n();l()(i,e)||c(e)}),[e,t]),i}(t),i=y(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var u=function(e){var t=r(a.a.useState(e.matches),2),n=t[0],o=t[1];return a.a.useEffect((function(){var t=function(){o(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n}(function(e,t){var n=function(){return c()(e,t||{},!!t)},o=r(a.a.useState(n),2),i=o[0],u=o[1],s=m();return a.a.useEffect((function(){return s&&u(n()),function(){i.dispose()}}),[e,t]),i}(i,o)),s=m();return a.a.useEffect((function(){s&&n&&n(u)}),[u]),u}},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}var o=/[A-Z]/g,a=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(o,r);return i[e]=a.test(t)?"-"+t:t}},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),o=n.n(r).a.createContext();t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(17),a=n(5);n.d(t,"default",(function(){return o.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"Context",(function(){return a.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){i.matches=e.matches,i.media=e.media}var i=this;if(a&&!n){var c=a.call(window,e);this.matches=c.matches,this.media=c.media,c.addListener(r)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){c&&c.addListener(e)},this.removeListener=function(e){c&&c.removeListener(e)},this.dispose=function(){c&&c.removeListener(r)}}var o=n(8).match,a="undefined"!=typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){"use strict";function r(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),n=t[1],r=t[2],o=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(u),n=t[1].toLowerCase().match(s);return{modifier:n[1],feature:n[2],value:t[2]}})),a}))}function o(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function a(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var c=e.expressions.every((function(e){var n=e.feature,r=e.modifier,c=e.value,u=t[n];if(!u)return!1;switch(n){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=i(c),u=i(u);break;case"resolution":c=a(c),u=a(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=o(c),u=o(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0}switch(r){case"min":return u>=c;case"max":return u<=c;default:return u===c}}));return c&&!n||!c&&n}))},t.parse=r;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,u=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,s=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var a=0;a<o;a++){var i=n[a];if(e[i]!==t[i])return!1}return!0}},function(e,t,n){"use strict";var r=n(2),o=n(11);t.a=function(e){var t=[];return Object.keys(o.a.all).forEach((function(n){var o=e[n];null!=o&&t.push(function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,o))})),t.join(" and ")}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),u=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:u},l=o({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:u,maxResolution:u},s),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=o({},f,{},l);s.type=Object.keys(f),t.a={all:p,types:f,matchers:s,features:l}},function(e,t,n){var r=n(3);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var n=e.type;switch(n){case f:case p:case i:case u:case c:case m:return n;default:var r=n&&n.$$typeof;switch(r){case l:case d:case s:return r;default:return t}}case b:case h:case a:return t}}}function n(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(i){}},x=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];w.apply(void 0,[t].concat(r))}},O=f,j=p,S=l,E=s,_=o,k=d,C=i,I=b,P=h,A=a,M=u,L=c,R=m,W=!1;t.typeOf=e,t.AsyncMode=O,t.ConcurrentMode=j,t.ContextConsumer=S,t.ContextProvider=E,t.Element=_,t.ForwardRef=k,t.Fragment=C,t.Lazy=I,t.Memo=P,t.Portal=A,t.Profiler=M,t.StrictMode=L,t.Suspense=R,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===c||e===m||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(t){return W||(W=!0,x(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===f},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===l},t.isContextProvider=function(t){return e(t)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(t){return e(t)===d},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===b},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===a},t.isProfiler=function(t){return e(t)===u},t.isStrictMode=function(t){return e(t)===c},t.isSuspense=function(t){return e(t)===m}}()},function(e,t,n){"use strict";function r(){return null}var o,a=n(3),i=n(15),c=n(4),u=n(16),s=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,i,u,s,f,p,d){if(s=s||g,p=p||u,d!==c){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var y=s+":"+u;!r[y]&&a<3&&(o("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,a++)}}return null==i[u]?n?new l(null===i[u]?"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,u,s,f,p)}var r={},a=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function p(e){return f((function(t,n,r,o,a,i){var c=t[n];return m(c)!==e?new l("Invalid "+o+" `"+a+"` of type `"+y(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function d(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(d);if(null===t||e(t))return!0;var n=function(e){var t=e&&(b&&e[b]||e[v]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!d(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!d(a[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var b="function"==typeof Symbol&&Symbol.iterator,v="@@iterator",g="<<anonymous>>",w={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r),arrayOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+o+" `"+a+"` of type `"+m(i)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<i.length;u++){var s=e(i,u,r,o,a+"["+u+"]",c);if(s instanceof Error)return s}return null}))},element:f((function(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+m(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(e,t,n,r,o){var i=e[t];return a.isValidElementType(i)?null:new l("Invalid "+r+" `"+o+"` of type `"+m(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||g;return new l("Invalid "+o+" `"+a+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:g)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var c;return null}))},node:f((function(e,t,n,r,o){return d(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=m(i);if("object"!==u)return new l("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var f in i)if(s(i,f)){var p=e(i,f,r,o,a+"."+f,c);if(p instanceof Error)return p}return null}))},oneOf:function(e){function t(t,r,o,a,i){for(var c=t[r],u=0;u<e.length;u++)if(n(c,e[u]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new l("Invalid "+a+" `"+i+"` of value `"+String(c)+"` supplied to `"+o+"`, expected one of "+s+".")}return Array.isArray(e)?f(t):(o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return o("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+h(n)+" at index "+t+"."),r}return f((function(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,c))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,o,a){var i=t[n],u=m(i);if("object"!==u)return new l("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(i,s,r,o,a+"."+s,c);if(p)return p}}return null}))},exact:function(e){return f((function(t,n,r,o,a){var u=t[n],s=m(u);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,p,r,o,a+"."+p,c);if(y)return y}return null}))}};return l.prototype=Error.prototype,w.checkPropTypes=u,w.resetWarningCache=u.resetWarningCache,w.PropTypes=w,w}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=r(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))a.call(n,l)&&(u[l]=n[l]);if(o){c=o(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}},function(e,t,n){"use strict";function r(e,t,n,r,u){for(var s in e)if(c(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,r,n,null,a)}catch(d){l=d}if(!l||l instanceof Error||o((r||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";o("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}var o=function(){},a=n(4),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.a=function(e){var t=e.children,n=e.device,a=e.onChange,i=r(e,["children","device","onChange"]),c=Object(o.a)(i,n,a);return"function"==typeof t?t(c):c?t:null};var o=n(0)}]))}}]);
//# sourceMappingURL=component---src-pages-books-jsx-57805637c7ff6f67db5b.js.map