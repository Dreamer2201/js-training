
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
let field = document.getElementById('field');
let ball = document.getElementById('ball');
field.addEventListener('click', moveBall);
function moveBall(event) {
    let coordsField = field.getBoundingClientRect();
    console.log(coordsField);
    // м’яч має абсолютне позиціювання (position:absolute), поле -- відносне (position:relative)
    // таким чином, координати м’яча розраховуються відносно внутрішнього, верхнього лівого кута поля.
    let ballsCoords = {
        top: event.clientY - coordsField.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - coordsField.left - field.clientLeft - ball.clientWidth / 2,
    };
    // забороняємо перетинати верхню межу поля:
    if (ballsCoords.top < 0) ballsCoords.top = 0;
    // забороняємо перетинати ліву межу поля:
    if (ballsCoords.left < 0) ballsCoords.left = 0;
    // забороняємо перетинати праву межу поля:
    if (ballsCoords.left + ball.clientWidth > field.clientWidth) {
        ballsCoords.left = field.clientWidth - ball.clientWidth;
    };
    // забороняємо перетинати нижню межу поля:
    if (ballsCoords.top + ball.clientHeight > field.clientHeight) {
        ballsCoords.top = field.clientHeight - ball.clientHeight;
    }
    ball.style.top = ballsCoords.top + 'px';
    ball.style.left = ballsCoords.left + 'px';
}


    // 
console.log(document);
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;
console.log(centerX, centerY);

let elemCenter = document.elementFromPoint(centerX, centerY);
elem.style.background = "red";
console.log(elem.tagName);


// show message
let btnShowMes = document.getElementById('showingmessage');
btnShowMes.addEventListener('click', createMessageUnderElem);

function createMessageUnderElem() {
    let message = document.createElement('div');
    message.style.cssText = "position:fixed; color: red";
    let coords = btnShowMes.getBoundingClientRect();
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
    console.log(coords);
    message.innerHTML = "Merry Christmas!";
    document.body.append(message);
    setTimeout(() => message.remove(), 3000);
}
 

// отримуємо координати елемента відносно документа
function getCoords(elem) {
    let rect = elem.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.pageYOffset,
        left: rect.left + window.pageXOffset
    }
}
console.log(getCoords(btnShowMes));


// open menu:
let menuOpen = document.querySelector('.menu');
let menuTitle = document.querySelector('.title')
menuTitle.addEventListener('click', function () {
    menuOpen.classList.toggle('open');
})

// карусель

let arrBtn = document.querySelectorAll('.arrow');
let btnPrev = arrBtn[0];
let btnNext = arrBtn[1];

let width = 130; // ширина зображення
let count = 3; // видима кількість зображень
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0; // початкова позиція каруселі

btnPrev.addEventListener('click', function () {
    // зсув ліворуч
    position += width * count;
      // останній зсув вліво може бути не на 3, а на 2 або 1 елемент
    position = Math.min(position, 0)
    console.log(position);
      list.style.marginLeft = position + 'px';
})
btnNext.addEventListener('click', function () {
    // зсув праворуч
      position -= width * count;
      // останнє пересування вправо може бути не на 3, а на 2 або 1 елемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
})
   

// counter
document.addEventListener('click', function (event) {
    if (event.target.dataset.counter != undefined) {
        event.target.value++;
    }
})

// делегування подій
container.addEventListener('click', function (event) {
    if (event.target.className != 'remove-button') return;
    let selectedPane = event.target.closest('.pane');
    selectedPane.remove();
});


// делегування подій, відкриття та закриття меню
let items = tree.querySelectorAll('li');
    for (let li of items) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling);
};
    
tree.addEventListener('click', openCloseMenu);
function openCloseMenu(event) {
    if (event.target.tagName != 'SPAN') return;
    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;
}
