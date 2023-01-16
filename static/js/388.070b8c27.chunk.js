"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[388],{9055:function(n,e,t){var r=t(6444),o=t(407),i=(0,r.ZP)("div")(o.$_,o.Dh,o.bK,o.GQ,o.eC,o.Oq,o.Cg,o.FK);e.Z=i},4388:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,c,a,s,l,u=t(7689),d=t(9439),p=t(2791),v=t(2690),f=t(9055),h=t(168),x=t(6444),m=t(1087),g=(0,x.ZP)(m.rU)(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: black;\n  :hover {\n    color: blue;\n  }\n"]))),Z=x.ZP.h1(o||(o=(0,h.Z)(["\n  margin-bottom: 10px;\n  margin-top: 0;\n"]))),j=x.ZP.p(i||(i=(0,h.Z)(["\n  margin-bottom: 20px;\n  margin-top: 0;\n"]))),w=x.ZP.h2(c||(c=(0,h.Z)(["\n  border-radius: 2px;\n  margin-bottom: 10px;\n"]))),b=x.ZP.li(a||(a=(0,h.Z)(["\n  margin-top: 10px;\n"]))),y=(0,x.ZP)(m.OL)(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 600;\n  :hover,\n  :focus-visible {\n    color: blue;\n  }\n"]))),k=x.ZP.ul(l||(l=(0,h.Z)(["\n  list-style: none;\n  //padding-left: 20px;\n  padding: 0;\n  text-decoration: none;\n"]))),_=t(6992),I=t(872),P=t(184),C=function(n){var e,t,r,o,i=n.movieId,c=(0,u.TH)(),a=(0,p.useState)(null),s=(0,d.Z)(a,2),l=s[0],h=s[1];return(0,p.useEffect)((function(){(0,v.HI)(i).then((function(n){return h(n)}))}),[i]),l?(0,P.jsxs)(f.Z,{as:"section",p:20,children:[(0,P.jsx)(f.Z,{display:"flex",children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f.Z,{display:"flex",flexDirection:"column",alignItems:"flex-start",children:[(0,P.jsxs)(g,{to:null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:[(0,P.jsx)(_.gGS,{})," \xa0Back"]}),null!==(null===l||void 0===l?void 0:l.poster_path)?(0,P.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(null===l||void 0===l?void 0:l.poster_path),alt:null===l||void 0===l?void 0:l.title,width:250}):(0,P.jsx)("img",{src:I,alt:"",width:250})]}),(0,P.jsxs)(f.Z,{display:"flex",flexDirection:"column",alignItems:"flex-start",pl:20,pt:30,width:600,children:[(0,P.jsx)(Z,{children:null===l||void 0===l?void 0:l.title}),(0,P.jsxs)(j,{children:["User score: ",Math.floor(10*(null===l||void 0===l?void 0:l.vote_average))," %"]}),(0,P.jsx)(w,{children:"Overview"}),(0,P.jsx)(j,{children:null===l||void 0===l?void 0:l.overview}),(0,P.jsx)(w,{children:"Genres"}),(0,P.jsx)(j,{children:null===l||void 0===l?void 0:l.genres.map((function(n){var e=n.name,t=n.id;return(0,P.jsxs)("span",{children:[e," \xa0"]},t)}))})]})]})}),(0,P.jsxs)(f.Z,{pt:20,children:[(0,P.jsx)(j,{children:"Additional information"}),(0,P.jsxs)(k,{children:[(0,P.jsx)(b,{children:(0,P.jsx)(y,{to:"cast",state:null!==(r=null===c||void 0===c?void 0:c.state)&&void 0!==r?r:"/",children:"Cast"})}),(0,P.jsx)(b,{children:(0,P.jsx)(y,{to:"reviews",state:null!==(o=null===c||void 0===c?void 0:c.state)&&void 0!==o?o:"/",children:"Reviews"})})]})]}),(0,P.jsx)(u.j3,{})]}):null},O=function(){var n=(0,u.UO)().movieId;return console.log("first",n),(0,P.jsx)("main",{children:(0,P.jsx)(C,{movieId:n})})}},2690:function(n,e,t){t.d(e,{HI:function(){return d},IQ:function(){return h},Jh:function(){return m},wr:function(){return l},z1:function(){return v}});var r=t(5861),o=t(7757),i=t.n(o),c=t(3263),a="cda37336b232ef132cf60fbdeefcf10d",s="https://api.themoviedb.org/3/";function l(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"search/movie?api_key=").concat(a,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},872:function(n,e,t){n.exports=t.p+"static/media/no-poster.cbd9003e4ddc1ed32d4e.png"}}]);
//# sourceMappingURL=388.070b8c27.chunk.js.map