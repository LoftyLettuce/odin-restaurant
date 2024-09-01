import "./home.css";

function create(ele ,content, parent, doc)
{
  const child = doc.createElement(ele);
  child.textContent = content;
  parent.appendChild(child);
}
export const makeHome = function(doc){
  const content = doc.getElementById("content");
  content.className = "home";
  const button = doc.getElementById("home");
  button.setAttribute("status","active");
  create("h1", "Restaurant", content, doc);
  create("div", "A normal one.", content, doc);
}