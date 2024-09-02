import "./index.css"
import { makeHome } from "./home/home"
import { makeMenu } from "./menu/menu";
import { makeAbout } from "./about/about";
document.getElementById("home").getAttribute
function reset(doc)
{
  Array.from(doc.querySelector("nav").children).forEach(button => {
    if (button.getAttribute("status") == "active")
    {
      button.setAttribute("status", "inactive");
    }
  })
  doc.body.removeChild(doc.getElementById("content"));
  const content = doc.body.appendChild(doc.createElement("div"));
  content.id = "content";
}
document.addEventListener("DOMContentLoaded", function(){
  makeHome(this);
  this.getElementById("home").addEventListener("click", function(){
    reset(document);
    makeHome(document);
  })
  this.getElementById("menu").addEventListener("click", function(){
    reset(document);
    makeMenu(document);
  })
  this.getElementById("about").addEventListener("click", function(){
    reset(document);
    makeAbout(document);
  })
})