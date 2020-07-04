'use strict';
(function () {
  // Файл dialog.js
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  // var userNameInput = document.querySelector('.setup-user-name');
  var setupPlayer = userDialog.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    // при клике рандомно меняется цвет
    window.colorize(wizardCoat);
    window.colorize(wizardEyes);
    window.colorize(wizardFireball);
  };
  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    // возврат окна в начальное положение
    userDialog.style.top = window.move.yStartPosition;
    userDialog.style.left = window.move.xStartPosition;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });
})();

