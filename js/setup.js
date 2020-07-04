'use strict';
(function () {
  // Файл setup.js
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

  // отрисовка похожих персонажей
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
