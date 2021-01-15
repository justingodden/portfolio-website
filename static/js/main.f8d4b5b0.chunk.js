(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{41:function(e,t,i){var n={"./car-card.png":64,"./car-display.gif":65,"./portfolio-card.png":66,"./portfolio-display.gif":67,"./sentient-card.png":68,"./sentient-display.gif":69};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=41},55:function(e,t,i){},56:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/car-card.c7e298ff.png"},65:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/car-display.b900445f.gif"},66:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/portfolio-card.d84d63ef.png"},67:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/portfolio-display.82fe43c4.gif"},68:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/sentient-card.8c85b278.png"},69:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/sentient-display.d0579043.gif"},70:function(e,t,i){},72:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(0),s=i.n(a),o=i(18),c=i.n(o),r=(i(55),i(56),i(85)),l=i(31),d=i.n(l),p=i(42),u=i.n(p),h=i(43),g=i.n(h),b=i(7);var m=function(){var e=Object(b.f)();return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsxs)("div",{className:"navbarLeft",children:[Object(n.jsx)("h2",{className:"navbarInitials",children:"JG"}),Object(n.jsx)("h2",{className:"navbarName",children:"Justin Godden"})]}),Object(n.jsxs)("div",{className:"navbarRight",children:[Object(n.jsx)(r.a,{href:"https://github.com/justingodden",target:"_blank",children:Object(n.jsx)(d.a,{})}),Object(n.jsx)(r.a,{href:"https://www.linkedin.com/in/justingodden/",target:"_blank",children:Object(n.jsx)(u.a,{})}),Object(n.jsx)(r.a,{onClick:function(){return e.push("/")},children:Object(n.jsx)(g.a,{})})]})]})},j=i(86);var f=function(){var e=Object(b.f)();return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsxs)("p",{className:"aboutName",children:["Hi, I'm",Object(n.jsx)("span",{className:"aboutNameBlue",children:" Justin"}),"."]}),Object(n.jsx)("h2",{className:"aboutH2",children:"I'm a Data Scientist working in London."}),Object(n.jsx)("h2",{className:"aboutH2",children:"Check out my projects below!"}),Object(n.jsx)("p",{}),Object(n.jsx)(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(){return e.push("/projects")},children:"Projects"})]})},w=i(37),x=(i(63),i(32)),O=i.n(x),v=i(87);var y=function(e){var t=e.id,a=e.title,s=e.img,o=e.chips,c=e.shortDescription,r=e.github,l=e.setShowModal,p=(e.modalNum,e.setModalNum);return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"cardHeader",children:Object(n.jsx)("h3",{children:a})}),Object(n.jsx)("div",{className:"cardImage",children:Object(n.jsx)("img",{src:i(41)("./".concat(s)).default,alt:"",width:"300",height:"200"})}),Object(n.jsx)("div",{className:"cardChips",children:o.map((function(e){return Object(n.jsx)(v.a,{className:"cardChip",size:"small",color:"primary",label:e},e)}))}),Object(n.jsx)("div",{className:"cardDescription",children:Object(n.jsx)("p",{children:c})}),Object(n.jsxs)("div",{className:"cardButtons",children:[Object(n.jsxs)(j.a,{variant:"outlined",color:"primary",fullWidth:!0,href:r,target:"_blank",children:[Object(n.jsx)(d.a,{className:"icon"}),"GitHub"]}),Object(n.jsxs)(j.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){p(t),l(!0)},children:[Object(n.jsx)(O.a,{className:"icon"}),"View"]})]})]})},N=(i(70),i(44)),k=i.n(N),P=[{id:0,title:"Sentient",img:"sentient-card.png",imgDisplay:"sentient-display.gif",chips:["JavaScript","React","Python","Flask","Transfer Learning","NLP","restAPI"],shortDescription:"Full-stack dashboard to anaylse Twitter sentiment",longDescription:"Sentient is a full-stack application used to analyse sentiment of a search-term on Twitter. Using Machine Learning and Natural Langauge Processing, it infers and aggregates tweets, and provides charts and figures to summarise the public feeling, and also can show the most positive, lease positive, and most retweeted tweets.\n        \n        The front-end was built in React and uses Axios to communicate with the back-end API which was built using Python. The back-end python uses HuggingFace transfer learning for the NLP, and the model is wrapped in a Flask web app API and hosted on Heroku",github:"https://github.com/justingodden/twitter-sentiment-frontend",website:"https://justingodden.github.io/twitter-sentiment-frontend/"},{id:1,title:"Car Price Predictor",img:"car-card.png",imgDisplay:"car-display.gif",chips:["JavaScript","React","Python","Tensorflow","Entity Embeddings","Flask","BeautifulSoup"],shortDescription:"Full-stack Deep Learning car price model",longDescription:"This car price prediction application is an end-to-end machine learning project, with a full React interface, deployed for users on Heroku.\n\n        The GitHub contains the Jupyter Notebook with the entire model development process, from data collecting, cleaning, feature engineering, model selection and tuning.\n\n        The data was web scraped using Python package BeautifulSoup to collect over 4000 car profiles from a popular car sales website. The model was developed using TensorFlow, including using entity embeddings to encode high cardinality categorical features.\n\n        The model was wrapped in a Flask web application to create an API end-point for the front-end to communicate with, and was hosted on Heroku.\n\n        The front-end was written in React with Hooks and Context, and uses Axios to request the Python API.",github:"https://github.com/justingodden/car-pricing-interface",website:"https://justingodden.github.io/car-pricing-interface/"},{id:2,title:"JG Portfolio Website",img:"portfolio-card.png",imgDisplay:"portfolio-display.gif",chips:["JavaScript","React","Material-ui","React-Router","HTML","CSS","Responsive"],shortDescription:"Personal portfolio website built to showcase projects",longDescription:"Simple, clean person portfolio built using React and Material-ui to act as a hub for all of my person projects, with scope to expand to other features such as incorporating a blog.",github:"https://github.com/justingodden/portfolio-website",website:"#"}];var D=function(e){var t=e.setShowModal,a=e.modalNum;return Object(n.jsx)("div",{className:"backdrop",children:Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("img",{className:"modalImg",src:i(41)("./".concat(P[a].imgDisplay)).default,alt:""}),Object(n.jsxs)("div",{className:"modalContent",children:[Object(n.jsx)("div",{className:"modalClose",children:Object(n.jsx)(r.a,{size:"small",onClick:function(){return t(!1)},children:Object(n.jsx)(k.a,{})})}),Object(n.jsx)("h2",{className:"modalTitle",children:P[a].title}),Object(n.jsx)("div",{className:"modalContentChips",children:P[a].chips.map((function(e){return Object(n.jsx)(v.a,{className:"cardChip",size:"small",color:"primary",label:e},e)}))}),Object(n.jsx)("p",{className:"modalContentText",children:P[a].longDescription}),Object(n.jsx)("div",{className:"modalContentButtons",children:Object(n.jsxs)(j.a,{className:"button",variant:"contained",color:"primary",href:P[a].website,target:"_blank",children:[Object(n.jsx)(O.a,{className:"icon"}),"View Website"]})})]})]})})},T=[{id:0,title:"Sentient",img:"sentient-card.png",imgDisplay:"sentient-display.gif",chips:["JavaScript","React","Python","Flask","Transfer Learning","NLP","restAPI"],shortDescription:"Full-stack dashboard to anaylse Twitter sentiment",longDescription:"Sentient is a full-stack application used to analyse sentiment of a search-term on Twitter. Using Machine Learning and Natural Langauge Processing, it infers and aggregates tweets, and provides charts and figures to summarise the public feeling, and also can show the most positive, lease positive, and most retweeted tweets.\n        \n        The front-end was built in React and uses Axios to communicate with the back-end API which was built using Python. The back-end python uses HuggingFace transfer learning for the NLP, and the model is wrapped in a Flask web app API and hosted on Heroku",github:"https://github.com/justingodden/twitter-sentiment-frontend",website:"https://justingodden.github.io/twitter-sentiment-frontend/"},{id:1,title:"Car Price Predictor",img:"car-card.png",imgDisplay:"car-display.gif",chips:["JavaScript","React","Python","Tensorflow","Entity Embeddings","Flask","BeautifulSoup"],shortDescription:"Full-stack Deep Learning car price model",longDescription:"This car price prediction application is an end-to-end machine learning project, with a full React interface, deployed for users on Heroku.\n\n        The GitHub contains the Jupyter Notebook with the entire model development process, from data collecting, cleaning, feature engineering, model selection and tuning.\n\n        The data was web scraped using Python package BeautifulSoup to collect over 4000 car profiles from a popular car sales website. The model was developed using TensorFlow, including using entity embeddings to encode high cardinality categorical features.\n\n        The model was wrapped in a Flask web application to create an API end-point for the front-end to communicate with, and was hosted on Heroku.\n\n        The front-end was written in React with Hooks and Context, and uses Axios to request the Python API.",github:"https://github.com/justingodden/car-pricing-interface",website:"https://justingodden.github.io/car-pricing-interface/"},{id:2,title:"JG Portfolio Website",img:"portfolio-card.png",imgDisplay:"portfolio-display.gif",chips:["JavaScript","React","Material-ui","React-Router","HTML","CSS","Responsive"],shortDescription:"Personal portfolio website built to showcase projects",longDescription:"Simple, clean person portfolio built using React and Material-ui to act as a hub for all of my person projects, with scope to expand to other features such as incorporating a blog.",github:"https://github.com/justingodden/portfolio-website",website:"#"}];var S=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),i=t[0],s=t[1],o=Object(a.useState)(null),c=Object(w.a)(o,2),r=c[0],l=c[1];return Object(n.jsxs)(n.Fragment,{children:[i&&Object(n.jsx)(D,{setShowModal:s,modalNum:r}),Object(n.jsx)("div",{className:"topSpace"}),Object(n.jsx)("div",{className:"projects",children:T.map((function(e,t){return Object(n.jsx)(y,{id:t,title:e.title,img:e.img,imgDisplay:e.imgDisplay,chips:e.chips,shortDescription:e.shortDescription,longDescription:e.longDescription,github:e.github,website:e.website,setShowModal:s,setModalNum:l,modalNum:r},t)}))})]})};var C=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(m,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(b.a,{path:"/projects",children:Object(n.jsx)(S,{})})]})]})},R=i(23);c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R.a,{children:Object(n.jsx)(C,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f8d4b5b0.chunk.js.map