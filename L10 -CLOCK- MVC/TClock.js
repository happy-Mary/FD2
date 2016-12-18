// Model
// class TClock
function TClock() {
	var self = this;
	// переменная MyView со ссылкой на View, который знает как выглядят часы 
	self.myView = null;
	// метод для установки MyView
	self.Set = function(View) {
		MyView = View;
	 }

	// current time
	self.currTime = new Date();
	console.log(self.currTime);
	// состояние часов-идут/стоят
	self.ClockGo = true;
	//ТАЙМЕР - обновляет текущее время если часы идут
	// self.Timer = null;
	
   

	// запуск часов
	// модель должна работать без View
	self.Start =  function() {

		ClockGo = true;
	}

	// остановка часов
	self.Stop = function() { 
		// очистить таймер
		ClockGo = false;
	}

	//при каждом клике таймера Модель просит View обновиться
	self.MyViewUpdate = function() { 
		 var j = (1/60)*self.currTime.getMinutes();
		self.posSec = self.currTime.getSeconds()*6;
		self.posMin = self.currTime.getMinutes()*6 + self.currTime.getSeconds()/10;
		self.posHr = 30*self.currTime.getHours() + j;
	MyView.Update();
	}

}

