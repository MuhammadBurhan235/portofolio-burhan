import{r as a,j as e}from"./index-CVYF3-cJ.js";import{C as H,a as M,R as Y,b as h,c as z,B as L,F as k,N,S as F,d as R,e as f,L as J}from"./Iconbar-D1shs53Y.js";import{s as d}from"./supabaseClient-DaJVRlD7.js";import"./index-B543s4IE.js";/* empty css            */const $=()=>{const[x,r]=a.useState([]),[u,i]=a.useState(null),[v,c]=a.useState(null),[q,g]=a.useState(null),[E,m]=a.useState(null),[y,I]=a.useState([]),[T,B]=a.useState([]),[W,A]=a.useState([]),[p,j]=a.useState(null);a.useEffect(()=>{(async()=>{const{data:t}=await d.auth.getSession();j(t==null?void 0:t.session)})();const{data:n}=d.auth.onAuthStateChange((t,l)=>{(t==="SIGNED_IN"||t==="SIGNED_OUT")&&j(l)});return()=>{n==null||n.subscription.unsubscribe()}},[]);const D=s=>{m(s),i(s==="signin"?e.jsx(F,{switchToSignup:C}):s==="signup"?e.jsx(R,{switchToLogin:S}):null)},C=()=>{i(e.jsx(R,{switchToLogin:S}))},S=()=>{i(e.jsx(F,{switchToSignup:C}))},O=async()=>{await d.auth.signOut(),i(null),m(null),window.location.replace("/portofolio-burhan/lphelpdesk")};a.useEffect(()=>{(async()=>{const{data:n,error:t}=await d.from("faq").select("*");if(t)console.error(t);else{I(n);const l={};n.forEach(o=>{l[o.category]||(l[o.category]=0),l[o.category]+=o.likes});const w=["All Category",...Object.entries(l).sort(([,o],[,_])=>_-o).map(([o])=>o)];A(w),r(w),c(e.jsx(f,{faqs:n,selectedCategory:"All Category"})),g("faq")}})()},[]),a.useEffect(()=>{(async()=>{const{data:n,error:t}=await d.from("layanan").select("*");t?console.error(t):B(n)})()},[]);const G=s=>{g(s),s==="faq"?(r(W),c(e.jsx(f,{faqs:y,selectedCategory:"All Category"}))):s==="layanan"?(r([]),c(e.jsx(J,{layananData:T}))):(r([]),c(null))},U=s=>{c(e.jsx(f,{faqs:y,selectedCategory:s}))},b=s=>{s==="left"?r([]):s==="right"&&i(null)};return e.jsxs(H,{fluid:!0,className:"vh-100 d-flex flex-column",style:{padding:"12px"},children:[e.jsx(M,{user:p,handleLogout:O,handleButtonClick:D,selectedButton:E}),e.jsxs(Y,{className:"flex-grow-1",style:{padding:"12px"},children:[e.jsx(h,{className:"bg-secondary p-3 d-flex flex-column align-items-center",style:{borderRadius:"15px",minWidth:"56px",maxWidth:"56px"},children:e.jsx(z,{user:p,handleIconClick:G,selectedIcon:q})}),e.jsxs(h,{className:"bg-light p-3",style:{borderRadius:"15px",marginRight:"12px",maxWidth:x.length>0?"210px":"0px",minWidth:x.length>0?"210px":"0px",transition:"max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",overflow:"hidden",border:x.length>0?"solid 1px":"solid 0px"},children:[e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx(L,{variant:"link",onClick:()=>b("left"),children:e.jsx(k,{})})}),e.jsx(N,{className:"flex-column",children:x.map((s,n)=>e.jsx(N.Link,{href:"#item",className:"text-dark",onClick:()=>U(s),children:s},n))})]}),e.jsx(h,{className:"bg-light p-4",style:{border:"1px solid",borderRadius:"15px",overflowY:"auto",height:"100%"},children:v}),e.jsxs(h,{className:"bg-light p-3",style:{borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px",marginLeft:"12px",maxWidth:u?"210px":"0px",minWidth:u?"210px":"0px",transition:"max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",overflow:"hidden",border:u?"solid 1px":"solid 0px"},children:[e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx(L,{variant:"link",onClick:()=>b("right"),children:e.jsx(k,{})})}),p?null:u]})]})]})};export{$ as default};
