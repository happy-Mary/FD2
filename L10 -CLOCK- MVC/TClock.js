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
	// состояние часов-идут/стоят
	self.ClockGo = true;
	//ТАЙМЕР - обновляет текущее время если часы идут
	self.Timer = null;
	

	self.posSec = currTime.getSeconds()*6;
	self.posMin = currTime.getMinutes()*6 + currTime.getSeconds()/10;
	self.posHr = 30*(currTime.getHours() + (1/60)*currTime.getMinutes();

	// запуск часов
	self.Start =  function() {
		Timer = setTimeout(MyViewUpdate, 1020 - currTime.getMilliseconds());
	}

	// остановка часов
	self.Stop = function() { 
		
	}

	//при каждом клике таймера Модель просит View обновиться
	self.MyViewUpdate = function() { 
	if(MyView) {MyView.Update();}
	}



}

