(this["webpackJsonpfm-filter-list"]=this["webpackJsonpfm-filter-list"]||[]).push([[0],{12:function(n){n.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},13:function(n,e,t){n.exports=t.p+"static/media/bg-header-mobile.6b5ff5a0.svg"},14:function(n,e,t){n.exports=t.p+"static/media/bg-header-desktop.6e2f7196.svg"},18:function(n,e,t){n.exports=t(26)},23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(11),i=t.n(o),l=t(3),c=t(8),u=t(12),s=Object(a.createContext)(),p=function(){return Object(a.useContext)(s)};function d(n){var e=n.children,t=Object(a.useState)(u),o=Object(c.a)(t,2),i=o[0],p=(o[1],Object(a.useState)([])),d=Object(c.a)(p,2),f=d[0],g=d[1],m=i.filter((function(n){var e=n.role,t=n.level,a=n.tools,r=n.languages;if(0===f.length)return!0;var o=[e,t];return a&&o.push.apply(o,Object(l.a)(a)),r&&o.push.apply(o,Object(l.a)(r)),f.every((function(n){return o.includes(n)}))}));return r.a.createElement(s.Provider,{value:{addFilter:function(n){f.includes(n)||g([].concat(Object(l.a)(f),[n]))},removeFilter:function(n){g(f.filter((function(e){return e!==n})))},clearFilters:function(){g([])},filters:f,filteredJobs:m}},e)}t(23);var f=t(1),g=t(2),m=t(13),v=t.n(m),x=t(14),b=t.n(x);function h(){var n=Object(f.a)(["\n    background-color: hsl(180, 29%, 50%);\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 155px;\n    margin: 0;\n    padding: 0;\n\n    @media (min-width: 600px) {\n      background-image: url(",");\n    }\n"]);return h=function(){return n},n}var y=g.a.header(h(),v.a,b.a);var w=function(){return r.a.createElement(y,null)};function E(){var n=Object(f.a)(["\n    background-color: hsl(180, 14%, 20%); \n    border-radius: 25px;\n    color: #fff;\n    font-size: 10px;\n    font-weight: 700;\n    margin: 0 5px;\n    padding: 5px 10px 2px 10px;\n    text-transform: uppercase;\n"]);return E=function(){return n},n}function O(){var n=Object(f.a)(["\n    background-color: hsl(180, 29%, 50%);  \n    border-radius: 25px;\n    color: #fff;\n    font-size: 10px;\n    font-weight: 700;\n    margin: 0 5px;\n    padding: 5px 10px 2px 10px;\n    text-transform: uppercase;\n"]);return O=function(){return n},n}function j(){var n=Object(f.a)(["\n    align-items: center;\n    display: flex;\n    color: hsl(180, 8%, 52%);\n    font-size: 12px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n"]);return j=function(){return n},n}var k=g.a.ul(j()),S=g.a.li(O()),F=g.a.li(E());var A=function(n){return r.a.createElement(k,null,n.featured?r.a.createElement(S,null,"New"):"",n.featured?r.a.createElement(F,null,"Featured"):"")};function J(){var n=Object(f.a)(["\n    color: hsl(180, 14%, 20%);\n    font-size: 15px;\n"]);return J=function(){return n},n}var z=g.a.h3(J());var C=function(n){return r.a.createElement(z,null,n.position)};function T(){var n=Object(f.a)(["\n    margin: 0 10px;\n    padding: 0 15px;\n"]);return T=function(){return n},n}function D(){var n=Object(f.a)(["\n    display: flex;\n    color: hsl(180, 8%, 52%);\n    font-size: 12px;\n    margin: 0;\n    padding: 0;\n\n    li:first-of-type {\n        list-style-type: none;\n        margin-left: 0;\n        padding-left: 0;\n    }\n"]);return D=function(){return n},n}var M=g.a.ul(D()),R=g.a.li(T());var P=function(n){return r.a.createElement(M,null,r.a.createElement(R,null,n.postedAt),r.a.createElement(R,null,n.position),r.a.createElement(R,null,n.location))};function W(){var n=Object(f.a)(["\n    @media (max-width: 767px) {\n        margin-top: -50px;\n        margin-bottom: 15px;\n        max-width: 50px;\n\n    }\n"]);return W=function(){return n},n}function U(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    \n    @media (min-width: 768px) {\n        margin-left: 25px;\n    }\n"]);return U=function(){return n},n}function B(){var n=Object(f.a)(["\n    color: hsl(180, 29%, 50%);\n    font-size: 12px;\n    margin: 0;\n"]);return B=function(){return n},n}function H(){var n=Object(f.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n"]);return H=function(){return n},n}function I(){var n=Object(f.a)(["\n    align-items: center;\n    display: flex;\n\n    @media (max-width: 767px) {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n"]);return I=function(){return n},n}var L=g.a.div(I()),N=g.a.div(H()),K=g.a.h2(B()),V=g.a.div(U()),X=g.a.img(W());var $=function(n){return r.a.createElement(L,null,r.a.createElement(X,{src:n.logo,alt:n.company}),r.a.createElement(V,null,r.a.createElement(N,null,r.a.createElement(K,null,n.company),r.a.createElement(A,{new:n.new,featured:n.featured})),r.a.createElement(C,{position:n.position}),r.a.createElement(P,{location:n.location,position:n.contract,postedAt:n.postedAt})))};function q(){var n=Object(f.a)(["\n    background-color: hsl(180, 31%, 95%);  \n    border-radius: 5px;\n    color: hsl(180, 29%, 50%);\n    font-size: 12px;\n    font-weight: 700;\n    margin: 10px 10px 0 0;\n    padding: 10px;\n\n    :hover {\n        background-color: hsl(180, 29%, 50%);\n        color: #fff; \n        cursor: pointer;\n    }\n"]);return q=function(){return n},n}function G(){var n=Object(f.a)(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 12px;\n    list-style-type: none;\n    margin: 20px 0;\n    padding: 0;\n"]);return G=function(){return n},n}var Q=g.a.ul(G()),Y=g.a.li(q());var Z=function(n){var e=n.tags,t=p().addFilter;return r.a.createElement(Q,null,e.map((function(n,e){return r.a.createElement(Y,{key:e,onClick:function(){return t(n)}},n)})))};function _(){var n=Object(f.a)(["\n"]);return _=function(){return n},n}function nn(){var n=Object(f.a)(["\n    color: transparent;\n    border-bottom: 2px solid #eee;\n    padding-top: 20px;\n\n    @media (min-width: 768px) {\n      display: none;\n    }\n\n"]);return nn=function(){return n},n}function en(){var n=Object(f.a)(["\n    display: flex; \n    align-items: center;\n"]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0px 10px 24px -3px hsla(180, 14%, 20%, 0.1);\n    padding: 25px; \n    margin: 50px 10px;\n\n\n    @media (min-width: 768px) {\n      align-items: center; \n      display: flex;\n      justify-content: space-between;\n      margin: 2.5% auto;\n      max-width: 1000px;\n    }\n  "]);return tn=function(){return n},n}var an=g.a.div(tn()),rn=g.a.div(en()),on=g.a.hr(nn()),ln=g.a.div(_());var cn=function(n){var e=[n.role,n.level].concat(Object(l.a)(n.languages),Object(l.a)(n.tools));return r.a.createElement(an,null,r.a.createElement(rn,null,r.a.createElement(ln,null,r.a.createElement($,{logo:n.logo,company:n.company,contract:n.contract,new:n.new,featured:n.featured,position:n.position,location:n.location,postedAt:n.postedAt}))),r.a.createElement(on,null),r.a.createElement(Z,{tags:e}))};function un(){var n=Object(f.a)(["\n    color: hsl(180, 29%, 50%);\n    font-size: 12px;\n    font-weight: 700;\n\n    :hover {\n        cursor: pointer;\n        text-decoration: underline;\n    }\n"]);return un=function(){return n},n}function sn(){var n=Object(f.a)(["\n    background-color: hsl(180, 29%, 50%);  \n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    color: #fff;\n    margin-left: 10px;\n    padding: 10px 10px 10px 5px;\n\n    :hover {\n        background-color: hsl(180, 14%, 20%); \n        cursor: pointer;\n    }\n"]);return sn=function(){return n},n}function pn(){var n=Object(f.a)(["\n    background-color: hsl(180, 31%, 95%);  \n    border-radius: 5px;\n    color: hsl(180, 29%, 50%);\n    font-size: 12px;\n    font-weight: 700;\n    margin: 5px 10px 0 0;\n    padding: 10px 0 10px 10px;\n"]);return pn=function(){return n},n}function dn(){var n=Object(f.a)(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 12px;\n    list-style-type: none;\n    margin: 10px 0;\n    padding: 0;\n"]);return dn=function(){return n},n}function fn(){var n=Object(f.a)(["\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0px 10px 24px -3px hsla(180, 14%, 20%, 0.1);\n    padding: 5px 25px; \n    margin: -30px auto 0 auto;\n    max-width: 1000px;\n    align-items: center; \n    display: flex;\n    justify-content: space-between;\n  "]);return fn=function(){return n},n}var gn=g.a.div(fn()),mn=g.a.ul(dn()),vn=g.a.li(pn()),xn=g.a.span(sn()),bn=g.a.a(un());var hn=function(n){var e=p(),t=e.filters,a=e.removeFilter,o=e.clearFilters;return r.a.createElement(gn,null,r.a.createElement(mn,null,t.map((function(n,e){return r.a.createElement(vn,{key:e},n,r.a.createElement(xn,{"aria-label":"Close",onClick:function(){return a(n)}}," X"))}))),r.a.createElement(bn,{onClick:function(){return o()}},"Clear"))};function yn(){var n=Object(f.a)(["\n    @media (min-width: 768px) {\n        padding: 0 2.5%;\n    }\n"]);return yn=function(){return n},n}var wn=g.a.main(yn());var En=function(){var n=p(),e=n.filteredJobs,t=n.filters;return r.a.createElement(wn,null,t.length>=1?r.a.createElement(hn,null):"",e.map((function(n,e){return r.a.createElement(cn,{key:n.id,company:n.company,new:n.new,featured:n.featured,logo:n.logo,contract:n.contract,position:n.position,postedAt:n.postedAt,location:n.location,role:n.role,level:n.level,tools:n.tools,languages:n.languages})})))};var On=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(En,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(On,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.34a14fda.chunk.js.map