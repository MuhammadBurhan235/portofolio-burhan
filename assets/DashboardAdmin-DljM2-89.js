import{r,j as e}from"./index-D4XTKlKU.js";import{f as q,B as F,C as $,a as ee,R as se,b as y,c as te,F as ae,S as A,d as I,e as D,L as re}from"./Iconbar-DPgSYkXY.js";import{s as n}from"./supabaseClient-UHI-_7Fl.js";import{S as ne,a as oe}from"./SidebarL-uBRqcIdU.js";import"./index-CY_GnKK4.js";/* empty css            */const he=()=>{const[h,u]=r.useState(null),[f,c]=r.useState(null),[B,d]=r.useState(null),[U,S]=r.useState(null),[W,C]=r.useState(null),[E,O]=r.useState([]),[G,M]=r.useState([]),[H,K]=r.useState([]),[w,N]=r.useState(null),[l,Y]=r.useState(null),[x,z]=r.useState([]),[g,v]=r.useState(""),[L,b]=r.useState(!1);r.useEffect(()=>{(async()=>{const{data:a}=await n.auth.getSession();N(a==null?void 0:a.session)})();const{data:t}=n.auth.onAuthStateChange((a,o)=>{(a==="SIGNED_IN"||a==="SIGNED_OUT")&&N(o)});return()=>{t==null||t.subscription.unsubscribe()}},[]);const J=s=>{C(s),c(s==="signin"?e.jsx(A,{switchToSignup:R}):s==="signup"?e.jsx(I,{switchToLogin:T}):null)},R=()=>{c(e.jsx(I,{switchToLogin:T}))},T=()=>{c(e.jsx(A,{switchToSignup:R}))},P=async()=>{await n.auth.signOut(),c(null),C(null),window.location.replace("/portofolio-burhan/lphelpdesk")};r.useEffect(()=>{(async()=>{const{data:t,error:a}=await n.from("faq").select("*");if(a)console.error(a);else{O(t);const o={};t.forEach(i=>{o[i.category]||(o[i.category]=0),o[i.category]+=i.likes});const p=["All Category",...Object.entries(o).sort(([,i],[,m])=>m-i).map(([i])=>i)];K(p),u(null),d(null),S("tulis")}})()},[]),r.useEffect(()=>{(async()=>{const{data:t,error:a}=await n.from("layanan").select("*");a?console.error(a):M(t)})()},[]);const Q=async s=>{Y(s),_(s)},_=async s=>{try{const{data:t,error:a}=await n.from("messages").select("question, answer").eq("chats_id",s).order("timestamp",{ascending:!0});a?(console.error("Error fetching message data:",a),alert("Error fetching message data: "+a.message)):z(t||[])}catch(t){console.error("Unexpected error:",t),alert("An unexpected error occurred while fetching message data.")}},V=async s=>{if(s.preventDefault(),l&&g)try{const{data:{user:t},error:a}=await n.auth.getUser();if(a){console.error("Error fetching user:",a),alert("Error fetching user information.");return}const{data:o,error:j}=await n.from("messages").select("admin_id").eq("chats_id",l).order("timestamp",{ascending:!1}).limit(1).single();if(j){console.error("Error fetching last message:",j),alert("Error fetching last message.");return}if(o!=null&&o.admin_id&&o.admin_id!==(t==null?void 0:t.id)){alert("It's not your turn to respond.");return}b(!0);const{data:p,error:i}=await n.from("chats").select("customer_id").eq("id",l).single();if(i||!p){console.error("Error fetching chat data:",i),alert("Error fetching chat information.");return}const{error:m}=await n.from("messages").insert([{chats_id:l,admin_id:t==null?void 0:t.id,answer:g,customer_id:p.customer_id}]);m?(console.error("Error sending message:",m),alert("Error sending message: "+m.message)):(v(""),_(l))}catch(t){console.error("Unexpected error:",t),alert("An unexpected error occurred while sending message.")}};r.useEffect(()=>{(async()=>{if(l){const{data:{user:t}}=await n.auth.getUser(),{data:a}=await n.from("messages").select("admin_id").eq("chats_id",l).order("timestamp",{ascending:!1}).limit(1).single();!(a!=null&&a.admin_id)||a.admin_id===(t==null?void 0:t.id)?b(!0):b(!1)}})()},[l,x]),r.useEffect(()=>{x&&d(e.jsxs("div",{className:"d-flex flex-column",style:{height:"450px",border:"1px solid #ccc",borderRadius:"10px",padding:"10px"},children:[e.jsx("div",{className:"flex-grow-1 overflow-auto mb-2",style:{maxHeight:"400px"},children:x.map((s,t)=>e.jsxs("div",{className:"mb-2",children:[s.answer&&e.jsx("div",{className:"d-flex justify-content-end mb-1",children:e.jsxs("div",{className:"p-2 bg-primary text-white rounded",children:[e.jsx("strong",{children:"Admin:"})," ",s.answer]})}),s.question&&e.jsx("div",{className:"d-flex justify-content-start mb-1",children:e.jsxs("div",{className:"p-2 bg-secondary text-white rounded",children:[e.jsx("strong",{children:"Customer:"})," ",s.question]})})]},t))}),e.jsxs(q,{onSubmit:V,className:"d-flex mt-2",children:[e.jsx(q.Control,{type:"text",placeholder:"Type a message",value:g,onChange:s=>v(s.target.value)}),e.jsx(F,{variant:L?"primary":"danger",type:"submit",className:"ms-2",children:"Kirim"})]})]}))},[x,g,L]);const X=s=>{S(s),s==="faq"?(u(e.jsx(ne,{sidebarLData:H,handleClose:()=>k("left"),handleCategoryClick:Z})),d(e.jsx(D,{faqs:E,selectedCategory:"All Category"}))):s==="layanan"?(u(null),d(e.jsx(re,{layananData:G}))):s==="tulis"?(u(e.jsx(oe,{handleChatClick:Q})),d(e.jsx("p",{className:"text-center",children:"Silahkan pilih chat!"}))):(u(null),d(null))},Z=s=>{d(e.jsx(D,{faqs:E,selectedCategory:s}))},k=s=>{s==="left"?u(null):s==="right"&&c(null)};return e.jsxs($,{fluid:!0,className:"vh-100 d-flex flex-column",style:{padding:"12px"},children:[e.jsx(ee,{user:w,handleLogout:P,handleButtonClick:J,selectedButton:W}),e.jsxs(se,{className:"flex-grow-1",style:{padding:"12px"},children:[e.jsx(y,{className:"bg-secondary p-3 d-flex flex-column align-items-center",style:{borderRadius:"15px",minWidth:"56px",maxWidth:"56px"},children:e.jsx(te,{user:w,handleIconClick:X,selectedIcon:U})}),e.jsx(y,{className:"bg-light p-3",style:{borderRadius:"15px",marginRight:"12px",maxWidth:h?"210px":"0px",minWidth:h?"210px":"0px",transition:"max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",overflow:"hidden",border:h?"solid 1px":"solid 0px"},children:h}),e.jsx(y,{className:"bg-light p-4",style:{border:"1px solid",borderRadius:"15px",overflowY:"auto",height:"100%"},children:B}),e.jsxs(y,{className:"bg-light p-3",style:{borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px",marginLeft:"12px",maxWidth:f?"210px":"0px",minWidth:f?"210px":"0px",transition:"max-width 0.3s ease-in-out, min-width 0.3s ease-in-out",overflow:"hidden",border:f?"solid 1px":"solid 0px"},children:[e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx(F,{variant:"link",onClick:()=>k("right"),children:e.jsx(ae,{})})}),w?null:f]})]})]})};export{he as default};