var butt = document.querySelector('input');

// CONSTANTS
// area paameters
var AreaWidth = 600;
var AreaHeight = 400;
// racquet paameters
var PlayerWidth = 15;
var PlayerHeight = 100;
// ball paameters
var BallRad = 20;
// // speed
var Speed = 0;

// ARRAYS
var LeftH = {
	width: PlayerWidth,
	height: PlayerHeight,
	speedY: Speed,
	posY: 0,
	posX: 0
}

var RightH = {
	width: PlayerWidth,
	height: PlayerHeight,
	speedY: Speed,
	posY: 0,
	posX: AreaWidth-PlayerWidth
}

var BallH = {
	// width: BallRad*2,
	// height: BallRad*2,
	speedY: Speed,
	speedX: Speed,
	posY: AreaHeight/2,
	posX: AreaWidth/2
}


// генерация случайного числа
function RandomNum() {
	var scores = [-5, -4, -3, 3, 4, 5];
	rand =  Math.floor(Math.random()*scores.length); 
    return scores[rand];}

window.onload = StartGame;

// // таймер для всего процесса
function StartGame() {
	setInterval(Game, 40);
	document.onkeydown = MovePl;
	document.onkeyup = StopPl;
	butt.onclick = MoveBl;
}

function MovePl(e) {
	e.preventDefault();
	e = e || window.event;
	var keyCode = e.keyCode;

	if (keyCode === 40) {RightH.speedY = 4;}
	else if (keyCode === 38) {RightH.speedY = -4;}
	else if (e.metaKey||e.ctrlKey) {LeftH.speedY = 4;}
	else if (e.shiftKey) {LeftH.speedY = -4;}
}

function StopPl(e) {
	e.preventDefault();
	e = e || window.event;
	var keyCode = e.keyCode;

	if (keyCode === 40) {RightH.speedY = 0;}
	else if (keyCode === 38) {RightH.speedY = 0;}
	else if (!e.metaKey||!e.ctrlKey) {LeftH.speedY = 0;}
	else if (!e.shiftKey) {LeftH.speedY = 0;}
}

// движение мяча
function MoveBl(e) {
	e.preventDefault();
	e = e || window.event;

	BallH.speedY = RandomNum();
	BallH.speedX = RandomNum();
	console.log(BallH.speedY + " "+ BallH.speedX);
}

function Game() {
// making CANVAS elements
var canvas = document.getElementById("tennis");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, AreaWidth, AreaHeight);

// RIGHT PADDLE
ctx.fillStyle = "blue";
RightH.posY+=RightH.speedY;
if(RightH.posY >= AreaHeight - RightH.height) {RightH.posY = AreaHeight - RightH.height;}   	
if(RightH.posY <= 0) {RightH.posY = 0;} 
ctx.fillRect(RightH.posX, RightH.posY,  PlayerWidth, PlayerHeight);

// LEFT PADDLE
ctx.fillStyle = "green";
LeftH.posY += LeftH.speedY;
if(LeftH.posY >= AreaHeight - LeftH.height) {LeftH.posY = AreaHeight - LeftH.height;}
if(LeftH.posY <= 0) {LeftH.posY = 0;}
ctx.fillRect(LeftH.posX, LeftH.posY,  PlayerWidth, PlayerHeight);

// BALL
ctx.fillStyle = "#B22222";
BallH.posX+=BallH.speedX;
BallH.posY+=BallH.speedY;
// нижняя стенка
if(BallH.posY + BallRad > AreaHeight) {BallH.speedY = -BallH.speedY; BallH.posY=AreaHeight-BallRad;}
// верхняя стенка
if(BallH.posY < BallRad) {BallH.speedY = -BallH.speedY; BallH.posY=BallRad;}


// столкновения мяча с ракеткой по Х
var R_Dot = AreaWidth - (RightH.width + BallRad);
var L_Dot = LeftH.width+BallRad;

    // правая ракетка
    if(BallH.posX >= R_Dot && BallH.posY >= RightH.posY && BallH.posY <= RightH.posY+RightH.height) 
    	{BallH.speedX = -BallH.speedX; BallH.posX = R_Dot;}
    // левая ракетка
    else if(BallH.posX <= L_Dot && BallH.posY >= LeftH.posY && BallH.posY <= LeftH.posY+LeftH.height)
        {BallH.speedX = -BallH.speedX; BallH.posX = L_Dot;}

    else if(BallH.posX+BallRad >= AreaWidth && BallH.speedX !== 0 && BallH.speedY !== 0) {
    	BallH.posX = AreaWidth-BallRad;
        BallH.speedX = 0;
    	BallH.speedY = 0;
    	// счет
    	var leftCount = document.getElementsByClassName('leftCount')[0];
        var num_playL = leftCount.innerHTML;
    	num_playL = parseFloat(num_playL)+1; 
    	leftCount.innerHTML = num_playL;    
        }
	 
    else if(BallH.posX <= BallRad && BallH.speedX !== 0 && BallH.speedY !== 0) {
    	BallH.posX = BallRad;
    	BallH.speedX = 0;
    	BallH.speedY = 0;
    	// счет
    	var rightCount = document.getElementsByClassName('rightCount')[0];
    	var num_playR = rightCount.innerHTML;
    	num_playR = parseFloat(num_playR)+1;
        rightCount.innerHTML = num_playR;
    	} 

butt.onclick = function(){
    		BallH.posY = AreaHeight/2;
			BallH.posX = AreaWidth/2;
            
            BallH.speedY = RandomNum();
			BallH.speedX = RandomNum();
			console.log(BallH.speedY + " "+ BallH.speedX);
    	}    	

ctx.moveTo(BallH.posX, BallH.posY);
ctx.beginPath();
ctx.arc(BallH.posX, BallH.posY, BallRad, 0, Math.PI*2);
ctx.fill();
}



   
   