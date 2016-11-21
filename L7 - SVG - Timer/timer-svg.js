// общие переменные
var TimeCircle = parseFloat(360);
var Radius=parseFloat(120);
// SVG верстка
var Svg = document.getElementsByTagName("svg");
var MySvg = Svg[0];
var svgNS = MySvg.namespaceURI;
// большой круг
var circleBig = document.createElementNS(svgNS, "circle");
	circleBig.setAttribute("cy", 150);
	circleBig.setAttribute("cx", 150);
	circleBig.setAttribute("r", "150");
	circleBig.setAttribute("fill", "orange");
	MySvg.appendChild(circleBig);

// маленькие круги
var cifra = 1;
for (var GR = 30; GR <= TimeCircle; GR = GR + 30) { 
	var Angle=parseFloat(GR)/180*Math.PI;
	var r = 20;
	var x = 150+Radius*Math.sin(Angle);
	var y = 150-Radius*Math.cos(Angle);

	var circleSmall = document.createElementNS(svgNS, "circle");
	circleSmall.setAttribute("cy", y);
	circleSmall.setAttribute("cx", x);
	circleSmall.setAttribute("r", r);
	circleSmall.setAttribute("fill", "green");
	MySvg.appendChild(circleSmall);

var T = document.createElementNS(svgNS, "text");
	T.setAttribute("x", x);
	T.setAttribute("y", y+r/2);
	T.setAttribute("text-anchor", "middle");
	T.setAttribute("font-size", "2em");
	T.innerHTML = cifra;
	MySvg.appendChild(T);
	cifra++;
}

// надпись времени
var timeText = document.createElementNS(svgNS, "text");
	timeText.setAttribute("x", 150);
	timeText.setAttribute("y", 85);
	timeText.setAttribute("text-anchor", "middle");
	timeText.setAttribute("font-size", "1.5em");
	MySvg.appendChild(timeText);

// стрелка часовая
var hourHand = document.createElementNS(svgNS, "line");
	hourHand.setAttribute("x1", 150);
	hourHand.setAttribute("y1", 150);
	hourHand.setAttribute("x2", 150);
	hourHand.setAttribute("y2", 100);
	hourHand.setAttribute("stroke", "#000");
	hourHand.setAttribute("stroke-width", 8);
	hourHand.setAttribute("stroke-linecap", "round");
	MySvg.appendChild(hourHand);

// минутная стрелка
var minHand = document.createElementNS(svgNS, "line");
	minHand.setAttribute("x1", 150);
	minHand.setAttribute("y1", 150);
	minHand.setAttribute("x2", 150);
	minHand.setAttribute("y2", 50);
	minHand.setAttribute("stroke", "#000");
	minHand.setAttribute("stroke-width", 4);
	minHand.setAttribute("stroke-linecap", "round");
	MySvg.appendChild(minHand);

// секундная стрелка
var secHand = document.createElementNS(svgNS, "line");
	secHand.setAttribute("x1", 150);
	secHand.setAttribute("y1", 165);
	secHand.setAttribute("x2", 150);
	secHand.setAttribute("y2", 15);
	secHand.setAttribute("stroke", "#000");
	secHand.setAttribute("stroke-width", 2);
	secHand.setAttribute("stroke-linecap", "round");
	MySvg.appendChild(secHand);





