  function form() {

    //form

    let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
      input = document.querySelectorAll('input'),
      inputTel = document.querySelectorAll('.user_phone'),
      inputForm = document.querySelectorAll('.form-control_calc'),
      checkbox = document.querySelectorAll('.checkbox'),
      popupCalcEnd = document.querySelector('.popup_calc_end'),
      overlay = document.querySelector('.popup_engineer'),
      popup = document.querySelector('.popup'),
      close = document.getElementsByClassName('popup_close'),
      popupCalc = document.querySelector('.popup_calc'),
      profile = document.querySelector('.popup_calc_profile'),
      statusMessage = document.createElement('div');

    function clearInput() {
      input.forEach((item) => {
        item.value = '';
      });
    };

    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', () => {
        popupCalc.style.display = 'none';
        profile.style.display = 'none';
        popupCalcEnd.style.display = 'none';
        document.body.style.overflow = '';
        formCalc = {
          name: '',
          tel: '',
          balcony: 'Тип1',
          width: '',
          height: '',
          type: 'Деревянное остекление',
          checkbox: ''
        };
        clearInput();
      })
    }

    //полифилл для forEach
    (function () {
      if (typeof NodeList.prototype.forEach === "function")
        return false;
      else
        NodeList.prototype.forEach = Array.prototype.forEach;
    })();

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

    let formCalc = {
      name: '',
      tel: '',
      balcony: 'Тип1',
      width: '',
      height: '',
      type: 'Деревянное остекление',
      checkbox: ''

    };

    input.forEach((item) => {
      item.addEventListener('change', () => {
        if (item.getAttribute("name") == 'user_phone') {
          formEls.tel = item.value;
          console.log(formEls);
        } else {
          formEls.name = item.value;
          console.log(formEls);
        }
      })
    });

    let formEls = {
      name: '',
      tel: ''
    };

    form.forEach(function sendForm(item) {

      item.addEventListener('submit', (e) => {
        e.preventDefault();
        item.appendChild(statusMessage);
        let jSonString = JSON.stringify(formCalc);
        let jSonString2 = JSON.stringify(formEls);;

        function postData() {
          return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            request.onreadystatechange = () => {
              if (request.readyState < 4) {
                resolve()
              } else if (request.readyState === 4) {
                if (request.status == 200) {
                  resolve()
                } else {
                  reject()
                }
              }
            }
            if (item.classList.contains('form-end')) {
              request.send(jSonString);
            } else {
              request.send(jSonString2);
            }

          })
        }

        postData(formEls)
          .then(() => {
            statusMessage.textContent = message.loading;
          })
          .then(() => {
            statusMessage.innerHTML = message.success;
            setTimeout(func, 3000);
            formCalc = {
              name: '',
              tel: '',
              balcony: 'Тип1',
              width: '',
              height: '',
              type: 'Деревянное остекление',
              checkbox: ''
            };
            ormEls = {
              name: '',
              tel: ''
            };
          })
          .catch(() => {
            statusMessage.innerHTML = message.failure;
          })
          .then(clearInput)
      });
    });

    function func() {
      statusMessage.innerHTML = "";
      popupCalcEnd.style.display = 'none';
      overlay.style.display = 'none';
      popup.style.display = 'none';
    }

    inputTel.forEach((item) => {
      // Проверяем фокус
      item.addEventListener('focus', () => {
        // Если там ничего нет или есть, но левое
        if (!/^\+\d*$/.test(item.value))
          // То вставляем знак плюса как значение
          item.value = '+';
      });

      item.addEventListener('keypress', (e) => {
        // Отменяем ввод не цифр
        if (!/\d/.test(e.key)) {
          e.preventDefault();
          alert("Прошу вводить только цыфры")
        } else {
          if (item.value.length == 2) item.value = item.value + "(";
          if (item.value.length == 6) item.value = item.value + ")-";
          if (item.value.length == 11) item.value = item.value + "-";
          if (item.value.length == 14) item.value = item.value + "-";
          if (item.value.length > 16) item.value = item.value.substring(0, 16);
        }
      });
    });

  }

  module.exports = form;