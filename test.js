const links = document.querySelectorAll(".menu-link");
const page = document.querySelectorAll(".content-page");
const animations = [
  "animate__fadeInTopLeft",
  "animate__fadeInBottomLeft",
  "animate__fadeInUp",
  "animate__rotateInUpLeft",
  "animate__fadeInDown",
];
const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

darkModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeCheckbox.checked);

  page.forEach((e) => {
    e.classList.toggle("dark-mode", darkModeCheckbox.checked);
  });
});
links.forEach((el) => {
  el.addEventListener("click", function () {
    page.forEach((e) => {
      e.classList.remove("active", ...animations);
    });

    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];

    const id = el.getAttribute("href");
    const pId = id.split("#")[1];
    document
      .getElementById(pId)
      .classList.add("active", "animate__animated", randomAnimation);
  });
});
