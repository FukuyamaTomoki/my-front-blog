const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
/*
 ** header/ハンバーガーメニューの制御
 */
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
