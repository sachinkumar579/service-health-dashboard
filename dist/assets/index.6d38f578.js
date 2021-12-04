import{j as h,r as d,m,R as v,a as N}from"./vendor.7585a210.js";const y=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}};y();const e=h.exports.jsx,o=h.exports.jsxs,S=r=>e("button",{className:"button",type:r.type||"button",onClick:r.onClick,children:r.children});const p=r=>e("div",{className:`card ${r.className}`,children:r.children}),b=r=>o("div",{children:[e("div",{className:"backdrop"}),o(p,{className:"modal",children:[e("header",{className:"header",children:e("h2",{children:r.title})}),e("div",{className:"content",children:e("p",{children:r.message})}),e("footer",{className:"actions",children:e(S,{onClick:r.onConfirm,children:"Okay"})})]})]}),k=({setToken:r})=>{const[a,c]=d.exports.useState(""),[s,t]=d.exports.useState(""),[n,l]=d.exports.useState(),f=()=>{l(null)},g=i=>{i.preventDefault(),a.length!==0&&s.length!==0&&m(a)==="21232f297a57a5a743894a0e4a801fc3"&&m(s)==="21232f297a57a5a743894a0e4a801fc3"?r({token:12345}):(c(""),t(""),l({title:"Invalid username",message:"Please enter valid credentials"}))};return o(p,{children:[n&&e(b,{title:n.title,message:n.message,onConfirm:f}),e("div",{className:"login",children:o("form",{onSubmit:g,children:[e("p",{children:" User name "}),e("input",{type:"text",onChange:i=>c(i.target.value),value:a}),e("p",{children:" Password "}),e("input",{type:"password",onChange:i=>t(i.target.value),value:s}),e("button",{type:"submit",className:"login-button",children:"Log In"})]})})]})};function x(){const r=()=>{const t=sessionStorage.getItem("token"),n=JSON.parse(t);return n==null?void 0:n.token},[a,c]=d.exports.useState(r());return{setToken:t=>{sessionStorage.setItem("token",JSON.stringify(t)),c(t.token)},token:a}}const C=[{name:"App 123 Test",status:"UP",url:"http://localhost:8080/app"},{name:"App 456 Test",status:"UP",url:"http://localhost:8080/app"},{name:"App 789 Test",status:"UP",url:"http://localhost:8080/app"},{name:"App 011 Test",status:"UP",url:"http://localhost:8080/app"}];var u={data:C};const L=()=>{const[r,a]=d.exports.useState(u.data);return o("div",{className:"dashboard",children:[e("input",{type:"text",placeholder:"search service",className:"dashboard-search",onChange:s=>{let t=u.data;s.target.value.trim()!=0&&(t=u.data.filter(n=>{if(n.name.toLowerCase().includes(s.target.value.toLowerCase()))return!0})),a(t)}}),e("table",{children:o("tbody",{children:[o("tr",{children:[e("th",{}),e("th",{children:"Service"}),e("th",{children:"Status"}),e("th",{children:"URL"})]}),r.length===0?o("tr",{children:[e("td",{}),e("td",{children:"No matching services"}),e("td",{}),e("td",{})]}):r.map((s,t)=>o("tr",{children:[e("td",{children:t+1}),e("td",{children:s.name}),e("td",{children:s.status==="UP"?e("span",{className:"green-status"}):e("span",{className:"red-status"})}),e("td",{children:s.url})]},t))]})})]})};function P(){const{token:r,setToken:a}=x();return r==null||r==""?e(k,{setToken:a}):e(L,{})}v.render(e(N.StrictMode,{children:e(P,{})}),document.getElementById("root"));
