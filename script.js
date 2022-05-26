let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountb = document.getElementById("mountb");
let mountf = document.getElementById("mountf");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll" , ()=>{
    let value = window.scrollY;
    stars.style.left = `${value * 0.45}px`;
    moon.style.top = `${value * 1.08}px`;
    moon.style.opacity = `${1 - (value / 1000 )}`;
    mountb.style.top = `${value * 0.5}px`;
    text.style.marginRight =`${value * 2}px`;
    text.style.marginTop =`${value * 1.5}px`;
    btn.style.marginTop =`${value * 1.5}px`;
    header.style.top = `${value * 0.8}px`;
});