import{u as h,a as m,j as s}from"./index-CVYF3-cJ.js";/* empty css            */import{i}from"./images-CgSThqtr.js";function u(){const r=h(),o=m(),{items:t,konten:c}=r.state||{};if(!t||t.length===0)return s.jsx("div",{className:"area",children:"No data available"});const d=()=>{o(-1)},p=a=>a?a.split(";"):[],x=a=>a?a.split(";"):[];return s.jsx("div",{className:"area",children:s.jsxs("div",{className:"kontenArea2",style:{paddingTop:"70px"},children:[s.jsx("button",{onClick:d,className:"backButton",style:{position:"absolute",marginTop:"-53px",marginLeft:"-999px"},children:"< Kembali"}),s.jsx("h3",{style:{position:"absolute",marginTop:"-45px"},children:c}),t.map((a,n)=>s.jsx(s.Fragment,{children:"list_gambar"in a?s.jsx(s.Fragment,{children:a.keterangan2==="Software"?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cardList1",style:{width:"540px"},children:[s.jsx("h3",{style:{paddingBottom:"10px",fontSize:"20px"},children:a.nama}),a.periode," "," | "," ",a.jenis,s.jsx("div",{className:"listGambarContainer",style:{paddingTop:"20px"},children:p(a.list_gambar).map((e,l)=>s.jsx("img",{className:"smallGambar",src:i[e],alt:`Image ${l}`,style:{width:e==="elo1"||e==="elo2"||e==="elo3"?"130px":"200px",height:e==="elo1"||e==="elo2"||e==="elo3"?"250px":"115px"}},l))}),s.jsx("p",{className:"cardDescription",style:{fontWeight:"normal",textAlign:"left"},children:a.dekripsi}),s.jsxs("div",{style:{display:"flex",gap:"5px"},children:[s.jsx("h4",{children:"Go to:"}),s.jsx("a",{href:a.link,children:["LMS Developer (BE < FE)","Kenal Al-Fath Web Dev (Fullstack)"].includes(a.nama)?"Website":["TVent Web Dev (BE = FE)","E-Lon Mobile App Dev (BE = FE)"].includes(a.nama)?"GitHub":"Website"}),s.jsx("div",{className:"listLogoContainer",style:{marginLeft:"10%"},children:x(a.keterangan).map((e,l)=>s.jsx("img",{className:"smallLogo",src:i[e],alt:`Logo ${l}`},l))})]}),s.jsx("a",{className:"detail",href:"",children:"Detail"})]},n)}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cardList1",style:{width:"270px"},children:[s.jsx("h3",{children:a.nama}),s.jsxs("p",{style:{paddingBottom:"20px"},children:[a.periode," "," | "," ",a.keterangan]}),s.jsx("a",{href:a.link,children:"Lihat"})]},n)})}):s.jsxs("div",{className:"cardList1",children:[s.jsx("h3",{style:{paddingBottom:"10px",fontSize:"12px"},children:a.nama}),s.jsx("img",{src:i[a.nama],alt:"",style:{width:"200px",height:"200px",paddingBottom:"20px"}}),s.jsx("p",{className:"cardDescription",style:{fontWeight:"normal",textAlign:"left"}})]},n)}))]})})}export{u as default};
