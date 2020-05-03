var mainName = document.querySelector("[name=first-name]");
var lastName = document.querySelector("[name=last-name]");
var telephone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=e-mail]");
var sendForm = document.querySelector(".feedback-form__btn");
var popupFailed = document.querySelector(".popup--failed");
var popupDone = document.querySelector(".popup--success");
var buttonFailure = document.querySelectorAll(".popup__btn--failure");
var buttonSuccess = document.querySelectorAll(".popup__btn--success");

sendForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!mainName.value) {
    mainName.classList.add("feedback-form__type-input--error");
  }
  if (!lastName.value) {
    lastName.classList.add("feedback-form__type-input--error");
  }
  if (!telephone.value) {
    telephone.classList.add("feedback-form__type-input--error");
  }
  if (!email.value || !email.checkValidity()) {
    email.classList.add("feedback-form__type-input--error");
  }
  if (!mainName.value || !lastName.value || !telephone.value || !email.value || !email.checkValidity()) {
    popupFailed.classList.add("popup--show");
  } else {
    popupDone.classList.add("popup--show");
  }
});

buttonFailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailed.classList.remove("popup--show");
  mainName.classList.remove("feedback-form__type-input--error");
  lastName.classList.remove("feedback-form__type-input--error");
  telephone.classList.remove("feedback-form__type-input--error");
  email.classList.remove("feedback-form__type-input--error");
});

buttonSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupDone.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFailed.classList.contains("popup--show")) {
      popupFailed.classList.remove("popup--show");
    }
    if (popupDone.classList.contains("popup--show")) {
      popupDone.classList.remove("popup--show");
    }
  }
});
