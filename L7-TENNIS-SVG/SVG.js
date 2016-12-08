// CONSTANTS
// area paameters
var AreaWidth = 600;
var AreaHeight = 400;
// racquet paameters
var PlayerWidth = 15;
var PlayerHeight = 100;
// ball paameters
var BallRad = 20;
// speed
var Speed = 0;

// making SVG elements
var Svg = document.getElementsByTagName("svg")[0];
var svgNS = Svg.namespaceURI;

// создаем поле
var Tarea = document.createElementNS(svgNS, "rect");
Tarea.setAttribute("x", 0);
Tarea.setAttribute("y", 0);
Tarea.style.width = AreaWidth + "px";
Tarea.style.height = AreaHeight + "px";
Tarea.setAttribute("fill", "orange");
Svg.appendChild(Tarea);
// левый игрок
var leftPlayer = document.createElementNS(svgNS, "rect");
leftPlayer.style.width = PlayerWidth + "px";
leftPlayer.style.height = PlayerHeight + "px";
leftPlayer.setAttribute("fill", "blue");
Svg.appendChild(leftPlayer);

// правый игрок
var rightPlayer = document.createElementNS(svgNS, "rect");
rightPlayer.style.width = PlayerWidth + "px";
rightPlayer.style.height = PlayerHeight + "px";
rightPlayer.setAttribute("fill", "green");
Svg.appendChild(rightPlayer);

// мяч
var ball = document.createElementNS(svgNS, "circle");

ball.setAttribute("fill", "#B22222");
ball.setAttribute("r", BallRad);
Svg.appendChild(ball);


