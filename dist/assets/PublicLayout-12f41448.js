import{j as e,d,i as u,r as g,B as f,L as r,O as v}from"./index-53e6f5e0.js";import{C as a}from"./Container-1b9f5e57.js";import{R as h}from"./Row-b9d80824.js";import{C as s}from"./Col-90b11745.js";import{B as m}from"./Button-b0204afc.js";import{F as x}from"./Form-2912ba00.js";import{N as l,a as i,D as n}from"./Navbar-e44e6883.js";import{F as N,a as b,b as y}from"./index-f0f7f881.js";import"./ThemeProvider-f1165dbe.js";import"./Button-00b2b4ee.js";import"./index-cf459d82.js";import"./FormControl-64724359.js";import"./ElementChildren-e9003714.js";import"./TransitionWrapper-9a88a208.js";import"./CardHeaderContext-749dcba7.js";import"./iconBase-4c2b3589.js";const k=()=>e.jsx("div",{className:"bg-light py-5 mt-5",children:e.jsx(a,{children:e.jsxs(h,{children:[e.jsx(s,{sm:6,children:e.jsx("h5",{children:"Flipkart - Lite"})}),e.jsxs(s,{sm:3,children:[e.jsx("h6",{children:"Quick Links"}),e.jsxs("ul",{children:[e.jsx("li",{children:"About"}),e.jsx("li",{children:"Privacy Policy"}),e.jsx("li",{children:"Terms and Conditions"}),e.jsx("li",{children:"Return Policy"})]})]}),e.jsx(s,{sm:3,children:e.jsxs("address",{children:[e.jsx("span",{className:"me-1",children:"Fake Street."}),e.jsx("span",{children:"Fake road, fake city."}),e.jsx("div",{children:"USA. 884421"}),e.jsx("div",{children:"+1 2255 4458 66"})]})})]})})});function L(){const{cart:j}=d(t=>t.bag),{customer:c}=d(t=>t.auth),[p,{isSuccess:o}]=u();return g.useEffect(()=>{o&&f.success("logout success")},[o]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-light",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center container",children:[e.jsx("div",{children:e.jsxs(x.Select,{className:"form-select-sm ",children:[e.jsx("option",{children:"INR"}),e.jsx("option",{value:"1",children:"USD"}),e.jsx("option",{value:"2",children:"AUD"}),e.jsx("option",{value:"3",children:"CAD"})]})}),e.jsx("div",{children:"Get free delivery on orders over $100 "}),e.jsxs("div",{className:"d-flex",children:[e.jsx(r,{to:"/register",className:"nav-link border-end mx-2 pe-2",children:"Create Account"}),e.jsx(r,{to:"/login",className:"nav-link",children:"Sign In"})]})]})}),e.jsx(l,{expand:"lg",className:"bg-dark navbar-dark",children:e.jsxs(a,{children:[e.jsx(l.Brand,{href:"#",children:"Flipkart - lite"}),e.jsx(l.Toggle,{"aria-controls":"navbarScroll"}),e.jsxs(l.Collapse,{id:"navbarScroll",children:[e.jsxs(i,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[e.jsx(i.Link,{href:"#action1",children:"Men"}),e.jsx(i.Link,{href:"#action2",children:"Woman"}),e.jsx(i.Link,{href:"#action2",children:"Kids"}),e.jsx(i.Link,{href:"#action2",children:"Winter"})]}),e.jsxs("div",{className:"input-group me-2 w-25",children:[e.jsx(x.Control,{type:"search",placeholder:"Search","aria-label":"Search"}),e.jsx(m,{variant:"outline-light",children:e.jsx(N,{})})]}),c?e.jsxs(n,{className:"me-2",children:[e.jsxs(n.Toggle,{variant:"light",id:"dropdown-basic",children:["Welcome ",c.name]}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{children:e.jsx(r,{to:"/user",className:"nav-link",children:"Order History"})}),e.jsx(n.Item,{children:e.jsx(r,{to:"/user/profile",className:"nav-link",children:"Profile"})}),e.jsx("button",{onClick:p,className:"dropdown-item text-danger",children:"Logout"})]})]}):e.jsx(m,{variant:"outline-light me-2",children:e.jsx(b,{})}),e.jsxs(r,{to:"/cart",className:"btn btn-outline-light",children:[e.jsx(y,{})," ",j.length]})]})]})}),e.jsx(a,{children:e.jsxs(h,{className:"g-0",children:[e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})}),e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})}),e.jsx(s,{sm:4,children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-item-center p-5 bg-light",children:[e.jsx("p",{className:"m-0 text-center text-secondary ",children:"Download the app"}),e.jsx("p",{className:"m-0 text-center",children:"Lorem ipsum dolor sit amet."})]})})]})})]})}const H=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx("div",{className:"my-5",children:e.jsx(v,{})}),e.jsx(k,{})]});export{H as default};
