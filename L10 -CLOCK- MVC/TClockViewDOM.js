// VIEW
// class TClockViewDOM
function TClockViewDOM() {
	var self = this;
	// переменные-ссылка на ДОМ контейнер и модель
	self.MyDOM = null;
	self.MyModel = null;
	// !!!!! тут переменные, которые помнят, например стрелки и т.д.
	self.hour_hand = null;
	self.minute_hand = null;
	self.second_hand = null;

	// метод для установки MyDOM, MyView
	self.Set = function(Container, Model) { 
		MyDOM = Container;
		MyModel = Model;
	}

	self.Update = function() { 
		// обновляет положение стрелок согласно времени, взятому из модели,
		// вызвана в апдейт модели
		second_hand.style.transform = "rotate("+ MyModel.posSec+ "deg)";
		minute_hand.style.transform = "rotate("+ MyModel.posMin+ "deg)";
		hour_hand.style.transform = "rotate("+ MyModel.posHr+ "deg)";
	}

	// метод строит часы внутри заданного дом-контейнера
	self.Build = function() { 
	// константы для часов
	var TimeCircle = parseFloat(360);
	var Radius=parseFloat(120);
	// большой циферблат
	var Hour_circle = document.createElement("div");
	Hour_circle.style.cssText = "width: 300px; height: 300px; background-color: orange; border-radius: 50%; margin: 5px auto";
	MyDOM.appendChild(Hour_circle);
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
		Min_circle.style.cssText = "position: absolute; width: 40px; height: 40px; background-color: green; border-radius: 50%;"; 
		// 
		MyDOM.appendChild(Min_circle);
		// создание числа
		var number = document.createElement("span");
		number.style.cssText = "display: block; line-height: 40px; text-align: center; font-size: 18px; height: 100%";
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
		hour_hand = document.createElement("div");
		hour_hand.style.cssText = "border: 4px solid black;  height: 50px; position: absolute; border-radius:5px";
		hour_hand.style.left = (H_CenterX - 4) + "px";
		hour_hand.style.top = (H_CenterY - 55) + "px";  
		MyDOM.appendChild(hour_hand);
		// минутная стрелка
		minute_hand = document.createElement("div");
		minute_hand.style.cssText = "border: 2px solid black; height: 100px; position: absolute; border-radius:2px";
		minute_hand.style.left = (H_CenterX - 2) + "px";
		minute_hand.style.top = (H_CenterY - 100)+"px";
		MyDOM.appendChild(minute_hand);
		// // секундная стрелка
	    second_hand = document.createElement("div");
		second_hand.style.cssText = "border: 1px solid black; border-radius: 1px; height: 150px; position: absolute; border-radius:1px";
		second_hand.style.left = (H_CenterX - 1) + "px";
		second_hand.style.top = (H_CenterY - 125) + "px";
		MyDOM.appendChild(second_hand);

	// координаты для разворота стрелок
	hour_hand.style.transformOrigin = "50% 55px";
	minute_hand.style.transformOrigin = "50% 100px";
	second_hand.style.transformOrigin = "50% 125px";

// TEST PAINTING HANDS
		// second_hand.style.transform = "rotate("+ 120+ "deg)";
		// minute_hand.style.transform = "rotate("+ 200+ "deg)";
		// hour_hand.style.transform = "rotate("+ 140+ "deg)";

	}


}