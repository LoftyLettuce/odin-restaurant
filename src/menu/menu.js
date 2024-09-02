import "./menu.css"
function create(img, alt, parent, doc)
{
  const div = doc.createElement("div");
  const p = doc.createElement("p");
  const image = doc.createElement("img");
  image.alt = alt;
  image.src = img;
  div.appendChild(p);
  div.appendChild(image);
  parent.appendChild(div);
  return p;
}
export function makeMenu(doc){
  let content  = doc.getElementById("content");
  content.className = "menu";
  let button = doc.getElementById("menu");
  button.setAttribute("status", "active");
  let p = create("https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg", 
                  "cake", 
                  content, 
                  doc);
  p.innerHTML = "This food is a nice pic i found on google. From <a href='https://hungrybynature.com/recap-poy-food-photography-workshop/'>hungrybynature.com.</a> Look tasty with dark and red of the fruits lay on bright, soft pancakes cover in golden syrups. Wooden plate and cold background give a modern but warm feelings:)";
  p = create("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg", 
                  "Pasta",
                  content, 
                  doc);
  p.innerHTML = "I know nothing about this one. Not the sauce or the meats or the herbs, I don't even sure about the pasta (maybe it's not pasta). But it look cool and all. I found it <a href='https://www.foodnetwork.com/recipes/photos/easy-dinner-recipes'>here</a>."
  p = create("https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
              "Ratatouille",
              content, 
              doc);
  p.innerHTML = "Turn out search 'recipe' give more useful image than 'food'. So there it is. The Ratatouille from <a href='https://www.howtocook.recipes/homemade-ratatouille-recipe/'>howtocook</a>.";
  p = create("https://natashaskitchen.com/wp-content/uploads/2023/04/Flan-Recipe-SQ.jpg",
              "Flan cake",
              content,
              doc);
  p.innerHTML = "This one somehow remind me of the first one. Red, blue and golden. Flan from <a href='https://natashaskitchen.com/flan-recipe/'>natashaskitchen</a>."
  doc.querySelector("a").setAttribute("target", "_blank");
}
