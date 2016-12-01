
var butt = document.querySelector('input');

// ARRAYS
var AreaH = {
	width: AreaWidth,
	height: AreaHeight
}  


var LeftH = {
	width: PlayerWidth,
	height: PlayerHeight,
	speedY: Speed,
	posY: 0,
	posX: 0,
	Update: function(){
		leftPlayer.style.top = this.posY + "px";
		leftPlayer.style.left = this.posX + "px";
	}
}

var RightH = {
	width: PlayerWidth,
	height: PlayerHeight,
	speedY: Speed,
	posY: 0,
	posX: AreaWidth-PlayerWidth,
	Update: function() {
		rightPlayer.style.top = this.posY + "px";
		rightPlayer.style.left = this.posX + "px";
	}
}

var BallH = {
	width: BallDiam,
	height: BallDiam,
	speedY: Speed,
	speedX: Speed,
	posY: Tarea.offsetHeight/2-ball.offsetHeight/2,
	posX: Tarea.offsetWidth/2-ball.offsetWidth/2,
	Update: function() {		
		ball.style.top = this.posY + "px";
		ball.style.left = this.posX + "px";
	}
}


window.onload = StartGame;


// таймер для всего процесса
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


// координаты для мяча
var scores = [-5, -4, -3, 3, 4, 5];
var rand_scoreX = Math.floor(Math.random()*scores.length);
var rand_scoreY = Math.floor(Math.random()*scores.length);

function MoveBl(e) {
	e.preventDefault();
	e = e || window.event;

	BallH.speedY = scores[rand_scoreY];
	BallH.speedX = scores[rand_scoreX];

	console.log(BallH.speedY + " "+ BallH.speedX);
}


function Game() {
// расставляем поле
LeftH.Update();
RightH.Update();
BallH.Update();

// движение ракеток
RightH.posY += RightH.speedY;
LeftH.posY += LeftH.speedY;

   if(RightH.posY >= AreaH.height - RightH.height) {RightH.posY = AreaH.height - RightH.height;}   	
   if(RightH.posY <= 0) {RightH.posY = 0;} 

   if(LeftH.posY >= AreaH.height - LeftH.height) {LeftH.posY = AreaH.height - LeftH.height;}
   if(LeftH.posY <= 0) {LeftH.posY = 0;}

// движение мяча
	BallH.posX+=BallH.speedX;
    BallH.posY+=BallH.speedY;
    // нижняя стенка
    if(BallH.posY + BallH.height > AreaH.height) {BallH.speedY = -BallH.speedY; BallH.posY=AreaH.height-BallH.height;}
    // верхняя стенка
    if(BallH.posY < 0) {BallH.speedY = -BallH.speedY; BallH.posY=0;}


// столкновения мяча с ракеткой по Х
var R_Dot = AreaH.width - (RightH.width + BallH.width);
var L_Dot = LeftH.width;

// счет
var num_playR = 0;
var num_playL = 0;

if (BallH.posX>R_Dot||BallH.posX+BallH.width>AreaH.width||BallH.posX < L_Dot||BallH.posX < 0)
{
    // правая ракетка
    if(BallH.posX >= R_Dot && BallH.posY >= RightH.posY && BallH.posY <= RightH.posY+RightH.height) 
    	{BallH.speedX = -BallH.speedX; BallH.posX = R_Dot;}
    // левая ракетка
    else if(BallH.posX <= L_Dot && BallH.posY >= LeftH.posY && BallH.posY <= LeftH.posY+LeftH.height)
        {BallH.speedX = -BallH.speedX; BallH.posX = L_Dot;}

    else if(BallH.posX+BallH.width >= AreaH.width) {
    	BallH.posX = AreaH.width-BallH.width;
    	BallH.speedX = 0;
    	BallH.speedY = 0; 
    	var leftCount = document.getElementsByClassName('leftCount')[0];
    	num_playL++
    	leftCount.innerHTML = num_playL;
    	// ???????????????????????????????????????????????????????????
    	return num_playL;
    	Game();
        }
	 
    else if(BallH.posX <= 0) {
    	BallH.posX = 0;
    	BallH.speedX = 0;
    	BallH.speedY = 0;
    	var rightCount = document.getElementsByClassName('rightCount')[0];
    	num_playR++;
    	rightCount.innerHTML = num_playR;
    	// ???????????????????????? цикл??? функция счета
    	return num_playR;
    	Game();
    	}
    }
}
 
















