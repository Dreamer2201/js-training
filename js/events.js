
function handler1() {
    console.log('Thanks 1!')
}
function handler2() {
    console.log('Once more Thanks 2!')
}

elem.onclick = () => console.log("Hello!")
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2);

document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM has already built.');
})


// 
let clickbtn = document.getElementById('clickbtn');
clickbtn.onclick = function(event) {
    // вивести тип події, елемент та координати кліка
    console.log(event.type + " на " + event.currentTarget);
    console.log("Координати: " + event.clientX + ":" + event.clientY);
  };


// 
let elemBtn = document.getElementById('elembtn');
class Menu {
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                elemBtn.innerHTML = 'Натиснута кнопка миші.'
                break;
            case 'mouseup':
                elemBtn.innerHTML += '... і відпущена';
                break;
        }
    }
}
let menu = new Menu();
elemBtn.addEventListener('mousedown', menu);
elemBtn.addEventListener('mouseup', menu);


// приховати текст
let btnTextHidden = document.getElementById('btnTextHidden');
let text = document.getElementById('text');
btnTextHidden.addEventListener('click', textDiappear);
function textDiappear() {
    text.style.display = 'none';
}

// сховати кнопку
btnTextHidden.addEventListener('click', function () {
    btnTextHidden.hidden = true;
})

// moving ball
field.addEventListener('click', moveBall);
function moveBall(event) {
      // координати поля щодо вікна браузера
      let fieldCoords = this.getBoundingClientRect();

      // м’яч має абсолютне позиціювання (position:absolute), поле -- відносне (position:relative)
      // таким чином, координати м’яча розраховуються відносно внутрішнього, верхнього лівого кута поля.
      let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };

      // забороняємо перетинати верхню межу поля
      if (ballCoords.top < 0) ballCoords.top = 0;

      // забороняємо перетинати ліву межу поля
      if (ballCoords.left < 0) ballCoords.left = 0;


      // забороняємо перетинати праву межу поля
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      // забороняємо перетинати нижню межу поля
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }