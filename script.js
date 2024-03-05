const menuToggle = document.querySelector("#klikMenu");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuToggle.innerHTML = nav.classList.contains("active")
    ? '<i class="ti ti-x"></i>'
    : '<i class="ti ti-menu-2"></i>';
});
