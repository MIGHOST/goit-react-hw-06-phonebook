(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{12:function(t,e,n){t.exports={form:"ContactForm_form__3Zocm",label:"ContactForm_label__VunIx",input:"ContactForm_input__3m8Lp",btn:"ContactForm_btn__3Mg4V"}},21:function(t,e,n){t.exports={container:"Contacts_container__3pyIw",text:"Contacts_text__3N0QD",btn:"Contacts_btn__3yM8y"}},25:function(t,e,n){t.exports={button:"Button_button__2YATr",disabled:"Button_disabled__2ec1C Button_button__2YATr",active:"Button_active__HPaBN Button_button__2YATr"}},26:function(t,e,n){t.exports={list:"ContactList_list__1aXbn",items:"ContactList_items__1-7_0"}},27:function(t,e,n){t.exports={label:"ContactFilter_label__Kem4d",input:"ContactFilter_input__1ncKb"}},28:function(t,e,n){t.exports={logo:"Phonebook_logo__33zII","logo-wake":"Phonebook_logo-wake__FHYKJ",text:"Phonebook_text__1keFD"}},35:function(t,e,n){t.exports={enter:"pop_enter__3reIL",enterActive:"pop_enterActive__34ecH",exit:"pop_exit__2guTg",exitActive:"pop_exitActive__1Vw-K"}},36:function(t,e,n){t.exports={enter:"slide_enter__3LT_2",enterActive:"slide_enterActive__LpnA7",exit:"slide_exit__1iVaS"}},39:function(t,e,n){t.exports=n(59)},44:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(9),i=n.n(r),l=(n(44),n(5)),u=n(15),s=n(16),m=n(19),b=n(17),_=n(20),p=n(18),d=n(7),f=n(12),h=n.n(f),O=n(25),v=n.n(O),C=function(t){var e=t.title,n=t.disabled?v.a.disabled:v.a.active;return o.a.createElement("button",{type:"submit",className:n},e)},E=n(10),N=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleNameChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(d.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;return a.length<=1||!isNaN(a)?(E.b.warn("Contact name is not correct!"),void n.reset()):c.length<=1||isNaN(c)?(E.b.warn("Contact number is not correct!"),void n.reset()):(n.props.addOneContact(Object(p.a)({},n.state)),void n.reset())},n.reset=function(){n.setState({name:"",number:""})},n}return Object(_.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=e.length<=0||n.length<=0;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:h.a.form},o.a.createElement("label",{htmlFor:this.id,className:h.a.label},"Name",o.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.handleNameChange,id:this.id,className:h.a.input})),o.a.createElement("label",{htmlFor:this.id,className:h.a.label},"Number",o.a.createElement("input",{type:"text",value:n,name:"number",onChange:this.handleNameChange,id:this.id,className:h.a.input})),o.a.createElement(C,{title:"Add contact",disabled:a}))}}]),e}(c.Component),j=n(6),g=n(34),y=n.n(g),x=Object(j.b)("GET_CONTACTS/getContacts"),A=Object(j.b)("DELETE_CONTACT",(function(t){return{payload:t}})),T=Object(j.b)("ADD_ONE_CONTACT",(function(t){return{payload:Object(p.a)({},t,{id:y.a.generate()})}})),k={addOneContact:T},w=Object(l.b)((function(t){return{contacts:t.contacts}}),k)(N),F=n(21),S=n.n(F),L=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact;return o.a.createElement("div",{className:S.a.container},o.a.createElement("p",{className:S.a.text},e,": ",n),o.a.createElement("button",{type:"button",onClick:function(){return c(a)},className:S.a.btn},"X"))},I={deleteContact:A},D=Object(l.b)((function(t){return{contacts:t.contacts}}),I)(L),B=n(26),J=n.n(B),P=n(60),K=n(61),V=n(35),Y=n.n(V),H=function(t){var e=t.contacts;return o.a.createElement(P.a,{className:J.a.list,component:"ul"},e.map((function(t){return o.a.createElement(K.a,{timeout:250,unmountOnExit:!0,classNames:Y.a,key:t.id},o.a.createElement("li",{className:J.a.items},o.a.createElement(D,t)))})))},M=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},R=Object(l.b)((function(t){var e=t.contacts,n=t.filter;return{contacts:M(e,n)}}))(H),X=n(27),z=n.n(X),G=function(t){var e=t.value,n=t.filterContact;return o.a.createElement("label",{className:z.a.label},"Find contact by name",o.a.createElement("input",{type:"text",className:z.a.input,value:e,onChange:n}))},Q=Object(j.b)("FILTER_CONTACT",(function(t){return{payload:t.target.value}})),U={filterContact:Q},Z=Object(l.b)((function(t){return{value:t.filter}}),U)(G),q=(n(58),n(28)),W=n.n(q),$=n(36),tt=n.n($),et=function(t){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(_.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}}("contacts");t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){var e=this.props.contacts;t.contacts!==e&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}}("contacts",e)}},{key:"render",value:function(){var t=this.props.contacts;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:W.a.logo},"Phonebook"),o.a.createElement(w,null),o.a.createElement(E.a,{position:"top-right",autoClose:3e3,closeOnClick:!0}),o.a.createElement(K.a,{in:t.length>=1,timeout:250,unmountOnExit:!0,classNames:tt.a},o.a.createElement("div",null,o.a.createElement("h2",{className:W.a.text},"Contacts"),o.a.createElement(Z,null),o.a.createElement(R,null))))}}]),e}(c.Component),nt={addOneContact:T,deleteContact:A},at=Object(l.b)((function(t){return{contacts:t.contacts}}),nt)(et),ct=function(){return o.a.createElement(at,null)},ot=n(4),rt=n(29),it=function(t,e){return!!function(t,e){return t.find((function(t){return t.name===e.name}))}(t,e)&&(E.b.warn("".concat(e.name," is already in contacts!")),!0)},lt=Object(j.c)([],(a={},Object(d.a)(a,T,(function(t,e){var n=e.payload;return it(t,n)?t:[].concat(Object(rt.a)(t),[n])})),Object(d.a)(a,A,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(d.a)(a,x,(function(t,e){var n=e.payload;return[].concat(Object(rt.a)(t),[n])})),a)),ut=Object(j.c)("",Object(d.a)({},Q,(function(t,e){return e.payload}))),st=n(37),mt=Object(ot.combineReducers)({contacts:lt,filter:ut}),bt=Object(j.a)({reducer:mt},Object(st.devToolsEnhancer)());i.a.render(o.a.createElement(l.a,{store:bt},o.a.createElement(ct,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6d0e9b2d.chunk.js.map