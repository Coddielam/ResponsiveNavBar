const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-items");
const navItemsLi = document.querySelectorAll(".nav-items li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("crossed");

  navItemsLi.forEach((li, index) => {
    li.style.animation
      ? (li.style.animation = "")
      : (li.style.animation = `upAppear 0.3s ease forwards ${
          index / 8 + 0.4
        }s`);
  });
});
