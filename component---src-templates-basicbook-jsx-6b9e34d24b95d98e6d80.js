(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2sLu":function(e,t,o){"use strict";o.r(t),o.d(t,"pageQuery",(function(){return w}));var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("TJpk"),l=o.n(i),c=o("xmTc"),m=o("tC44"),s=(o("L12J"),o("qx5a")),d=o("Q4RR"),p=o("BQrF"),u=r.b.div.withConfig({displayName:"basicbook__Content",componentId:"t1ruen-0"})(["margin-right:auto;box-sizing:border-box;padding:20px;color:",';font-family:"Noto Sans JP";& h1{font-size:1.4rem;line-height:1.7rem;margin:30px 0 20px 0;padding-left:15px;box-sizing:border-box;font-weight:600;position:relative;&::before{content:"";width:5px;height:100%;background-color:',";position:absolute;left:0;top:0.05rem;}}& p{font-size:0.9rem;line-height:1.5rem;}"],m.a.BLACK,m.a.PRIMARY),b=r.b.img.withConfig({displayName:"basicbook__MainImg",componentId:"t1ruen-1"})(["width:300px;"]),f=r.b.div.withConfig({displayName:"basicbook__Container",componentId:"t1ruen-2"})(["display:flex;flex-direction:column;align-items:center;"]),h=r.b.span.withConfig({displayName:"basicbook__BookName",componentId:"t1ruen-3"})(["color:",';font-family:"Noto Sans JP";font-weight:500;font-size:2rem;letter-spacing:0.5rem;margin-right:-0.5rem;line-height:2.5rem;'],m.a.BLACK),g=Object(r.b)("div").withConfig({displayName:"basicbook___StyledDiv",componentId:"t1ruen-4"})(["margin:20px 0;"]),x=Object(r.b)("a").withConfig({displayName:"basicbook___StyledA",componentId:"t1ruen-5"})(["text-decoration:none;margin:10px 0;"]);t.default=function(e){var t=e.data,o=(e.location,t.markdownRemark),a=o.frontmatter,r=o.html,i=a.bookimg.childImageSharp.fluid.src;return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement("title",null,a.title," | ",c.a.siteName),n.a.createElement("meta",{property:"og:title",content:a.title}),n.a.createElement("meta",{property:"og:image",content:i}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.a.createElement(s.a,{title:a.title,theme:"primary",seemoreShow:"false",barShow:"false"}),n.a.createElement(s.a,{titleShow:"false",barShow:"false",seemoreShow:"false"},n.a.createElement(f,null,n.a.createElement(b,{src:i}),n.a.createElement(g,null,n.a.createElement(d.a,null,a.badge)),n.a.createElement(h,null,a.title),n.a.createElement(x,{href:a.booth},n.a.createElement(p.a,{textcolor:m.a.BOOTH},"BOOTHで購入")),n.a.createElement(u,{dangerouslySetInnerHTML:{__html:r}}))))};var w="3755510442"},BQrF:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("ZMKu"),l=o("tC44"),c=o("0lbV"),m=Object(r.b)(i.b.div).withConfig({displayName:"button__Wrapper",componentId:"sc-1yykufd-0"})(["width:auto;box-sizing:border-box;padding:10px 20px;margin:5px;background-color:",";box-shadow:"," ",","," ",";border-radius:10px;text-align:center;transition-duration:150ms;&:hover{box-shadow:"," ",","," ",";transform:scale(1.05);transition-duration:150ms;}"],l.a.BASE,c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W,c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W);m.defaultProps={textcolor:l.a.PRIMARY};var s=r.b.span.withConfig({displayName:"button__Content",componentId:"sc-1yykufd-1"})(['text-decoration:none;font-size:0.9rem;font-family:"Roboto","Noto Sans JP";color:',";font-weight:300;white-space:nowrap;"],(function(e){return function(e,t){switch(e){case"primary":case"reverse":return l.a.BASE;default:return t}}(e.theme,e.textcolor)}));s.defaultProps={textcolor:l.a.PRIMARY};t.a=function(e){return n.a.createElement(m,{whileHover:{scale:1.05},whileTap:{scale:.95}},n.a.createElement(s,{textcolor:e.textcolor,theme:e.theme},e.children))}},Q4RR:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("tC44"),l=r.b.div.withConfig({displayName:"badge__Wrapper",componentId:"sc-106jppv-0"})(["box-sizing:border-box;color:",";background-color:",';padding:7px 20px;font-family:"Noto Sans JP";border-radius:5px;font-size:0.8rem;font-weight:500;display:inline-block;'],(function(e){return e.textcolor}),(function(e){return e.color}));l.defaultProps={textcolor:i.a.BASE,color:i.a.PRIMARY};t.a=function(e){return n.a.createElement(l,{color:e.color,textcolor:e.textcolor},e.children)}},qx5a:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("Wbzz"),l=o("tC44"),c=o("0lbV"),m=o("BQrF"),s=function(e,t){switch(e){case"primary":case"reverse":return l.a.BASE;default:return t}},d=r.b.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1vdm5bs-0"})(["border-radius:10px;background:",";box-shadow:"," ",","," ",";width:90vw;max-width:900px;margin:40px 0px;display:flex;padding:20px;box-sizing:border-box;flex-direction:column;align-items:center;"],(function(e){return function(e,t){switch(e){case"primary":return l.a.PRIMARY;case"reverse":return l.a.BLACK;default:return t}}(e.theme,e.bgcolor)}),c.a.SHADOW.Dark,l.a.SHADOW_B,c.a.SHADOW.Light,l.a.SHADOW_W);d.defaultProps={bgcolor:l.a.BASE};var p=r.b.span.withConfig({displayName:"card__Title",componentId:"sc-1vdm5bs-1"})(['font-family:"Noto Sans JP";color:',";font-size:1.4rem;letter-spacing:0.5rem;margin-right:-0.5rem;font-weight:500;line-height:1.7rem;text-align:center;"],(function(e){return s(e.theme,e.color)}));p.defaultProps={color:l.a.BLACK};var u=r.b.div.withConfig({displayName:"card__Bar",componentId:"sc-1vdm5bs-2"})(["width:40px;height:2px;background-color:",";margin:20px 0;"],(function(e){return s(e.theme,e.color)}));u.defaultProps={color:l.a.BLACK};var b=r.b.div.withConfig({displayName:"card__SeeMoreWrapper",componentId:"sc-1vdm5bs-3"})(["margin-top:10px;margin-left:auto;"]),f=Object(r.b)(i.a).withConfig({displayName:"card__LinkT",componentId:"sc-1vdm5bs-4"})(["text-decoration:none;color:",";"],l.a.PRIMARY),h=r.b.span.withConfig({displayName:"card__SubTitle",componentId:"sc-1vdm5bs-5"})(["color:",';margin-top:20px;margin-bottom:20px;font-family:"Roboto, Noto Sans JP";letter-spacing:0.3rem;'],(function(e){return s(e.theme,e.color)}));h.defaultProps={color:l.a.BLACK};t.a=function(e){return n.a.createElement(d,{bgcolor:e.bgcolor,theme:e.theme},n.a.createElement(p,{style:{display:e.titleShow?"none":""},color:e.textcolor,theme:e.theme},e.title),n.a.createElement(h,{style:{display:e.subTitle?"":"none"}},"- ",e.subTitle," -"),n.a.createElement(u,{style:{display:e.barShow?"none":""},color:e.textcolor,theme:e.theme}),e.children,n.a.createElement(b,{style:{display:e.seemoreShow?"none":""}},n.a.createElement(f,{to:e.linkto},n.a.createElement(m.a,null,"SEE MORE"))))}}}]);
//# sourceMappingURL=component---src-templates-basicbook-jsx-6b9e34d24b95d98e6d80.js.map