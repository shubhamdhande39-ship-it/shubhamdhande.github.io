/* =========================
   TYPEWRITER EFFECT
========================= */
const text = "Shubham Dhande";
let index = 0;
const speed = 90;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

/* =========================
   FOLDER OPEN / CLOSE
========================= */
function toggleFolder(folder, openIcon) {
  const icon = folder.querySelector(".icon");
  folder.classList.toggle("open");

  if (folder.classList.contains("open")) {
    icon.textContent = openIcon;
  } else {
    icon.textContent = "📁";
  }
}

/* =========================
   SCROLL REVEAL MOTION
========================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
});
