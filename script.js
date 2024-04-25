const nav = document.querySelector("nav");

nav.addEventListener("scroll", () => {
  if (window.scrollY < 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
