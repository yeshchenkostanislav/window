/* function calc() {


  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total');

  totalValue.innerHTML = 0;

  function calculat() {

    let total = ((+persons.value + +restDays.value) * 4000 * place.options[place.selectedIndex].value);

    if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

  };

  persons.addEventListener('input', (e) => {

    if (e.value) {
      this.value = e.target.value.replace(/[^0-9]+/g, '');
    };

    calculat();

  });

  restDays.addEventListener('input', (e) => {

    if (e.value) {
      this.value = e.target.value.replace(/[^0-9]+/g, '');
    };

    calculat();

  });

  place.addEventListener('change', () => {

    calculat();

  });
}

module.exports = calc; */