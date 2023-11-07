
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffleArray(collection)
import { collection } from "./collection.js";

const main = document.querySelector('main');

for (let i = 0; i < collection.length; i++) {
  const videoEssay = collection[i];

  // function create(element , classname) {
  //   const newElement = document.createElement(element)
  //   newElement.classname = classname
  //   newElement.textContent = videoEssay.classname
  //   card.appendChild(classname);
  // }

  const card = document.createElement('div');
  card.className = "card";
  main.appendChild(card);

  const image = document.createElement('img');
  const link = document.createElement('a');
  image.className = "image";
  image.src= videoEssay.picture;
  link.href = videoEssay.videoUrl;
  link.target = '_blank';
  card.appendChild(link);
  link.appendChild(image);

  const data = document.createElement("div");
  data.className = "data"
  card.appendChild(data);

  const releaseDate = document.createElement('p');
  data.appendChild(releaseDate);
  releaseDate.className = "releaseDate";
  releaseDate.textContent = videoEssay.releaseDate;
  
  const length = document.createElement('p');
  data.appendChild(length);
  length.className = "length";
  length.textContent = videoEssay.length

  const name = document.createElement('h2');
  card.appendChild(name);
  name.className = "name";
  name.textContent = videoEssay.name;

  const youtuber = document.createElement('h3');
  card.appendChild(youtuber);
  youtuber.className = "youtuber";
  youtuber.textContent = videoEssay.youtuber;

  const about = document.createElement('p');
  card.appendChild(about);
  about.className = "about";
  about.textContent = videoEssay.about;

  const themes = document.createElement('p');
  card.appendChild(themes);
  themes.className = 'themes';
  themes.textContent = videoEssay.themes.join(', ');

  // const backgroundDiv = document.createElement("div");
  // card.parentNode.insertBefore(backgroundDiv, card);
  // backgroundDiv.className = "background";
  // backgroundDiv.appendChild(card);

  function hoverCard (){
    card.style.transform = "scale(1.1)";
    card.style.transition = "0.5s"
    card.style.zIndex = "100"
    document.getElementById("overlay").style.display = "block";
    overlay.style.zIndex = "1"
    
  }
  function normal (){
    card.style.transform = "";
    card.style.zIndex = ""
    document.getElementById("overlay").style.display = "none";
    overlay.style.zIndex = "0"
  }

  card.addEventListener("mouseover", hoverCard);
  card.onmouseout = normal
} 