// Model
// class TClock
function TClock() {
	var self = this;
	// current time
	self.currTime = (currTime);
	// состояние часов-идут/стоят
	self.ClockGo = true;
	// запуск часов
	self.Start =  function() { }
	// остановка часов
	self.Stop = function() { }

	// ???ТАЙМЕР - обновляет текущее время если часы идут
	self.Timer;
	// переменная MyView со ссылкой на View, который знает как выглядят часы 
	self.myView = View;

	//при каждом клике таймера Модель просит View обновиться
	self.MyViewUpdate = function() { 
	//метод из View 
	}

	// метод для установки MyView
	self.v = function() { }

}

