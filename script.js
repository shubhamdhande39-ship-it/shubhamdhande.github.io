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

/* MAIN FOLDER TOGGLE */
function toggleMain(folder) {
  folder.classList.toggle("open");

  const icon = folder.querySelector(".icon");
  const title = folder.querySelector(".title").innerText;

  if (folder.classList.contains("open")) {
    if (title.includes("AI")) icon.textContent = "⚡";
    if (title.includes("Video")) icon.textContent = "✂️";
    if (title.includes("Motion")) icon.textContent = "📊";
  } else {
    icon.textContent = "📁";
  }
}

/* SMOOTH SECTION SCROLL FEEL */
document.querySelectorAll(".section").forEach(sec => {
  sec.style.scrollMarginTop = "80px";
});
