import "./about.css"
document
export function makeAbout(doc){
  const content = doc.getElementById("content");
  const button = doc.getElementById("about");
  content.className = "about";
  button.setAttribute("status", "active");
  const h1 = doc.createElement("h1");
  h1.textContent = "About the restaurant";
  const p = doc.createElement("p");
  p.innerHTML = "This is an imaginary restaurant, its location hasn't been think of. Same goes for it's accomplishments and services. The background image is from (<a href='https://pngtree.com/freebackground/gothic-baroque-royal-texture-vector-damask-vintage-red-background-with-floral-elements_15263980.html'>I don't know  who took the picture:(</a> ).";
  content.appendChild(h1);
  content.appendChild(p);
  doc.querySelector("a").setAttribute("target", "_blank");
}