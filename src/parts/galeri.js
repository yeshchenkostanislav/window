function galeri() {

  //galeri

  let fotoWrap = document.querySelector('.foto-wrap'),
    a = fotoWrap.getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      let darkLayer = document.createElement('div'); // слой затемнения
      darkLayer.id = 'shadow'; // id чтобы подхватить стиль
      document.body.appendChild(darkLayer); // включаем затемнение

      let attribute = a[i].getAttribute("href");
      let modalWin = document.createElement('img');
      modalWin.id = 'modalwin';
      modalWin.setAttribute('src', attribute);
      fotoWrap.appendChild(modalWin);

      darkLayer.addEventListener('click', () => { // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        document.body.style.overflow = '';
        return false;
      });
    });


  }























}

module.exports = galeri;