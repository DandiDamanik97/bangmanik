document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

$(document).ready(function () {
  $(".unslider").unslider({
    autoplay: true,
    arrows: false,
    nav: true,
    infinite: true, // Memastikan slider berputar secara melingkar
    speed: 500, // Kecepatan transisi (dalam milidetik)
    delay: 3000, // Waktu antara transisi (dalam milidetik)
  });
});
