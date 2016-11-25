var counter = document.getElementById("counter");

counter.style.width = "500px";
//создание счета
var countLeft = document.createElement("span");
var countRight = document.createElement("span");
var centerD = document.createElement("span");
centerD.innerHTML=":";
var left = 0;
var right = 0;

counter.style.fontSize = "4em";
counter.style.display = "inline-block";
countLeft.innerHTML = left;
countRight.innerHTML = right;

counter.appendChild(countLeft);
counter.appendChild(centerD);
counter.appendChild(countRight);

//ХЭШ ПОЛЯ
var AreaH = {
	width: 600,
	height: 400
}  

//ХЭШ РАКЕТКИ ЛЕВОЙ
var LeftH = {
	width: 15,
	height: 100,
	speedY: 1,
	posY: 0,
	posX: 0
}

//ХЭШ РАКЕТКИ ПРАВОЙ
var RightH = LeftH;


//создание поля
var main_cont = document.getElementById("сontainer");
main_cont.style.cssText = "width: 600px; text-align: center";
var box = document.createElement("div");
main_cont.appendChild(box);

box.style.width = AreaH.width + "px";
box.style.height = AreaH.height + "px";
box.style.background = "orange";
box.style.position = "relative";

//ЭЛЕМЕНТЫ ПОЛЯ
//левая ракетка
var leftPlayer = document.createElement("div");
leftPlayer.style.backgroundColor = "blue";
leftPlayer.style.position = "absolute";
leftPlayer.style.width = LeftH.width + "px";
leftPlayer.style.height = LeftH.height + "px";
leftPlayer.style.top = LeftH.posY + "px";
leftPlayer.style.left = LeftH.posX + "px";
box.appendChild(leftPlayer);

// правая ракетка
var rightPlayer = document.createElement("div");
rightPlayer.style.backgroundColor = "green";
rightPlayer.style.position = "absolute";
rightPlayer.style.width = RightH.width + "px";
rightPlayer.style.height =  RightH.height + "px";
rightPlayer.style.top = RightH.posY + "px";
rightPlayer.style.left = (AreaH.width - RightH.width) + "px";
box.appendChild(rightPlayer);

window.addEventListener("keydown", MovePl);

function MovePl() {

}





// console.log(box.width);

// rightPlayer.style.cssText = "width: 15px; height: 120px; background-color: ; position: absolute";
// rightPlayer.style.top = "0";
// rightPlayer.style.right = "0";  // ??? left ????
// container.appendChild(rightPlayer);


// var ball = document.createElement("div");
// ball.style.cssText = "width: 40px; height:40px; background-color: #B22222; border-radius: 50%;  position: absolute";
// container.appendChild(ball);



// //??? мяч в центре
// ball.style.top = (container.offsetHeight/2 - ball.offsetHeight/2)  + "px";
// ball.style.left = (container.offsetWidth/2 - ball.offsetWidth/2) + "px";






