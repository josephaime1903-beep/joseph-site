// Liste des pubs
const pubs = [
  { link: "https://example.com/pub1", img: "https://via.placeholder.com/300x250?text=Pub+1" },
  { link: "https://example.com/pub2", img: "https://via.placeholder.com/300x250?text=Pub+2" },
  { link: "https://example.com/pub3", img: "https://via.placeholder.com/300x250?text=Pub+3" }
];

const slider = document.getElementById("pub-slider");

// Injecter les pubs dans le slider
pubs.forEach((pub, index) => {
  const a = document.createElement("a");
  a.href = pub.link;
  a.target = "_blank";
  a.innerHTML = `<img src="${pub.img}" alt="Pub ${index+1}">`;
  if (index === 0) a.classList.add("active"); // Première pub visible
  slider.appendChild(a);
});

let current = 0;
const slides = slider.querySelectorAll("a");

// Fonction pour changer la pub
function nextPub() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

// Changer la pub toutes les 5 secondes
setInterval(nextPub, 5000);
