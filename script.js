/* TYPEWRITER */
const text = "Shubham Dhande";
let i = 0;
const speed = 100;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

/* ABOUT REVEAL */
const reveal = document.querySelector(".reveal");
window.addEventListener("scroll", () => {
  const pos = reveal.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) {
    reveal.classList.add("active");
  }
});

/* FOLDER TOGGLE */
function toggleFolder(folder) {
  folder.classList.toggle("open");
}
