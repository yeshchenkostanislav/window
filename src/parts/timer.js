function timer() {
  let deadline = Date.UTC(2019, 3, 4);

  function getTimeRemaining(endtime) {
    let t = endtime - new Date(),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));

    if (days <= 9) days = "0" + days;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(endtime) {
    let days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }

    }
  }

  setClock(deadline);

}

module.exports = timer;




/*   (function () {
    // Setup all the variables needed

    let days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds');
    var target = Date.UTC(2019, 5, 17, 8);

    setInterval(function () {
      var now = new Date();
      var d = target - now;

      // Get number of weeks until event
      days.innerHTML = Math.floor((d / (1000 * 60 * 60 * 24)));
      hours.innerHTML = Math.floor((d / 1000 / 60 / 60) % 24);
      minutes.innerHTML = Math.floor((d / 1000 / 60) % 60);
      seconds.innerHTML = Math.floor((d / 1000) % 60);

    }, 1000);
  }()); */