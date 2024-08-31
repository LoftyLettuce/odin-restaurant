import "./home.css";
function create(ele ,content, parent, doc)
{
  const child = doc.createElement(ele);
  child.textContent = content;
  parent.appendChild(child);
}
export const homeMake = function(doc){
  console.log("oksdf");
  const content = doc.getElementById("content");
  create("h1", "Restaurant", content, doc);
  create("div", "A normal one.", content, doc);
}