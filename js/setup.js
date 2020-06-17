'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var nameRandom = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnameRandom = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвингн'];
  var coatColorRandom = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColorRandom = ['black', 'red', 'blue', 'yellow', 'green'];

  // Дом задание 4 лекция переменные
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var setupPlayer = userDialog.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var colorWizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var colorWizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var colorWizardFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var onPopupEscPress = function (evt) {
    if ((evt.key === 'Escape') && (document.activeElement !== userNameInput)) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    // при клике рандомно меняется цвет
    // пальто
    wizardCoat.addEventListener('click', function () {
      var RandomCoatNumber = Math.floor(Math.random() * colorWizardCoat.length);
      wizardCoat.style.fill = colorWizardCoat[RandomCoatNumber];
      setupPlayer.querySelector('input[name="coat-color"]').value = colorWizardCoat[RandomCoatNumber];
    });
    // глаза
    wizardEyes.addEventListener('click', function () {
      var RandomEyesNumber = Math.floor(Math.random() * colorWizardEyes.length);
      wizardEyes.style.fill = colorWizardEyes[Math.floor(Math.random() * colorWizardEyes.length)];
      setupPlayer.querySelector('input[name="eyes-color"]').value = colorWizardCoat[RandomEyesNumber];
    });
    // fireball
    wizardFireball.addEventListener('click', function () {
      var RandomFireballNumber = Math.floor(Math.random() * colorWizardFireball.length);
      wizardFireball.style.background = colorWizardFireball[RandomFireballNumber];
      setupPlayer.querySelector('input[name="fireball-color"]').value = colorWizardCoat[RandomFireballNumber];
    });
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });


  var getArrRandomIndex = function (arr) {
    return Math.floor((Math.random() * arr.length) + 0);
  };
  var renderWizard = function () {

    var name = nameRandom[getArrRandomIndex(nameRandom)] + ' ' + surnameRandom[getArrRandomIndex(surnameRandom)];
    var coatColor = coatColorRandom[getArrRandomIndex(coatColorRandom)];
    var eyesColor = eyesColorRandom[getArrRandomIndex(eyesColorRandom)];

    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
    return wizardElement;
  };
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

