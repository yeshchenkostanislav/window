function tabs() {
  //tabs

  // первая секция с табами
  let info = document.querySelector('.glazing_slider'),
    tabImg = document.querySelectorAll('.img'),
    tabText = document.querySelectorAll('.tab-link'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  // вторая секция с табами
  let info2 = document.querySelector('.decoration_slider'),
    tabText2 = document.querySelectorAll('.decoration_slider-link'),
    tabContent2 = document.querySelectorAll('.info-tabcontent-2'),
    decorationDiv = document.querySelectorAll('.decoration_slider-div');

  // табы в мод окне
  let info3 = document.querySelector('.balcon_icons'),
    tabImg3 = info3.querySelectorAll('img'),
    tabContent3 = document.querySelectorAll('.big_img-item');


  function hideTabContent(a, b) {
    for (let i = a; i < b.length; i++) {
      b[i].classList.remove('show');
      b[i].classList.add('hide');
      if (b[i].classList.contains('big_img-item')) {
        b[i].style.margin = 'auto';
        b[i].style.marginBottom = '10px';
      }
    }
  }

  hideTabContent(1, tabContent);
  hideTabContent(1, tabContent2);
  hideTabContent(1, tabContent3);

  function showTabContent(b, c) {
    if (c[b].classList.contains('hide')) {
      c[b].classList.add('show');
      c[b].classList.remove('hide');
    }
  }

  function wrap(params) {

    params.addEventListener('click', (event) => {
      let target = event.target;

      if (target || target.classList.contains('glazing_block') || target.classList.contains('tab-link') || target.classList.contains('img') || target.classList.contains('decoration_slider-link')) {

        function tab(tab, tabContent) {
          for (let i = 0; i < tab.length; i++) {

            if (target == tab[i]) {
              hideTabContent(0, tabContent);
              showTabContent(i, tabContent);
              break;
            }
          }
        }
        // первая секция с табами
        tab(tabImg, tabContent);
        tab(tabText, tabContent);
        // вторая секция с табами
        tab(tabText2, tabContent2);
        // табы в мод окне
        tab(tabImg3, tabContent3);

      }
    });
  };

  wrap(info);
  wrap(info2);
  wrap(info3);


  for (let i = 0; i < decorationDiv.length; i++) {
    decorationDiv[0].classList.add('after_click');
    tabText2[1].addEventListener('click', () => {
      decorationDiv[i].classList.remove('after_click');
      decorationDiv[1].classList.add('after_click');
    });
    tabText2[2].addEventListener('click', () => {
      decorationDiv[i].classList.remove('after_click');
      decorationDiv[2].classList.add('after_click');
    });
    tabText2[3].addEventListener('click', () => {
      decorationDiv[i].classList.remove('after_click');
      decorationDiv[3].classList.add('after_click');
    });
    tabText2[0].addEventListener('click', () => {
      decorationDiv[i].classList.remove('after_click');
      decorationDiv[0].classList.add('after_click');
    });
  }


}

module.exports = tabs;