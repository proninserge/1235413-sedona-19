var form = document.querySelector(".feedback-form");
var elements = document.querySelectorAll(".feedback-form__type-input--hold");
var sendForm = document.querySelector(".feedback-form__btn");
var popupFailed = document.querySelector(".popup--failed");
var popupDone = document.querySelector(".popup--success");
var popup = document.querySelectorAll(".popup");
var buttons = document.querySelectorAll(".popup__btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var count = 0;
  for (var i = 0; i <= elements.length - 1; i++) {
    if (!elements[i].value || !elements[i].checkValidity()) {
      elements[i].classList.add("feedback-form__type-input--error");
      popupFailed.classList.add("popup--show");
    } else {
      elements[i].classList.remove("feedback-form__type-input--error");
      count++;
    }
    if (count === elements.length) {
      popupDone.classList.add("popup--show");
    }
  }
});

buttons.forEach(function(button) {
  button.addEventListener("click", function(evt) {
    evt.target.closest(".popup").classList.remove("popup--show");
  });
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    for (var i = 0; i <= popup.length - 1; i++) {
      popup[i].classList.remove("popup--show");
    }
  }
});
