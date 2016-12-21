// Model
// class TClock
function TClock() {
	var self = this;
	self.myView = null;
	self.currTime;
	self.ClockGo = true;
	//ТАЙМЕР
	self.clockT;

	// метод для установки MyView
	self.Set = function(View) {
		MyView = View;
	 }
	self.Timer = function() {
		clockT = setTimeout(self.MyViewUpdate,  1000);
	}
	
	// запуск часов
	// модель должна работать без View ?
	self.Start =  function() {
		self.MyViewUpdate();
		ClockGo = true;
	}

	// остановка часов
	self.Stop = function() { 
		clockT = clearTimeout(clockT);
		ClockGo = false;
	}

	//при каждом клике таймера Модель просит View обновиться
	self.MyViewUpdate = function() { 
		self.currTime = new Date();
		var j = (1/60)*self.currTime.getMinutes();
		self.posSec = self.currTime.getSeconds()*6;
		self.posMin = self.currTime.getMinutes()*6 + self.currTime.getSeconds()/10;
		self.posHr = 30*self.currTime.getHours() + j;
		MyView.Update();
		self.Timer();
	}

}

// Model
// class TClock
function TClock() {
	var self = this;
	self.myView = null;
	self.currTime;
	self.ClockGo = true;
	//ТАЙМЕР
	self.clockT;

	// метод для установки MyView
	self.Set = function(View) {
		self.MyView = View;
	 }
	self.Timer = function() {
		self.clockT = setTimeout(self.MyViewUpdate,  1020-self.currTime.getSeconds());
	}
	
	// запуск часов
	// модель должна работать без View ?
	self.Start =  function() {
		self.MyViewUpdate();
		ClockGo = true;
	}

	// остановка часов
	self.Stop = function() { 
		self.clockT = clearTimeout(clockT);
		ClockGo = false;
	}

	//при каждом клике таймера Модель просит View обновиться
	self.MyViewUpdate = function() { 
		self.currTime = new Date();
		var j = (1/60)*self.currTime.getMinutes();
		self.posSec = self.currTime.getSeconds()*6;
		self.posMin = self.currTime.getMinutes()*6 + self.currTime.getSeconds()/10;
		self.posHr = 30*self.currTime.getHours() + j;
		self.MyView.Update();
		self.Timer();
	}

}

