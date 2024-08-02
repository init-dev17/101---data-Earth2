let code = document.getElementById("CODE");

window.addEventListener("scroll", () => {
  // Navbar effect
  if (window.scrollY > 25 && window.innerWidth > 725) {
    code.style.height = "20px";
  } else {
    code.style.height = "36px";
  }
});
