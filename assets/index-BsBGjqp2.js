import{r,j as e}from"./index-CjckY6x7.js";const t=()=>{const[i,l]=r.useState(!1),s=r.useRef(null),c=()=>{l(!i),s.current&&(i?(s.current.pause(),s.current.currentTime=0):s.current.play())};return e.jsxs("section",{className:"Upsale pt-20",children:[e.jsx("h2",{className:"my-10",children:"Бонус"}),e.jsxs("div",{className:"upsale-box",children:[e.jsx("img",{src:"/tostik/img/home/upsale/0.png",alt:"Upsale image"}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("h3",{children:[" А ви знаєте, ",e.jsx("mark",{children:"що це"})," таке?"]}),e.jsx("button",{onClick:c,children:"Дізнатися"})]})]}),e.jsxs("div",{className:`video-box ${i?"active":""}`,children:[e.jsx("h3",{children:"Розприскувач олії"}),e.jsx("video",{ref:s,src:"/tostik/oil.mp4"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:c,children:i?"Зупинити":"Відтворити"}),e.jsx("a",{href:"#recipes",onClick:()=>l(!1),children:"Далі"})]})]})]})};export{t as default};
