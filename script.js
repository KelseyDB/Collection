const collection = [
  {
    name: 'How Can We Bear to Throw Anything Away?',
    videoUrl: "https://youtu.be/ukJ_UA-JS5o",
    youtuber: 'Jacob Geller',
    releaseDate: '6 oct 2023',
    picture: './img/how can we bear to throw anything away.jpg',
    length: '40:40',
    themes: ["games", "knowledge" , "existentialism", "history"],
    about: 'The question of if we should save everything or throw things away and why.',
  },
  {
    name: 'Art in the Pre-Apocalypse',
    videoUrl: "https://youtu.be/O9N7Awpk9lE",
    youtuber: 'Jacob Geller',
    releaseDate: '4 sep 2023',
    picture: './img/art in the pre-apocolypse.jpg',
    length: '32:15',
    themes: ["art", "games", "apocalypse", "hope", "existentialism", "despair"],
    about: 'An essay about death, despair, hope and two dozen other things.',
  },
  {
    name: 'Fear of Big Things Underwater',
    videoUrl: "https://youtu.be/ZOEaUD82GlI",
    youtuber: 'Jacob Geller',
    releaseDate: '4 oct 2022',
    picture: './img/fear of big things underwater.jpg',
    length: '48:34',
    themes: ["fear", "games", "the unknown", "existentialism"],
    about: 'Fear of the unknown, the unexplored, things underwater, media that touch on this topic and so much more.',
  },
  {
    name: 'Head Transplants and the Non-Existence of the Soul',
    videoUrl: "https://www.youtube.com/watch?v=JMkrrjKf5AE",
    youtuber: 'Jacob Geller',
    releaseDate: '4 apr 2022',
    picture: './img/head transplants.jpg',
    length: '39:49',
    themes: ["games", "existentialism"],
    about: 'Does the soul exist, does it still exist if we would swap heads, does it cease to exist when our hearts stop?',
  },
  {
    name: 'ROBLOX_OOF.mp3',
    videoUrl:"https://www.youtube.com/watch?v=0twDETh6QaI", 
    youtuber: 'hbomberguy',
    releaseDate: '17 nov 2022',
    picture: './img/ROBLOX.jpg',
    length: '1:57:48',
    themes: ["games", "sound", "history"],
    about: 'A fantastic essay about where the OOF sound came from and a deep dive into the life of Tommy Tallerico.',
  },
  {
    name: "Pathologic is Genius, And Here's Why",
    videoUrl:"https://youtu.be/JsNm2YLrk30",
    youtuber: 'hbomberguy',
    releaseDate: '22 nov 2019',
    picture: './img/pathologic.jpg',
    length: '2:10:51',
    themes: ["games", "difficult"],
    about: "A very in depth deep dive of the game pathologic, all its quirks, the difficulty, why it's good despite being almost impossible.",
  },
  {
    name: "Vaccines and Autism: A Measured Response",
    videoUrl:"https://youtu.be/8BIcAZxFfrc",
    youtuber: 'hbomberguy',
    releaseDate: '26 may 2021',
    picture: './img/vaccines.jpg',
    length: '1:44:09',
    themes: ["history", "vaccines"],
    about: "What is the science behind the anti-vaccine movement, and is it any good? Let's find out!",
  },
  {
    name: "What The Internet Did To Garfield",
    videoUrl: "https://youtu.be/O2C5R3FOWdE",
    youtuber: 'Super Eyepatch Wolf',
    releaseDate: '12 dec 2021',
    picture: './img/garfield.jpg',
    length: '1:19:29',
    themes: ["history", "cartoons", "media"],
    about: "The evolution of Garfield, from simple comic strip to worldwide sensation (including the horror).",
  },
  {
    name: "The Cruelest Video Game",
    videoUrl: "https://www.youtube.com/watch?v=dRIkWHo1SJY",
    youtuber: 'Super Eyepatch Wolf',
    releaseDate: '6 may 2023',
    picture: './img/fearAndHunger.jpg',
    length: '48:36',
    themes: ["games", "difficult", "despair"],
    about: "An in depth analysis about the game Fear and Hunger.",
  },
  {
    name: "What IS Nathan Fielder?",
    videoUrl: "https://www.youtube.com/watch?v=iavoSO6lOLQ",
    youtuber: 'Super Eyepatch Wolf',
    releaseDate: '1 oct 2022',
    picture: './img/NathanFielder.jpg',
    length: '1:00:58',
    themes: ["media", "famous person"],
    about: "An essay exploring Nathan Fielder, is it all just an act or is this actually his life.",
  },
  {
    name: "Disney's FastPass: A Complicated History",
    videoUrl: "https://www.youtube.com/watch?v=9yjZpBq1XBE",
    youtuber: 'Defunctland',
    releaseDate: '21 nov 2021',
    picture: './img/fastpass.jpg',
    length: '1:42:59',
    themes: ["media", "disney", "history"],
    about: "An essay going over the history of the Disneyland Fastpass, how it came to be, how it works, if it works?",
  },
  {
    name: "Disney Channel's Theme: A History Mystery",
    videoUrl: "https://youtu.be/b_rjBWmc1iQ",
    youtuber: 'Defunctland',
    releaseDate: '20 nov 2022',
    picture: 'img/disneytheme.jpg',
    length: '1:31:56',
    themes: ["media", "disney", "history", "sound"],
    about: "Going into depth to find out who created the disney theme.",
  },
]

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffleArray(collection)

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