(this["webpackJsonpclient-marvel-auctioneers"]=this["webpackJsonpclient-marvel-auctioneers"]||[]).push([[0],{41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(27),i=n.n(r),l=(n(60),n(39)),o=n(23),d=n(14),j=n(15),h=n(17),b=n(16),O=n(99),u=n(101),x=n(93),p=n(11);n(61);var g=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)(O.a,{className:"navbar",variant:"dark",children:[Object(s.jsx)(p.b,{to:"/",children:Object(s.jsx)("img",{className:"logoMA",src:"../images/logoMA.png",alt:"logo"})}),Object(s.jsxs)(u.a,{className:"mr-auto",children:[Object(s.jsx)(u.a.Link,{href:"/buy",children:"Buy"}),Object(s.jsx)(u.a.Link,{href:"#pricing",children:"About us"})]}),e.loggedInUser?Object(s.jsxs)("div",{className:"container-loggedIn",children:[Object(s.jsxs)("p",{children:["Hello ",Object(s.jsx)(p.b,{to:"/profile/".concat(e.loggedInUser._id),children:e.loggedInUser.username}),"!"]}),Object(s.jsxs)("p",{children:["Wallet ",e.loggedInUser.wallet_credit,"$"]}),Object(s.jsx)(x.a,{onClick:e.onLogOut,children:"Log out"})]}):Object(s.jsxs)("div",{className:"auth-btn",children:[Object(s.jsx)(x.a,{children:Object(s.jsx)(p.b,{to:"/login",onClick:e.onShowLogin,children:"Log in"})}),Object(s.jsx)(x.a,{children:Object(s.jsx)(p.b,{to:"/register",onClick:e.onShowRegister,children:"Register"})})]})]})})},m=n(100);n(41);function f(e){return Object(s.jsx)("div",{className:"box-container",children:Object(s.jsxs)(m.a,{className:"formlog",onSubmit:e.onLogin,children:[Object(s.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(m.a.Label,{children:"Email address"}),Object(s.jsx)(m.a.Control,{className:"inputlog",type:"email",placeholder:"Enter email",name:"email"})]}),Object(s.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(m.a.Label,{children:"Password"}),Object(s.jsx)(m.a.Control,{className:"inputlog",type:"password",placeholder:"Password",name:"password"})]}),Object(s.jsx)(x.a,{className:"logbtn",variant:"primary",type:"submit",children:"Log in"})]})})}function v(e){return Object(s.jsx)("div",{className:"box-container",children:Object(s.jsxs)(m.a,{className:"formlog",onSubmit:e.onRegister,children:[Object(s.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(m.a.Label,{children:"Email address"}),Object(s.jsx)(m.a.Control,{className:"inputlog",type:"email",placeholder:"Enter email",name:"email"})]}),Object(s.jsxs)(m.a.Group,{children:[Object(s.jsx)(m.a.Label,{children:" Username"}),Object(s.jsx)(m.a.Control,{className:"inputlog",type:"text",placeholder:"Enter username",name:"username"})]}),Object(s.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(m.a.Label,{children:"Password"}),Object(s.jsx)(m.a.Control,{className:"inputlog",type:"password",placeholder:"Password",name:"password"})]}),Object(s.jsx)(x.a,{className:"logbtn",variant:"primary",type:"submit",children:"Register"})]})})}n(68);var w=n(6),y=n(102),S=n(9),L=n.n(S),I=n(95),C=n(53),B=(n(86),n(94)),_="https://marvelauctioneers.herokuapp.com//api",A=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={myBidList:[],salesBided:[]},e.getAllMyBids=function(){var t=e.props.loggedInUser;L.a.get("".concat(_,"/profile/").concat(t._id,"/mybids"),{},{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({myBidList:Object(o.a)(t.data)})}))},e.getsaleInfo=function(){var t=e.props.loggedInUser;L.a.get("".concat(_,"/profile/sale/").concat(t._id)).then((function(e){e.map((function(e){return e.sale_id}))}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getAllMyBids(),this.getsaleInfo()}},{key:"render",value:function(){var e=this.props,t=(e.salesList,e.loggedInUser,this.state.myBidList);return Object(s.jsx)("div",{children:Object(s.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"Sale Id"}),Object(s.jsx)("th",{children:"Title"}),Object(s.jsx)("th",{children:"Starting price"}),Object(s.jsx)("th",{children:"Expiring date"}),Object(s.jsx)("th",{children:"My bid"}),Object(s.jsx)("th",{children:"Status"})]})}),Object(s.jsxs)("tbody",{children:[t.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)(p.b,{to:"/detail/".concat(e.sale_id),children:e.sale_id})}),Object(s.jsx)("td",{children:"Title goes here"}),Object(s.jsx)("td",{children:"Starting price goes here"}),Object(s.jsx)("td",{children:"Expiring date goes here"}),Object(s.jsxs)("td",{children:[e.bid_price,"$"]}),Object(s.jsx)("td",{children:e.status})]})})),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]})]})]})})}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.loggedInUser},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.loggedInUser,n=e.onAddCredit;e.showWelcome;return t?Object(s.jsxs)("div",{className:"container1",children:[Object(s.jsxs)(y.a,{className:"card-info1",children:[Object(s.jsx)(y.a.Img,{variant:"top",src:"/images/iron-pic.jpg"}),Object(s.jsxs)(y.a.Body,{children:[Object(s.jsxs)(y.a.Title,{children:["Welcome back  ",t.username,"!"]}),Object(s.jsxs)("p",{children:["your email addres: ",t.email]}),Object(s.jsxs)(y.a,{className:"wallet-container",children:[Object(s.jsx)(y.a.Header,{className:"title-wallet",children:"My Wallet"}),Object(s.jsxs)(y.a.Body,{className:"card-body",children:[Object(s.jsxs)(y.a.Text,{children:["Your credit balance: ",t.wallet_credit,"$"]}),Object(s.jsx)("form",{onSubmit:n,children:Object(s.jsxs)(I.a,{className:"mb-3",children:[Object(s.jsx)(I.a.Prepend,{children:Object(s.jsx)(I.a.Text,{children:"$"})}),Object(s.jsx)(C.a,{name:"wallet_credit"}),Object(s.jsx)(I.a.Append,{children:Object(s.jsx)(I.a.Text,{children:".00"})}),Object(s.jsx)(x.a,{type:"submit",variant:"primary",children:"Add Credit"})]})})]})]}),Object(s.jsx)(x.a,{className:"addSale-btn",children:Object(s.jsx)(p.b,{to:"/profile/".concat(t._id,"/create-sale"),children:"Create Sale"})})]})]}),Object(s.jsx)("h2",{children:"My Bids"}),Object(s.jsx)(A,{loggedInUser:t})]}):Object(s.jsx)(w.a,{to:"/"})}}]),n}(a.Component),F=Object(w.g)(N);n(87);function U(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"../images/banner.jpg",style:{width:"100%",maxHeight:"530px"}})})}var M=n(96),k=n(97),R=n(54),D=(n(88),n(26)),G=n.n(D);function E(e){return Object(s.jsxs)("div",{className:"container1",children:[Object(s.jsx)("h1",{children:"ONGOING SALES"}),e.salesList.map((function(e){return Object(s.jsx)(M.a,{fluid:"md",children:Object(s.jsx)(k.a,{children:Object(s.jsx)(R.a,{children:Object(s.jsxs)(y.a,{className:"eachcard",children:[Object(s.jsx)(y.a.Img,{variant:"top",src:e.image_url}),Object(s.jsxs)(y.a.Body,{children:[Object(s.jsx)(y.a.Title,{children:e.title}),Object(s.jsxs)(y.a.Text,{children:[Object(s.jsxs)("p",{children:["Release year: ",e.release_year]}),Object(s.jsxs)("p",{children:["Starting price: ",e.starting_price,"$"]}),Object(s.jsxs)("p",{children:["Sale expiring:",G()(e.expiring_date).format("MMMM Do YYYY, h:mm a")]})]})]}),Object(s.jsx)(y.a.Footer,{className:"footer",children:Object(s.jsx)(x.a,{className:"",children:Object(s.jsx)(p.b,{to:"/detail/".concat(e._id),children:"See Details"})})})]})})})})}))]})}var T=n(98);n(90);function Y(){return Object(s.jsx)("div",{className:"Wbox-container",children:Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsxs)(M.a,{children:[Object(s.jsx)("h5",{className:"title",children:"Start buying and selling high quality comics with 3 simple steps:"}),Object(s.jsxs)("ol",{children:[Object(s.jsx)("li",{children:"Create an account"}),Object(s.jsx)("li",{children:"Add credit to your wallet"}),Object(s.jsx)("li",{children:"Browse through over 1 trillion sales of your favourite issues"})]})]})})})}var P=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props;e.loggedInUser,e.onAddSale;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Create a new sale"}),Object(s.jsxs)(m.a,{onSubmit:this.props.onAddSale,children:[Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(s.jsx)(m.a.Label,{children:"Title"}),Object(s.jsx)(m.a.Control,{name:"title",type:"text"})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(m.a.Label,{children:"Description"}),Object(s.jsx)(m.a.Control,{name:"description",as:"textarea",rows:3})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(s.jsx)(m.a.Label,{children:"Expiring date"}),Object(s.jsx)(m.a.Control,{name:"expiring_date",type:"datetime-local"})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(s.jsx)(m.a.Label,{children:"Starting price"}),Object(s.jsx)(m.a.Control,{name:"starting_price",type:"number"}),Object(s.jsx)(I.a.Append,{children:Object(s.jsx)(I.a.Text,{children:"$"})})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(s.jsx)(m.a.Label,{children:"Release Year"}),Object(s.jsx)(m.a.Control,{name:"release_year",type:"number"})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(s.jsx)(m.a.Label,{children:"Image URL"}),Object(s.jsx)(m.a.Control,{name:"image_url",type:"text"})]}),Object(s.jsxs)(m.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(s.jsx)(m.a.Label,{children:"State"}),Object(s.jsxs)(m.a.Control,{name:"state",as:"select",children:[Object(s.jsx)("option",{children:"--select state"}),Object(s.jsx)("option",{children:"good condition"}),Object(s.jsx)("option",{children:"worn-off"}),Object(s.jsx)("option",{children:"damaged"})]})]}),Object(s.jsx)(x.a,{type:"submit",children:"Submit"})]})]})}}]),n}(a.Component);function W(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Please enter your bid always surpassing the quantity of the latest"}),Object(s.jsx)("form",{onSubmit:e.onAddBid,children:Object(s.jsxs)(I.a,{className:"mb-3",children:[Object(s.jsx)(C.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"number",name:"bid_price"}),Object(s.jsx)(I.a.Prepend,{children:Object(s.jsx)(I.a.Text,{id:"inputGroup-sizing-default",children:"$"})}),Object(s.jsx)(x.a,{type:"submit",children:"Submit"})]})})]})}var $=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.sale,n=e.seller,a=e.bidList,c=e.onShowBidInput,r=e.onAddBid,i=e.showBidInput;return Object(s.jsxs)("div",{children:[Object(s.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"Username"}),Object(s.jsx)("th",{children:"Bid"}),Object(s.jsx)("th",{children:"Timestamp"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Starting Bid"}),Object(s.jsx)("td",{children:n.username}),Object(s.jsxs)("td",{children:[t.starting_price,"$"]}),Object(s.jsx)("td",{})]}),a?a.sort((function(e,t){return e.createdAt>t.createdAt?1:e.createdAt<t.createdAt?-1:0})).map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:e.bidder_username}),Object(s.jsxs)("td",{children:[e.bid_price,"$"]}),Object(s.jsx)("td",{children:G()(e.createdAt).format("MMMM Do YYYY, h:mm a")}),Object(s.jsx)("td",{})]})})):null,Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{colSpan:"2"}),Object(s.jsx)("td",{})]})]})]}),Object(s.jsx)("button",{onClick:c,children:"Bid"}),i?Object(s.jsx)(W,{onAddBid:r}):null]})}}]),n}(a.Component),H=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={sale:{},saleOpen:!0,showBidChart:!1,showBidInput:!1,bidList:[],seller:{}},e.handleShowBidChart=function(){e.setState({showBidChart:!0})},e.handleSaleEnd=function(){var t=e.state.sale;console.log(t)},e.handleShowBidInput=function(){e.setState({showBidInput:!0})},e.getName=function(){var t=e.state.sale;L.a.get("".concat(_,"/sale/username/").concat(t.seller)).then((function(t){console.log(t.data),e.setState({seller:t.data})}))},e.getAllBids=function(){var t=e.state.sale;L.a.get("".concat(_,"/sale/").concat(t._id)).then((function(t){e.setState({bidList:Object(o.a)(t.data)})}))},e.handleAddBid=function(t){t.preventDefault();var n=t.target.bid_price,s=e.state.bidList,a=e.state.sale,c={bid_price:n.value};L.a.post("".concat(_,"/sale/").concat(a._id),c,{withCredentials:!0}).then((function(t){e.setState({bidList:[t.data].concat(Object(o.a)(s))})}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.handleSaleEnd();var t=this.props.match.params.saleid;console.log(this.props.match.params.saleid),L.a.get("".concat(_,"/detail/").concat(t)).then((function(t){console.log(new Date,new Date(t.data.expiring_date)),e.setState({saleOpen:new Date<new Date(t.data.expiring_date),sale:t.data})})),this.getAllBids(),this.getName()}},{key:"render",value:function(){var e=this.state,t=e.sale,n=e.showBidChart,a=e.seller,c=e.bidList,r=(e.onShowBidInput,e.showBidInput);return Object(s.jsxs)("div",{style:{width:"700px"},children:[Object(s.jsx)("img",{alt:"comic",src:t.image_url}),this.state.saleOpen?Object(s.jsx)("p",{children:"'Open'"}):Object(s.jsx)("p",{children:"'Closed'"}),Object(s.jsx)("h1",{children:t.title}),Object(s.jsxs)("h2",{children:[Object(s.jsx)("small",{children:"Starting price"})," ",t.starting_price,"$"]}),Object(s.jsxs)("h3",{children:["Expiring:",Object(s.jsxs)("small",{children:[" ",G()(t.expiring_date).format("MMMM Do YYYY, h:mm a")]})]}),Object(s.jsx)("p",{children:t.description}),Object(s.jsx)("button",{onClick:this.handleShowBidChart,children:"Show BidChart"}),n?Object(s.jsx)($,{sale:t,seller:a,bidList:c,onShowBidInput:this.handleShowBidInput,showBidInput:r,onAddBid:this.handleAddBid}):null]})}}]),n}(a.Component),q=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showLoginForm:!1,showRegisterForm:!1,loggedInUser:null,showLogRegBtn:!1,showUserName:!1,showWelcome:!1,salesList:[]},e.getallsales=function(){L.a.get("".concat(_,"/search")).then((function(t){e.setState({salesList:Object(o.a)(t.data)})}))},e.handleShowLogin=function(){e.setState({showLoginForm:!0,showRegisterForm:!1,showWelcome:!1})},e.handleShowRegister=function(){e.setState({showLoginForm:!1,showRegisterForm:!0,showWelcome:!1})},e.handleRegister=function(t){t.preventDefault();var n=t.target,s=n.email,a=n.username,c=n.password;L.a.post("".concat(_,"/register"),{email:s.value,username:a.value,password:c.value},{withCredentials:!0}).then((function(t){console.log("registered:"),e.setState({loggedInUser:t.data,showRegisterForm:!1,showLoginForm:!1},(function(){e.props.history.push("/")}))}))},e.handleLogin=function(t){t.preventDefault();var n=t.target,s=n.email,a=n.password;L.a.post("".concat(_,"/login"),{email:s.value,password:a.value},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data,showLoginForm:!1,showRegisterForm:!1,showWelcome:!1},(function(){e.props.history.push("/")}))}))},e.handleLogOut=function(){console.log("logout"),L.a.post("".concat(_,"/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleAddCredit=function(t){t.preventDefault();var n=e.state.loggedInUser;console.log(t.target.wallet_credit.value),L.a.patch("".concat(_,"/profile/edit"),{wallet_credit:t.target.wallet_credit.value},{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({loggedInUser:t.data},(function(){e.props.history.push("/profile/".concat(n._id))}))}))},e.handleAddSale=function(t){t.preventDefault(),console.log(t.target.title.value);var n=t.target,s=n.title,a=n.description,c=n.expiring_date,r=n.state,i=n.starting_price,l=n.image_url,d=n.release_year,j=e.state.salesList,h={title:s.value,description:a.value,expiring_date:c.value,state:r.value,starting_price:i.value,release_year:d.value,image_url:l.value};L.a.post("".concat(_,"/profile/add-sale"),h,{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({salesList:[t.data].concat(Object(o.a)(j))},(function(){e.props.history.push("/")}))}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getallsales()}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedInUser,a=t.showLoginForm,c=t.showRegisterForm,r=t.showWelcome,i=t.salesList;return Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{onShowLogin:this.handleShowLogin,onShowRegister:this.handleShowRegister,loggedInUser:n,onLogOut:this.handleLogOut}),Object(s.jsxs)("div",{children:[r?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Y,{})," "]}):null,a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f,{onLogin:this.handleLogin}),Object(s.jsx)(U,{})]}):null,c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{onRegister:this.handleRegister}),Object(s.jsx)(U,{})]}):null]}),Object(s.jsxs)(w.d,{children:[Object(s.jsx)(w.b,{exact:!0,path:"/",render:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(U,{}),Object(s.jsx)(E,{salesList:i})]})}}),Object(s.jsx)(w.b,{path:"/detail/:saleid",render:function(e){return Object(s.jsx)(H,Object(l.a)({},e))}}),Object(s.jsx)(w.b,{exact:!0,path:"/profile/:id",render:function(t){return Object(s.jsx)(F,Object(l.a)({loggedInUser:n,onAddCredit:e.handleAddCredit},t))}}),Object(s.jsx)(w.b,{path:"/profile/:id/create-sale",render:function(){return Object(s.jsx)(P,{loggedInUser:n,salesList:i,onAddSale:e.handleAddSale})}})]})]})}}]),n}(a.Component),z=Object(w.g)(q),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};i.a.render(Object(s.jsxs)(p.a,{children:[Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(z,{})}),","]}),document.getElementById("root")),J()}},[[91,1,2]]]);
//# sourceMappingURL=main.4fd4ea5e.chunk.js.map