(this["webpackJsonpinsta-app"]=this["webpackJsonpinsta-app"]||[]).push([[0],{17:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/book1.47a71c8e.jpg"},48:function(e,t,a){e.exports=a(92)},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=a(1),u=a(2),i=a(4),m=a(3),s=a(5),h=a(9),p=a(19),d=a(44),E=a.n(d),b=function(){return l.a.createElement("div",{style:{margin:"10px"}},l.a.createElement("h1",null,"Home"),l.a.createElement("img",{src:E.a,alt:"Books",display:"flex",flexWrap:"wrap",width:"100%",height:"600px"}))},g=a(8),f=a(16),v=a.n(f),y=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){a.props.currentDataItem(e)},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.changeData()}},{key:"render",value:function(){var e=this;return console.log("mydataaaaa",this.props.mydata),l.a.createElement("div",null,l.a.createElement("h1",null,"Book"),l.a.createElement("hr",null),l.a.createElement("div",{className:"book-list"},this.props.mydata.map((function(t,a){return console.log("itemmmmm",t),l.a.createElement("div",null,l.a.createElement("h3",null,t.name),l.a.createElement("p",null,"Price:",l.a.createElement("span",null,t.price)),l.a.createElement("p",null,"Author:",l.a.createElement("span",null,t.author)),l.a.createElement("p",null,"Pages:",l.a.createElement("span",null,t.pages)),l.a.createElement("button",{id:t.id,onClick:e.handleClick},"Cart+"))}))))}}]),t}(n.Component)),O=Object(g.b)((function(e){return{mydata:e.data}}),(function(e){return{changeData:function(){e((function(e){var t,n;return v.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=a(26),l.next=3,v.a.awrap(t.get("http://localhost:8000/books"));case 3:return n=l.sent,console.log("responce",n),l.next=7,v.a.awrap(e({type:"CHANGE_DATA",payload:n.data}));case 7:case"end":return l.stop()}}))}))},currentDataItem:function(t){e(function(e){return function(t){var n,l,r,c;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=a(26),console.log("&&&&&&&&&&&",e.target.id),l=e.target.id,o.next=5,v.a.awrap(n.get("http://localhost:8000/books"));case 5:return r=o.sent,o.next=8,v.a.awrap(r.data.filter((function(e){return e.id===l})));case 8:return c=o.sent,console.log("currentItem",c),o.next=12,v.a.awrap(t({type:"CURRENT_DATA",payload:c}));case 12:case"end":return o.stop()}}))}}(t))}}}))(y),C=a(28),j=a(13),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",subject:"",message:""},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault()},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-form-head"},l.a.createElement("h1",null,"Contact Form"),l.a.createElement("form",{className:"contact-form",onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("b",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("label",null,l.a.createElement("b",null,"Email:"),l.a.createElement("input",{name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("label",null,l.a.createElement("b",null,"Subject:"),l.a.createElement("input",{type:"text",name:"subject",value:this.state.subject,onChange:this.handleChange})),l.a.createElement("label",null,l.a.createElement("b",null,"Message:"),l.a.createElement("textarea",{type:"text",name:"message",value:this.state.message,onChange:this.handleChange})),l.a.createElement("span",null,l.a.createElement("input",{type:"reset",value:"Clear"}),l.a.createElement("input",{type:"submit",value:"Send Message"}))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).displayMarkers=function(){return a.state.stores.map((function(e,t){return l.a.createElement(C.Marker,{key:t,id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("You clicked me!")}})}))},a.state={stores:[{lat:47.49855629475769,lng:-122.14184416996333},{latitude:47.359423,longitude:-122.021071},{latitude:47.2052192687988,longitude:-121.988426208496},{latitude:47.6307081,longitude:-122.1434325},{latitude:47.3084488,longitude:-122.2140121},{latitude:47.5524695,longitude:-122.0425407}]},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"red"}},"Our Location"),l.a.createElement(C.Map,{google:this.props.google,zoom:8,initialCenter:{lat:47.444,lng:-122.176},style:{width:"55%",height:"73%",margin:"0 0 0 600px"}},this.displayMarkers()),l.a.createElement(k,null))}}]),t}(n.Component),N=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyDh0Vo9xqZASPy3jhMVc7G_1SpfcTWvqK4"})(A);var S=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"This is footer"))},w=function(){return l.a.createElement("nav",{className:"nav-menu"},l.a.createElement(h.b,{to:"/",className:"nav-menu-link"},"Home"),l.a.createElement(h.b,{to:"/books",className:"nav-menu-link"},"Books"),l.a.createElement(h.b,{to:"/cart",className:"nav-menu-link"},"Cart"),l.a.createElement(h.b,{to:"/checkout",className:"nav-menu-link"},"CheckOut"),l.a.createElement(h.b,{to:"/managebooks",className:"nav-menu-link"},"Manage Books"),l.a.createElement(h.b,{to:"/manageOrders",className:"nav-menu-link"},"Manage Orders"),l.a.createElement(h.b,{to:"/contact",className:"nav-menu-link"},"Contact"))},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleCheckout=function(){a.props.history.push("./CheckOut")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){0===this.props.result1.length&&this.props.changeResult()}},{key:"render",value:function(){console.log(this.props);var e=this.props.totalAmount,t=this.props.totalItem,a=this.props.result1,n=function(e){var t=!0,n=!1,l=void 0;try{for(var r,c=a[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var o=r.value;e.target.id===o.id&&(a.pop(e.target.id),console.log("result",a))}}catch(u){n=!0,l=u}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}};return l.a.createElement("div",null,l.a.createElement("h1",null,"Cart"),l.a.createElement("hr",null),l.a.createElement("table",{className:"cart"},l.a.createElement("tr",null,l.a.createElement("th",null,"Product"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Qty"),l.a.createElement("th",null,"Category"),l.a.createElement("th",null,"Discount"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Remove")),function(e){return e.map((function(e,t){var a="Technical"===e.category?e.qty*e.price-e.qty*e.price*10/100:e.qty*e.price,r="Technical"===e.category?"10%":"";return 0!==e.length&&l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.qty),l.a.createElement("td",null,e.category),l.a.createElement("td",null,r),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement("button",{id:e.id,onClick:n},"Remove")))}))}(a)),l.a.createElement("div",{className:"cart-summary"},l.a.createElement("h1",null,"Cart Summary"),l.a.createElement("span",null,l.a.createElement("b",null,"Total Amount :"),e),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"Total Item:"),t),l.a.createElement("button",{onClick:this.handleCheckout},"Checkout")))}}]),t}(n.Component),x=Object(p.f)(Object(g.b)((function(e){return{currentItem1:e.currentItem,totalItem:e.totalItem,totalAmount:e.totalAmount,result1:e.result}}),(function(e){return{changeResult:function(){e((function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(e({type:"CURRENT_RESULT"}));case 2:case"end":return t.stop()}}))}))}}}))(I)),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={fullName:"",address:"",phone:""},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.checkOutFormResult(a.state),a.props.history.push("./OrderDeatails")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"checkout"},l.a.createElement("h1",null,"Checkout"),l.a.createElement("p",null,l.a.createElement("b",null,"Checkout")),l.a.createElement("span",null,l.a.createElement("b",null,"Total Amount:"),this.props.totalAmount),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"Total Items:"),this.props.totalItem),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("form",{className:"formHandler",onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("b",null,"Full Name:"),l.a.createElement("input",{type:"text",value:this.state.fullName,name:"fullName",onChange:this.handleChange,placeholder:"FullName"})),l.a.createElement("label",null,l.a.createElement("b",null,"Address:"),l.a.createElement("textarea",{type:"text",value:this.state.address,name:"address",onChange:this.handleChange,placeholder:"Address"})),l.a.createElement("label",null,l.a.createElement("b",null,"Phone No:"),l.a.createElement("input",{type:"number",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"+91-0123456789"})),l.a.createElement("span",null,l.a.createElement("input",{type:"submit",value:"Place Order"}))))}}]),t}(n.Component),B=Object(p.f)(Object(g.b)((function(e){return{totalItem:e.totalItem,totalAmount:e.totalAmount}}),(function(e){return{checkOutFormResult:function(t){e(function(e){return function(t){t({type:"CHECKOUT_FORM",payload:e})}}(t))}}}))(D)),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleEdit=function(e){console.log("item------",e.id),a.props.history.push("/AdminBookEdit/".concat(e.id))},a.handleCreate=function(){a.props.history.push("./AdminBookCreate")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Admin-Manage Books"),l.a.createElement("div",{className:"manage-books-create"},l.a.createElement("button",{onClick:this.handleCreate},"Create Book")),l.a.createElement("table",{className:"manage-books"},l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{style:{width:"250px"}},"Edit")),this.props.result.map((function(t){return l.a.createElement("div",null,l.a.createElement("tr",null,l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.name),l.a.createElement("span",{style:{width:"250px"}},l.a.createElement("button",{onClick:function(){return e.handleEdit(t)}},"Edit"),l.a.createElement("button",null,"Delete"))))}))))}}]),t}(n.Component),R=Object(p.f)(Object(g.b)((function(e){return{result:e.result}}))(T)),M=(a(89),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login-modifier"},l.a.createElement("h1",null,"Welcome in Login Page"),l.a.createElement("form",null,l.a.createElement("label",null,"Email:",l.a.createElement("input",{name:"email"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",name:"password"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,"Login")))}}]),t}(n.Component)),P=(a(90),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Your Responce Is Recorded"),l.a.createElement("p",null,"FirstName:",this.props.FirstName),l.a.createElement("p",null,"LastName:",this.props.LastName),l.a.createElement("p",null,"Email:",this.props.Email),l.a.createElement("p",null,"Password:",this.props.Password))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={firstname:"",lastname:"",email:"",password:"",dispResponce:!1},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.setState({dispResponce:!0}),e.preventDefault()},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=!0===this.state.dispResponce?l.a.createElement(P,{FirstName:this.state.firstname,LastName:this.state.lastname,Email:this.state.email,Password:this.state.password}):"";return l.a.createElement("div",null,l.a.createElement("form",{className:"form-modifier",onSubmit:this.handleSubmit},l.a.createElement("h1",null,"Welcome in SignUp Page"),l.a.createElement("label",null,"First Name: ",l.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Last Name: ",l.a.createElement("input",{type:"text",name:"lastname",value:this.state.lastname,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Email Id: ",l.a.createElement("input",{name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Password: ",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("br",null),e)}}]),t}(n.Component),L=(a(91),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log("hahahahahahahahahahahahahahaha");var e=this.props.checkOutState;return l.a.createElement("div",null,l.a.createElement("h1",null,"Order Details"),l.a.createElement("div",{className:"order-details"},l.a.createElement("p",null,l.a.createElement("b",null,"Order Id:")),l.a.createElement("p",null,l.a.createElement("b",null,"Amount:"),this.props.totalAmount),l.a.createElement("p",null,l.a.createElement("b",null,"Items:"),this.props.totalItem)),[e].map((function(e){return l.a.createElement("div",{className:"order-details-address"},l.a.createElement("span",null,e.fullName,","),l.a.createElement("span",null,e.address,","),l.a.createElement("span",null,e.phone))})))}}]),t}(n.Component)),q=Object(p.f)(Object(g.b)((function(e){return console.log("state......vk",e),{checkOutState:e.checkOutState,totalItem:e.totalItem,totalAmount:e.totalAmount}}))(L)),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleEdit=function(){a.props.history.push("./OrderDeatails")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Admin - Orders Admin"),l.a.createElement("br",null),l.a.createElement("table",{className:"manage-orders"},l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",{style:{width:"215px"}},"Edit")),this.props.result.map((function(t){return l.a.createElement("div",null,l.a.createElement("tr",null,l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.name),l.a.createElement("span",{style:{width:"215px"}},l.a.createElement("button",{onClick:e.handleEdit},"Details View"))))}))))}}]),t}(n.Component),U=Object(p.f)(Object(g.b)((function(e){return{result:e.result}}))(F)),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",price:0,pages:0,category:"",author:""},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.adminBookEdit1(a.state),a.props.history.push("./ManageBokks")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.match.params;t.result.map((function(t){return t.id===a.id?e.setState({name:t.name,price:t.price,pages:t.pages,category:t.category,author:t.author}):""}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Admin-Edit Book Details"),l.a.createElement("div",{className:"admin-book-head"},l.a.createElement("h1",null,"Edit-Book"),l.a.createElement("form",{className:"admin-book",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"Name"})),l.a.createElement("label",null,"Price:",l.a.createElement("input",{type:"number",name:"price",onChange:this.handleChange,value:this.state.price,placeholder:"Price"})),l.a.createElement("label",null,"Pages:",l.a.createElement("input",{type:"number",name:"pages",onChange:this.handleChange,value:this.state.pages,placeholder:"Pages"})),l.a.createElement("label",null,"Category:",l.a.createElement("select",{name:"category",onchange:this.handleChange,value:this.state.category},l.a.createElement("option",{selected:!0,value:"technical"},"Technical"),l.a.createElement("option",{value:"children"},"Children"),l.a.createElement("option",{value:"academic"},"Academic"),l.a.createElement("option",{value:"others"},"Others"))),l.a.createElement("label",null,"Author:",l.a.createElement("input",{type:"text",name:"author",onChange:this.handleChange,value:this.state.author,placeholder:"Author"})),l.a.createElement("span",null,l.a.createElement("input",{type:"submit",value:"Save Books"})))))}}]),t}(n.Component),H=Object(p.f)(Object(g.b)((function(e){return{result:e.result}}),(function(e){return{adminBookEdit1:function(t){e(function(e){return console.log("stateeeeeeeee",e),function(t){t({type:"ADMIN_BOOK_EDIT",payload:a(26).put("http://localhost:8000/books/".concat(e.id),{name:e.name,price:e.price,pages:e.pages,author:e.author,category:e.category}).then((function(e){console.log("resppppppppppp",e.data)})).catch((function(e){console.log("errrrrrrrrr",e)}))})}}(t))}}}))(K)),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",price:0,pages:0,category:"",author:""},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.adminBookCreate1(a.state),a.props.history.push("./ManageBooks"),console.log("stateeeeeeeeeeee",a.state)},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Admin-Create Book Details"),l.a.createElement("div",{className:"admin-book-head"},l.a.createElement("h1",null,"Create-Book"),l.a.createElement("form",{className:"admin-book",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"Name"})),l.a.createElement("label",null,"Price:",l.a.createElement("input",{type:"number",name:"price",onChange:this.handleChange,value:this.state.price,placeholder:"Price"})),l.a.createElement("label",null,"Pages:",l.a.createElement("input",{type:"number",name:"pages",onChange:this.handleChange,value:this.state.pages,placeholder:"Pages"})),l.a.createElement("label",null,"Category:",l.a.createElement("select",{name:"category",onchange:this.handleChange,value:this.state.category},l.a.createElement("option",{selected:!0,value:"technical"},"Technical"),l.a.createElement("option",{value:"children"},"Children"),l.a.createElement("option",{value:"academic"},"Academic"),l.a.createElement("option",{value:"others"},"Others"))),l.a.createElement("label",null,"Author:",l.a.createElement("input",{type:"text",name:"author",onChange:this.handleChange,value:this.state.author,placeholder:"Author"})),l.a.createElement("span",null,l.a.createElement("input",{type:"submit",value:"Save Books"})))))}}]),t}(n.Component),G=Object(p.f)(Object(g.b)(null,(function(e){return{adminBookCreate1:function(t){e(function(e){return function(t){var n=a(26).post("http://localhost:8000/books",{name:e.name,price:e.price,pages:e.pages,author:e.author,category:e.category});t({type:"ADMIN_BOOK_CREATE",payload:n.then((function(e){console.log("responseeeeeee",n),console.log("resppppppppppp",e)})).catch((function(e){console.log("errrrrrrrrr",e)}))})}}(t))}}}))(W)),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleLogin=function(){a.props.history.push("./Login")},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{className:"app-theme"},l.a.createElement("div",{className:"app-body"},l.a.createElement("span",null,l.a.createElement("b",null,"BookStore")),l.a.createElement("button",null,"SignUp"),l.a.createElement("button",null,"Login")),l.a.createElement(w,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",component:b,exact:!0}),l.a.createElement(p.a,{path:"/books",component:O}),l.a.createElement(p.a,{path:"/cart",component:x}),l.a.createElement(p.a,{path:"/checkout",component:B}),l.a.createElement(p.a,{path:"/OrderDeatails",component:q}),l.a.createElement(p.a,{path:"/managebooks",component:R}),l.a.createElement(p.a,{path:"/manageOrders",component:U}),l.a.createElement(p.a,{path:"/adminBookEdit/:id",component:H}),l.a.createElement(p.a,{path:"/adminBookCreate",component:G}),l.a.createElement(p.a,{path:"/contact",component:N}),l.a.createElement(p.a,{path:"/login",component:M}),l.a.createElement(p.a,{path:"/signup",component:_})),l.a.createElement("hr",null),l.a.createElement(S,null))}}]),t}(n.Component),z=a(25),J=a(22),Y=a(21),Q={data:[],isClick:!1,currentItem:[],totalItem:0,totalAmount:0,result:[],total:0,checkOutState:[],adminBookCreateState:[],adminBookEditState:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),console.log("state......",e),t.type){case"CHANGE_DATA":return Object(Y.a)({},e,{data:t.payload});case"CURRENT_DATA":return console.log("@@@@@@@+++",Object(J.a)(e.currentItem)),Object(Y.a)({},e,{currentItem:[].concat(Object(J.a)(e.currentItem),Object(J.a)(t.payload))});case"CURRENT_RESULT":for(var a=new Map,n=function(){var t=r[l],n=Object(J.a)(e.currentItem).filter((function(e){return e.id===t.id})).length;a.has(t.id)||(a.set(t.id),e.result.push({id:t.id,name:t.name,price:t.price,category:t.category,qty:n,total:0}))},l=0,r=Object(J.a)(e.currentItem);l<r.length;l++)n();var c=!0,o=!1,u=void 0;try{for(var i,m=e.result[Symbol.iterator]();!(c=(i=m.next()).done);c=!0){var s=i.value;e.total="Technical"===s.category?s.qty*s.price-s.qty*s.price*10/100:s.qty*s.price,e.totalAmount=e.totalAmount+e.total,e.totalItem=e.totalItem+s.qty}}catch(h){o=!0,u=h}finally{try{c||null==m.return||m.return()}finally{if(o)throw u}}return Object(Y.a)({},e,{result:Object(J.a)(e.result)});case"CHECKOUT_FORM":return Object(Y.a)({},e,{checkOutState:t.payload});case"ADMIN_BOOK_CREATE":return Object(Y.a)({},e,{adminBookCreateState:t.payload});case"ADMIN_BOOK_EDIT":return Object(Y.a)({},e,{adminBookEditState:t.payload});default:return e}},X=a(47),$=Object(z.c)(Z,Object(z.a)(X.a));c.a.render(l.a.createElement(g.a,{store:$},l.a.createElement(V,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7c645c5b.chunk.js.map