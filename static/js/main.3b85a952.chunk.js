(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),o=n.n(a),i=(n(14),n(3)),s=n(4),u=n(18),j=n(6),l=n(7),b=n(0),d={name:"",number:""},m=function(e){var t=e.onAddNewContact,n=Object(c.useState)(d),r=Object(s.a)(n,2),a=r[0],o=r[1],i=function(e){var t=e.target,n=t.value,c=t.name;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(j.a)({},c,n))}))};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),o(Object(l.a)({},d))},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:i,value:a.name})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:i,value:a.number})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})},O=function(e){var t=e.contact,n=e.removeContactById;return Object(b.jsxs)("li",{children:[Object(b.jsxs)("p",{children:[t.name,": ",t.number]}),Object(b.jsx)("button",{onClick:function(){n(t.id)},children:"DELETE"})]})},h=function(e){var t=e.contacts,n=e.filterValue,c=e.removeContactById,r=Object(i.a)(t).filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(b.jsx)(b.Fragment,{children:0!==t.length?Object(b.jsx)(b.Fragment,{children:0!==r.length?Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)(O,{contact:e,removeContactById:c},e.id)}))}):Object(b.jsx)("p",{children:"There is no such contact ;("})}):Object(b.jsx)("p",{children:"Please enter your first contact ;)"})})},f=function(e){var t=e.onFilterInput,n=e.filter;return Object(b.jsxs)("label",{children:["Find contacts by name:",Object(b.jsx)("input",{type:"text",name:"filter",onChange:t,value:n})]})},x={contacts:JSON.parse(localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},p=function(){var e=Object(c.useState)(x.contacts),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(x.filter),o=Object(s.a)(a,2),j=o[0],l=o[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(m,{onAddNewContact:function(e){n.some((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())}))?alert("".concat(e.name," is already in contacts.")):r((function(t){return[].concat(Object(i.a)(t),[{name:e.name,number:e.number,id:Object(u.a)()}])}))}}),Object(b.jsx)("h2",{children:"Contacts"}),0!==n.length&&Object(b.jsx)(f,{onFilterInput:function(e){var t=e.target.value;l((function(e){return t}))},filter:j}),Object(b.jsx)(h,{contacts:n,filterValue:j,removeContactById:function(e){r((function(t){return Object(i.a)(t.filter((function(t){return t.id!==e})))}))}})]})})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3b85a952.chunk.js.map