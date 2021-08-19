(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{17:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(27),i=c.n(n),r=(c(17),c(10)),d=c(0);var l=function(e){var t=Object(s.useState)(0),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(d.jsxs)("div",{className:"container m-5 d-flex justify-content-center align-items-center shadow-lg p-3  bg-white rounded",children:[Object(d.jsx)("div",{className:"circle d-flex justify-content-center align-items-center bg-dark m-3 text-white",children:Object(d.jsx)("h1",{className:"display-1 ",children:a})}),Object(d.jsx)("button",{className:"btn btn-dark btn-lg",onClick:function(){n(a+1)},children:"Update Count"})]})},o=c(12),j=c.n(o);var h=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){n(e.data)}),(function(e){alert("error during fetching data")}))}),[]),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h3",{children:"User Details"}),a.length>0?Object(d.jsxs)("table",{className:"table table-hover mt-5",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"table-dark",children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"NAME"}),Object(d.jsx)("th",{children:"USERNAME"}),Object(d.jsx)("th",{children:"EMAIL"}),Object(d.jsx)("th",{children:"CITY"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.address.city})]})}))})]}):Object(d.jsx)("h2",{children:"Does not have data"})]})})})},b=(c.p,c.p,c.p,c.p+"static/media/html.a8c6eabc.png"),m=c.p+"static/media/Css.26dd79bd.png",x=c.p+"static/media/Js.7fce8529.png";var u=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container-fluid row",children:[Object(d.jsx)("div",{className:"container mt-5 col d-flex justify-content-center align-items-center",children:Object(d.jsxs)("div",{className:"card cards shadow-lg p-3 mb-5 bg-white rounded",children:[Object(d.jsx)("img",{src:b,class:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h5",{children:"HTML"})}),Object(d.jsx)("div",{className:"card-text mb-2",children:"Cascading Style Sheets is a style sheet language."}),Object(d.jsx)("a",{href:"#",class:"btn btn-primary",children:"Go somewhere"})]})]})}),Object(d.jsx)("div",{className:"container col mt-5 d-flex justify-content-center align-items-center",children:Object(d.jsx)("h5",{children:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items."})})]}),Object(d.jsxs)("div",{className:"container-fluid row",children:[Object(d.jsx)("div",{className:"container col mt-5 d-flex justify-content-center align-items-center",children:Object(d.jsx)("h5",{children:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2] CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages."})}),Object(d.jsx)("div",{className:"container mt-5 col d-flex justify-content-center align-items-center",children:Object(d.jsxs)("div",{className:"card cards shadow-lg p-3 mb-5 bg-white rounded",children:[Object(d.jsx)("img",{src:m,class:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h5",{children:"CSS"})}),Object(d.jsx)("div",{className:"card-text mb-2",children:"The HyperText Markup Language, or HTML is the standard markup language."}),Object(d.jsx)("a",{href:"#",class:"btn btn-primary",children:"Go somewhere"})]})]})})]}),Object(d.jsxs)("div",{className:"container-fluid row",children:[Object(d.jsx)("div",{className:"container mt-5 col d-flex justify-content-center align-items-center",children:Object(d.jsxs)("div",{className:"card cards shadow-lg p-3 mb-5 bg-white rounded",children:[Object(d.jsx)("img",{src:x,class:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h5",{children:"JAVASCRIPT"})}),Object(d.jsx)("div",{className:"card-text mb-2",children:"JavaScript, often abbreviated as JS, is a programming language."}),Object(d.jsx)("a",{href:"#",class:"btn btn-primary",children:"Go somewhere"})]})]})}),Object(d.jsx)("div",{className:"container col mt-5 d-flex justify-content-center align-items-center",children:Object(d.jsx)("h5",{children:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device."})})]}),Object(d.jsxs)("footer",{class:"page-footer font-small unique-color-dark pt-4 bg-dark text-white",children:[Object(d.jsx)("div",{class:"container",children:Object(d.jsxs)("ul",{class:"list-unstyled list-inline text-center py-2",children:[Object(d.jsx)("li",{class:"list-inline-item",children:Object(d.jsx)("h5",{class:"mb-1",children:"Register for free"})}),Object(d.jsx)("li",{class:"list-inline-item",children:Object(d.jsx)("a",{href:"#!",class:"btn btn-outline-white btn-rounded text-white",children:"Sign up!"})})]})}),Object(d.jsxs)("div",{class:"footer-copyright text-center py-3",children:["\xa9 2020 Copyright:",Object(d.jsx)("a",{href:"https://mdbootstrap.com/",children:" MDBootstrap.com"})]})]})]})},O=a.a.createContext();var p=function(e){var t=Object(s.useContext)(O);return console.log(t),Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("div",{className:"col",children:t.map((function(e,t){return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"card mt-3 mb-3",children:[Object(d.jsx)("div",{className:"card-header bg-dark text-white",children:Object(d.jsx)("h4",{children:e.id})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.body})]})]})})}))})})};var g=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})};var v=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(g,{})})};var f=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(v,{})})};var N=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){j.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){n(e.data),console.log(e.data)}),(function(e){alert("error in fetching data")}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"text-center",children:"Post Component"}),Object(d.jsx)(O.Provider,{value:a,children:Object(d.jsx)(f,{})})]})},y=c(8);var w=function(e){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsx)("a",{href:"#",className:"navbar-brand",children:"Geekster"}),Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(y.b,{to:"/",className:"nav-link text-white",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(y.b,{to:"/counter",className:"nav-link text-white",children:"Counter"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(y.b,{to:"/user",className:"nav-link text-white",children:"User"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(y.b,{to:"/post",className:"nav-link text-white",children:"Post"})})]})]})})})},S=(c(57),c(58),c(2));var k=function(){return Object(d.jsx)("div",{className:"body1",children:Object(d.jsxs)(y.a,{children:[Object(d.jsx)(w,{}),Object(d.jsxs)(S.c,{children:[Object(d.jsx)(S.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(S.a,{path:"/counter",component:l}),Object(d.jsx)(S.a,{path:"/user",component:h}),Object(d.jsx)(S.a,{path:"/post",component:N})]})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()}},[[59,1,2]]]);
//# sourceMappingURL=main.e9211c0b.chunk.js.map