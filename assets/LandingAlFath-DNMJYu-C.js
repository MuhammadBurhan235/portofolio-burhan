import{r as d,j as e}from"./index-CVYF3-cJ.js";import{i as s}from"./images-CgSThqtr.js";import{F as a,c as h,d as x,e as l,g as w}from"./index-CWfyQasI.js";/* empty css            */import{s as C}from"./supabaseClient-DaJVRlD7.js";import"./index-B543s4IE.js";const N="/portofolio-burhan/assets/tridialfath-DzNKhWy8.mp4",k="/portofolio-burhan/assets/tridialfath-UaNDSYUw.webm",L="/portofolio-burhan/assets/intpicalfath-B4l2WIyC.mp4",T="/portofolio-burhan/assets/intpicalfath-DOAgsDoM.webm";function F(){const[o,c]=d.useState(0),[m,u]=d.useState([]),[n,y]=d.useState([]),j=i=>{const t=i*3;c(Math.min(t,n.length-3))};d.useEffect(()=>{(async()=>{const{data:t,error:r}=await C.from("days_to_event").select("*");if(r)console.error(r);else{u(t);const p=[];t.forEach(b=>{b.list_gambar.split(";").forEach(v=>{p.push({src:v.trim()})})}),y(p)}})()},[]),d.useEffect(()=>{const i=setInterval(()=>{c(t=>{const r=t+3;return r>=n.length?0:r})},5e3);return()=>clearInterval(i)},[n]);const f=n.slice(o,o+3);return e.jsx("div",{children:e.jsx("div",{className:"area",children:e.jsxs("div",{className:"kontenArea",style:{padding:"0px",height:"auto",border:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{className:"cardContainer",style:{padding:"0px",color:"#333"},children:[e.jsx("h3",{style:{fontSize:"3em"},children:"Kenal"}),e.jsx("h3",{style:{WebkitTextStroke:"1px #d2d2d2",fontSize:"3em"},children:"Al-Fath"})]}),e.jsx("div",{className:"kontenArea areaMobile",style:{top:"100%",backgroundColor:"rgba(255, 255, 255, 0.179)",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs("div",{className:"cardContainer mobile",style:{padding:"30px"},children:[e.jsx("div",{className:"cardList2",style:{width:"1030px",height:"130px",padding:"0px",backgroundColor:"transparent"},children:e.jsxs("div",{className:"cardContainer",style:{width:"1030px",height:"130px",padding:"0px",gap:"0px"},children:[m.map((i,t)=>e.jsx(e.Fragment,{children:i.nama==="Penerimaan Mahasiswa Baru Islamic Festival 2024"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"cardList2",style:{width:"380px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px",padding:"10px"},children:[e.jsx("h4",{style:{textAlign:"left",color:"#c04545"},children:"Days to Big Event"}),e.jsx("h3",{style:{fontSize:"11px",textAlign:"left"},children:i.nama}),e.jsx("p",{style:{fontSize:"11px",textAlign:"left"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ullam deserunt perferendis ipsam? Iure accusamus voluptatum perspiciatis? Debitis repudiandae, aperiam, nobis sunt laboriosam consectetur fugit rerum earum fuga, quia alias."})]},t)}):null})),e.jsxs("div",{className:"slideContainer",style:{width:"648px",height:"128.5px",borderTopRightRadius:"15px",borderBottomRightRadius:"15px",padding:"0px",gap:"0px",overflow:"hidden",display:"flex",position:"relative"},children:[f.map((i,t)=>e.jsx("img",{src:s[i.src],alt:`Slide ${t}`,style:{width:"215px",height:"128.6px"}},t)),e.jsx("div",{style:{padding:"5px",borderRadius:"5px",position:"absolute",marginTop:"3px",backgroundColor:"rgba(255, 255, 255, 0.150)"},children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.slice(0,Math.ceil(n.length/3)).map((i,t)=>e.jsx("div",{onClick:()=>j(t),style:{width:"10px",height:"10px",backgroundColor:o===t*3?"#c04545":"lightgray",borderRadius:"50%",margin:"0 5px",cursor:"pointer"}},t))})})]})]})}),e.jsx("div",{className:"cardList2",style:{padding:"0px",width:"270px",height:"200px",backgroundColor:"transparent",border:"none"},children:e.jsxs("div",{className:"cardContainer",style:{width:"270px",padding:"0px"},children:[e.jsx("div",{className:"cardList2",style:{width:"270px",height:"37px",padding:"0px",border:"none",alignContent:"center"},children:e.jsx("h3",{style:{color:"#c04545"},children:"CURRENTLY ACTIVE"})}),e.jsx("div",{className:"cardList2",style:{width:"130px",height:"153px",padding:"0px",paddingTop:"10px",border:"none"},children:e.jsx("img",{src:s["Al-Fath Logo"],alt:"",style:{width:"110px",height:"auto"}})}),e.jsx("div",{className:"cardList2",style:{width:"130px",height:"153px",padding:"0px",paddingTop:"7px",border:"none"},children:e.jsx("img",{src:s["Rinai Logo"],alt:"",style:{width:"100px",height:"auto"}})})]})}),e.jsx("div",{className:"cardList2",style:{width:"230px",height:"200px",padding:"10px"},children:e.jsxs("div",{className:"cardContainer",style:{padding:"0px"},children:[e.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"210px",height:"auto",borderRadius:"15px"},children:[e.jsx("source",{src:N,type:"video/mp4"}),e.jsx("source",{src:k,type:"video/webm"}),"Your browser does not support the video tag."]}),e.jsx("a",{href:"https://muhammadburhan235.github.io/portofolio-burhan/tridialfath",children:e.jsx("button",{className:"button1",style:{width:"210px",padding:"9px",backgroundColor:"#c04545",color:"white",fontSize:"12px",textTransform:"unset",borderRadius:"15px"},children:e.jsxs("div",{className:"cardContainer",style:{gap:"0px",fontWeight:"normal"},children:[e.jsxs("h4",{style:{width:"200px"},children:[e.jsx(a,{icon:h,style:{animation:"blink 1s infinite"}})," ","Interaction Picture"," ",e.jsx(a,{icon:x,style:{animation:"blink 1s infinite"}})]}),e.jsxs("div",{className:"cardContainer",children:[e.jsxs("p",{children:["Dekstop ",e.jsx(a,{icon:l})]}),e.jsxs("p",{children:["Mobile ",e.jsx(a,{icon:l})]})]})]})})})]})}),e.jsx("div",{className:"cardList2",style:{width:"230px",height:"200px",padding:"10px"},children:e.jsxs("div",{className:"cardContainer",style:{padding:"0px"},children:[e.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"210px",height:"auto",borderRadius:"15px"},children:[e.jsx("source",{src:L,type:"video/mp4"}),e.jsx("source",{src:T,type:"video/webm"}),"Your browser does not support the video tag."]}),e.jsx("a",{href:"https://muhammadburhan235.github.io/portofolio-burhan/intpicalfath",children:e.jsx("button",{className:"button1",style:{width:"210px",padding:"9px",backgroundColor:"#c04545",color:"white",fontSize:"12px",textTransform:"unset",borderRadius:"15px"},children:e.jsxs("div",{className:"cardContainer",style:{gap:"0px",fontWeight:"normal"},children:[e.jsxs("h4",{style:{width:"200px"},children:[e.jsx(a,{icon:h,style:{animation:"blink 1s infinite"}})," ","Interaction Picture"," ",e.jsx(a,{icon:x,style:{animation:"blink 1s infinite"}})]}),e.jsxs("div",{className:"cardContainer",children:[e.jsxs("p",{children:["Dekstop ",e.jsx(a,{icon:l})]}),e.jsxs("p",{children:["Mobile ",e.jsx(a,{icon:w})]})]})]})})})]})}),e.jsx("div",{className:"cardList2",style:{padding:"0px",width:"270px",height:"200px",backgroundColor:"transparent",border:"none"},children:e.jsxs("div",{className:"cardContainer",style:{width:"270px",padding:"0px"},children:[e.jsx("div",{className:"cardList2",style:{width:"145px",height:"95px",padding:"0px",border:"none"},children:e.jsxs("div",{className:"cardContainer",style:{width:"145px",padding:"0px",paddingTop:"10px"},children:[e.jsx("img",{src:s["Telkom Logo"],alt:"",style:{width:"56px",height:"auto"}}),e.jsx("img",{src:s["FSLDK Logo"],alt:"",style:{width:"56px",height:"auto"}})]})}),e.jsx("div",{className:"cardList2",style:{width:"115px",height:"95px",padding:"0px",border:"none"},children:e.jsxs("div",{className:"cardContainer",style:{width:"115px",padding:"0px",paddingTop:"4.5px"},children:[e.jsx("a",{href:"https://youtube.com/@al-fathuniversitastelkom8769?si=VJqU37TKGnLIQdJe",children:e.jsx("img",{src:s["YT Logo"],alt:"",style:{width:"35px",height:"auto"}})}),e.jsx("a",{href:"https://www.facebook.com/ALFATHUniversitasTelkom",children:e.jsx("img",{src:s["FB Logo"],alt:"",style:{width:"35px",height:"auto"}})}),e.jsx("a",{href:"https://www.instagram.com/alfathtelu",children:e.jsx("img",{src:s["IG Logo"],alt:"",style:{width:"35px",height:"auto"}})}),e.jsx("a",{href:"",children:e.jsx("img",{src:s["LINE Logo"],alt:"",style:{width:"35px",height:"auto"}})})]})}),e.jsx("div",{className:"cardList2",style:{width:"270px",height:"95px",padding:"20px",paddingTop:"19px",border:"none"},children:e.jsx("h3",{style:{textAlign:"left",color:"#c04545"},children:"# Rangkai Cerita, Inspirasi untuk Semua"})})]})})]})})]})})})}const g=document.createElement("style");g.innerHTML=`
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;document.head.appendChild(g);export{F as default};
