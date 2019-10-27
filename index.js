const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 512;
let cell;

var img = new Image();
img.src = 'image.png';

function setCell(n) {
  cell = size / n;
}

function fillHex(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      ctx.fillStyle = '#' + arr[i][j];
      ctx.fillRect(i * cell, j * cell, cell, cell);
    }
  }
}

function fillrgba(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      ctx.fillStyle = 'rgba(' + arr[i][j] + ')';
      ctx.fillRect(i * cell, j * cell, cell, cell);
    }
  }
}


function clearCanvas() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const list = document.querySelector('.list');

list.firstElementChild.addEventListener('click', () => {
  clearCanvas();
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    .then(response => response.json())
    .then(data => {
      setCell(4);
      fillHex(data);
    });
})

list.firstElementChild.nextElementSibling.addEventListener('click', () => {
  clearCanvas();
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    .then(response => response.json())
    .then(data => {
      setCell(32);
      fillrgba(data);
    });
})

list.lastElementChild.addEventListener('click', () => {
  clearCanvas();
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
})




