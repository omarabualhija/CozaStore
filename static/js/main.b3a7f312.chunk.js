(this.webpackJsonpcozastore=this.webpackJsonpcozastore||[]).push([[0],{275:function(n,e,t){},277:function(n,e,t){},290:function(n,e,t){},311:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,l,d,u,j,h=t(0),p=t(69),b=t.n(p),m=(t(275),t(145)),x=t(146),f=t.n(x),O=t(204),g=t(11),v=(t(277),t(17)),w=t(14),y=Object(v.b)(i||(i=Object(w.a)(["\n\nbody{\n    color:",";\nbackground-color: ",";\n}\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.backgroundColor})),S={backgroundColor:"rgb(24,25,26)",altbackgroundColor:"#3A3B3C",color:"#878b8f"},k={backgroundColor:"white",altbackgroundColor:"#3A3B3C",color:"#3A3B3C",altColor:"#555"},C=t(25),N="#717fe0",z=v.c.header(c||(c=Object(w.a)(["\n  background-color: transparent;\n  &.background {\n    background-color: ",";\n  }\n  & > div {\n    display: flex;\n    position: relative;\n    min-height: 55px;\n    height: 55px;\n    padding: 15px;\n    align-items: center;\n    justify-content: space-between;\n  }\n  @media (min-width: 575px) {\n    background-color: transparent;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.backgroundColor})),A=v.c.div(r||(r=Object(w.a)(["\n  flex-grow: 1;\n  & > a {\n    width: 100%;\n    display: block;\n    & > img {\n      max-width: calc(100% - 25px);\n    }\n  }\n"]))),q=v.c.div(a||(a=Object(w.a)(["\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  background-color: ",";\n  left: 0;\n  top: 55px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n  &.toggle {\n    display: none;\n    @media (min-width: 575px) {\n      display: flex;\n    }\n  }\n  @media (min-width: 575px) {\n    position: static;\n    flex-direction: row;\n    background-color: transparent !important;\n    gap: 40px;\n  }\n  & > a {\n    font-weight: bold;\n    padding: 7px 0;\n    color: white;\n    font-size: 1.2rem;\n    @media (min-width: 575px) {\n      color: ",";\n      font-size: 1rem;\n    }\n  }\n  .active {\n    color: ",";\n    @media (min-width: 575px) {\n      color: ",";\n    }\n  }\n"])),N,(function(n){return n.theme.color}),(function(n){return n.theme.color}),N),P=v.c.div(o||(o=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: ",";\n  & > div {\n    cursor: pointer;\n  }\n  & > :last-child {\n    @media (min-width: 575px) {\n      display: none;\n    }\n  }\n"])),(function(n){return n.theme.color})),T=t(35),I=function(n){return{type:"sliderData",payload:n}},D=function(n){return{type:"product",payload:n}},M=t(2),B=function(n){var e=Object(h.useState)(!1),t=Object(g.a)(e,2),i=t[0],c=t[1],r=Object(h.useState)(!1),a=Object(g.a)(r,2),o=a[0],s=a[1],l=Object(T.c)((function(n){return n.theme})),d=Object(T.b)(),u=Object(T.c)((function(n){return n.handelAddToCartReducer})).qnt;return window.addEventListener("scroll",(function(){window.scrollY>=60?s(!0):s(!1)})),Object(M.jsx)(z,{className:o?"background":"",children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)(A,{children:Object(M.jsx)(C.b,{to:"/",children:Object(M.jsx)("img",{src:"/images/icons/logo-01.png",alt:"logo"})})}),Object(M.jsxs)(q,{className:i?"":"toggle",children:[Object(M.jsx)(C.c,{onClick:function(){return c(!i)},to:"/",children:"Home"}),Object(M.jsx)(C.c,{onClick:function(){return c(!i)},to:"/Shop",children:"Shope"}),Object(M.jsx)(C.c,{onClick:function(){return c(!i)},to:"/About",children:"About"}),Object(M.jsx)(C.c,{onClick:function(){return c(!i)},to:"/Contact",children:"Contact"})]}),Object(M.jsxs)(P,{children:[Object(M.jsx)("div",{onClick:function(){return d({type:"theme"})},className:l?"fas fa-sun":"far fa-moon"}),Object(M.jsx)(C.b,{to:"/CheckOut",className:"fas fa-shopping-cart",children:u}),Object(M.jsx)("div",{className:"far fa-heart"}),Object(M.jsx)("div",{onClick:function(){return c(!i)},className:i?"fas fa-times fa-xl":"fas fa-bars"})]})]})})},L=t(18),E=t(3),F=t(74),U=(t(284),t(248)),W=t.n(U),Y=v.c.div(s||(s=Object(w.a)(["\n  @media (min-width: 676px) {\n    margin-top: 55px;\n  }\n  & > :first-child {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 40px;\n\n    .slider-MW {\n      max-width: 550px;\n      padding: 20px;\n    }\n  }\n"]))),H=v.c.div(l||(l=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),R=v.c.div(d||(d=Object(w.a)(["\n  margin-top: 15px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border: 1px solid;\n  padding: 35px;\n  font-size: 1rem;\n  @media (min-width: 997px) {\n    font-size: 1rem;\n  }\n\n  & > h4,\n  > p,\n  > span {\n    display: block;\n    margin-bottom: 1rem;\n  }\n\n  & > :nth-child(6),\n  > :nth-child(7),\n  > :nth-child(8) {\n    margin: auto;\n  }\n"]))),V=v.c.div(u||(u=Object(w.a)(["\n  display: flex;\n  gap: 10px;\n  font-size: 1.5rem;\n  align-items: center;\n  & > button {\n    font-size: 1.5rem;\n    border: 1px solid ",";\n    width: 30px;\n    height: 30px;\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      border: none;\n    }\n  }\n\n  & > div {\n    padding: 0px 20px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.color}),N,(function(n){return n.theme.color})),Q=function(n){var e=n.containerClass,t=n.btnClass,i=n.value,c=Object(h.useState)(1),r=Object(g.a)(c,2),a=r[0],o=r[1];return Object(M.jsxs)(V,{className:e,children:[Object(M.jsx)("button",{onClick:function(){var n=a>1?a-1:1;o(n),i(n)},children:"-"}),Object(M.jsx)("div",{children:a}),Object(M.jsx)("button",{className:t,onClick:function(){var n=a+1;o(n),i(n)},children:"+"})]})},J=v.c.div(j||(j=Object(w.a)(["\n  .btnStyle {\n    padding: 10px 15px;\n    background-color: #717fe0;\n    border-radius: 40px;\n    color: white;\n    cursor: pointer;\n    border: none;\n\n    @media (min-width: 676px) {\n      font-size: 1rem;\n    }\n  }\n"]))),G=function(n){var e=n.type,t=void 0===e?"button":e,i=n.value,c=void 0===i?"Click ":i,r=n.customClass,a=void 0===r?"":r,o=n.onClick;n.to;return Object(M.jsx)(J,{children:Object(M.jsx)("input",{onClick:o,type:t,className:"btnStyle ".concat(a),value:c})})},K=t(226),$=t(230),_=t(225),X=t(244),Z=t(347);function nn(n){var e=n.returnVal,t=n.label,i=n.options,c=Object(h.useState)(""),r=Object(g.a)(c,2),a=r[0],o=r[1];return Object(M.jsx)(Z.a,{children:Object(M.jsxs)(_.a,{fullWidth:!0,children:[Object(M.jsx)(K.a,{id:"demo-simple-select-label",children:t}),Object(M.jsx)(X.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"label",onChange:function(n){var t=n.target.value;o(t),e(t)},children:i.map((function(n,e){return Object(M.jsx)($.a,{value:n,children:n},e)}))})]})})}function en(){var n=Object(T.b)(),e=Object(L.g)().id,t=Object(h.useState)({id:e,Color:"",Size:"",qnt:1}),i=Object(g.a)(t,2),c=i[0],r=i[1],a=Object(T.c)((function(n){return n.productData})),o=a.filter((function(n){return n.id==e})),s=Object(g.a)(o,1)[0],l=s.category,d=s.img,u=s.name,j=s.price,p=s.supplier,b=Object(h.useState)(!1),m=Object(g.a)(b,2),x=m[0],f=m[1],O=[{original:d,thumbnail:d}],v=function(n,e){f(!1),r(Object(F.a)(Object(F.a)({},c),{},Object(E.a)({},e,n)))};return Object(M.jsx)(M.Fragment,{children:null!==a.length&&Object(M.jsx)(Y,{children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)(W.a,{showFullscreenButton:!1,additionalClass:"slider-MW",showNav:!1,thumbnailPosition:"left",useBrowserFullscreen:!1,showPlayButton:!1,autoPlay:!0,items:O}),Object(M.jsxs)(R,{children:[Object(M.jsx)("h4",{children:u}),Object(M.jsx)("span",{children:"Price : ".concat(j," $")}),Object(M.jsx)("p",{children:"Supplier : ".concat(p)}),Object(M.jsx)("div",{children:"Category :".concat(l)}),Object(M.jsxs)(H,{children:[Object(M.jsx)(nn,{id:"Size",label:"Size",options:["Size S","Size M","Size L","Size XL"],returnVal:function(n){return v(n,"Size")}}),Object(M.jsx)(nn,{id:"Color",label:"Color",options:["Red","Blue","White","Grey"],returnVal:function(n){return v(n,"Color")}})]}),Object(M.jsx)(Q,{containerClass:"containerBtn",value:function(n){r(Object(F.a)(Object(F.a)({},c),{},{qnt:n}))}}),x&&Object(M.jsx)("div",{style:{color:"red"},children:"Add Your Color And Size "}),Object(M.jsx)(G,{onClick:function(){0!==c.Size.length&&0!==c.Color.length?n({type:"AddToCart",payload:c}):f(!0)},value:"ADD TO CART"})]})]})})})}var tn,cn=t(254),rn=t.n(cn),an=(t(290),function(n){var e=n.children,t=n.customClass,i=void 0===t?"":t,c=n.to,r=void 0===c?"#":c;return Object(M.jsx)(J,{children:Object(M.jsx)(C.b,{className:"btnStyle ".concat(i),to:r,children:e})})});function on(){var n=Object(T.c)((function(n){return n.sliderData}));console.log(n);return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(rn.a,{interval:"3000",navButtonsProps:{style:{display:"none"}},indicatorIconButtonProps:{style:{display:"none"}},children:n.map((function(n){return Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{className:" vh100",src:n.img,alt:"First slide"}),Object(M.jsxs)("div",{className:"title",children:[Object(M.jsx)("div",{children:n.mainTitle}),Object(M.jsx)("div",{children:n.subTitle}),Object(M.jsx)(an,{to:"/Shope",children:" Shope Now"})]})]},n.id)}))})})}var sn,ln,dn,un,jn=v.c.div(tn||(tn=Object(w.a)(["\n  //Start Component Style\n\n  & > :first-child {\n    //Div Container=>It contains all the elements\n    margin: auto;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));\n    gap: 15px;\n    justify-content: center;\n\n    //start Styled Link\n\n    & > a {\n      //All links to go to the shop page\n      position: relative;\n      transition: all 0.2s;\n      overflow: hidden;\n      border: 1px solid ",';\n      &::before {\n        //To show the color purple when hover\n        content: " ";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        background-color: opacity;\n        transition: all 1s;\n      }\n\n      & > img {\n        width: 100%;\n        height: 100%;\n      }\n\n      //statrt Title\n      & > :nth-child(2) {\n        //title\n        position: absolute;\n        top: 22px;\n        z-index: 998;\n        left: 20px;\n        transition: all 0.2s;\n        transition-timing-function: linear;\n\n        & > h5,\n        h4 {\n          font-size: 1rem;\n          margin-top: 0.8rem;\n        }\n      }\n      //end Title\n\n      //Start ShopNow btn\n      & > :nth-child(3) {\n        position: absolute;\n        bottom: 30px;\n        left: 15px;\n        font-size: 0.8rem;\n        color: white;\n        z-index: 5;\n        transform: translatey(200px);\n        transition: all 0.4s;\n        font-size: 1.1rem;\n\n        &::before {\n          //underLine ShopNow btn\n          content: "";\n          position: absolute;\n          width: 100%;\n          height: 2px;\n          background-color: white;\n          bottom: -5px;\n          transition: all 0.3s 0.3s linear;\n          transform-origin: center center;\n          transform: scale(0);\n        }\n      }\n      //end ShopNow btn\n\n      &:hover > :nth-child(3)::before {\n        //display ShopNow btn\n        width: 100%;\n        height: 2px;\n        transform: scale(1);\n      }\n      &:hover :nth-child(3) {\n        transform: translatey(0);\n      }\n      &:hover > :nth-child(2) {\n        //change title color\n        color: white;\n      }\n      &:hover::before {\n        //change block color to parpel\n        opacity: 0.9;\n        transition: all 1s;\n        background-color: ',";\n      }\n    }\n  }\n  //end Styled Link\n"])),(function(n){return n.theme.color}),N);function hn(){return Object(M.jsx)(jn,{children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)(C.b,{to:"/Shope",children:[Object(M.jsx)("img",{src:"images/banner-01.jpg",alt:"banner-01"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:"Women"}),Object(M.jsx)("h5",{style:{fontSize:"0.8rem"},children:"Spring 2021"})]}),Object(M.jsx)("div",{children:"Shope Now"})]}),Object(M.jsxs)(C.b,{to:"/Shope",children:[Object(M.jsx)("img",{src:"images/banner-02.jpg",alt:"banner-02"}),Object(M.jsxs)("div",{children:[" ",Object(M.jsx)("h4",{children:"Men"}),Object(M.jsx)("h5",{children:"Spring 2021"})]}),Object(M.jsx)("div",{children:"Shope Now"})]}),Object(M.jsxs)(C.b,{to:"/Shope",children:[Object(M.jsx)("img",{src:"images/banner-03.jpg",alt:"banner-03"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:"Accessories"}),Object(M.jsx)("h5",{children:"Spring 2021"})]}),Object(M.jsx)("div",{children:"Shope Now"})]})]})})}var pn,bn=v.c.div(sn||(sn=Object(w.a)(["\n  //Start Component\n  & > div {\n    & > h2 {\n    }\n    .ShowMoreBtn {\n      display: flex;\n      margin: auto;\n    }\n  }\n"]))),mn=v.c.div(ln||(ln=Object(w.a)(["\n  //component Filter btn\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  & > :first-child {\n    //Filter Type\n    display: flex;\n    & > span {\n      margin-right: 0.6rem;\n      font-size: 0.75rem;\n      cursor: pointer;\n\n      &.active {\n        color: ",";\n      }\n      @media (min-width: 575px) {\n        //medium and up screen\n        margin-right: 1rem;\n        font-size: 1.2rem;\n        font-weight: 400;\n      }\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  & > :nth-child(2) {\n    // box Search Btn & Advance filter Btn\n    font-size: 0.8rem;\n\n    & > button {\n      margin-right: 10px;\n      padding: 12px 10px;\n      border: 1px solid ",";\n\n      &::before {\n        padding-right: 10px;\n      }\n      &:hover {\n        background-color: ",";\n        color: white;\n        border-color: transparent;\n      }\n    }\n  }\n\n  @media (min-width: 575px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),N,N,(function(n){return n.theme.color}),N),xn=v.c.div(dn||(dn=Object(w.a)(["\n  //Search box\n  position: relative;\n  width: calc(100% - 50px);\n  border: 1px solid ",';\n  margin: 40px auto 0;\n  transition: all 3s;\n  display: none;\n\n  & > i {\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transform: translatey(-50%);\n    z-index: 3;\n  }\n  & > [type="search"] {\n    border: none;\n    position: relative;\n    padding: 0 30px;\n    width: 100%;\n    color: ',";\n    background-color: transparent;\n    height: 30px;\n    :focus {\n      border: none;\n      outline: none;\n    }\n  }\n  &.show {\n    display: block;\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.color})),fn=v.c.div(un||(un=Object(w.a)(["\n  display: grid;\n  justify-content: center;\n  gap: 15px;\n  padding-top: 40px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 250px));\n  & > a {\n    & > :first-child {\n      position: relative;\n      overflow: hidden;\n      & > img {\n        width: 100%;\n        transition: all 0.3s;\n      }\n      .Quickbutton {\n        //Quick View Btn\n        position: absolute;\n        z-index: 999;\n        bottom: -15%;\n        left: 50%;\n        transform: translate(-50%);\n        background-color: white;\n        color: black;\n\n        font-size: 0.9;\n        padding: 10px;\n        transition: all 0.3s;\n        &:hover {\n          background-color: black;\n          color: white;\n        }\n      }\n    }\n    &:hover > :first-child .Quickbutton {\n      bottom: 10%;\n    }\n    &:hover > :first-child img {\n      transform: scale(1.1);\n    }\n\n    & > :nth-child(2) {\n      padding: 10px 0;\n\n      text-align: start;\n      font-size: 1rem;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n  }\n"])));function On(n){var e=Object(h.useState)(!1),t=Object(g.a)(e,2),i=t[0],c=t[1],r=Object(T.c)((function(n){return n.productData})),a=Object(h.useState)([]),o=Object(g.a)(a,2),s=o[0],l=o[1],d=Object(h.useState)("All Products"),u=Object(g.a)(d,2),j=u[0],p=u[1],b=function(n){var e=n.target.value.toLowerCase();l(r.filter((function(n){return n.name.toLowerCase().includes(e)})))},m=function(n){return p(n),l("women"===n||"men"===n||"accessories"===n?r.filter((function(e){return e.category===n})):r)};return Object(h.useEffect)((function(){l(r)}),[r]),Object(M.jsx)(bn,{children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)("h2",{children:"PRODUCT OVERVIEW"}),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(mn,{children:[Object(M.jsxs)("div",{children:[" ",Object(M.jsx)("span",{className:"All Products"===j?"active":"",onClick:function(){return m("All Products")},children:"All Products"}),Object(M.jsx)("span",{className:"women"===j?"active":"",onClick:function(){return m("women")},children:"women"}),Object(M.jsx)("span",{className:"men"===j?"active":"",onClick:function(){return m("men")},children:"Men"}),Object(M.jsx)("span",{className:"accessories"===j?"active":"",onClick:function(){return m("accessories")},children:"Accessories"})]}),Object(M.jsx)("div",{children:Object(M.jsx)("button",{onClick:function(){return c(!i)},className:i?" fas fa-times ":"fas fa-search",children:"Search"})})]}),Object(M.jsxs)(xn,{className:i?"show":"",children:[Object(M.jsx)("i",{className:"fas fa-search"}),Object(M.jsx)("input",{onChange:b,type:"search",placeholder:"Search here !"})]})]}),Object(M.jsx)(fn,{children:s.map((function(n){return Object(M.jsxs)(C.b,{to:"/ProductDetails/".concat(n.id),children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:n.img,alt:"img"}),Object(M.jsx)(G,{customClass:"Quickbutton",value:"QUICK VIEW"})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:n.name}),Object(M.jsx)("span",{children:n.price})]})]},n.id)}))})]})})}function gn(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(on,{}),Object(M.jsx)(hn,{}),Object(M.jsx)(On,{})]})}var vn,wn,yn,Sn=v.c.div(pn||(pn=Object(w.a)(["\n  max-width: 100%;\n  min-width: 100%;\n  position: relative;\n  & > :nth-child(1) {\n    width: 100%;\n  }\n  & > :nth-child(2) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 3rem;\n    color: white;\n  }\n"])));function kn(n){var e=n.src,t=n.alt,i=n.titel;return Object(M.jsxs)(Sn,{children:[Object(M.jsx)("img",{src:e,alt:t}),Object(M.jsx)("div",{children:i})]})}var Cn,Nn,zn,An,qn,Pn=v.c.div(vn||(vn=Object(w.a)(['\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  margin: 65px 0;\n\n  @media (min-width: 676px) {\n    flex-direction: row;\n  }\n\n  & > :first-child {\n    // text box\n    & > :first-child {\n      //h3\n      font-weight: bold;\n      font-size: 1.8rem;\n      margin-bottom: 25px;\n    }\n\n    & > :nth-child(2) {\n      //paragraph\n      font-size: 1.05rem;\n      line-height: 1.8rem;\n    }\n  }\n\n  & > :nth-child(2) {\n    //img\n\n    position: relative;\n    width: 70%;\n    height: 400px;\n    margin: auto;\n    @media (min-width: 676px) {\n      width: 350px;\n      height: 375px;\n    }\n  }\n\n  .q {\n    position: relative;\n    margin-top: 66px;\n    display: block;\n    margin-left: 40px;\n    line-height: 2.2rem;\n\n    &:before {\n      content: "";\n      position: absolute;\n      left: -20px;\n      width: 2px;\n      height: 100%;\n      background-color: ',";\n    }\n  }\n"])),N),Tn=v.c.div(wn||(wn=Object(w.a)([""])));v.c.div(yn||(yn=Object(w.a)(["\n  max-width: 100%;\n  min-width: 100%;\n  position: relative;\n  & > :nth-child(1) {\n    width: 100%;\n  }\n  & > :nth-child(2) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 3rem;\n    color: white;\n  }\n"])));function In(){return Object(M.jsxs)(Tn,{children:[Object(M.jsx)(kn,{src:"/images/bg-02.jpg",alt:"about",titel:"ABOUT"}),Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)(Pn,{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Our Story"}),Object(M.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.",Object(M.jsx)("br",{})," ",Object(M.jsx)("br",{})," ",Object(M.jsx)("br",{})," Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879"]})]}),Object(M.jsx)("img",{src:"/images/about-01.jpg",alt:"about"})]}),Object(M.jsxs)(Pn,{children:[Object(M.jsxs)("div",{style:{order:"2"},children:[Object(M.jsx)("h3",{children:"Our Mission"}),Object(M.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879"}),Object(M.jsxs)("q",{className:"q",children:["Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.",Object(M.jsx)("div",{children:"- Steve Job\u2019s"})]})]}),Object(M.jsx)("img",{style:{order:"1"},src:"/images/about-02.jpg",alt:"about"})]})]})]})}var Dn=v.c.div(Cn||(Cn=Object(w.a)([""]))),Mn=(v.c.div(Nn||(Nn=Object(w.a)(["\n  width: 100%;\n  position: relative;\n  & > img {\n    width: 100%;\n    height: 60px;\n  }\n  & > h4 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 2rem;\n    color: white;\n  }\n"]))),v.c.div(zn||(zn=Object(w.a)(["\n  margin: 50px 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n  @media (min-width: 676px) {\n    flex-direction: row;\n  }\n"])))),Bn=v.c.div(An||(An=Object(w.a)(['\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  padding: 10px 0;\n  flex: 0 0 50%;\n\n  & > h4 {\n    font-size: 1.2rem;\n  }\n\n  & > form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n    align-items: center;\n\n    & > :first-child {\n      //box email\n      position: relative;\n      display: flex;\n      align-items: center;\n      padding: 0 2px;\n      width: 75%;\n\n      & > i {\n        //icon email\n        position: absolute;\n        left: 7px;\n        font-size: 2rem;\n      }\n\n      & > input[type="email"] {\n        //input email\n        width: 100%;\n        height: 40px;\n        background-color: transparent;\n        padding: 0 0 0 45px;\n        font-size: 1rem;\n        color: ',";\n        &:focus {\n          outline: none;\n        }\n      }\n    }\n\n    & > :nth-child(2) {\n      //txt area\n      width: 70%;\n      min-height: 75px;\n      height: 75px;\n      background-color: transparent;\n      padding: 10px;\n      resize: vertical;\n      overflow: hidden;\n      height: 202px;\n      font-size: 1rem;\n      color: ",";\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    & > :nth-child(3) {\n      //submit btn\n    }\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.color})),Ln=v.c.div(qn||(qn=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 50%;\n  gap: 40px;\n  padding: 20px 0;\n  align-items: center;\n  font-size: 1.2rem;\n  & > div {\n    //box\n    display: flex;\n\n    gap: 20px;\n    width: 70%;\n    & > :nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n  }\n"])));function En(){return Object(M.jsxs)(Dn,{children:[Object(M.jsx)(kn,{src:"/images/bg-01.jpg",alt:"Contact",titel:"Contact"}),Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)(Mn,{children:[Object(M.jsxs)(Bn,{children:[Object(M.jsx)("h4",{children:"Send Us A Message"}),Object(M.jsxs)("form",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("i",{className:"far fa-envelope"}),Object(M.jsx)("input",{type:"email",placeholder:"Your Email Address !"})]}),Object(M.jsx)("textarea",{placeholder:"How Can We Help"}),Object(M.jsx)(G,{type:"submit",value:"SUBMIT"})]})]}),Object(M.jsxs)(Ln,{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:"Address"}),Object(M.jsx)("p",{children:"Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US"})]})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("i",{className:"fas fa-phone-alt"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:"Lets Talk"}),Object(M.jsx)("a",{href:"tel:0796918885",children:"962796918885"})]})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("i",{className:"far fa-envelope"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:"Sale Support"}),Object(M.jsx)("a",{href:"mailto:omar.hija12@gmail.com",children:"omar.hija12@gmail.com"})]})]})]})]})})]})}var Fn,Un,Wn,Yn,Hn,Rn=function(){return Object(M.jsx)("div",{children:Object(M.jsx)(On,{})})},Vn=v.c.div(Fn||(Fn=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 41px;\n  align-items: center;\n  font-size: 1.5rem;\n  padding: 90px 11px;\n  border: 2px solid ",";\n  margin: 56px auto;\n  color: ",";\n  text-align: center;\n  line-height: 2.2rem;\n\n  & > a {\n    font-weight: bold;\n  }\n\n  & > :last-child,\n  > :first-child {\n    font-weight: bold;\n    font-size: 2rem;\n  }\n"])),N,N);function Qn(){return Object(M.jsxs)(Vn,{className:"container",children:[Object(M.jsx)("span",{children:"Hello"}),Object(M.jsx)("div",{children:"Thank You For Visiting Koza Store "}),Object(M.jsx)("div",{children:"Please shop some products and come Back Here ..."}),Object(M.jsxs)("div",{children:["If you want to contact us, please",Object(M.jsxs)(C.b,{to:"/Contact",children:[" ","","click here "]})]}),Object(M.jsx)("div",{children:" We are here to serve you with love"}),Object(M.jsx)("div",{children:"We wish you a pleasant shopping"})]})}var Jn=v.c.div(Un||(Un=Object(w.a)(["\n  padding: 15px;\n  border: 1px solid;\n  width: 100%;\n  & > h4 {\n    font-size: 1.2rem;\n    padding: 10px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid;\n  }\n  & > :nth-child(2) {\n    display: flex;\n    gap: 40px;\n    font-size: 1.1rem;\n    margin-bottom: 10px;\n    padding: 20px 0;\n    border-bottom: 1px solid;\n  }\n\n  & > :nth-child(3) {\n    display: flex;\n    gap: 40px;\n\n    & > :nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      & > p {\n        line-height: 1.5rem;\n      }\n    }\n  }\n"]))),Gn=v.c.div(Wn||(Wn=Object(w.a)(["\n  overflow: auto;\n  flex: 0 0 65%;\n  border: 1px solid;\n  width: 100%;\n\n  & > table {\n    border-collapse: collapse;\n    width: 100%;\n    height: 180px;\n    @media (min-width: 1287px) {\n      width: 100%;\n    }\n    & > tbody tr {\n      border-bottom: 1px solid;\n      & > td {\n        padding: 15px;\n        & > img {\n          width: 40px;\n          position: relative;\n          top: 20px;\n        }\n        @media (min-width: 676px) {\n          padding: 15px;\n        }\n      }\n    }\n  }\n"]))),Kn=v.c.div(Yn||(Yn=Object(w.a)(["\n  display: flex;\n  gap: 50px;\n  align-items: start;\n  flex-direction: column;\n\n  @media (min-width: 1287px) {\n    flex-direction: row;\n  }\n"]))),$n=v.c.div(Hn||(Hn=Object(w.a)(["\n  margin-top: 10px;\n  display: flex;\n  gap: 40px;\n  font-size: 1.2rem;\n  padding: 10px 0;\n  border-top: 1px solid;\n"])));function _n(){var n=Object(T.c)((function(n){return n.handelAddToCartReducer.cartItems})),e=Object(T.c)((function(n){return n.productData})),t=Object(h.useState)([]),i=Object(g.a)(t,2),c=i[0],r=i[1];Object(h.useEffect)((function(){r(n)}),[n]);return n.map((function(n){var t=e.find((function(e){return n.id==e.id})).price,i=c.reduce((function(n,e){return n.qnt*t+e.qnt*t}));console.log(i)})),Object(M.jsx)(M.Fragment,{children:0!==c.length?Object(M.jsxs)(Kn,{className:"container",children:[Object(M.jsx)(Gn,{children:Object(M.jsx)("table",{children:Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"PRODUCT"}),Object(M.jsx)("td",{children:" "}),Object(M.jsx)("td",{children:"Color"}),Object(M.jsx)("td",{children:"Size"}),Object(M.jsx)("td",{children:"Price"}),Object(M.jsx)("td",{children:"Total"})]}),c.map((function(t){var i=e.find((function(n){return n.id===Number(t.id)}));return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:Object(M.jsx)("img",{src:i.img,alt:"Product img"})}),Object(M.jsx)("td",{children:i.name}),Object(M.jsx)("td",{children:t.Color}),Object(M.jsx)("td",{children:t.Size}),Object(M.jsx)("td",{children:i.price}),Object(M.jsx)("td",{children:parseFloat(i.price)*parseFloat(t.qnt)}),Object(M.jsx)("td",{children:Object(M.jsx)("i",{onClick:function(){return e=t.id,void r(n.filter((function(n){return n.id!==e})));var e},className:"fas fa-trash-alt"})})]})}))]})})}),Object(M.jsxs)(Jn,{children:[Object(M.jsx)("h4",{children:"CART TOTAL"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:"SubTotal"}),Object(M.jsx)("div",{children:"999$"})]}),Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:"Shipping"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("p",{children:"There are no shipping methods available. Please double check your address, or contact us if you need any help."}),Object(M.jsx)("span",{children:"CALCULATION SHIPPING"}),Object(M.jsx)(nn,{label:"country",options:["USA","Jordan","KSA"],returnVal:function(n){return console.log(n)}})]})]}),Object(M.jsxs)($n,{children:[Object(M.jsx)("div",{children:"TOTAL "}),Object(M.jsx)("div",{children:"500$"})]})]})]}):Object(M.jsx)(Qn,{})})}var Xn,Zn,ne,ee,te,ie,ce=function(){return Object(M.jsxs)(L.c,{children:[Object(M.jsx)(L.a,{exact:!0,path:"/",element:Object(M.jsx)(gn,{})}),Object(M.jsx)(L.a,{exact:!0,path:"/About",element:Object(M.jsx)(In,{})}),Object(M.jsx)(L.a,{path:"/Shop",element:Object(M.jsx)(Rn,{})}),Object(M.jsx)(L.a,{path:"/ProductDetails/:id",element:Object(M.jsx)(en,{})}),Object(M.jsx)(L.a,{path:"/Contact",element:Object(M.jsx)(En,{})}),Object(M.jsx)(L.a,{path:"/CheckOut",element:Object(M.jsx)(_n,{})})]})},re=t(205),ae=t.n(re),oe=v.c.footer(Xn||(Xn=Object(w.a)(["\n  background-color: #222;\n  margin-top: 40px;\n  padding: 20px 0;\n  & > :first-child {\n    color: white;\n\n    display: flex;\n    gap: 28px;\n    flex-direction: column;\n    position: relative;\n    bottom: 0;\n    @media (min-width: 676px) {\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n  }\n"]))),se=v.c.div(Zn||(Zn=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  & > a {\n    :hover {\n      color: ",";\n    }\n  }\n"])),N),le=v.c.div(ne||(ne=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 0.5 0;\n  gap: 1rem;\n  justify-content: center;\n\n  & > p {\n    line-height: 1.8rem;\n    flex: 0 0 50%;\n  }\n"]))),de=v.c.div(ee||(ee=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  & > h4 {\n    flex: 0 0 100%;\n    margin-bottom: 20px;\n  }\n  & > a {\n    font-size: 2.2rem;\n    margin-right: 20px;\n\n    :hover {\n      color: ",";\n    }\n  }\n"])),N),ue=v.c.div(te||(te=Object(w.a)(['\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  & > form {\n    display: flex;\n    gap: 5%;\n\n    & > [type="email"] {\n      width: 67%;\n      height: 28px;\n      padding: 0 6px;\n      font-size: 1.2rem;\n      color: ',";\n      background: none;\n      border: none;\n      border-bottom: 1px solid ",";\n      :focus {\n        outline: none;\n      }\n    }\n    .Submit {\n      font-size: 0.8rem;\n    }\n  }\n  &h4 > {\n    flex: 0 0 100%;\n  }\n"])),N,N),je=v.c.div(ie||(ie=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  & > :first-child {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  & > :last-child {\n    padding: 20px 0;\n    text-align: center;\n    .color {\n      color: ",";\n    }\n  }\n\n  @media (min-width: 676px) {\n    flex: 0 0 100%;\n  }\n"])),N),he=function(){return Object(M.jsx)(oe,{children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)(se,{children:[Object(M.jsx)("h4",{children:"Categories"}),Object(M.jsx)(C.b,{to:"/",children:"Women"}),Object(M.jsx)(C.b,{to:"/",children:"Men"}),Object(M.jsx)(C.b,{to:"/",children:"Accessories"})]}),Object(M.jsxs)(de,{children:[Object(M.jsx)("h4",{children:"Contact US"}),Object(M.jsx)("a",{_blank:"true",className:"fab fa-facebook-square",href:"http://facebook.com",alt:"facebook",children:" "}),Object(M.jsx)("a",{className:"fab fa-instagram-square",href:"http://instagram.com",_blank:"true",alt:"instagram",children:" "}),Object(M.jsx)("a",{className:"fab fa-twitter-square",href:"http://twitter.com",_blank:"true",alt:"twitter",children:" "})]}),Object(M.jsxs)(le,{children:[Object(M.jsx)("h4",{children:"GET IN TOUCH"}),Object(M.jsx)("p",{children:"Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018"})]}),Object(M.jsxs)(ue,{children:[Object(M.jsx)("h4",{children:"NEWSLETTER"}),Object(M.jsxs)("form",{children:[Object(M.jsx)("input",{type:"email",placeholder:"example@email.com"}),Object(M.jsx)(G,{customClass:"Submit",type:"submit",value:"SUBSCRIBE"})]})]}),Object(M.jsxs)(je,{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:"/images/icons/icon-pay-01.png",alt:"paypal"}),Object(M.jsx)("img",{src:"/images/icons/icon-pay-02.png",alt:"Visa"}),Object(M.jsx)("img",{src:"/images/icons/icon-pay-03.png",alt:"masterCard"}),Object(M.jsx)("img",{src:"/images/icons/icon-pay-04.png",alt:"cashmone"}),Object(M.jsx)("img",{src:"/images/icons/icon-pay-05.png",alt:"zaincash"})]}),Object(M.jsxs)("p",{children:["Copyright \xa9 2021 All rights reserved | Made with \u2665 by",Object(M.jsxs)("a",{className:"color",href:"https://www.linkedin.com/in/omar-abu-alhija-a00a251a1/",children:[" ","Omar Abu alhija"]})]})]})]})})};var pe=function(){var n=Object(T.c)((function(n){return n.theme})),e=Object(h.useState)(!1),t=Object(g.a)(e,2),i=t[0],c=t[1],r=Object(T.b)();return Object(h.useEffect)((function(){var n=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae.a.get("https://my-json-server.typicode.com/omarabualhija/CozaStoreAPI/Slider");case 3:e=n.sent,r(I(e.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("sliderData API on APP JS",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=Object(O.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae.a.get("https://my-json-server.typicode.com/omarabualhija/CozaStoreAPI/product");case 3:e=n.sent,r(D(e.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("productData API on APP JS",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();Promise.all([e(),n()]).then((function(){return c(!0)}))}),[r]),Object(M.jsx)(M.Fragment,{children:i&&Object(M.jsxs)(v.a,{theme:n?S:k,children:[Object(M.jsx)(y,{}),Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(B,{}),Object(M.jsx)(ce,{}),Object(M.jsx)(he,{})]})]})})},be=t(15),me={theme:!1},xe={data:[]},fe={data:[]},Oe=Object(m.b)({theme:function(){var n=arguments.length>1?arguments[1]:void 0;return"theme"===n.type?me.theme=!me.theme:me.theme},sliderData:function(){var n=arguments.length>1?arguments[1]:void 0;return"sliderData"===n.type?xe.data=n.payload:xe.data},productData:function(n,e){return"product"===e.type?fe.data=e.payload:fe.data},handelAddToCartReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AddToCart":var t=e.payload,i=n.cartItems.find((function(n){return n.id===t.id}));return i?Object(F.a)(Object(F.a)({},n),{},{cartItems:Object(be.a)(n.cartItems.map((function(n){return n.id===i.id?t:n})))}):Object(F.a)(Object(F.a)({},n),{},{cartItems:[].concat(Object(be.a)(n.cartItems),[t])});default:return n}}}),ge=t(256),ve=Object(m.c)(Oe,Object(m.a)(ge.a));b.a.render(Object(M.jsx)(T.a,{store:ve,children:Object(M.jsx)(C.a,{children:Object(M.jsx)(pe,{})})}),document.getElementById("root"))}},[[311,1,2]]]);
//# sourceMappingURL=main.b3a7f312.chunk.js.map