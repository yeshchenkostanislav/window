function modal() {

  //modal

  let headerBtn = document.querySelector('.header_btn'),
    input = document.querySelectorAll('input'),
    overlay = document.querySelector('.popup_engineer'),
    close = document.getElementsByClassName('popup_close'),
    phoneLink = document.getElementsByClassName('phone_link'),
    popup = document.querySelector('.popup'),
    popupCalc = document.querySelector('.popup_calc'),
    glazingBtn = document.querySelectorAll('.glazing_price_btn');


  function clearInput() {
    input.forEach((item) => {
      item.value = '';
    });
  };

  for (let j = 0; j < phoneLink.length; j++) {
    phoneLink[j].addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden';

    })
  }

  headerBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  })

  glazingBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popupCalc.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    })
  });

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', () => {
      hide();
      clearInput();
    })
  }

  // две функции подряд, это полифиллы для closest
  (function () {

    // проверяем поддержку
    if (!Element.prototype.closest) {

      // реализуем
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }

  })();

  (function () {

    // проверяем поддержку
    if (!Element.prototype.matches) {

      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;

    }

  })();



  document.addEventListener('mousedown', function (e) {
    if (e.target.closest('.popup_form') === null) {
      hide();
    }
  });


  function hide() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.body.style.overflow = '';
    /*     clearInput(); */
  }


  let timerId = setTimeout(fun, 60000);

  function fun() {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    clearTimeout(timerId);
  }


}

module.exports = modal;