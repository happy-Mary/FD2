var header = document.getElementById("header");
var box = document.getElementById("container");

//создание счета
var counter = document.createElement("span");
var left = 5;
var right = 3;
counter.style.fontSize = "4em";
counter.style.display = "inline-block";
counter.style.margin = "5px 200px";
counter.innerHTML = left + ":" + right;
header.appendChild(counter);

//создание поля
box.style.cssText = "width: 600px; height: 400px; background-color: #FFFACD; border: 1px solid black; position: relative";

//элементы поля
var leftPlayer = document.createElement("div");
leftPlayer.style.cssText = "width: 15px; height: 120px; background-color: #2E8B57; position: absolute";
leftPlayer.style.top = "0";
leftPlayer.style.left = "0";
box.appendChild(leftPlayer);


var rightPlayer = document.createElement("div");
rightPlayer.style.cssText = "width: 15px; height: 120px; background-color: #1E90FF; position: absolute";
rightPlayer.style.top = "0";
rightPlayer.style.right = "0";  // ??? left ????
box.appendChild(rightPlayer);


var ball = document.createElement("div");
ball.style.cssText = "width: 40px; height:40px; background-color: #B22222; border-radius: 50%;  position: absolute";
box.appendChild(ball);



//??? мяч в центре
ball.style.top = (box.offsetHeight/2 - ball.offsetHeight/2)  + "px";
ball.style.left = (box.offsetWidth/2 - ball.offsetWidth/2) + "px";






