(this["webpackJsonpdesign-home"]=this["webpackJsonpdesign-home"]||[]).push([[0],{150:function(e,t,a){e.exports=a(324)},155:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),o=a(78),l=a(36),s=(a(155),a(37));var m=function(e){var t=Object(s.f)();return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__title"},c.a.createElement("h1",{className:"home__titleFirst"},"DESIGN"),c.a.createElement("h2",{className:"home__titleSecond"},"HOME")),c.a.createElement("img",{className:"home__img",src:"./resources/home.png"}),c.a.createElement("div",{className:"home__buttons"},c.a.createElement("button",{onClick:function(){t.push("/Galeria")},className:"btn btn--noFill btn--optionsBar"},"Ver Galeria"),c.a.createElement("button",{onClick:function(){t.push("/dise\xf1o/")},className:"btn btn--fill"},"Comenzar")))},u=a(29),d=a(357),p=a(365),_=a(361),v=a(363),f=a(366),E=a(354),b=n.createContext({id:" ",setId:function(){return null},priceTotal:"",setPriceTotal:function(){return null},setInsensity:function(){return null},setNumberLamps:function(){return null},config:{intensity:1,numberLamps:" ",color:0,texture:" ",furniture:" ",picture:" "},setConfig:function(){return null},list:[],setList:function(){return null},handleFinish:function(){return null},handleDelete:function(){return null},handleRoomDelete:function(){return null}}),N=[{value:1,text:"Luminaria rejilla",cost:7e4},{value:2,text:"Luminaria plana",cost:13e4},{value:3,text:"Luminaria circular",cost:2e5}],h=[{value:1,cost:7e4},{value:2,cost:13e4},{value:3,cost:2e5},{value:4,cost:25e4},{value:5,cost:3e5}];var g=function(e){var t,a,n=c.a.useContext(b),r=Object(E.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))(),i=(null===(t=N.find((function(e){return e.value==n.config.numberLamps})))||void 0===t?void 0:t.cost)||0,o=(null===(a=h.find((function(e){return e.value==n.config.intensity})))||void 0===a?void 0:a.cost)||0;return c.a.createElement("div",{className:"optionOne"},c.a.createElement("div",{className:"optionOne__second"},c.a.createElement("h2",{className:"optionOne__secondLamps"},"Tipo de l\xe1mpara"),c.a.createElement(d.a,{className:r.formControl},c.a.createElement(p.a,{className:"optionOne__secondLabel",id:"demo-simple-select-label"},"Tipo de l\xe1mparas"),c.a.createElement(_.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n.config.numberLamps,onChange:function(e){n.setConfig(Object(u.a)({},n.config,{numberLamps:e.target.value}))},className:"optionOne__secondSelect"},N.map((function(e){return c.a.createElement(v.a,{value:e.value},e.text)})))),c.a.createElement("div",{className:"optionOne__secondPrice"},c.a.createElement("h4",{className:"optionOne__secondPriceTitle"},"Precio l\xe1mparas"),c.a.createElement("h4",{className:"optionOne__secondPriceNumber"},"$",i.toLocaleString()))),c.a.createElement("div",{className:"optionOne__first"},c.a.createElement("h2",{className:"optionOne__firstLuminity"},"Intensidad iluminaci\xf3n"),c.a.createElement(f.a,{className:"optionOne__firstRange",onChange:function(e,t){n.setConfig(Object(u.a)({},n.config,{intensity:t}))},value:n.config.intensity,defaultValue:1,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,min:1,max:3}),c.a.createElement("div",{className:"optionOne__firstPrice"},c.a.createElement("h4",{className:"optionOne__firstPriceTitle"},"Precio iluminaci\xf3n"),c.a.createElement("h4",{className:"optionOne__firstPriceNumber"},"$",o.toLocaleString()))))},S=a(142),L=[{value:1,cost:1e5},{value:2,cost:24e4},{value:3,cost:2e5}],C=[{value:1,cost:1e5},{value:2,cost:9e4},{value:3,cost:12e4},{value:4,cost:6e4},{value:5,cost:2e5},{value:6,cost:14e4},{value:7,cost:11e4},{value:8,cost:6e4}];var O=function(e){var t,a,n=c.a.useContext(b),r=(null===(t=L.find((function(e){return e.value==n.config.texture})))||void 0===t?void 0:t.cost)||0,i=(null===(a=C.find((function(e){return e.value==n.config.color})))||void 0===a?void 0:a.cost)||0;return" "==n.config.numberLamps?c.a.createElement(s.a,{to:"/dise\xf1o/iluminacion"}):c.a.createElement("div",{className:"optionSecond"},c.a.createElement("div",{className:"optionSecond__first"},c.a.createElement("h2",{className:"optionSecond__firstPainting"},"Pintura pared"),c.a.createElement(S.GithubPicker,{colors:["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB"],value:n.config.color,onChange:function(e){if("#b80000"===e.hex)var t=1;if("#db3e00"===e.hex)t=2;if("#fccb00"===e.hex)t=3;if("#008b02"===e.hex)t=4;if("#006b76"===e.hex)t=5;if("#1273de"===e.hex)t=6;if("#004dcf"===e.hex)t=7;if("#5300eb"===e.hex)t=8;n.setConfig(Object(u.a)({},n.config,{color:t}))}}),c.a.createElement("div",{className:"optionSecond__firstPrice"},c.a.createElement("h4",{className:"optionSecond__firstPriceTitle"},"Precio pintura"),c.a.createElement("h4",{className:"optionSecond__firstPriceNumber"},"$",i.toLocaleString()))),c.a.createElement("div",{className:"optionSecond__second"},c.a.createElement("h2",{className:"optionSecond__secondMaterial"},"Material del piso"),c.a.createElement("div",{className:"optionSecond__secondTexture"},[1,2,3].map((function(e){return c.a.createElement("div",{className:"optionSecond__secondTextureImg"},c.a.createElement("button",{onClick:function(){return function(e){n.setConfig(Object(u.a)({},n.config,{texture:e}))}(e)},className:"optionSecond__secondTextureImgBtn"},c.a.createElement("img",{src:"./resources/texture"+e+".jpg",alt:""})))}))),c.a.createElement("div",{className:"optionSecond__secondPrice"},c.a.createElement("h4",{className:"optionSecond__secondPriceTitle"},"Precio del material"),c.a.createElement("h4",{className:"optionSecond__secondPriceNumber"},"$",r.toLocaleString()))))};a(362);var B=[{value:1,cost:4e5},{value:2,cost:2e5},{value:3,cost:22e4},{value:4,cost:6e5},{value:5,cost:35e4},{value:6,cost:38e4}];var x=function(e){var t,a=c.a.useContext(b),n=(null===(t=B.find((function(e){return e.value==a.config.furniture})))||void 0===t?void 0:t.cost)||0;return c.a.createElement("div",{className:"thirdOptions"},c.a.createElement("h2",{className:"thirdOptions__title"},"Muebleria"),c.a.createElement("div",{className:"thirdOptions__elem"},[1,2,3,4,5,6].map((function(e){return c.a.createElement("div",{className:"thirdOptions__elemImg"},c.a.createElement("button",{onClick:function(){return function(e){a.setConfig(Object(u.a)({},a.config,{furniture:e}))}(e)},className:"thirdOptions__elemImgBtn"},c.a.createElement("img",{src:"./resources/mueble"+e+".png",alt:""})))}))),c.a.createElement("div",{className:"optionSecond__secondPrice"},c.a.createElement("h4",{className:"optionSecond__secondPriceTitle"},"Precio del mueble"),c.a.createElement("h4",{className:"optionSecond__secondPriceNumber"},"$",n.toLocaleString())))},P=a(364),y=function(e){e.id,e.priceTotal;var t=e.intensity,a=e.numberLamps,n=e.color,r=e.texture,i=e.furniture,o=e.picture,l=c.a.useContext(b),s=[];c.a.useEffect((function(){l.setId(Object(P.a)())}),[]);var m={backgroundImage:"url(".concat("./resources/pared"+n+".jpg",")"),width:"100%",height:"100%"};return 1==t&&(s=[{cantLamps:" "}]),2==t&&(s=[{cantLamps:" "},{cantLamps:" "}]),3==t&&(s=[{cantLamps:" "},{cantLamps:" "},{cantLamps:" "}]),c.a.createElement("div",{className:"Room__container"},c.a.createElement("div",{style:m,className:"Room"},c.a.createElement("div",{className:"Room__lamps"},s.map((function(e){return c.a.createElement("div",{className:"imgLamps"},c.a.createElement("img",{className:"imgLamps__lamp",src:"./resources/lamp"+a+".png"}))})))," "!=i&&c.a.createElement("div",{className:"Room__furniture"},c.a.createElement("img",{className:"Room__furnitureImg",src:"./resources/mueble"+i+".png"}))," "!=o&&c.a.createElement("div",{className:"Room__picture"},c.a.createElement("img",{className:"Room__pictureImg",src:"./resources/cuadro"+o+".png"}))," "!=r&&c.a.createElement("div",{className:"Room__floor"},c.a.createElement("img",{className:"Room__floorImg",src:"./resources/piso"+r+".png"}))))};a(323);var T=function(e){var t=c.a.useContext(b),a=Object(s.f)();return c.a.createElement("div",{className:"GalleryMain"},c.a.createElement("h2",null,"Galeria Design Home"),c.a.createElement("div",{className:"GalleryMain__container"},t.list.map((function(e,a){return c.a.createElement("div",{className:"GalleryMain__elem"},c.a.createElement(y,{color:e.color,id:e.id,intensity:e.intensity,numberLamps:e.numberLamps,texture:e.texture,furniture:e.furniture,picture:e.picture,priceTotal:e.priceTotal}),c.a.createElement("div",{className:"GalleryMain__elemFooter"},c.a.createElement("img",{onClick:function(){return a=e.id,console.log(a),void t.handleRoomDelete(a);var a},className:"GalleryMain__elemFooterDelete",src:"./resources/delete.png",alt:""}),c.a.createElement("img",{onClick:function(){e.id},className:"GalleryMain__elemFooterDownload",src:"./resources/download.png",alt:""}),c.a.createElement("h2",null,"Precio total: $",e.priceTotal.toLocaleString())))}))),c.a.createElement("div",{className:"GalleryMain__buttons"},c.a.createElement("button",{onClick:function(){a.push("/dise\xf1o")},className:"btn btn--fill btn--optionsBar"},"Crear nuevo dise\xf1o"),t.list.length>0&&c.a.createElement("button",{onClick:function(){t.handleDelete()},className:"btn btn--noFill btn--optionsBar"},"Borrar toda la galeria")))},I=[{value:1,cost:1e5},{value:2,cost:12e4},{value:3,cost:2e5},{value:4,cost:7e4},{value:5,cost:14e4},{value:6,cost:8e4}];var j=function(e){var t,a=c.a.useContext(b),n=(null===(t=I.find((function(e){return e.value==a.config.picture})))||void 0===t?void 0:t.cost)||0;return c.a.createElement("div",{className:"FourthOptions"},c.a.createElement("h2",{className:"FourthOptions__title"},"Cuadros"),c.a.createElement("div",{className:"FourthOptions__elem"},[1,2,3,4,5,6].map((function(e){return c.a.createElement("div",{className:"FourthOptions__elemImg"},c.a.createElement("button",{onClick:function(){return function(e){a.setConfig(Object(u.a)({},a.config,{picture:e}))}(e)},className:"FourthOptions__elemImgBtn"},c.a.createElement("img",{src:"./resources/cuadro"+e+".png",alt:""})))}))),c.a.createElement("div",{className:"optionSecond__secondPrice"},c.a.createElement("h4",{className:"optionSecond__secondPriceTitle"},"Precio del cuadro"),c.a.createElement("h4",{className:"optionSecond__secondPriceNumber"},"$",n.toLocaleString())))};var k=function(e){var t=c.a.useState(!0),a=Object(l.a)(t,2),n=(a[0],a[1],c.a.useContext(b)),r=Object(s.f)(),i="",o="Continuar";return e.match.params.id?("iluminacion"===e.match.params.id&&(i="/dise\xf1o/pintura"),"pintura"===e.match.params.id&&(i="/dise\xf1o/muebleria"),"muebleria"===e.match.params.id&&(i="/dise\xf1o/cuadros"),"cuadros"===e.match.params.id&&(o="Finalizar",i="/Galeria"),c.a.createElement("div",{className:"step"},c.a.createElement("div",{className:"step__bar"},c.a.createElement("button",{className:"btn btn--help step__barHelp"},"?"),c.a.createElement("img",{className:"step__barLogo",src:"./resources/logo.png"}),c.a.createElement("div",{className:"step__barPrice"},c.a.createElement("h1",{className:"step__barPriceTitle"},"Total"),c.a.createElement("h1",{className:"step__barPriceNumber"},"$",n.priceTotal.toLocaleString()," ")),c.a.createElement("div",{className:"step__barSeparator"},c.a.createElement("h2",{className:"step__barSeparatorTitle"},"Escoge tus opciones")),c.a.createElement("div",{className:"step__barOptions"},c.a.createElement(s.b,{path:"/dise\xf1o/iluminacion",component:g}),c.a.createElement(s.b,{path:"/dise\xf1o/pintura",component:O}),c.a.createElement(s.b,{path:"/dise\xf1o/muebleria",component:x}),c.a.createElement(s.b,{path:"/dise\xf1o/cuadros",component:j}),c.a.createElement(s.b,{path:"/dise\xf1o/galeria",component:T})),c.a.createElement("div",{className:"step__barButtons"},c.a.createElement("button",{onClick:function(){r.push("/Galeria")},className:"btn btn--noFill btn--optionsBar"},"Ver Galeria"),c.a.createElement("button",{onClick:function(){"cuadros"===e.match.params.id&&(n.handleFinish(),o="Finalizar",i="/Galeria"),r.push(i)},className:"btn btn--fill btn--optionsBar"},o))))):(i="/dise\xf1o/iluminacion",c.a.createElement(s.a,{to:"/dise\xf1o/iluminacion"}))},F=a(25),G=a(359),D=function(e){e.id,e.intensity,e.numberLamps,e.color;return n.createElement("div",null,n.createElement(G.a,null))};var R=function(e){return c.a.createElement("div",{className:"navBar"},c.a.createElement("div",{className:"navBar__step"},c.a.createElement(F.b,{className:"link",to:"/dise\xf1o/iluminacion"},c.a.createElement("div",{className:"navBar__stepState"},c.a.createElement("div",{className:"navBar__stepStateCircle navBar__stepStateCircle".concat("iluminacion"!=e.route&&"--done")},"1"),c.a.createElement("p",{className:"navBar__stepStateTitle"},"Iluminaci\xf3n"))),c.a.createElement("div",{className:"navBar__stepLine navBar__stepLine".concat("iluminacion"!=e.route&&"--done")})),c.a.createElement("div",{className:"navBar__step"},c.a.createElement(F.b,{className:"link",to:"/dise\xf1o/pintura"},c.a.createElement("div",{className:"navBar__stepState"},c.a.createElement("div",{className:"navBar__stepStateCircle navBar__stepStateCircle".concat("pintura"!=e.route&&"iluminacion"!=e.route&&"--done")},"2"),c.a.createElement("p",{className:"navBar__stepStateTitle"},"Pintura"))),c.a.createElement("div",{className:"navBar__stepLine navBar__stepLine".concat("pintura"!=e.route&&"iluminacion"!=e.route&&"--done")})),c.a.createElement("div",{className:"navBar__step"},c.a.createElement(F.b,{className:"link",to:"/dise\xf1o/muebleria"},c.a.createElement("div",{className:"navBar__stepState"},c.a.createElement("div",{className:"navBar__stepStateCircle navBar__stepStateCircle".concat("pintura"!=e.route&&"iluminacion"!=e.route&&"muebleria"!=e.route&&"--done")},"3"),c.a.createElement("p",{className:"navBar__stepStateTitle"},"Muebleria"))),c.a.createElement("div",{className:"navBar__stepLine navBar__stepLine".concat("pintura"!=e.route&&"iluminacion"!=e.route&&"muebleria"!=e.route&&"--done")})),c.a.createElement("div",{className:"navBar__step"},c.a.createElement(F.b,{className:"link",to:"/dise\xf1o/cuadros"},c.a.createElement("div",{className:"navBar__stepState"},c.a.createElement("div",{className:"navBar__stepStateCircle navBar__stepStateCircle".concat("pintura"!=e.route&&"iluminacion"!=e.route&&"muebleria"!=e.route&&"cuadros"!=e.route&&"--done")},"4"),c.a.createElement("p",{className:"navBar__stepStateTitle"},"Cuadros")))))},M=a(360),$=a(144);var w=function(){var e,t,a,n,r,i,u=c.a.useState(" "),d=Object(l.a)(u,2),p=d[0],_=d[1],v=c.a.useState({intensity:1,numberLamps:" ",color:0,texture:" ",furniture:" ",picture:" "}),f=Object(l.a)(v,2),E=f[0],g=f[1],S=c.a.useState([]),O=Object(l.a)(S,2),x=O[0],P=O[1],j=((null===(e=N.find((function(e){return e.value==E.numberLamps})))||void 0===e?void 0:e.cost)||0)+((null===(t=h.find((function(e){return e.value==E.intensity})))||void 0===t?void 0:t.cost)||0)+((null===(a=L.find((function(e){return e.value==E.texture})))||void 0===a?void 0:a.cost)||0)+((null===(n=B.find((function(e){return e.value==E.furniture})))||void 0===n?void 0:n.cost)||0)+((null===(r=I.find((function(e){return e.value==E.picture})))||void 0===r?void 0:r.cost)||0)+((null===(i=C.find((function(e){return e.value==E.color})))||void 0===i?void 0:i.cost)||0);c.a.useEffect((function(){var e=localStorage.getItem("list");null!==e&&P(JSON.parse(e))}),[]),c.a.useEffect((function(){localStorage.setItem("list",JSON.stringify(x))}),[x]);var G={id:p,setId:_,priceTotal:j,config:E,setConfig:g,list:x,setList:P,handleFinish:function(){P([].concat(Object(o.a)(x),[{id:p,priceTotal:j,intensity:E.intensity,numberLamps:E.numberLamps,color:E.color,texture:E.texture,furniture:E.furniture,picture:E.picture}])),g({intensity:1,numberLamps:" ",color:0,texture:" ",furniture:" ",picture:" "})},handleDelete:function(){P([])},handleRoomDelete:function(e){var t=x.findIndex((function(t){return t.id===e}));P([].concat(Object(o.a)(x.slice(0,t)),Object(o.a)(x.slice(t+1))))}};return c.a.createElement(M.a,{backend:$.a},c.a.createElement("div",{className:"App"},c.a.createElement(b.Provider,{value:G},c.a.createElement(F.a,null,c.a.createElement(s.b,{path:"/dise\xf1o",render:function(){return c.a.createElement(D,{color:E.color,id:p,intensity:E.intensity,numberLamps:E.numberLamps})}}),c.a.createElement(s.b,{path:"/",exact:!0,component:m}),c.a.createElement(s.b,{path:"/dise\xf1o/:id?",render:function(e){return c.a.createElement("div",{className:"Design"},c.a.createElement(R,{route:e.match.params.id}),c.a.createElement(y,{id:p,priceTotal:j,intensity:E.intensity,numberLamps:E.numberLamps,color:E.color,texture:E.texture,furniture:E.furniture,picture:E.picture}),c.a.createElement(k,{match:e.match}))}}),c.a.createElement(s.b,{path:"/Galeria",component:T})))))};i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.f906e0ad.chunk.js.map