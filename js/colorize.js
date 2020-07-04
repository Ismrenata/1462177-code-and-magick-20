'use strict';

// colorize.js
(function () {
  var colorWizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorWizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var colorWizardFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomColor = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };
  window.colorize = function (element) {
    element.addEventListener('click', function () {

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = getRandomColor(colorWizardFireball);
      } else {
        if (element.class === 'wizard-coat') {
          element.style.fill = getRandomColor(colorWizardCoat);
        } else {
          element.style.fill = getRandomColor(colorWizardEyes);
        }
      }
    });
  };
})();
