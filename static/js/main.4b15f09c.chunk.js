(this["webpackJsonpdrx-demo"]=this["webpackJsonpdrx-demo"]||[]).push([[0],{41:function(e,a,t){e.exports=t(68)},46:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(10),r=t.n(i),c=(t(46),t(27)),o=t(28),u=t(29),s=t(38),m=t(30),d=t(7),h=t(40),f=t(71),E=t(74),v=t(72),p=t(33),b=t(73),y=t(76),g=t(34),C=t(35),k=t(75),M=t(31),x=t.n(M),F=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={frequency:"101",duration:"1",durationType:"days",instructions:"After Meal",medicine:"",medicineGroup:[]},t.handleConcatFunction=t.handleConcatFunction.bind(Object(d.a)(t)),t.handleChangeFunction=t.handleChangeFunction.bind(Object(d.a)(t)),t.addMedicince=t.addMedicince.bind(Object(d.a)(t)),t.clearMedicine=t.clearMedicine.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){x.a.get("https://bfhlapiservice.azure-api.net/self-learning-dev/rest/masterListrx/medicine",{headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":"a42d2bc16d9142c8bb598d3e40f4ba24"},params:{name:"dolo"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"addMedicince",value:function(){var e=this.state.medicineGroup;e.push(this.state.medicine),this.setState({medicineGroup:e})}},{key:"clearMedicine",value:function(e){var a=this.state.medicineGroup,t=a.indexOf(e);t>-1&&(a.splice(t,1),this.setState({medicineGroup:a}))}},{key:"handleChangeFunction",value:function(e){this.setState({medicine:e.target.value})}},{key:"handleConcatFunction",value:function(e){var a=this;this.setState(Object(c.a)({},e.target.name,e.target.value),(function(){a.setState({medicine:a.state.frequency+"/"+a.state.duration+a.state.durationType+"/"+a.state.instructions})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,l.a.createElement("br",null),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"formGridAddress1"},l.a.createElement(E.a.Control,{value:this.state.medicine,placeholder:"Search Medicine",type:"text",onChange:this.handleChangeFunction}),l.a.createElement("hr",null),l.a.createElement(v.a,null,l.a.createElement(p.a,{xs:3},l.a.createElement("label",null,"Frequency")),l.a.createElement(p.a,{xs:9},l.a.createElement(b.a,null,l.a.createElement(y.a,{type:"radio",name:"frequency",defaultValue:101,onClick:this.handleConcatFunction},l.a.createElement(g.a,{variant:"outline-info",value:101},"101"),l.a.createElement(g.a,{variant:"outline-info",value:111},"111"),l.a.createElement(g.a,{variant:"outline-info",value:110},"110"))))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(p.a,{xs:3},l.a.createElement("label",null,"Duration")),l.a.createElement(p.a,{xs:2},l.a.createElement(b.a,null,l.a.createElement(y.a,{type:"radio",name:"duration",defaultValue:1,onClick:this.handleConcatFunction},l.a.createElement(g.a,{variant:"outline-info",value:1},"1"),l.a.createElement(g.a,{variant:"outline-info",value:2},"2"),l.a.createElement(g.a,{variant:"outline-info",value:3},"3"),l.a.createElement(g.a,{variant:"outline-info",value:4},"4"),l.a.createElement(g.a,{variant:"outline-info",value:5},"5"),l.a.createElement(g.a,{variant:"outline-info",value:6},"6"),l.a.createElement(g.a,{variant:"outline-info",value:7},"7")))),l.a.createElement(p.a,{xs:{span:2,offset:1}},l.a.createElement(b.a,null,l.a.createElement(y.a,{type:"radio",name:"durationType",defaultValue:"days",onClick:this.handleConcatFunction},l.a.createElement(g.a,{variant:"outline-info",value:"days"},"days"),l.a.createElement(g.a,{variant:"outline-info",value:"weeks"},"weeks"),l.a.createElement(g.a,{variant:"outline-info",value:"months"},"months"))))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(p.a,{xs:3},l.a.createElement("label",null,"Instructions")),l.a.createElement(p.a,{xs:9},l.a.createElement(b.a,null,l.a.createElement(y.a,{type:"radio",name:"instructions",defaultValue:"After Meal",onClick:this.handleConcatFunction},l.a.createElement(g.a,{variant:"outline-info",value:"Before Meal"},"Befor Meal"),l.a.createElement(g.a,{variant:"outline-info",value:"After Meal"},"After Meal"))))),l.a.createElement("br",null))),l.a.createElement(v.a,null,l.a.createElement(p.a,{xs:{offset:11,span:1}},l.a.createElement(C.a,{variant:"info",onClick:this.addMedicince},"Add"))),l.a.createElement("hr",null),this.state.medicineGroup.length>0?l.a.createElement("h5",null,"Medicines"):l.a.createElement(l.a.Fragment,null),this.state.medicineGroup.length>0?this.state.medicineGroup.map((function(a){return l.a.createElement(k.a,{style:{maxHeight:"50px"},variant:"info",dismissible:!0,onClose:function(){return e.clearMedicine(a)}},l.a.createElement("p",null,a))})):l.a.createElement(l.a.Fragment,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.4b15f09c.chunk.js.map