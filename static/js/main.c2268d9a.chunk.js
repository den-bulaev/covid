(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),i=(n(9),n(2)),o="https://api.covid19api.com/",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return fetch(o+e,t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e}))},l=(n(10),n(0)),j=function(e){var t=e.query,n=Object(c.useState)([]),s=Object(i.a)(n,2),r=s[0],a=s[1],o=0;Object(c.useEffect)((function(){u("summary",{method:"GET"}).then((function(e){return a(e.Countries)}))}),[]);return Object(l.jsxs)("ul",{className:"countries-list",children:[Object(l.jsxs)("li",{className:"countries-list-item",children:[Object(l.jsx)("span",{className:"countries-number",children:"\u2116"}),Object(l.jsx)("span",{className:"countries-info",children:"Country"}),Object(l.jsx)("span",{className:"countries-info",children:"Total Confirmed"})]}),(""===t?r:r.filter((function(e){return e.Country.toLowerCase().includes(t.toLowerCase())}))).map((function(e){var t=e.ID,n=e.Country,c=e.TotalConfirmed;return Object(l.jsxs)("li",{className:"countries-list-item",children:[Object(l.jsx)("span",{className:"countries-number",children:o+=1}),Object(l.jsx)("span",{className:"countries-info",children:n}),Object(l.jsx)("span",{className:"countries-info",children:c})]},t)}))]})},h=s.a.memo(j),d=n.p+"static/media/logo.588ddb26.png";n(12);var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("img",{src:d,alt:"logo"}),Object(l.jsx)("h1",{className:"header-text",children:"STATISTIC"}),Object(l.jsx)("input",{type:"search",placeholder:"Search...",className:"search-field",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(l.jsx)(h,{query:n})]})};a.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.c2268d9a.chunk.js.map