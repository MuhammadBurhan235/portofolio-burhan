import{r as a,j as e}from"./index-CVYF3-cJ.js";import{u as I,s as n}from"./FullscreenUtils-CSB6ty7L.js";import{s as c}from"./supabaseClient-DaJVRlD7.js";import{i as d}from"./images-CgSThqtr.js";import{M as L}from"./Modal-DMv-NRqJ.js";import"./Modal.module-CMlJvcBP.js";function D(){const{isFullscreen:r,toggleFullscreen:u}=I(),[p,g]=a.useState([]),[l,h]=a.useState(null),[m,x]=a.useState(null),[f,o]=a.useState(!1),[j,v]=a.useState([]),[w,y]=a.useState([]);a.useEffect(()=>{(async()=>{const{data:s,error:i}=await c.from("intpic").select("*");i?console.error(i):g(s)})()},[]),a.useEffect(()=>{(async()=>{const{data:s,error:i}=await c.from("deppusat_info").select("*");i?console.error(i):v(s)})()},[]),a.useEffect(()=>{(async()=>{const{data:s,error:i}=await c.from("kabinet_info").select("*");i?console.error(i):y(s)})()},[]);const C=(t,s)=>{h({nama:t,keterangan:s}),x(null),o(!0)},N=()=>{x(p),h(null),o(!0)},b=()=>{o(!1)};return e.jsxs("div",{className:"container",children:[e.jsx("div",{className:n.fullImageAlFath,style:{overflow:"hidden"},children:p.filter(t=>t.tipe==="ldkaf").map((t,s)=>e.jsx("div",{children:e.jsx("div",{className:n.smallImageContainer,style:{bottom:r?`${t.bot_ful}vw`:`${t.bot_win}vw`,left:r?`${t.left_ful}vw`:`${t.left_win}vw`},onClick:()=>C(t.nama,t.keterangan),children:e.jsx("img",{src:d[t.nama],alt:t.nama,className:`${n.smallImage} ${n.blink}`,style:{width:r?`${t.w_ful}vw`:`${t.w_win}vw`,height:r?`${t.h_ful}vw`:`${t.h_win}vw`}})},s)}))}),e.jsx(L,{show:f,onClose:b,children:l?e.jsx(e.Fragment,{children:l.nama==="Toa"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cardContainer",style:{height:"35px",padding:"0px",marginTop:"-50px"},children:e.jsx("h3",{style:{color:"white"},children:l.keterangan})}),e.jsx("div",{className:"cardContainer",style:{padding:"0px"},children:w.sort((t,s)=>t.id-s.id).map((t,s)=>e.jsxs("div",{className:"cardList2",style:{width:"260px",padding:"15px"},children:[e.jsx("div",{className:"cardContainer",style:{height:"60px",padding:"0px",alignContent:"center",paddingBottom:"10px"},children:e.jsx("h3",{children:t.nama})}),e.jsx("div",{className:"cardContainer",style:{height:"200px",padding:"0px",paddingBottom:"10px"},children:e.jsx("img",{src:d[t.nama],alt:""})}),e.jsx("div",{className:"cardContainer",style:{height:"100px",padding:"0px",paddingBottom:"10px"},children:e.jsx("p",{className:"cardDescription",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti provident cumque doloribus inventore, animi perspiciatis non quidem obcaecati maiores deserunt odit sunt rerum aut tenetur voluptatum a sequi minus!"})}),e.jsx("p",{style:{textAlign:"right"},children:e.jsx("a",{href:"",children:"Detail"})})]},s))})]}):l.nama==="Kursi Meja"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cardContainer",style:{height:"35px",padding:"0px",marginTop:"-50px"},children:e.jsx("h3",{style:{color:"white"},children:l.keterangan})}),e.jsx("div",{className:"cardContainer",style:{padding:"0px"},children:j.sort((t,s)=>t.id-s.id).map((t,s)=>e.jsxs("div",{className:"cardList2",style:{width:"260px",padding:"20px"},children:[e.jsx("div",{className:"cardContainer",style:{height:"60px",padding:"0px",alignContent:"center",paddingBottom:"10px"},children:e.jsx("h3",{children:t.nama})}),e.jsx("div",{className:"cardContainer",style:{height:"200px",padding:"0px",paddingBottom:"10px"},children:e.jsx("img",{src:d[t.nama],alt:""})}),e.jsx("div",{className:"cardContainer",style:{height:"100px",padding:"0px",paddingBottom:"10px"},children:e.jsx("p",{className:"cardDescription",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti provident cumque doloribus inventore, animi perspiciatis non quidem obcaecati maiores deserunt odit sunt rerum aut tenetur voluptatum a sequi minus!"})}),e.jsx("p",{style:{textAlign:"right"},children:e.jsx("a",{href:"",children:"Detail"})})]},s))})]}):null}):m&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cardContainer",style:{height:"35px",padding:"0px",marginTop:"-50px"},children:e.jsx("h3",{style:{color:"white"},children:"Ada apa aja sih..."})}),e.jsx("div",{className:"cardContainer",style:{padding:"0px"},children:m.sort((t,s)=>t.id-s.id).filter(t=>t.tipe==="ldkaf").map((t,s)=>e.jsxs("div",{className:"cardList2",style:{width:"260px",padding:"20px"},children:[e.jsx("div",{className:"cardContainer",style:{height:"60px",padding:"0px",alignContent:"center",paddingBottom:"10px"},children:e.jsx("h3",{children:t.keterangan})}),e.jsx("div",{className:"cardContainer",style:{height:"200px",padding:"0px",paddingBottom:"10px"},children:e.jsx("img",{src:d[t.nama],alt:""})})]},s))})]})}),e.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("button",{className:n.button1,onClick:N,style:{width:"9vw",position:"absolute",top:"1vw",right:"11vw",padding:"10px",cursor:"pointer",color:"white",borderRadius:"5px",fontSize:"1vw"},children:"Lihat"}),e.jsx("button",{className:n.button1,onClick:u,style:{width:"9vw",position:"absolute",top:"1vw",right:"1vw",padding:"10px",cursor:"pointer",color:"white",borderRadius:"5px",fontSize:"1vw"},children:r?"Window":"Fullscreen"})]})]})}export{D as default};
