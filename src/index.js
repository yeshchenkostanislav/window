window.addEventListener('DOMContentLoaded', () => {

  "use strict";
  let tabs = require('./parts/tabs.js'),
    modal = require('./parts/modal.js'),
    timer = require('./parts/timer.js'),
    galeri = require('./parts/galeri.js'),
    input = require('./parts/input.js'),
    form = require('./parts/form.js');



  tabs();
  modal();
  timer();
  galeri();
  input();
  form();

});