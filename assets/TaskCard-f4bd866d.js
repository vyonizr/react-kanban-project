import{r as l,_ as d,j as i,a as n}from"./index-ee16524e.js";import{u as p}from"./Tasks-c8ac0c0c.js";import{a as r}from"./TaskSelectors-77c14877.js";const u=l.lazy(()=>d(()=>import("./TaskMenu-3e8e4a91.js"),["assets/TaskMenu-3e8e4a91.js","assets/index-ee16524e.js","assets/index-a7bcf3c1.css","assets/TaskModal-ae89d1a4.js","assets/TaskSelectors-77c14877.js","assets/Tasks-c8ac0c0c.js"])),C=e=>{const t=e===r.COMPLETED?"#55C89F":"#C5C5C5",s=e===r.COMPLETED?"default":"pointer";return{color:t,cursor:s,fontSize:"28px"}},f=e=>({display:"flex",justifyContent:e===r.NOT_STARTED?"flex-end":"space-between"}),T=({task:e})=>{const{completeTask:t,moveTaskCard:s}=p(),[c,a]=l.useState(!1);return i("div",{style:o.taskCard,children:[i("div",{style:o.taskIcons,children:[n("div",{className:"material-icons",style:C(e.progressOrder),onClick:()=>{t(e.id)},children:"check_circle"}),n("div",{className:"material-icons",style:o.menuIcon,onClick:()=>{a(!0)},children:"more_vert"})]}),n("p",{style:o.taskTitle,children:e.title}),n("div",{children:n("p",{children:e.detail})}),n("div",{children:i("p",{children:["Due on ",e.dueDate]})}),i("div",{style:f(e.progressOrder),children:[e.progressOrder!==r.NOT_STARTED&&n("button",{className:"material-icons",onClick:()=>s(e.id,-1),children:"chevron_left"}),e.progressOrder!==r.COMPLETED&&n("button",{className:"material-icons",onClick:()=>s(e.id,1),children:"chevron_right"})]}),c&&n(l.Suspense,{fallback:n("div",{children:"Loading"}),children:n(u,{task:e,setIsMenuOpen:a})})]})},o={taskCard:{backgroundColor:"#C7EFD0",borderRadius:"12px",padding:"24px",margin:"12px 0",fontSize:"20px",overflowWrap:"anywhere",position:"relative"},taskIcons:{display:"flex",justifyContent:"space-between"},menuIcon:{cursor:"pointer"},taskTitle:{fontSize:"30px"},arrowsContainer:{display:"flex",justifyContent:"space-between"}};export{T as default};