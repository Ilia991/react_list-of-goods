(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=s(2),h=s.n(b),d=(s(14),s(15),s(1)),p=s.n(d),j=s(0),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var f=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={sortType:0,isReversed:!1},t.sortAlpabet=function(){t.setState({sortType:1})},t.sortLength=function(){t.setState({sortType:2})},t.sortReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetState=function(){t.setState({sortType:0,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,n=function(t,e){var s=e.sortType,n=e.isReversed,r=Object(u.a)(t);return r.sort((function(t,e){switch(s){case 1:return t.localeCompare(e);case 2:return t.length-e.length;default:return 0}})),n&&r.reverse(),console.log(s,n),r}(v,{sortType:e,isReversed:s});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",onClick:this.sortAlpabet,className:p()("button","is-info",{"is-light":1!==e}),children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":2!==e}),onClick:this.sortLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!1===s}),onClick:this.sortReverse,children:"Reverse"}),(e||s)&&Object(j.jsx)("button",{type:"button",className:p()("button","is-danger","is-light"),onClick:this.resetState,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:n.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},null)}))})})]})}}]),s}(h.a.Component);o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fd9effdc.chunk.js.map