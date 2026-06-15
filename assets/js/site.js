// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
  // On mobile, tapping a parent menu item with submenu toggles it
  document.querySelectorAll('.nav.open .has-sub > a').forEach(function(a){});
});
