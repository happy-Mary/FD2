// VIEW
//class TClockViewSVG

function TClockViewSVG() {
	var self =this;

	self.MyDOM = null;
	self.MyModel = null;
	// переменные, которые помнят стрелки
	self.hour_hand = null;
	self.minute_hand = null;
	self.second_hand = null;

	// метод для установки MyDOM, MyView
	self.Set = function(Container, Model) { 
		MyDOM = Container;
		MyModel = Model;
	}

	self.Update = function() { 
		self.secHand.setAttribute("transform", "rotate("+MyModel.posSec+" 150 150)");
    	self.minHand.setAttribute("transform", "rotate("+MyModel.posMin+" 150 150)");
    	self.hourHand.setAttribute("transform", "rotate("+MyModel.posHr+" 150 150)");
	}

// метод строит часы внутри заданного дом-контейнера
self.Build = function() {
	// общие переменные
	var TimeCircle = parseFloat(360);
	var Radius=parseFloat(120);

	var xmlns = "http://www.w3.org/2000/svg";
	var boxWidth = 300;
	var boxHeight = 300;
	var Svg = document.createElementNS (xmlns, "svg");
	Svg.setAttributeNS (null, "width", boxWidth);
	Svg.setAttributeNS (null, "height", boxHeight);

	Svg.style.display = "block";
	Svg.style.margin = "5px auto";

	// большой круг
	var circleBig = document.createElementNS(xmlns, "circle");
	circleBig.setAttribute("cy", 150);
	circleBig.setAttribute("cx", 150);
	circleBig.setAttribute("r", 150);
	circleBig.setAttribute("fill", "orange");
	Svg.appendChild(circleBig);
	// маленькие круги
	var cifra = 1;
	for (var GR = 30; GR <= TimeCircle; GR = GR + 30) { 
	var Angle=parseFloat(GR)/180*Math.PI;
	var r = 20;
	var x = 150+Radius*Math.sin(Angle);
	var y = 150-Radius*Math.cos(Angle);

	var circleSmall = document.createElementNS(xmlns, "circle");
	circleSmall.setAttribute("cy", y);
	circleSmall.setAttribute("cx", x);
	circleSmall.setAttribute("r", r);
	circleSmall.setAttribute("fill", "green");
	Svg.appendChild(circleSmall);

	var T = document.createElementNS(xmlns, "text");
	T.setAttribute("x", x);
	T.setAttribute("y", y+r/2);
	T.setAttribute("text-anchor", "middle");
	T.setAttribute("font-size", "2em");
	T.innerHTML = cifra;
	Svg.appendChild(T);
	cifra++;
	}

	// стрелка часовая
	self.hourHand = document.createElementNS(xmlns, "line");
	self.hourHand.setAttribute("x1", 150);
	self.hourHand.setAttribute("y1", 150);
	self.hourHand.setAttribute("x2", 150);
	self.hourHand.setAttribute("y2", 100);
	self.hourHand.setAttribute("stroke", "#000");
	self.hourHand.setAttribute("stroke-width", 8);
	self.hourHand.setAttribute("stroke-linecap", "round");
	Svg.appendChild(self.hourHand);
	// минутная стрелка
	self.minHand = document.createElementNS(xmlns, "line");
	self.minHand.setAttribute("x1", 150);
	self.minHand.setAttribute("y1", 150);
	self.minHand.setAttribute("x2", 150);
	self.minHand.setAttribute("y2", 50);
	self.minHand.setAttribute("stroke", "#000");
	self.minHand.setAttribute("stroke-width", 4);
	self.minHand.setAttribute("stroke-linecap", "round");
	Svg.appendChild(self.minHand);

	// секундная стрелка
	self.secHand = document.createElementNS(xmlns, "line");
	self.secHand.setAttribute("x1", 150);
	self.secHand.setAttribute("y1", 165);
	self.secHand.setAttribute("x2", 150);
	self.secHand.setAttribute("y2", 15);
	self.secHand.setAttribute("stroke", "#000");
	self.secHand.setAttribute("stroke-width", 2);
	self.secHand.setAttribute("stroke-linecap", "round");
	Svg.appendChild(self.secHand);

	MyDOM.appendChild(Svg);
}


}