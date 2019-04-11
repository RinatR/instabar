var hamburger = document.querySelector(".hamburger");
// var menu = document.querySelector(".menu");
var menu = document.getElementById("menu");
var menu__links = document.querySelector(".menu__link")
var menuToggle = document.querySelector(".menu__toggle");
var overlay = document.querySelector(".page-wrapper__overlay");
var body = document.querySelector("body");
var modal = document.querySelector(".modal-login");
var closeModal = document.querySelector(".modal-login__close");
var logo = document.querySelector(".logo");
var loginButton = document.querySelector(".page-header__top-link--login");
var loginButtonMobile = document.querySelector(".page-header__login");


// обработчик открытия меню
hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--opened");
  overlay.style.display = "block";
  console.log(menu__links)
});

// обработчик закрытия меню
menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--opened");
  overlay.style.display = "none";
});

menu.onclick = function(event) {
  var target = event.target;

  // цикл двигается вверх от target к родителям до table
  while (target != this) {
    if (target.tagName == "A") {
      // нашли элемент, который нас интересует!

      menu.classList.remove("menu--opened");
      overlay.style.display = "none";
      return;
    }
    target = target.parentNode;
  }
}

//обработчик открытия модального окна
loginButton.addEventListener("click", function() {
  modal.style.display = "block";
  overlay.style.display = "block";
});

//обработчик открытия модального окна
loginButtonMobile.addEventListener("click", function() {
  modal.style.display = "block";
  overlay.style.display = "block";
});

// обработчик закрытия модального окна
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
  overlay.style.display = "none";
});














