import{j as s,r,a as q}from"./index-D4XTKlKU.js";import{s as h}from"./Modal.module-CMlJvcBP.js";import{i as m}from"./images-CgSThqtr.js";import{F as v,f as L,a as F,b as w}from"./index-Ce0-wRZ6.js";function P({show:i,onClose:l,children:o}){if(!i)return null;const u=c=>{c.stopPropagation(),l()};return s.jsx("div",{className:h.modalOverlay3d,onClick:u,children:s.jsxs("div",{className:h.modalContent3d,onClick:c=>c.stopPropagation(),children:[s.jsx("button",{className:h.modalClose3d,onClick:l,children:"×"}),o]})})}const R="_slider_iuibu_1",S="_autoRun_iuibu_1",M="_item_iuibu_27",A="_modalImage_iuibu_75",E="_modalTitle_iuibu_81",$="_modalBody_iuibu_86",D="_card_iuibu_90",G="_cardTitle_iuibu_106",O="_cardBody_iuibu_113",z="_cardFooter_iuibu_121",H="_navigasi1_iuibu_132",J="_navigasi2_iuibu_146",K="_blink_iuibu_1",e={slider:R,autoRun:S,item:M,modalImage:A,modalTitle:E,modalBody:$,card:D,cardTitle:G,cardBody:O,cardFooter:z,navigasi1:H,navigasi2:J,blink:K};function Q({sliders:i,konten:l}){const[o,u]=r.useState(!1),[c,x]=r.useState(null),[g,j]=r.useState(null),[N,p]=r.useState(!1),f=q(),y=()=>{u(!o)},C=a=>{x(a),j(null),p(!0)},k=()=>{f("/portofolio-burhan/list",{state:{items:i,konten:l}})},b=a=>{j(a),x(null),p(!0)},B=()=>{p(!1)},I=a=>a?a.split(";"):[],T=a=>a?a.split(";"):[];return s.jsxs("div",{children:[s.jsx("div",{className:e.slider,style:{"--quantity":i.length,animationPlayState:o?"paused":"running"},"data-quantity":i.length,children:i.sort((a,n)=>a.id-n.id).map((a,n)=>s.jsx(s.Fragment,{children:"list_gambar"in a?s.jsxs("div",{className:e.item,style:{"--position":n+1,paddingTop:"50px"},"data-position":n+1,children:[s.jsxs("div",{className:e.card,style:{right:"-25px",borderRadius:"7px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderLeft:"none",width:"225px",overflow:"none"},children:[s.jsx("div",{className:"listGambarContainer",children:I(a.list_gambar).map((t,d)=>s.jsx("img",{className:"smallGambar",src:m[t],alt:`Image ${d}`,style:{width:t==="elo1"||t==="elo2"||t==="elo3"?"60px":"95px",height:t==="elo1"||t==="elo2"||t==="elo3"?"130px":"60px"}},d))}),s.jsx("div",{className:"listLogoContainer",children:T(a.keterangan).map((t,d)=>s.jsx("img",{className:"smallLogo",style:{width:"25px",height:"25px"},src:m[t],alt:`Logo ${d}`},d))})]}),s.jsxs("div",{className:e.card,style:{zIndex:"-1",borderRight:"none"},onClick:()=>b(a),children:[s.jsx("div",{className:e.cardTitle,children:a.nama}),s.jsx("div",{className:e.cardBody,children:a.dekripsi}),s.jsx("div",{className:e.cardFooter})]})]},n):s.jsxs("div",{className:e.item,style:{"--position":n+1},"data-position":n+1,children:[s.jsx("img",{className:e.img,src:m[a.nama],onClick:()=>C(m[a.nama]),alt:a.nama}),s.jsxs("div",{className:e.card,onClick:()=>b(a),children:[s.jsx("div",{className:e.cardTitle,children:a.nama}),s.jsx("div",{className:e.cardBody,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit fuga perferendis dolor cumque tempora doloremque, odit sit asperiores nisi excepturi molestias! Blanditiis dicta sequi omnis unde voluptatum porro similique."}),s.jsx("div",{className:e.cardFooter})]})]},n)}))}),s.jsx(P,{show:N,onClose:B,children:c?s.jsx("img",{className:e.modalImage,src:c,alt:"Selected"}):g?s.jsxs(s.Fragment,{children:[s.jsx("h2",{className:e.modalTitle,children:g.nama}),s.jsx("p",{className:e.modalBody,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, qui. Aliquid sit optio, officia dolores ipsa deserunt, iusto minima ratione, quam doloremque sapiente numquam ut nisi ab quos deleniti accusamus."})]}):null}),s.jsxs("div",{className:e.navigasi1,children:[s.jsx("button",{onClick:y,children:s.jsx(v,{icon:o?L:F})}),s.jsx("button",{onClick:k,children:s.jsx(v,{icon:w})})]})]})}const U="_banner_1g6l0_4",V="_content_1g6l0_12",W="_contenth1_1g6l0_26",_={banner:U,content:V,contenth1:W};function as({banners:i,konten1:l,konten2:o}){return s.jsxs("div",{className:_.banner,children:[s.jsx(Q,{sliders:i,konten:o+" "+l}),s.jsx("div",{className:_.content,children:s.jsx("h1",{"data-content":l,className:_.contenth1,children:o})})]})}export{as as B,e as s};