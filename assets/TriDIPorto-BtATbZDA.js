import{r,j as e}from"./index-CVYF3-cJ.js";import{s as m}from"./supabaseClient-DaJVRlD7.js";import{B as l,s as h}from"./Banner-Cp7Uo8sy.js";/* empty css            */import"./Modal.module-CMlJvcBP.js";import"./images-CgSThqtr.js";import"./index-CWfyQasI.js";import"./index-B543s4IE.js";function R(){const[s,c]=r.useState([]);r.useEffect(()=>{(async()=>{const{data:u,error:i}=await m.from("intpic_data").select("*");i?console.error(i):c(u)})()},[]);const t=r.useRef(null),n=r.useRef(null),a=r.useRef(null),d=()=>{var o;(o=t.current)==null||o.scrollIntoView({behavior:"smooth"})},f=()=>{var o;(o=n.current)==null||o.scrollIntoView({behavior:"smooth"})},p=()=>{var o;(o=a.current)==null||o.scrollIntoView({behavior:"smooth"})};return e.jsxs("div",{className:"container",children:[e.jsx("div",{ref:t,children:e.jsx("div",{className:"area",children:e.jsx("div",{className:"kontenArea",children:e.jsx("div",{className:"cardContainer",children:e.jsx("div",{className:"cardList2"})})})})}),e.jsx("div",{ref:n,children:e.jsx(l,{banners:s.filter(o=>o.keterangan2==="Software"),konten1:"Developed",konten2:"Software that I"})}),e.jsx("div",{ref:a,children:e.jsx(l,{banners:s.filter(o=>o.keterangan2==="File"),konten1:"Files",konten2:"Support"})}),e.jsx("div",{className:"blur"}),e.jsxs("div",{className:h.navigasi2,children:[e.jsx("button",{onClick:d,children:"New Area"}),e.jsx("button",{onClick:f,children:"Software Developed"}),e.jsx("button",{onClick:p,children:"Support Files"})]})]})}export{R as default};
