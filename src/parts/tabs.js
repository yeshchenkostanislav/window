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
    tabImg3 = info3.querySelectorAll('.type_img'),
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



  //табы, изменение стиля родителя
  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(slideIndex) {
    tabText2.forEach((item) => item.parentNode.classList.remove('after_click'));
    tabText2[slideIndex - 1].parentNode.classList.add('after_click');
  }
  info2.addEventListener('click', function (event) {
    for (let i = 0; i < tabText2.length + 1; i++) {
      if (event.target.classList.contains('decoration_slider-link') && event.target == tabText2[i - 1]) {
        showSlides(i);
      }
    }
  });

  //калькулятор, увеличение кртинок при клике
  let imgIndex = 1;
  activeImg(imgIndex);

  function activeImg(imgIndex) {
    tabImg3.forEach((item) => item.classList.remove('do_image_more'));
    tabImg3[imgIndex - 1].classList.add('do_image_more');
  }
  info3.addEventListener('click', function (event) {
    for (let i = 0; i < tabImg3.length + 1; i++) {
      if (event.target.classList.contains('type_img') && event.target == tabImg3[i - 1]) {
        activeImg(i);
      }
    }
  });












}

module.exports = tabs;