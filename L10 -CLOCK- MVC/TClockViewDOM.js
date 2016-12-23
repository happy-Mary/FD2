// VIEW
// class TClockViewDOM
function TClockViewDOM() {
	var self = this;

	self.MyDOM = null;
	self.MyModel = null;
	self.hour_hand = null;
	self.minute_hand = null;
	self.second_hand = null;

	self.Set = function(Container, Model) { 
		self.MyDOM = Container;
		self.MyModel = Model;
	}

	self.Update = function() { 
		self.second_hand.style.transform = "rotate("+ self.MyModel.posSec+ "deg)";
		self.minute_hand.style.transform = "rotate("+ self.MyModel.posMin+ "deg)";
		self.hour_hand.style.transform = "rotate("+ self.MyModel.posHr+ "deg)";
	}

	self.Build = function() { 
	// константы для часов
	var TimeCircle = parseFloat(360);
	var Radius=parseFloat(120);
	// большой циферблат
	var Hour_circle = document.createElement("div");
	Hour_circle.style.cssText = "width: 300px; height: 300px; background-color: orange; border-radius: 50%; margin: 5px auto";
	self.MyDOM.appendChild(Hour_circle);
	// расчет центра большого
	var H_CenterX=Hour_circle.offsetLeft+Hour_circle.offsetWidth/2;
	var H_CenterY=Hour_circle.offsetTop+Hour_circle.offsetHeight/2;
	// маленькие циферблаты
	var cifra = 1;
	for (var GR = 30; GR <= TimeCircle; GR = GR + 30) {
		// сдвиг кругов для цикла 30 градусов
		var Angle=parseFloat(GR)/180*Math.PI;
		// создание маленького дива
		var Min_circle = document.createElement("div");
		Min_circle.style.cssText = "position: absolute; width: 40px; height: 40px; background-color: green; border-radius: 50%; color:#fff;"; 
		// 
		self.MyDOM.appendChild(Min_circle);
		// создание числа
		var number = document.createElement("span");
		number.style.cssText = "display: block; line-height: 40px; text-align: center; font-size: 2em; height: 100%";
		number.innerHTML = cifra;
		Min_circle.appendChild(number);
		// расчет центра маленького 
		var Min_CenterX=H_CenterX+Radius*Math.sin(Angle);
		var Min_CenterY=H_CenterY-Radius*Math.cos(Angle);
		// позиционирование
		Min_circle.style.left=Math.round(Min_CenterX-Min_circle.offsetWidth/2)+'px';
		Min_circle.style.top=Math.round(Min_CenterY-Min_circle.offsetHeight/2)+'px';
		cifra=cifra + 1;
		}

// создание стрелок
		// часовая стрелка
		self.hour_hand = document.createElement("div");
		self.hour_hand.style.cssText = "border: 4px solid black;  height: 50px; position: absolute; border-radius:5px";
		self.hour_hand.style.left = (H_CenterX - 4) + "px";
		self.hour_hand.style.top = (H_CenterY - 55) + "px";  
		self.MyDOM.appendChild(self.hour_hand);
		// минутная стрелка
		self.minute_hand = document.createElement("div");
		self.minute_hand.style.cssText = "border: 2px solid black; height: 100px; position: absolute; border-radius:2px";
		self.minute_hand.style.left = (H_CenterX - 2) + "px";
		self.minute_hand.style.top = (H_CenterY - 100)+"px";
		self.MyDOM.appendChild(self.minute_hand);
		// секундная стрелка
	    self.second_hand = document.createElement("div");
		self.second_hand.style.cssText = "border: 1px solid black; border-radius: 1px; height: 150px; position: absolute; border-radius:1px";
		self.second_hand.style.left = (H_CenterX - 1) + "px";
		self.second_hand.style.top = (H_CenterY - 125) + "px";
		self.MyDOM.appendChild(self.second_hand);

	// координаты для разворота стрелок
	self.hour_hand.style.transformOrigin = "50% 55px";
	self.minute_hand.style.transformOrigin = "50% 100px";
	self.second_hand.style.transformOrigin = "50% 125px";
	}

}