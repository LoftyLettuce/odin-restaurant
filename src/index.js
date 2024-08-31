import "./index.css"
import {homeMake} from "./home/home"
function reset(doc)
{
  doc.body.removeChild(doc.getElementById("content"));
  const content = doc.body.appendChild(doc.createElement("div"));
  content.id = "content";
}
document.addEventListener("DOMContentLoaded", function(){
  homeMake(this);
  this.getElementById("home").addEventListener("click", function(){
    reset(document);
    homeMake(document);
  })
  this.getElementById("menu").addEventListener("click", function(){
    
  })
  this.getElementById("about").addEventListener("click", function(){
    
  })
})