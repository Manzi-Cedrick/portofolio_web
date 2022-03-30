const darkmode=document.querySelector("#darkmode")
const body=document.querySelector("html")
darkmode.addEventListener("click",()=>{
    body.classList.add("dark")
})
darkmode.addEventListener("dblclick",()=>{
    body.classList.remove("dark")
})
window.addEventListener('scroll', function(){
const header1=document.querySelector("header");
header1.classList.toggle("sticky",window.scrollY > 0)
})

const bodys=document.body
let lastscroll=0;

window.addEventListener('scroll',()=>{
const currentscroll=window.pageYOffset
if (currentscroll<0) {
    bodys.classList.remove("scroll-up")
}
if (currentscroll > lastscroll && !bodys.classList.contains("scroll-down")) {
    bodys.classList.remove("scroll-up")
    bodys.classList.add("scroll-down")
}
if (currentscroll < lastscroll && bodys.classList.contains("scroll-down")) {
    bodys.classList.remove("scroll-down")
    bodys.classList.add("scroll-up")
}
lastscroll = currentscroll
})
