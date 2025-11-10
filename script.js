const btn = document.getElementById("playButton");
const anim = document.getElementById("animation");

btn.addEventListener("click", () => {
  btn.classList.add("hidden");
  anim.classList.remove("hidden");
});
