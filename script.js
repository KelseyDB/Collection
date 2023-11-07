
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

  const release = document.createElement('p');
  data.appendChild(release);
  release.className = "date";
  release.textContent = videoEssay.releaseDate;
  
  const length = document.createElement('p');
  data.appendChild(length);
  length.className = "length";
  length.textContent = videoEssay.length

  const title = document.createElement('h2');
  card.appendChild(title);
  title.className = "title";
  title.textContent = videoEssay.name;

  const youtuber = document.createElement('h3');
  card.appendChild(youtuber);
  youtuber.className = "youtuber";
  youtuber.textContent = videoEssay.youtuber;

  const about = document.createElement('p');
  card.appendChild(about);
  about.className = "about";
  about.textContent = videoEssay.about;
} 