(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(11),n(5)),s=n(3),i=n.n(s),u=(n(12),n(4)),m=n.n(u);var p=function(){var e=Object(a.useState)({name:"React from FB",price:10,productBy:"FaceBook"}),t=Object(l.a)(e,2),n=t[0];return t[1],o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement("a",{className:"App-link"},"Learn React"),o.a.createElement(m.a,{stripeKey:"pk_test_wHFmfxp1reMBWLuNyfVShv4600quGVyGyJ",token:function(e){var t={token:e,product:n};return fetch("http://localhost:8282/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){console.log("RESPONSE ",e);var t=e.status;console.log("STATUS ",t)})).catch((function(e){return console.log(e)}))},name:"BuyReact",amount:100*n.price},o.a.createElement("button",{className:"btn-large pink"},"Buy React for $",n.price))),o.a.createElement("section",null,o.a.createElement("p",null,"For Testing purpose use:",o.a.createElement("br",null),"Card number: ",o.a.createElement("b",null,"4242 4242 4242 4242"),o.a.createElement("br",null),"Date: Any future date \xa0 CVV: Any 3 digits",o.a.createElement("br",null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d9111056.chunk.js.map