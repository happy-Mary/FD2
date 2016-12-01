// CONSTANTS
// area paameters
var AreaWidth = 600;
var AreaHeight = 400;
// racquet paameters
var PlayerWidth = 15;
var PlayerHeight = 100;
// ball paameters
var BallDiam = 40;
// speed
var Speed = 0;

// making DOM elements
var Tarea = document.getElementById("play");
Tarea.style.width = AreaWidth +"px";
Tarea.style.height = AreaHeight + "px";
Tarea.style.backgroundColor = "orange";
Tarea.style.position = "relative";

var leftPlayer = document.createElement("div");
leftPlayer.style.width = PlayerWidth + "px";
leftPlayer.style.height = PlayerHeight + "px";
leftPlayer.style.backgroundColor = "blue";
leftPlayer.style.position = "absolute";
Tarea.appendChild(leftPlayer);

var rightPlayer = document.createElement("div");
rightPlayer.style.width = PlayerWidth + "px";
rightPlayer.style.height = PlayerHeight + "px";
rightPlayer.style.backgroundColor = "green";
rightPlayer.style.position = "absolute";
Tarea.appendChild(rightPlayer);

var ball = document.createElement("div");
ball.style.width =BallDiam + "px";
ball.style.height = BallDiam + "px";
ball.style.borderRadius = "50%";
ball.style.backgroundColor = "#B22222";
ball.style.position = "absolute";
Tarea.appendChild(ball);
