(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BQrF:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("ZMKu"),l=o("tC44"),c=o("0lbV"),s=Object(r.b)(i.b.div).withConfig({displayName:"button__Wrapper",componentId:"sc-1yykufd-0"})(["width:auto;box-sizing:border-box;padding:10px 20px;margin:5px;background-color:",";box-shadow:"," ",","," ",";border-radius:10px;text-align:center;transition-duration:150ms;&:hover{box-shadow:"," ",","," ",";transform:scale(1.05);transition-duration:150ms;}"],l.a.BASE,c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W,c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W);s.defaultProps={textcolor:l.a.PRIMARY};var m=r.b.span.withConfig({displayName:"button__Content",componentId:"sc-1yykufd-1"})(['text-decoration:none;font-size:0.9rem;font-family:"Roboto","Noto Sans JP";color:',";font-weight:500;white-space:nowrap;"],(function(e){return function(e,t){switch(e){case"primary":case"reverse":return l.a.BASE;default:return t}}(e.theme,e.textcolor)}));m.defaultProps={textcolor:l.a.PRIMARY};t.a=function(e){return n.a.createElement(s,{whileHover:{scale:1.05},whileTap:{scale:.95}},n.a.createElement(m,{textcolor:e.textcolor,theme:e.theme},e.children))}},iMXn:function(e,t,o){"use strict";o.r(t),o.d(t,"pageQuery",(function(){return b}));var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("TJpk"),l=o.n(i),c=o("ibEc"),s=o("xmTc"),m=o("tC44"),d=o("qx5a");function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      width: 100%;"]);return p=function(){return e},e}var u=c.a.lessThan("medium"),h=r.b.div.withConfig({displayName:"basicpost__Date",componentId:"sc-376w0v-0"})(["color:",';font-family:"Roboto";font-weight:300;'],m.a.BASE),f=r.b.div.withConfig({displayName:"basicpost__Content",componentId:"sc-376w0v-1"})(["margin-right:auto;box-sizing:border-box;padding:20px;color:",';font-family:"Noto Sans JP";width:100%;& h1{font-size:1.4rem;margin:10px 0 20px 0;padding-left:15px;box-sizing:border-box;font-weight:600;position:relative;&::before{content:"";width:5px;height:100%;background-color:',";position:absolute;left:0;top:0.05rem;}}& p{font-size:0.9rem;line-height:1.5rem;& span{margin:10px 0;","}}"],m.a.BLACK,m.a.PRIMARY,u(p()));t.default=function(e){var t=e.data,o=(e.location,t.markdownRemark),a=o.frontmatter,r=o.html;return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement("title",null,a.title," | ",s.a.siteName),n.a.createElement("meta",{property:"og:title",content:a.title})),n.a.createElement(d.a,{title:a.title,theme:"primary",seemoreShow:"false"},n.a.createElement(h,null,a.date)),n.a.createElement(d.a,{titleShow:"false",barShow:"false",seemoreShow:"false"},n.a.createElement(f,{dangerouslySetInnerHTML:{__html:r}})))};var b="1310822058"},qx5a:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("Wbzz"),l=o("tC44"),c=o("0lbV"),s=o("BQrF"),m=function(e,t){switch(e){case"primary":case"reverse":return l.a.BASE;default:return t}},d=r.b.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1vdm5bs-0"})(["border-radius:10px;background:",";box-shadow:"," ",","," ",";width:90vw;max-width:900px;margin:40px 0px;display:flex;padding:20px;box-sizing:border-box;flex-direction:column;align-items:center;"],(function(e){return function(e,t){switch(e){case"primary":return l.a.PRIMARY;case"reverse":return l.a.BLACK;default:return t}}(e.theme,e.bgcolor)}),c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W);d.defaultProps={bgcolor:l.a.BASE};var p=r.b.span.withConfig({displayName:"card__Title",componentId:"sc-1vdm5bs-1"})(['font-family:"Noto Sans JP";color:',";font-size:1.4rem;letter-spacing:0.5rem;margin-right:-0.5rem;font-weight:500;line-height:1.7rem;text-align:center;"],(function(e){return m(e.theme,e.color)}));p.defaultProps={color:l.a.BLACK};var u=r.b.div.withConfig({displayName:"card__Bar",componentId:"sc-1vdm5bs-2"})(["width:40px;height:2px;background-color:",";margin:20px 0;"],(function(e){return m(e.theme,e.color)}));u.defaultProps={color:l.a.BLACK};var h=r.b.div.withConfig({displayName:"card__SeeMoreWrapper",componentId:"sc-1vdm5bs-3"})(["margin-top:10px;margin-left:auto;"]),f=Object(r.b)(i.Link).withConfig({displayName:"card__LinkT",componentId:"sc-1vdm5bs-4"})(["text-decoration:none;color:",";"],l.a.PRIMARY),b=r.b.span.withConfig({displayName:"card__SubTitle",componentId:"sc-1vdm5bs-5"})(["color:",';margin-top:20px;margin-bottom:20px;font-family:"Roboto, Noto Sans JP";letter-spacing:0.3rem;'],(function(e){return m(e.theme,e.color)}));b.defaultProps={color:l.a.BLACK};t.a=function(e){return n.a.createElement(d,{bgcolor:e.bgcolor,theme:e.theme},n.a.createElement(p,{style:{display:e.titleShow?"none":""},color:e.textcolor,theme:e.theme},e.title),n.a.createElement(b,{style:{display:e.subTitle?"":"none"}},"- ",e.subTitle," -"),n.a.createElement(u,{style:{display:e.barShow?"none":""},color:e.textcolor,theme:e.theme}),e.children,n.a.createElement(h,{style:{display:e.seemoreShow?"none":""}},n.a.createElement(f,{to:e.linkto},n.a.createElement(s.a,null,"SEE MORE"))))}}}]);
//# sourceMappingURL=component---src-templates-basicpost-jsx-ddab05355d74e43bc0a8.js.map