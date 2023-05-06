import{r as c,j as r,a as e}from"./index-ee16524e.js";import{a as u,b as f,T as x}from"./TaskSelectors-77c14877.js";import{u as A}from"./Tasks-c8ac0c0c.js";const C=({type:i,task:t,defaultProgressOrder:a,setIsModalOpen:s,setIsMenuOpen:d})=>{const[n,S]=c.useState(t?t.title:""),[p,y]=c.useState(t?t.detail:""),[m,g]=c.useState(t?t.dueDate:""),[h,b]=c.useState(t?t.progressOrder:a),{addTask:D,editTask:v}=A(),I=()=>{i===x.ADD&&(D(n,p,m,h),s(!1)),t&&i===x.EDIT&&(v(t.id,n,p,m,h),s(!1),d&&d(!1))};return r("form",{style:o.form,children:[r("div",{style:o.formItem,children:[e("label",{children:"Title："}),e("input",{type:"text",value:n,onChange:l=>{S(l.target.value)},style:o.formInput})]}),r("div",{style:o.formItem,children:[e("label",{children:"Detail："}),e("textarea",{value:p,onChange:l=>{y(l.target.value)},style:o.formTextArea})]}),r("div",{style:o.formItem,children:[e("label",{children:"Due Date："}),e("input",{type:"date",value:m,onChange:l=>{g(l.target.value)},style:o.formInput})]}),r("div",{style:o.formItem,children:[e("label",{children:"Progress："}),r("select",{style:o.formInput,defaultValue:h,onChange:l=>{b(Number(l.target.value))},children:[e("option",{value:u.NOT_STARTED,children:f.NOT_STARTED}),e("option",{value:u.IN_PROGRESS,children:f.IN_PROGRESS}),e("option",{value:u.WAITING,children:f.WAITING}),e("option",{value:u.COMPLETED,children:f.COMPLETED})]})]}),e("button",{type:"button",style:o.button,onClick:()=>{I()},children:"Submit"})]})},o={form:{fontSize:"24px"},formItem:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"16px"},formInput:{height:"40px",fontSize:"20px"},formTextArea:{height:"80px",fontSize:"20px"},button:{backgroundColor:"#55C89F",color:"#fff",fontSize:"20px",padding:"12px 24px",border:"none",borderRadius:"4px"}},O=({headingTitle:i,type:t,setIsModalOpen:a,setIsMenuOpen:s,task:d,defaultProgressOrder:n})=>r("div",{style:T.container,children:[r("div",{style:T.modalTop,children:[e("h1",{children:i}),e("span",{className:"material-icons",style:T.icon,onClick:()=>{a(!1)},children:"close"})]}),e(C,{type:t,setIsModalOpen:a,setIsMenuOpen:s,task:d,defaultProgressOrder:n})]}),T={container:{border:"1px solid gray",position:"fixed",top:"20%",left:"40%",width:"25%",backgroundColor:"#fff",padding:"28px",zIndex:10},modalTop:{display:"flex",justifyContent:"space-between"},icon:{cursor:"pointer"}};export{O as default};
