import{j as e,a as i,r as p,m,L as g,C as v,X as J,Y as y,b as N,R as b,c as S}from"./vendor.248bba3e.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}};C();const k=a=>e("button",{className:"button",type:a.type||"button",onClick:a.onClick,children:a.children});const f=a=>e("div",{className:`card ${a.className}`,children:a.children}),L=a=>i("div",{children:[e("div",{className:"backdrop"}),i(f,{className:"modal",children:[e("header",{className:"header",children:e("h2",{children:a.title})}),e("div",{className:"content",children:e("p",{children:a.message})}),e("footer",{className:"actions",children:e(k,{onClick:a.onConfirm,children:"Okay"})})]})]}),x=({setToken:a})=>{const[s,c]=p.exports.useState(""),[o,t]=p.exports.useState(""),[r,n]=p.exports.useState(),d=()=>{n(null)},l=u=>{u.preventDefault(),s.length!==0&&o.length!==0&&m(s)==="21232f297a57a5a743894a0e4a801fc3"&&m(o)==="21232f297a57a5a743894a0e4a801fc3"?a({token:12345}):(c(""),t(""),n({title:"Invalid username",message:"Please enter valid credentials"}))};return i(f,{children:[r&&e(L,{title:r.title,message:r.message,onConfirm:d}),e("div",{className:"login",children:i("form",{onSubmit:l,children:[e("p",{children:" User name "}),e("input",{type:"text",onChange:u=>c(u.target.value),value:s}),e("p",{children:" Password "}),e("input",{type:"password",onChange:u=>t(u.target.value),value:o}),e("button",{type:"submit",className:"login-button",children:"Log In"})]})})]})};function T(){const a=()=>{const t=sessionStorage.getItem("token"),r=JSON.parse(t);return r==null?void 0:r.token},[s,c]=p.exports.useState(a());return{setToken:t=>{sessionStorage.setItem("token",JSON.stringify(t)),c(t.token)},token:s}}const A=a=>i("div",{className:"app-usage-chart",children:[i(g,{width:600,height:400,data:a.service.usage,margin:{top:40,right:40,bottom:20,left:20},children:[e(v,{vertical:!1}),e(J,{dataKey:"date"}),e(y,{domain:["auto","auto"]}),e(N,{dataKey:"price",stroke:"#ff7300",dot:!1})]}),i("label",{style:{justifyContent:"center"},children:[a.service.name," (Total number of requests/ day) "]})]});const D=[{name:"App 123 Test",status:"UP",url:"http://localhost:8080/app",usage:[{date:"Jan 01 2021",price:105.35},{date:"Jan 02 2021",price:120},{date:"Jan 03 2021",price:110.35},{date:"Jan 04 2021",price:100},{date:"Jan 05 2021",price:75.35},{date:"Jan 06 2021",price:130},{date:"Jan 07 2021",price:80.35},{date:"Jan 08 2021",price:90}]},{name:"App 456 Test",status:"UP",url:"http://localhost:8080/app",usage:[{date:"Jan 01 2021",price:10.35},{date:"Jan 02 2021",price:12},{date:"Jan 03 2021",price:11.35},{date:"Jan 04 2021",price:10},{date:"Jan 05 2021",price:7.35},{date:"Jan 06 2021",price:10},{date:"Jan 07 2021",price:8.35},{date:"Jan 08 2021",price:9}]},{name:"App 789 Test",status:"UP",url:"http://localhost:8080/app",usage:[{date:"Jan 01 2021",price:300.35},{date:"Jan 02 2021",price:320},{date:"Jan 03 2021",price:400.35},{date:"Jan 04 2021",price:300},{date:"Jan 05 2021",price:500},{date:"Jan 06 2021",price:300},{date:"Jan 07 2021",price:200},{date:"Jan 08 2021",price:100}]},{name:"App 011 Test",status:"UP",url:"http://localhost:8080/app",usage:[{date:"Jan 01 2021",price:105.35},{date:"Jan 02 2021",price:120},{date:"Jan 03 2021",price:110.35},{date:"Jan 04 2021",price:100},{date:"Jan 05 2021",price:75.35},{date:"Jan 06 2021",price:130},{date:"Jan 07 2021",price:80.35},{date:"Jan 08 2021",price:90}]},{name:"App 012 Test",status:"DOWN",url:"http://localhost:8080/app",usage:[{date:"Jan 01 2021",price:987},{date:"Jan 02 2021",price:324},{date:"Jan 03 2021",price:456},{date:"Jan 04 2021",price:600},{date:"Jan 05 2021",price:755},{date:"Jan 06 2021",price:430},{date:"Jan 07 2021",price:535},{date:"Jan 08 2021",price:500}]}];var h={data:D};const P=()=>{const[a,s]=p.exports.useState(h.data),[c,o]=p.exports.useState(),t=n=>{h.data.forEach(l=>{l.name===n.currentTarget.cells[1].textContent&&o(l)})};return i("div",{className:"dashboard",children:[e("input",{type:"text",placeholder:"search service",className:"dashboard-search",onChange:n=>{let d=h.data;n.target.value.trim()!=0&&(d=h.data.filter(l=>{if(l.name.toLowerCase().includes(n.target.value.toLowerCase()))return!0})),s(d)}}),e("table",{children:i("tbody",{children:[i("tr",{children:[e("th",{}),e("th",{children:"Service"}),e("th",{children:"Status"}),e("th",{children:"URL"})]}),a.length===0?i("tr",{children:[e("td",{}),e("td",{children:"No matching services"}),e("td",{}),e("td",{})]}):a.map((n,d)=>i("tr",{className:"dashboard-service",onClick:t,children:[e("td",{children:d+1}),e("td",{children:n.name}),e("td",{children:n.status==="UP"?e("span",{className:"green-status"}):e("span",{className:"red-status"})}),e("td",{children:n.url})]},d))]})}),c!=null&&e(A,{service:c})]})};function U(){const{token:a,setToken:s}=T();return a==null||a==""?e(x,{setToken:s}):e("div",{children:e(P,{})})}b.render(e(S.StrictMode,{children:e(U,{})}),document.getElementById("root"));