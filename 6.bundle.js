(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,a){"use strict";t.a=a.p+"imgs/logo-2-1.png"},107:function(e,t,a){"use strict";t.a=a.p+"imgs/2453867e820b312541fee6a4b40798c6.png"},108:function(e,t,a){"use strict";t.a=a.p+"imgs/363dd723f6d87e2b17072d1eb23bf87f.png"},109:function(e,t,a){"use strict";t.a=a.p+"imgs/08b6c8662c7afef67b33ac23bb37f1e2.png"},110:function(e,t,a){"use strict";t.a=a.p+"imgs/6bf4a20dde8b7d8e6c92c2565c5f8a6b.png"},111:function(e,t,a){"use strict";a.d(t,"b",(function(){return k})),a.d(t,"c",(function(){return C})),a.d(t,"a",(function(){return S}));var n=a(100),r=a.n(n),i=a(101),o=a.n(i),c=a(89),l=a(31),s=a(84),u=a(94),m=a(35),d=a.n(m),p=a(36),f=a.n(p),g=a(34),b=a.n(g),v=a(107),y=a(108),h=a(109),E=a(110),j=function(){function e(){d()(this,e)}return f()(e,null,[{key:"getAll",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){return t(e.doctors)}),500)}))}},{key:"getByName",value:function(e){var t=this;return new Promise((function(a){setTimeout((function(){return a(t.doctors.find((function(t){return t.name===e})))}),500)}))}},{key:"getBySpeciality",value:function(e){var t=this;return new Promise((function(a){setTimeout((function(){return a(t.doctors.filter((function(t){return t.speciality===e.title})))}),500)}))}}]),e}();b()(j,"doctors",[{name:"Dr Radha",experience:10,degree:"MBBS MD",speciality:"Gastro Entomologist",avatar:E.a,rate:"500",availibility:"4:50"},{name:"Dr Ram",experience:12,degree:"MBBS MD",speciality:"Cardiology",avatar:h.a,rate:"450",availibility:"4:20"},{name:"Dr Laksman",experience:8,degree:"MBBS MD",speciality:"Naphrology",avatar:y.a,rate:"600",availibility:"6:50"},{name:"Dr Suman",experience:18,degree:"MBBS MD",speciality:"Rheumatology",avatar:v.a,rate:"750",availibility:"5:20"}]);var O,x,w=j,N={doctor:s.a},k=Object(c.a)("doctorControlAtom",N),C=Object(l.c)({key:"doctorQuery",get:(O=o()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return O.apply(this,arguments)})}),S=(Object(l.c)({key:"clearDoctor",set:function(e){(0,e.set)(k,s.a)}}),Object(l.c)({key:"setDoctor",set:function(e,t){(0,e.set)(k,t)}}),Object(l.d)({key:"doctorByNameQuery",get:function(e){return o()(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getByName(e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))}}),Object(l.d)({key:"doctorBySpecilityQuery",get:function(e){return o()(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getBySpeciality(e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))}}),Object(l.c)({key:"doctorBySpecilityFilterQuery",get:(x=o()(r.a.mark((function e(t){var a,n,i,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.get,n=a(u.a),i=a(k),n.speciality!==s.a||i.doctor!==s.a){e.next=11;break}return e.next=6,w.getAll();case 6:return o=e.sent,console.log("spec and doc is not present"),e.abrupt("return",o);case 11:if(!i.doctor){e.next=20;break}return console.log("doc is  present",i),e.next=15,w.getByName(i.name);case 15:return c=e.sent,console.table(c),e.abrupt("return",c);case 20:return console.log("spec is  present",n),e.next=23,w.getBySpeciality(n);case 23:return l=e.sent,e.abrupt("return",l);case 25:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)})}))},114:function(e,t,a){var n=a(32),r=a(115);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},115:function(e,t,a){(t=a(33)(!1)).push([e.i,".MuiPaper-elevation4 {\n    box-shadow: 0px 0px 0px 0px\n}",""]),e.exports=t},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return M}));var n=a(90),r=a.n(n),i=a(87),o=a.n(i),c=a(233),l=a(236),s=a(238),u=a(239),m=a(240),d=a(232),p=a(260),f=a(242),g=a(243),b=a(261),v=a(248),y=a(0),h=a.n(y),E=(a(114),a(50)),j=a(234),O=a(235),x=a(105),w=a.p+"imgs/outline_perm_identity_white_24dp.png",N=a.p+"imgs/keyboard_arrow_down-24px (4).svg",k=a(3),C=h.a.forwardRef((function(e,t){return h.a.createElement(c.a,o()({direction:"left",ref:t},e))})),S=Object(E.a)({palette:{primary:{main:"#40484F"}}}),B=Object(j.a)((function(e){return{root:{flexGrow:1,boxShadow:0,shadows:0},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1}}}));var M=function(){var e=B(),t=Object(k.f)(),a=h.a.useState(!1),n=r()(a,2),i=n[0],o=n[1],c=function(){o(!1)};return h.a.createElement(O.a,{theme:S},h.a.createElement("div",{className:e.root},h.a.createElement(l.a,{position:"static"},h.a.createElement(s.a,null,h.a.createElement(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},h.a.createElement("img",{src:x.a})),h.a.createElement(m.a,{variant:"h6",className:e.title},"Board of Doctors"),h.a.createElement("img",{src:w}),h.a.createElement(d.a,{color:"inherit",onClick:function(){o(!0)}},"Login "),h.a.createElement(p.a,{open:i,onClose:c,"aria-labelledby":"form-dialog-title",TransitionComponent:C,keepMounted:!0},h.a.createElement(f.a,{id:"form-dialog-title"},"Login"),h.a.createElement(g.a,null,h.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0}),h.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0})),h.a.createElement(v.a,null,h.a.createElement(d.a,{onClick:c,color:"primary"},"Cancel"),h.a.createElement(d.a,{onClick:function(){t.push("/schedulePage")},color:"primary"},"Login"))),h.a.createElement("img",{src:N})))))}},168:function(e,t,a){var n=a(32),r=a(169);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},169:function(e,t,a){(t=a(33)(!1)).push([e.i,".SchedulePage-module__filterContainer___3hDaw{\n    padding-left: 5rem;\n}",""]),t.locals={filterContainer:"SchedulePage-module__filterContainer___3hDaw"},e.exports=t},170:function(e,t,a){var n=a(32),r=a(171);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},171:function(e,t,a){(t=a(33)(!1)).push([e.i,"",""]),e.exports=t},172:function(e,t,a){var n=a(32),r=a(173);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},173:function(e,t,a){(t=a(33)(!1)).push([e.i,"",""]),e.exports=t},254:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(0),r=a.n(n),i=a(2),o=a.n(i),c=a(168),l=a.n(c),s=a(124),u=a(231),m=a(90),d=a.n(m),p=a(1),f=a(4),g=a(21),b=a(237),v=a(29),y=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.raised,o=void 0!==i&&i,c=Object(f.a)(e,["classes","className","raised"]);return n.createElement(b.a,Object(p.a)({className:Object(g.a)(a.root,r),elevation:o?8:1,ref:t},c))})),h=Object(v.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(y),E=a(257),j=n.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,o=e.focusVisibleClassName,c=Object(f.a)(e,["children","classes","className","focusVisibleClassName"]);return n.createElement(E.a,Object(p.a)({className:Object(g.a)(r.root,i),focusVisibleClassName:Object(g.a)(o,r.focusVisible),ref:t},c),a,n.createElement("span",{className:r.focusHighlight}))})),O=Object(v.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(j),x=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,i=e.classes,o=e.className,c=Object(f.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(p.a)({className:Object(g.a)(i.root,o,!r&&i.spacing),ref:t},c))})),w=Object(v.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(x),N=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,o=void 0===i?"div":i,c=Object(f.a)(e,["classes","className","component"]);return n.createElement(o,Object(p.a)({className:Object(g.a)(a.root,r),ref:t},c))})),k=Object(v.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(N),C=["video","audio","picture","iframe","img"],S=n.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,o=e.component,c=void 0===o?"div":o,l=e.image,s=e.src,u=e.style,m=Object(f.a)(e,["children","classes","className","component","image","src","style"]),d=-1!==C.indexOf(c),b=!d&&l?Object(p.a)({backgroundImage:'url("'.concat(l,'")')},u):u;return n.createElement(c,Object(p.a)({className:Object(g.a)(r.root,i,d&&r.media,-1!=="picture img".indexOf(c)&&r.img),ref:t,style:b,src:d?l||s:void 0},m),a)})),B=Object(v.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(S),M=a(232),_=a(240),R=a(170),D=a.n(R);a(107),a(108),a(109),a(110);var A=function(e){var t=e.doctor;return console.log(t.avatar),r.a.createElement("div",null,r.a.createElement(h,{className:D.a.card,style:{justifyContent:"center",alignItems:"center"}},r.a.createElement(O,null,r.a.createElement(B,{style:{height:"80%",width:"80%",borderRadius:"50%",textAlign:"center",justifyContent:"center",alignItems:"center",paddingTop:"100%"},image:t.avatar}),r.a.createElement(k,null,r.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(_.a,{variant:"body2",component:"p"},t.experience),r.a.createElement(_.a,{variant:"body2",component:"p"},t.speciality))),r.a.createElement(w,null,r.a.createElement(M.a,{size:"small",color:"primary"},"Schedule Now"))))},I=(a(172),a(94)),P=a(111),G=a(31);function T(){Object(G.f)(P.c),Object(G.f)(I.b);var e=Object(G.f)(P.a),t=Object(G.e)(P.b),a=d()(t,2),n=(a[0],a[1],Object(G.e)(I.a)),i=d()(n,2);i[0],i[1];return 0===e.length?r.a.createElement("h3",null,"No doctors for specified speciality"):e.map((function(e,t){return r.a.createElement(u.a,{container:!0,className:"gridContainer",display:u.a,spacing:2},r.a.createElement(u.a,{item:!0,xs:2},r.a.createElement(A,{key:t,doctor:e})))}))}var L=a(246),H=a(264),V=a(255),F=a(11),Q=a(249),z=n.forwardRef((function(e,t){var a,r=e.classes,i=e.className,o=e.component,c=void 0===o?"li":o,l=e.disableGutters,s=void 0!==l&&l,u=e.ListItemClasses,m=e.role,d=void 0===m?"menuitem":m,b=e.selected,v=e.tabIndex,y=Object(f.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==v?v:-1),n.createElement(Q.a,Object(p.a)({button:!0,role:d,tabIndex:a,component:c,selected:b,disableGutters:s,classes:Object(p.a)({dense:r.dense},u),className:Object(g.a)(r.root,i,b&&r.selected,!s&&r.gutters),ref:t},y))})),W=Object(v.a)((function(e){return{root:Object(p.a)({},e.typography.body1,Object(F.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(p.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(z),$=a(234),J=Object($.a)((function(e){return{formControl:{minWidth:150,margin:"dense"},selectEmpty:{},mainContainer:{margin:"dense",paddingBottom:"120"}}}));var q=function(){var e=J(),t=Object(n.useState)(""),a=d()(t,2),i=a[0],o=a[1],c=Object(n.useState)(""),l=d()(c,2),s=l[0],m=l[1],p=Object(n.useState)(""),f=d()(p,2),g=f[0],b=f[1];return r.a.createElement(u.a,{container:!0,className:e.mainContainer},r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(L.a,{className:e.formControl},r.a.createElement(H.a,{id:"demo-simple-select-label"},"Speciality"),r.a.createElement(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i,onChange:function(e){o(e.target.value)}},r.a.createElement(W,{value:"Naphrology"},"Naphrology"),r.a.createElement(W,{value:"Cardiology"},"Cardiology"),r.a.createElement(W,{value:"Gastro Entomologist"},"Gastro Entomologist"),r.a.createElement(W,{value:"Rheumatology"},"Rheumatology")))),r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(L.a,{className:e.formControl},r.a.createElement(H.a,{id:"demo-simple-select-label"},"Availibility"),r.a.createElement(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,onChange:function(e){m(e.target.value)}},r.a.createElement(W,{value:1},"1"),r.a.createElement(W,{value:2},"2"),r.a.createElement(W,{value:3},"3"),r.a.createElement(W,{value:4},"4"),r.a.createElement(W,{value:5},"5"),r.a.createElement(W,{value:6},"6")))),r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(L.a,{className:e.formControl},r.a.createElement(H.a,{id:"demo-simple-select-label"},"Location"),r.a.createElement(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:g,onChange:function(e){b(e.target.value)}},r.a.createElement(W,{value:"Bangalore"},"Bangalore"),r.a.createElement(W,{value:"Mumbai"},"Mumbai"),r.a.createElement(W,{value:"Guwahati"},"Guwahati"),r.a.createElement(W,{value:"Pune"},"Pune"),r.a.createElement(W,{value:"Surat"},"Surat"),r.a.createElement(W,{value:"Delhi"},"Delhi")))))},K=function(e){e.history;return r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(s.a,null)),r.a.createElement(u.a,{item:!0,xs:12,className:l.a.filterContainer},r.a.createElement(q,null)),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(T,null)),r.a.createElement(u.a,{item:!0,xs:12}),r.a.createElement(u.a,{item:!0,xs:12}))};K.propTypes={history:o.a.object.isRequired};var U=K},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n={},r=""},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(31),r=function(e,t){return Object(n.b)({key:e,default:t})}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return w})),a.d(t,"b",(function(){return N}));var n=a(100),r=a.n(n),i=a(101),o=a.n(i),c=a(89),l=a(31),s=a(84),u=a(35),m=a.n(u),d=a(36),p=a.n(d),f=a(34),g=a.n(f),b=a.p+"imgs/kidneys.svg",v=a.p+"imgs/knee.svg",y=a.p+"imgs/stomach.svg",h=a.p+"imgs/heart (1).svg",E=function(){function e(){m()(this,e)}return p()(e,null,[{key:"getAll",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){return t(e.speciality)}),500)}))}},{key:"getByTitle",value:function(e){var t=this;return new Promise((function(a){setTimeout((function(){return a(t.doctors.find((function(t){return t.title===e})))}),500)}))}}]),e}();g()(E,"speciality",[{title:"Rheumatology",icon:v},{title:"Gastro Entomologist",icon:y},{title:"Naphrology",icon:b},{title:"Cardiology",icon:h}]);var j,O=E,x={speciality:s.a},w=Object(c.a)("specialityControlAtom",x),N=Object(l.c)({key:"specialityQuery",get:(j=o()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return j.apply(this,arguments)})});Object(l.c)({key:"clearSpeciality",set:function(e){(0,e.set)(w,s.a)}}),Object(l.c)({key:"setSpecality",set:function(e,t){(0,e.set)(w,t)}})}}]);