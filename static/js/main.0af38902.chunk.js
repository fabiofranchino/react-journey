(this["webpackJsonpreact-journey"]=this["webpackJsonpreact-journey"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(12),i=n.n(s),r=(n(18),n(2));n(19),n(20);var l=function(e){return Object(c.jsxs)("div",{"data-v-8edab446":"",children:[Object(c.jsx)("h1",{"data-v-8edab446":"",children:"Scoped CSS"}),Object(c.jsx)("p",{"data-v-8edab446":"",children:"Thanks to craco-plugin-scoped-css"})]})},u=n(5),d=n(6),j=n(7),b=n(9),h=n(8),f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).ref=o.a.createRef(),c.state={counter:0},c.handleClickMe=c.handleClickMe.bind(Object(j.a)(c)),c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),console.log(this.ref)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"handleClickMe",value:function(){this.setState((function(e,t){return{counter:e.counter+1}}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"frame",children:[Object(c.jsxs)("h1",{ref:this.ref,children:["Class Component ",this.state.counter]}),Object(c.jsx)("p",{children:"With its internal state and component cycle events"}),Object(c.jsx)("button",{onClick:this.handleClickMe,children:"Click Me"})]})}}]),n}(o.a.Component);var O=function(e){var t=Object(a.useState)(0),n=Object(r.a)(t,2),o=n[0],s=n[1],i=Object(a.useRef)();return Object(a.useEffect)((function(){return console.log("func mounted"),console.log(i),function(){console.log("func unmounted")}}),[]),Object(c.jsxs)("div",{className:"frame",children:[Object(c.jsxs)("h1",{ref:i,children:["Functional Component ",o]}),Object(c.jsx)("p",{children:"With its internal state and component cycle events"}),Object(c.jsx)("button",{onClick:function(){s(o+1)},children:"Click Me"})]})};n(21),n(22);var m=function(e){return Object(c.jsxs)("div",{className:e.className,"data-v-80d3a2fb":"",children:[Object(c.jsx)("h1",{"data-v-80d3a2fb":"",children:"Component Communication"}),Object(c.jsx)("p",{"data-v-80d3a2fb":"",children:"There is a state in the App that is affected by Left component and that effect is shown in Right component"})]})};n(23);var v=function(e){return Object(c.jsxs)("div",{className:e.className,"data-v-7db8f223":"",children:[Object(c.jsx)("h1",{"data-v-7db8f223":"",children:"Left"}),Object(c.jsx)("button",{onClick:e.handleOnClick,"data-v-7db8f223":"",children:"Click"})]})};n(24);var p=function(e){return Object(c.jsxs)("h1",{className:e.className,"data-v-aa98b6bb":"",children:["Right ",e.count]})};var x=function(e){var t=Object(a.useState)(0),n=Object(r.a)(t,2),o=n[0],s=n[1];return Object(c.jsxs)("div",{className:"frame grid","data-v-a66ed953":"",children:[Object(c.jsx)(m,{className:"top","data-v-a66ed953":""}),Object(c.jsx)(v,{className:"left",handleOnClick:function(){s(o+1)},"data-v-a66ed953":""}),Object(c.jsx)(p,{className:"right",count:o,"data-v-a66ed953":""})]})};function C(e,t){var n=Object(a.useState)("Func Comp Waiting"),o=Object(r.a)(n,2),s=o[0],i=o[1];return Object(a.useImperativeHandle)(t,(function(){return{setFromOutside:function(e){i(e)}}}),[]),Object(c.jsx)("h1",{children:s})}var k=Object(a.forwardRef)(C),g=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={message:"Class Comp Waiting"},c}return Object(d.a)(n,[{key:"setFromOutside",value:function(e){this.setState({message:e})}},{key:"render",value:function(){return Object(c.jsx)("h1",{children:this.state.message})}}]),n}(o.a.Component);var y=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(c.jsxs)("div",{className:"frame",children:[Object(c.jsx)("h1",{children:"Call a Child Component Method from Parent"}),Object(c.jsx)("button",{onClick:function(e){t.current.setFromOutside("HELLO from Parent"),n.current.setFromOutside("HELLO from Parent")},children:"Show Me!"}),Object(c.jsx)(k,{ref:t}),Object(c.jsx)(g,{ref:n})]})},M=n(10);var S=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(""),o=Object(r.a)(n,2),s=o[0],i=o[1],l=function(n){""!==s&&(i(""),t.current.focus(),e.handleAdd(s))};return Object(a.useEffect)((function(){t.current.focus()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{onKeyUp:function(e){13===e.keyCode&&l()},ref:t,value:s,type:"text",onChange:function(e){i(e.target.value)}}),Object(c.jsx)("button",{onClick:l,children:"Add"})]})};var N=function(e){return Object(c.jsxs)("li",{children:[e.label,Object(c.jsx)("button",{onClick:e.handleDelete,children:"X"}),e.isFirst?"":Object(c.jsx)("button",{onClick:e.handleMoveUp,children:"\u2191"}),e.isLast?"":Object(c.jsx)("button",{onClick:e.handleMoveDown,children:"\u2193"})]})};var F=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:e.items.map((function(t,n){return Object(c.jsx)(N,{label:t.title,isFirst:0===n,isLast:n===e.items.length-1,handleDelete:function(){return e.handleDelete(n)},handleMoveUp:function(){return e.handleMove(n,"up")},handleMoveDown:function(){return e.handleMove(n,"down")}},t.title)}))})})};var D=function(e){var t=Object(a.useState)([{title:"Buy the Milk"}]),n=Object(r.a)(t,2),o=n[0],s=n[1];return Object(c.jsxs)("div",{className:"frame",children:[Object(c.jsx)("h1",{children:"A Bare-Bones TO-DO list App"}),Object(c.jsx)("p",{children:"There are 3 components, Form, List and Item. The main wrapper handles the state"}),Object(c.jsx)("p",{children:"Functions are: add, remove, move items, check if the value is not empty, self focus, keyboard shortcut"}),Object(c.jsx)(S,{handleAdd:function(e){o.push({title:e}),s(Object(M.a)(o))}}),Object(c.jsx)(F,{handleDelete:function(e){o.splice(e,1),s(Object(M.a)(o))},handleMove:function(e,t){var n=0;"up"===t&&(n=e-1),"down"===t&&(n=e+1),o.splice(n,0,o.splice(e,1)[0]),s(Object(M.a)(o))},items:o})]})};var L=function(){var e=Object(a.useState)(5),t=Object(r.a)(e,2),n=t[0],o=t[1],s=[{label:"Scoped CSS",comp:Object(c.jsx)(l,{})},{label:"A Class Component",comp:Object(c.jsx)(f,{})},{label:"A Functional Component",comp:Object(c.jsx)(O,{})},{label:"Component communication basic",comp:Object(c.jsx)(x,{})},{label:"Call Child method from Parent",comp:Object(c.jsx)(y,{})},{label:"Simple TO-DO List",comp:Object(c.jsx)(D,{})}];return Object(c.jsxs)("div",{className:"app",children:[s[n].comp,Object(c.jsx)("div",{className:"selector",children:Object(c.jsx)("select",{value:n,onChange:function(e){var t=e.target.value;o(t),document.title=s[t].label},children:s.map((function(e,t){return Object(c.jsx)("option",{value:t,children:e.label},e.label)}))})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.0af38902.chunk.js.map