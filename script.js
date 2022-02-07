function main(){
const el = document.getElementById("grow-me");
el.classList.add("big");

const shrink = document.getElementById("shrink-me");
shrink.classList.remove("big");

document.querySelectorAll("li");
const li = document.querySelectorAll("li");
// add loop to loop through li element 

const link = document.querySelector(".link")
link.setAttribute("href", "https://www.example.com");
link.innerText = "Somewhere";

const hide = document.getElementById("hide-me");
hide.style.display = "none";

const show = document.getElementById("show-me");
show.style.display = "block";



const name = document.getElementById("name");

const header = document.querySelector("h1");
header.innerText= "Welcome" +  name.value ;







}

