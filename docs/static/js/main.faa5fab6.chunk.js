(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),u=n(2),s=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(u.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){if(0===i.length)return t;var e=i;return o(""),[e].concat(Object(s.a)(t))}))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=function(t){var e=t.item;return Object(r.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(r.jsx)("img",{src:e.url,alt:e.title}),Object(r.jsx)("p",{children:e.title})]})},d=n(6),l=n.n(d),p=n(8),f=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=slinwMM6g9I7khDhVFqOL5OOeBrDCENp&q=".concat(encodeURI(e),"&limit=10;"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){return setTimeout((function(){a({data:t,loading:!1})}))}))}),[]),r}(e);return console.log(n),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),n.loading&&Object(r.jsx)("p",{children:"Cargando ..."}),Object(r.jsx)("div",{className:"card-grid",children:n.data.map((function(t){return Object(r.jsx)(j,{item:t},t.id)}))})]})},O=function(){var t=Object(c.useState)(["DragonBall"]),e=Object(u.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"GiftExpertApp"}),Object(r.jsx)(o,{setCategories:a}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(b,{category:t},t)}))})]})};n(16);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.faa5fab6.chunk.js.map