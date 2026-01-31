const words = [
  "Accept","Ansvar","At kunne sige fra","At kunne være sig selv","At kunne ytre",
  "Befrielse","Begrænsninger","Det er du alligevel","Detektor","Egen omsorg",
  "Familie","Fred","Fremtid","Forandring","Forandring (orden)","Frihed",
  "Frihed fra – frihed til","Følelser","Gå hele vejen","Grænser","Håb",
  "Helhjertethed","Hjælp mig","Idéer","Indsats","Kernefred","Konsekvens",
  "Kærlighed","Lyst","Meditation","Mod","Motion","Orden i eget hus",
  "Orden og ro","Orden og stil","Respekt","Ritualer","Ro","Selvomsorg",
  "Selvrespekt","Skam","Skabe orden","Stabilitet","Styrke","Styrke og mod",
  "Stærke værdier","Søvn","Taknemmelighed","Tilgivelse","Tillid","Tryghed",
  "Udvikling","Uafhængighed","Valg","Venlighed","Venskab","Viljestyrke",
  "Visdom","Vækst","Vrede","Ydmyghed"
];

const today = new Date();
const dayNumber = Math.floor(today / (1000 * 60 * 60 * 24));
const word = words[dayNumber % words.length];

document.getElementById("word").textContent = word;
document.getElementById("date").textContent = today.toDateString();

// Floating light particles
for(let i=0; i<20; i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = `${Math.random() * 100}vw`;
  p.style.animationDuration = `${10 + Math.random()*20}s`;
  p.style.width = `${5 + Math.random()*10}px`;
  p.style.height = p.style.width;
  document.body.appendChild(p);
}

// Create forest tree silhouettes
const forest = document.createElement('div');
forest.className = 'forest';
for(let i=0; i<7; i++){
  const tree = document.createElement('div');
  tree.className = 'tree';
  forest.appendChild(tree);
}
document.body.appendChild(forest);

// Create mountain layers
for(let i=0; i<3; i++){
  const mountain = document.createElement('div');
  mountain.className = 'mountain-layer';
  document.body.appendChild(mountain);
}
