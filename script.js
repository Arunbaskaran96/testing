let button=document.querySelector(".nav-toggle");
let list=document.querySelector(".nav-items");

button.addEventListener("click",()=>{
    list.classList.toggle("toggleDispaly")
})