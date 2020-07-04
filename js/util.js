'use strict';

(function () {
  var userNameInput = document.querySelector('.setup-user-name');

  window.util = {
    isEscEvent: function (evt, action) {
      if ((evt.key === 'Escape') && (document.activeElement !== userNameInput)) {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    }
  };
})();
