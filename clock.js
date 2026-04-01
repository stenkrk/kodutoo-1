window.addEventListener('DOMContentLoaded', () => {

    let fontSize = 50;
    const container = document.getElementById('container');

    let left = window.innerWidth / 2;
    let topPos = window.innerHeight / 2;

    let isBlack = false;

    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    /* AI parandas mul seda osa koodist */
    class Circle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }
        move() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.fill();
        }
    }

    const circles = Array.from({ length: 100 }, () => new Circle());

    function animateBackground() { /* AI  parandas mu animation koodi */
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(c => { c.move(); c.draw(); });
        requestAnimationFrame(animateBackground);
    }

    function applyFontSize() {
        clockContainer.style.fontSize = fontSize + "px";
        dateContainer.style.fontSize = (fontSize * 0.6) + "px";
    }

    function updateClock() {
        const now = new Date();

        hours.textContent = String(now.getHours()).padStart(2, '0');
        minutes.textContent = String(now.getMinutes()).padStart(2, '0');
        seconds.textContent = String(now.getSeconds()).padStart(2, '0');

        if (!isBlack) {
            if (now.getHours() >= 6 && now.getHours() < 18) {
                document.body.style.background = "linear-gradient(#1e3c72, #2a5298)";
            } else {
                document.body.style.background = "radial-gradient(circle, #020024, #090979, #000000)";
            }
        }
    }

    function updateDate() {
        const now = new Date();

        day.textContent = String(now.getDate()).padStart(2,'0');
        month.textContent = String(now.getMonth()+1).padStart(2,'0');
        year.textContent = now.getFullYear();
    }

    function changeColor() {
        const colors = ["white", "cyan", "pink", "yellow", "lime"];
        const rand = colors[Math.floor(Math.random()*colors.length)];

        clockContainer.style.color = rand;
        dateContainer.style.color = rand;
    }

    function resetAll() {
        fontSize = 50;
        applyFontSize();

        left = window.innerWidth / 2;
        topPos = window.innerHeight / 2;

        container.style.left = left + "px";
        container.style.top = topPos + "px";

        container.style.fontFamily = "'Roboto Mono', monospace";

        isBlack = false;
        document.body.style.background = "radial-gradient(circle, #020024, #090979, #000000)"; /* AI  parandas seda  osa */

        clockContainer.style.color = "white";
        dateContainer.style.color = "white";
    }


    /* AI parandas ja aitas blackout ja reset koodi kirjutamisega siin */
     function toggleBlackout() {
    isBlack = !isBlack;
    document.body.style.background = isBlack
        ? "black"
        : "radial-gradient(circle, #020024, #090979, #000000)";
    }

    function checkKey(e){
        switch(e.key){
            case "+": fontSize += 5; break;
            case "-": fontSize -= 5; break;
            case "ArrowLeft": left -= 10; break;
            case "ArrowRight": left += 10; break;
            case "ArrowUp": topPos -= 10; break;
            case "ArrowDown": topPos += 10; break;
        }

        applyFontSize();
        container.style.left = left + "px";
        container.style.top = topPos + "px";
    }

    document.body.addEventListener('click', () => {
        document.getElementById('bgMusic').play().catch(()=>{});
    });

document.getElementById('bigger').addEventListener('click', () => {
    fontSize += 5;
    applyFontSize();
});

document.getElementById('smaller').addEventListener('click', () => {
    fontSize -= 5;
    applyFontSize();
});

document.getElementById('color').addEventListener('click', changeColor);

document.getElementById('reset').addEventListener('click', resetAll);

// ⚠️ MUUDA funktsiooni nimi ka!
document.getElementById('blackout').addEventListener('click', toggleBlackout);

    fontSelect.onchange = (e) => {
        container.style.fontFamily = e.target.value;
    };

    window.addEventListener('keydown', checkKey);

    animateBackground();
    updateClock();
    updateDate();

    setInterval(updateClock, 1000);
    setInterval(updateDate, 60000);
});console.log("fail ühendatud");
const pi = 3.14;
let hours, minutes, seconds, day, month, year, dateTime;
let fontSize = 25;

function changeFontSizeBigger(){
    fontSize = fontSize + 5;
    if(fontSize > 200){
        fontSize = 200;
        window.alert("Fondi suurus ei saa olla üle 200 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function changeFontSizeSmaller(){
    fontSize = fontSize - 5;
    if(fontSize < 10){
        fontSize = 10;
        window.alert("Fondi suurus ei saa olla alla 10 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function upDateClock() {
    dateTime = new Date();

    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('hours').innerHTML = hours + ":";
    document.getElementById('minutes').innerHTML = minutes + ":";
    document.getElementById('seconds').innerHTML = seconds;
}

function updateDate(){
    dateTime = new Date();
    day = dateTime.getDate();
    month = dateTime.getMonth() + 1;
    year = dateTime.getFullYear();

    if(day < 10){
        day = "0" + day;
    }
    if(month < 10){
        month = "0" + month;
    }

    document.getElementById('day').innerHTML = day + ".";
    document.getElementById('month').innerHTML = month + ":";
    document.getElementById('year').innerHTML = year;
}

function checkKey(e){
    console.log(e.keyCode);
    if(e.keyCode == 43){
        changeFontSizeBigger();
    }
    if(e.keyCode == 45){
        changeFontSizeSmaller();
    }
}

upDateClock();
updateDate();
setInterval(upDateClock, 1000);
setInterval(updateDate, 60000);
document.getElementById('bigger').addEventListener('click', changeFontSizeBigger);
document.getElementById('smaller').addEventListener('click', changeFontSizeSmaller);
window.addEventListener('keypress', checkKey);
