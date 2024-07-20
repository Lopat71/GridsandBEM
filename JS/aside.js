function checkWindowSize() {
  const main = document.getElementById("main");
  if (window.innerWidth >= 1120) {
    main.classList.add("no-opacity");
  } else {
    main.classList.remove("no-opacity");
  }
}

// Проверка ширины окна при загрузке страницы
window.addEventListener("load", checkWindowSize);

// Проверка ширины окна при изменении размера окна
window.addEventListener("resize", checkWindowSize);

$(".header__btnclick").click(function () {
  $(".aside").toggleClass("visible");
  $("#main").toggleClass("visible");
});

$(".aside__burgerclick").click(function () {
  $(".aside").toggleClass("visible");
  $("#main").toggleClass("visible");
});


