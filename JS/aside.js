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

document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".header__btnclick");
  const closeButton = document.querySelector(".aside__burgerclick");
  const aside = document.querySelector(".aside");
  const main = document.querySelector(".main");
  const callButton = document.querySelector(".aside__searchs");
  const callSection = document.querySelector(".call");
  const callCloseButtons = document.querySelectorAll(".call__close");
  const headerCallButton = document.querySelector(".header__btn_hiddens");
  const chatButtons = document.querySelectorAll(".chat");
  const feedbackSection = document.querySelector(".feedback");
  const feedbackCloseButtons = document.querySelectorAll(".chat__close");

  function toggleAside() {
    aside.classList.toggle("active");
    updateOverlay();
  }

  function toggleCall() {
    callSection.classList.toggle("active");
    updateOverlay();
  }

  function toggleFeedback() {
    feedbackSection.classList.toggle("active");
    updateOverlay();
  }

  function updateOverlay() {
    if (
      aside.classList.contains("active") ||
      callSection.classList.contains("active") ||
      feedbackSection.classList.contains("active")
    ) {
      main.classList.add("overlay");
    } else {
      main.classList.remove("overlay");
    }
  }

  openButton.addEventListener("click", toggleAside);
  closeButton.addEventListener("click", toggleAside);
  callButton.addEventListener("click", toggleCall);
  headerCallButton.addEventListener("click", toggleCall);

  chatButtons.forEach((button) => {
    button.addEventListener("click", toggleFeedback);
  });

  feedbackCloseButtons.forEach((button) => {
    button.addEventListener("click", toggleFeedback);
  });

  callCloseButtons.forEach((button) => {
    button.addEventListener("click", toggleCall);
  });

  // Update overlay on window resize (optional, depending on other conditions)
  window.addEventListener("resize", updateOverlay);
});
