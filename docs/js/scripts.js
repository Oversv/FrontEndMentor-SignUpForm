"use strict";

var signUpForm = document.getElementById('form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var password = document.getElementById('password');

var validateEmptyElement = function validateEmptyElement(element) {
  if (element.value.trim().length === 0) {
    element.classList.add('form__input--warning');
    element.nextSibling.classList.add('form__warning--show');
    return false;
  }

  element.classList.remove('form__input--warning');
  element.nextSibling.classList.remove('form__warning--show');
  return true;
};

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().length === 0) return false;

  if (!re.test(String(email.value).toLowerCase())) {
    email.classList.add('form__input--warning');
    email.nextSibling.classList.add('form__warning--show');
    email.nextSibling.textContent = "Looks like this is not an email";
    email.placeholder = email.value;
    email.value = "";
    return false;
  }

  email.classList.remove('form__input--warning');
  email.nextSibling.classList.remove('form__warning--show');
  return true;
};

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var getName = validateEmptyElement(firstName);
  var getLastName = validateEmptyElement(lastName);
  var getEmail = validateEmptyElement(email);
  var validEmail = validateEmail(email);
  var getPassword = validateEmptyElement(password);

  if (getName && getLastName && getEmail && validEmail && getPassword) {//Do something ...
  }
});