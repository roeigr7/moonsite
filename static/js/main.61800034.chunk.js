(this.webpackJsonpmoonsite=this.webpackJsonpmoonsite||[]).push([[0],{62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(16),r=s.n(a),i=(s(62),s(63),s(23)),l=s(8),o=s(2),j=s(7),d=s(93),h=s(80),b=s(51),x=s(31),O=s(3),m=(s(64),s(1)),p=["onClick","className","activeClassName","to","children","ref"],u=function(e){var t=e.onClick,s=e.className,c=e.activeClassName,n=e.to,a=e.children,r=e.ref,l=Object(O.a)(e,p);return Object(m.jsx)(i.c,Object(o.a)(Object(o.a)({},l),{},{innerRef:r,onClick:t,className:"styled-link ".concat(s),activeClassName:c||"active-styled-link",exact:!0,to:n,children:a}))},f=(s(70),s(71),function(e){var t=Object(c.useState)(!0),s=Object(j.a)(t,2),n=s[0],a=s[1],r=function(){a(!n)};return Object(m.jsxs)(x.Drawer,Object(o.a)(Object(o.a)({className:"side-nav-container"},e),{},{children:[Object(m.jsx)(x.Drawer.Toggle,{className:"hamburger",onClick:r}),Object(m.jsx)(d.a,{in:!n,children:Object(m.jsx)(x.Drawer.Overflow,{children:Object(m.jsxs)(x.Drawer.ToC,{className:"side-nav-container",children:[Object(m.jsx)("div",{className:"header-title",children:Object(m.jsx)(u,{onClick:r,activeClassName:"header-active",className:"header",to:"/",children:"DRESS ME"})}),Object(m.jsx)(u,{onClick:r,className:"side-nav-item",to:"/",children:"Home"}),Object(m.jsx)(u,{onClick:r,className:"side-nav-item",to:"/shirt",children:"Shirt"}),Object(m.jsx)(u,{onClick:r,className:"side-nav-item",to:"/pants",children:"Pants"}),Object(m.jsx)(u,{onClick:r,className:"side-nav-item",to:"/shoes",children:"Shoes"})]})})})]}))}),g=function(e){return Object(m.jsx)("div",{className:"bg-image",children:Object(m.jsxs)(h.a,{className:"page-container p-0 m-0",children:[Object(m.jsx)(b.a,{className:"sidebar-container",xs:12,md:3,xl:2,children:Object(m.jsx)(f,{})}),Object(m.jsx)(b.a,{className:"pt-3",xs:12,md:9,xl:10,children:e.children})]})})},y=(s(72),s(83)),v=s(84),N=s(81),C=s.p+"static/media/shirt.714e25d5.png",S=s.p+"static/media/shoes.641653ff.png",w=s.p+"static/media/pants.fa7625a8.png",k=function(e){var t=e.title,s=e.children,c=e.type,n={shirt:C,shoes:S,pants:w};return Object(m.jsxs)(N.a,{children:[Object(m.jsx)(h.a,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)("h1",{children:[t," ",c&&Object(m.jsx)("img",{style:{width:"auto",height:"50px"},src:n[c],alt:t})]})})}),s]})},z=s(94),T=["className","children","to","size","variant","ref"],I=function(e){var t=e.className,s=e.children,c=e.to,n=e.size,a=e.variant,r=e.ref,l=Object(O.a)(e,T);return Object(m.jsx)(z.a,Object(o.a)(Object(o.a)({className:t},l),{},{variant:a,size:n,style:{padding:0},children:Object(m.jsx)(i.b,{style:{display:"block",margin:0,padding:"10px",color:"white",textDecoration:"none"},innerRef:r,to:c,children:s})}))},D=s(89),W=s(82),E=s(91);function A(){return{shirt:{},pants:{},shoes:{},props:{toast:!1,completedSets:localStorage.getItem("completed")||0,currentSet:0,startTime:new Date,diffTime:"",itemsCnt:0},addItem:function(e){this[null===e||void 0===e?void 0:e.type]={id:e.id,name:e.name,brand:e.brand,color:e.color,size:e.size},this.props.toast=!0,this.props.itemsCnt<3&&this.props.itemsCnt++},handleCompletedSet:function(){if(0===Object.keys(this.shirt).length||0===Object.keys(this.pants).length||0===Object.keys(this.shoes).length)return this.props.completedSets;console.log("if yes",this.props.completedSets),this.props.diffTime=(new Date).getTime()-this.props.startTime.getTime(),this.props.startTime=new Date,localStorage.setItem("completed",JSON.stringify(+this.props.completedSets+1))},closeToast:function(){this.props.toast=!1},resetStore:function(){this.props={toast:!1,completedSets:localStorage.getItem("completed")||0,currentSet:0,startTime:new Date,diffTime:"",itemsCnt:0},this.shirt={},this.pants={},this.shoes={},console.log(this)}}}var B=n.a.createContext(null),L=function(e){var t=e.children,s=Object(D.a)(A);return Object(m.jsx)(B.Provider,{value:s,children:t})},F=function(){return n.a.useContext(B)},H=s(52),q=function(){var e=F(),t=e.props,s=e.closeToast;return Object(D.b)((function(){return Object(m.jsx)(H.a,{style:{maxWidth:"90%",position:"absolute",bottom:"10px",right:"10px"},children:Object(m.jsxs)(E.a,{animation:!0,bg:"success",autohide:!0,delay:2e3,onClose:function(){return s()},show:t.toast,children:[Object(m.jsx)(E.a.Header,{children:Object(m.jsxs)("h6",{className:"me-auto",children:[Object(m.jsx)(W.a,{size:30})," Successful"]})}),Object(m.jsx)(E.a.Body,{className:"text-light",children:"Youre clothes was added !"})]})})}))},U=function(){var e=F(),t=e.shirt,s=e.pants,c=e.shoes,n=e.props,a=e.handleCompletedSet,r=0!==Object.keys(t).length,i=0!==Object.keys(s).length,l=0!==Object.keys(c).length;return Object(D.b)((function(){return Object(m.jsxs)(k,{title:"Dress Me",children:[Object(m.jsx)(q,{}),Object(m.jsxs)(N.a,{children:[n.time,Object(m.jsxs)(h.a,{className:"align-items-center justify-content-center text-center",children:[Object(m.jsx)(b.a,{className:"my-box p-2",xs:12,children:Object(m.jsxs)("p",{className:"h5",children:["Completed Sets: ",Object(m.jsxs)("span",{children:[n.completedSets," "]})]})}),Object(m.jsxs)("div",{className:"my-box m-3 p-2",children:[Object(m.jsxs)(b.a,{xs:12,className:" d-flex flex-column justify-content-center align-items-center",children:[Object(m.jsxs)("p",{className:"h5",children:["completed: ",n.itemsCnt," of 3 items to Complete another set"]}),Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsxs)("p",{className:"h5 text-primary",children:["shirt:"," ",r?Object(m.jsx)(y.a,{color:"royalblue",size:24}):Object(m.jsx)(v.a,{color:"red",size:24})]}),Object(m.jsxs)("p",{className:"h5 px-5 text-primary",children:["Pants:"," ",i?Object(m.jsx)(y.a,{color:"royalblue",size:24}):Object(m.jsx)(v.a,{color:"red",size:24})]}),Object(m.jsxs)("p",{className:"h5 text-primary",children:["Shoes:"," ",l?Object(m.jsx)(y.a,{color:"royalblue",size:24}):Object(m.jsx)(v.a,{color:"red",size:24})]})]})]}),Object(m.jsxs)(b.a,{xs:12,className:" p-2",children:[Object(m.jsx)(I,{size:"lg",to:"/shirt",children:"Choose Shirt"}),Object(m.jsx)(I,{size:"lg",className:"choose-btn",to:"/pants",children:"Choose Pants"}),Object(m.jsx)(I,{size:"lg",to:"/shoes",children:"Choose Shoes"})]}),Object(m.jsx)(b.a,{className:"d-grid p-4",xs:12,children:Object(m.jsx)(I,{onClick:a,disabled:3!==n.itemsCnt,variant:"secondary",size:"lg",to:"/success",children:"Complete Set!"})})]})]})]})]})}))},M=s(90),P=s(92),J=s(46),G=s.n(J),K=s(53),Y=function(e,t){return e.filter((function(e){return e.type===t})).sort((function(e,t){return e.name<t.name?-1:1}))},R=function(e){var t=Object(c.useState)(""),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1],d=Object(c.useState)(!1),h=Object(j.a)(d,2),b=h[0],x=h[1];return Object(c.useEffect)((function(){console.log("-use-fetchuseefeect"),function(){var t=Object(K.a)(G.a.mark((function t(){var s,c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,fetch("https://www.mocky.io/v2/5e3940013200005e00ddf87e");case 4:return s=t.sent,t.next=7,s.json();case 7:c=t.sent,o(!1),n=Y(c.results,e),a(n),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),o(!1),x(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),{data:n,loading:l,error:b}},_=s(85),Q=function(){return Object(m.jsx)("div",{style:{minWidth:"100%",minHeight:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(m.jsx)(_.a,{style:{width:"100px",height:"100px"},variant:"primary",animation:"grow",role:"status"})})},X=(s(74),s(88)),V=(s(75),function(e){var t=e.show,s=e.setShow,c=e.setSelectedItem,n=e.selectedItem,a=Object(l.f)(),r=F().addItem,i=function(){c(""),s(!1)},o=function(){r(n),a.push("/")};return Object(D.b)((function(){return Object(m.jsxs)(X.a,{className:"modal-container",centered:!0,show:t,onHide:i,children:[Object(m.jsx)(X.a.Header,{closeButton:!0,children:Object(m.jsx)(X.a.Title,{children:"Do you want to add this item to your list?"})}),Object(m.jsxs)(X.a.Body,{className:"justify-content-center",children:[Object(m.jsx)("p",{className:"text-secondary",children:"YOUR SELECTED ITEM IS:"}),Object(m.jsxs)("div",{className:"modal-body",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"name:"})," ",n.name]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"brand:"})," ",n.brand]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"color:"}),n.color]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"size:"})," ",n.size]})]})]}),Object(m.jsxs)(X.a.Footer,{className:"justify-content-center",children:[Object(m.jsx)(z.a,{onClick:o,className:"modal-body-btn",variant:"success",children:"Yes!"}),Object(m.jsx)(z.a,{onClick:i,className:"modal-body-btn",variant:"danger",children:"No"})]})]})}))}),Z=function(e){var t=e.error;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"text-center text-danger",children:"Error"}),Object(m.jsx)("h2",{className:"text-center text-danger",children:t})]})},$=function(e){var t=e.title,s=e.type,n=R(s),a=n.data,r=n.loading,i=n.error,l=Object(c.useState)(!1),d=Object(j.a)(l,2),x=d[0],O=d[1],p=Object(c.useState)([]),u=Object(j.a)(p,2),f=u[0],g=u[1],y=Object(c.useState)(""),v=Object(j.a)(y,2),N=v[0],C=v[1],S=Object(c.useState)({id:"",name:"",brand:"",color:!1,size:""}),w=Object(j.a)(S,2),T=w[0],I=w[1];Object(c.useEffect)((function(){g(a||[])}),[a]);var W=function(e,t,s){return e===T.id&&T[s]===t&&"active"},E=function(e){var t=e.target.value,s=[];C(t);for(var c=0;c<a.length;c++)if(a[c].name.toString().toLowerCase().includes(t)||a[c].brand.toString().toLowerCase().includes(t))s.push(a[c]);else for(var n=0;n<a[c].colors.length;n++){if(a[c].colors[n].toString().toLowerCase().includes(t)){s.push(a[c]);break}if(n===a[c].colors.length-1)for(var r=0;r<a[c].sizes.length;r++)if(a[c].sizes[r].toString().toLowerCase().includes(t)){s.push(a[c]);break}}if(t.length<2)return g(s.slice(0,5));g(s)};return Object(D.b)((function(){return Object(m.jsxs)(k,{type:s,title:t,children:[r&&Object(m.jsx)(Q,{}),i&&Object(m.jsx)(Z,{error:i}),!r&&!i&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(h.a,{className:"justify-content-center",children:[Object(m.jsx)(b.a,{xs:12,className:"text-center",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)("span",{children:a&&a.length})," items were found"]})}),Object(m.jsx)(b.a,{md:6,className:"text-center",children:Object(m.jsxs)(M.a.Group,{className:"mb-3",children:[Object(m.jsxs)(M.a.Label,{children:["Search ",s]}),Object(m.jsx)(M.a.Control,{onChange:E,value:N,type:"text",placeholder:"search..."})]})})]}),Object(m.jsx)(h.a,{children:a&&f.map((function(e){return Object(m.jsx)(b.a,{className:"pb-3",xs:12,sm:6,lg:4,children:Object(m.jsx)(P.a,{style:{textAlign:"center",minHeight:"100%"},children:Object(m.jsxs)(P.a.Body,{children:[Object(m.jsx)(P.a.Title,{className:"card-title",children:e.name}),Object(m.jsxs)("p",{className:"brand-title",children:[Object(m.jsx)("span",{children:" Brand: "}),e.brand]}),Object(m.jsx)("div",{className:"colors-container",children:e.colors.map((function(t,s){return Object(m.jsx)("div",{children:Object(m.jsx)(z.a,{onClick:function(){return I(Object(o.a)(Object(o.a)({},T),{},{color:t,type:e.type,id:e.id,brand:e.brand,name:e.name}))},variant:"outline-secondary",className:W(e.id,t,"color"),style:{color:t,minWidth:"80px",margin:"0px 5px"},children:t})},s)}))}),e.id===T.id&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"brand-title",children:Object(m.jsx)("span",{children:" Choose size: "})}),Object(m.jsx)("div",{className:"sizes-container",children:e.sizes.map((function(t,s){return Object(m.jsx)("div",{children:Object(m.jsx)(z.a,{onClick:function(){return e=t,I(Object(o.a)(Object(o.a)({},T),{},{size:e})),void O(!0);var e},variant:"outline-secondary",className:W(e.id,t,"size"),style:{minWidth:"80px",margin:"0px 5px"},children:t})},s)}))})]})]})})},e.id)}))}),Object(m.jsx)(V,{show:x,setShow:O,setSelectedItem:I,selectedItem:T})]})]})}))},ee=s(87),te=s(86),se=s(11),ce=function(){var e=F(),t=e.shirt,s=e.pants,n=e.shoes,a=e.props,r=e.resetStore,i=s.size+n.size,l=function(e){var t=Math.floor(e/1e3);return"".concat(t," seconds")}(a.diffTime);return console.log(Object(se.g)(a)),Object(c.useEffect)((function(){r()})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(te.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"/"}),Object(m.jsx)("th",{children:"Shirt"}),Object(m.jsx)("th",{children:"Pants"}),Object(m.jsx)("th",{children:"Shoes"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{fontWeight:"bold"},children:"Name"}),Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:s.name}),Object(m.jsx)("td",{children:n.name})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{fontWeight:"bold"},children:"Brand"}),Object(m.jsx)("td",{children:t.brand}),Object(m.jsx)("td",{children:s.brand}),Object(m.jsx)("td",{children:n.brand})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{fontWeight:"bold"},children:"Color"}),Object(m.jsx)("td",{children:t.color}),Object(m.jsx)("td",{children:s.color}),Object(m.jsx)("td",{children:n.color})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{fontWeight:"bold"},children:"Size"}),Object(m.jsx)("td",{children:t.size}),Object(m.jsx)("td",{children:s.size}),Object(m.jsx)("td",{children:n.size})]})]})]}),Object(m.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(m.jsxs)("p",{style:{fontWeight:"bold"},children:["Sum of pants and shoes:"," ",Object(m.jsxs)("span",{className:"text-secondary",children:[" ",i]})]}),Object(m.jsxs)("p",{style:{fontWeight:"bold"},children:["The time it took you to complete:"," ",Object(m.jsx)("span",{className:"text-secondary",children:l})]})]})]})},ne=(s(76),["https://cdn4.vectorstock.com/i/1000x1000/62/48/mission-complete-stamp-sign-seal-vector-16626248.jpg","https://cdn1.vectorstock.com/i/1000x1000/24/65/complete-stamp-sign-seal-logo-vector-18772465.jpg","https://cdn5.vectorstock.com/i/1000x1000/96/94/grunge-textured-complete-stamp-seal-vector-23329694.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC18w9wRB3CPMa1ncSx8JWrqgkHHyYXNLIdWl_OqfBEwugKzBW8yTmTrS6OMP7N3ZrIww&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1NWKzn4phXuJ6_oSCcpmJ_Tw1WU1fK1SKD5_Irk76g1a4BF-IO1HwcsJ4tyUgTUEkds&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxrUFC5Ioab7N4qodWf99y5wAbcgHG920LBpIcFAfvO9981UA1YATMpKdEqXsezukOKc&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YE2aQAFHtxMsJWS7dkEfyBX80KznDHCgODFjQ8wyScyktac3T-T-PUynOHBG0VU7_oM&usqp=CAU"]),ae=Math.floor(Math.random()*ne.length),re=function(){return Object(m.jsx)(k,{title:"Success!",children:Object(m.jsx)(N.a,{className:"pb-2",children:Object(m.jsxs)(h.a,{className:"text-center",children:[Object(m.jsx)(b.a,{xs:12,children:Object(m.jsx)(ee.a,{className:"img-success",src:ne[ae],roundedCircle:!0})}),Object(m.jsx)(b.a,{xs:12,children:Object(m.jsx)("h1",{className:"text-secondary",children:"You have successfully completed the set"})}),Object(m.jsxs)(b.a,{style:{background:"rgba(255,255,255,0.9)"},xs:12,className:"my-box",children:[Object(m.jsx)("h1",{className:"text-primary",children:"DETAILS"}),Object(m.jsx)(ce,{})]}),Object(m.jsx)(I,{to:"/",className:"mt-3",variant:"secondary",children:"Choose Another set"})]})})})};var ie=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(g,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:U}),Object(m.jsx)(l.a,{path:"/shirt",children:Object(m.jsx)($,{title:"Shirts List",type:"shirt"})}),Object(m.jsx)(l.a,{path:"/pants",children:Object(m.jsx)($,{title:"Pants List",type:"pants"})}),Object(m.jsx)(l.a,{path:"/shoes",children:Object(m.jsx)($,{title:"Shoes List",type:"shoes"})}),Object(m.jsx)(l.a,{path:"/success",children:Object(m.jsx)(re,{})})]})})})},le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,95)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};s(77);r.a.render(Object(m.jsx)(L,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),le()}},[[78,1,2]]]);
//# sourceMappingURL=main.61800034.chunk.js.map