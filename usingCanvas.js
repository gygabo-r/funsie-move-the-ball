let x = 350;
let y = 350;
let speed = 30;
function draw(){
    const canvas = document.getElementById("play-area");
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();
}

function hide(){
    const canvas = document.getElementById("play-area");
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x, y, 41, 0, 2 * Math.PI);
    ctx.fill();
}

function startWithCanvas(){
    const element = document.getElementById('wrapper');
    const canvas = document.createElement('canvas');
    canvas.width = 750;
    canvas.height = 750;
    canvas.style.border = "1px red solid";
    canvas.id = "play-area";
    element.appendChild(canvas);
    draw();
    window.addEventListener('keydown', (e) => {
        hide();
        if (e.key === 'ArrowUp') {
            y -= speed;
        }
        if (e.key === 'ArrowDown') {
            y += speed;
        }
        if (e.key === 'ArrowLeft') {
            x -= speed;
        }
        if (e.key === 'ArrowRight') {
            x += speed;
        }
        draw();
    });
}

function attach(){
    const button = document.getElementById('start-canvas');
    button.onclick = startWithCanvas;
}

window.addEventListener('DOMContentLoaded', attach);

