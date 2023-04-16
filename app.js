const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".hide-menu");

toggleBtn.addEventListener("click", () => {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
  }
});
