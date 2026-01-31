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

// Calculate day number
const today = new Date();
const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
const word = words[dayNumber % words.length];

// Set word and date
document.getElementById("word").textContent = word;
document.getElementById("date").textContent = today.toDateString();

// Create floating fireflies
for(let i=0; i<25; i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = `${Math.random() * 100}vw`;
  p.style.animationDuration = `${10 + Math.random()*20}s`;
  const size = 5 + Math.random()*10;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.opacity = 0.3 + Math.random()*0.5;
  document.body.appendChild(p);
}

// Create forest trees
const forest = document.createElement('div');
forest.className = 'forest';
for(let i=0; i<7; i++){
  const tree = document.createElement('div');
  tree.className = 'tree';
  tree.style.borderBottomWidth = `${35 + Math.random()*35}px`;
  tree.style.animationDuration = `${4 + Math.random()*3}s`;
  forest.appendChild(tree);
}
document.body.appendChild(forest);

// Create mountain layers
for(let i=0; i<3; i++){
  const mountain = document.createElement('div');
  mountain.className = 'mountain-layer';
  document.body.appendChild(mountain);
}
