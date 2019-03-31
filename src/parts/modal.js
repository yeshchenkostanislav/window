function modal() {

  //modal

  let headerBtn = document.querySelector('.header_btn'),
    overlay = document.querySelector('.popup_engineer'),
    close = document.getElementsByClassName('popup_close'),
    phoneLink = document.getElementsByClassName('phone_link'),
    popup = document.querySelector('.popup'),
    popupCalc = document.querySelector('.popup_calc'),
    profile = document.querySelector('.popup_calc_profile'),
    glazingBtn = document.querySelectorAll('.glazing_price_btn'),
    popupCalcEnd = document.querySelector('.popup_calc_end');


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
      popupCalc.style.display = 'none';
      profile.style.display = 'none';
      popupCalcEnd.style.display = 'none';
      hide();
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
  }


  let timerId = setTimeout(fun, 60000);

  function fun() {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    clearTimeout(timerId);
  }


}

module.exports = modal;