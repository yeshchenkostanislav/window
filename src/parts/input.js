function input() {

  let inputForm = document.querySelectorAll('.form-control_calc'),
    buttonCacl = document.querySelector('.popup_calc_button'),
    popupCalc = document.querySelector('.popup_calc'),
    profile = document.querySelector('.popup_calc_profile'),
    calcProfileButton = document.querySelector('.popup_calc_profile_button'),
    popupCalcEnd = document.querySelector('.popup_calc_end'),
    checkbox = document.querySelectorAll('.checkbox'),
    formEnd = document.querySelector('.form-end'),
    input = document.querySelectorAll('input'),
    buttonEnd = document.querySelector('.button-end');



  inputForm.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9]+/g, '');
    })
    buttonCacl.addEventListener('click', () => {
      if (inputForm[0].value == '' || inputForm[0].value == 0 || inputForm[1].value == '' || inputForm[1].value == 0) {

      } else {
        popupCalc.style.display = 'none';
        profile.style.display = 'flex';
        inputForm[0].value = '';
        inputForm[1].value = '';
      }
    });

    // выбираем только один чекбокс
    let last = {},
      ie = 0;
    document.body.onclick = function (e) {
      e = ie ? event.scrElement : e.target;
      if (e.name != "checkbox-test" && e.type != "checkbox") return;
      last.checked = false;
      e.checked = true;
      last = e;
    }

    //проверяется выбран чекбокс или нет
    calcProfileButton.addEventListener('click', () => {
      checkbox.forEach((item) => {
        if (item.checked) {
          profile.style.display = 'none';
          popupCalcEnd.style.display = 'flex';
        }
      });

    });
  })


  // собираю данные с форм в один обьект

  let tabImg3 = document.querySelectorAll('.type_img');
  // выбор формы балкона
  tabImg3.forEach((item) => {
    item.addEventListener('click', () => {
      let attribute = item.getAttribute("alt");
      formCalc.balcony = attribute;
    })
  });
  //считываем данные с инпутов
  inputForm.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.getAttribute("id") == 'width') {
        formCalc.width = item.value;
      } else {
        formCalc.height = item.value;
      }
    });
  });

  let glazingType = document.getElementById('view_type');
  glazingType.addEventListener('change', () => {
    formCalc.type = glazingType.options[glazingType.selectedIndex].value;
  })

  checkbox.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.getAttribute("id") == 'checkbox-1') {
        formCalc.checkbox = 'Холодное';
      } else {
        formCalc.checkbox = 'Теплое';
      }
    });
  });

  let modalCalcInput = document.querySelectorAll('.modal-calc');
  modalCalcInput.forEach((item) => {
    item.addEventListener('change', () => {
      if (item.getAttribute("id") == 'modal-name') {
        formCalc.name = item.value;
      } else {
        formCalc.tel = item.value;
      }
    })
  });

  let statusMessage = document.createElement('div');
  formEnd.appendChild(statusMessage);

  buttonEnd.addEventListener('click', (e) => {
    e.preventDefault();
    let jSonString = JSON.stringify(formCalc);

    let xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('POST', 'server.php');

    // 3. Отсылаем запрос
    xhr.send(jSonString);

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      statusMessage.innerHTML = 'Что-то пошло не так...'; // ошибка 
      setTimeout(func, 3000);
      clearInput();
    } else {
      // вывести результат
      statusMessage.textContent = 'Спасибо! Скоро мы с вами свяжемся!'; // responseText -- текст ответа.
      setTimeout(func, 3000);
      clearInput();
    }
  });

  function func() {
    statusMessage.innerHTML = "";
    popupCalcEnd.style.display = 'none';
  }

  function clearInput() {
    input.forEach((item) => {
      item.value = '';
    });
  };

  let formCalc = {
    name: '',
    tel: '',
    balcony: 'Тип1',
    width: '',
    height: '',
    type: 'Деревянное остекление',
    checkbox: ''

  };












}
module.exports = input;