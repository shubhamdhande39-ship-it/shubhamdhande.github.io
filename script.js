/* TYPEWRITER */
const text = "Shubham Dhande";
let i = 0;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
}
typeWriter();

/* FOLDER TOGGLE */
function toggleFolder(folder, iconSymbol) {
  const icon = folder.querySelector(".icon");
  folder.classList.toggle("open");

  if (folder.classList.contains("open")) {
    icon.textContent = iconSymbol;
  } else {
    icon.textContent = "📁";
  }
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
