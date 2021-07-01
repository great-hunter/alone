'use strict';
function games() {
  let secret = Math.random()*100;
  secret = Math.round(secret);
  function play() {
    let question = prompt('Угадай число от 1 до 100');
    if(question === null) {
      alert("Игра окончена");
      return;
    }
    question = +question;
    if(isNaN(question)) {
      alert("Введи число!");
      play();
    } else if(question > secret) {
      alert("Загаданное число меньше");
      play();
    } else if(question < secret) {
      alert("Загаданное число больше");
      play();
    } else if(question === secret) {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
  }
  play();
}

games();