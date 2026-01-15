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

function toggleFolder(folder, iconOpen) {
  const icon = folder.querySelector(".icon");
  folder.classList.toggle("open");
  icon.textContent = folder.classList.contains("open") ? iconOpen : "📁";
}

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
});
