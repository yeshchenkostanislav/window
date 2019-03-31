function input() {

  let inputForm = document.querySelectorAll('.form-control_calc'),
    buttonCacl = document.querySelector('.popup_calc_button'),
    popupCalc = document.querySelector('.popup_calc'),
    profile = document.querySelector('.popup_calc_profile'),
    calcProfileButton = document.querySelector('.popup_calc_profile_button'),
    popupCalcEnd = document.querySelector('.popup_calc_end'),
    checkbox = document.querySelectorAll('.checkbox');

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


}

module.exports = input;