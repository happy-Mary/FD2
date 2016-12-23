// Model
// class TClock
function TClock() {
	var self = this;
	self.MyView = null;
	self.currTime;
	self.ClockGo = true;
	//ТАЙМЕР
	self.clockT;
	self.OffsetH;



	self.Set = function(View, Offset) {
		self.MyView = View;
		self.OffsetH = parseFloat(Offset);
		if (isNaN(self.OffsetH)) {self.OffsetH = 0;}
	 }

	self.Timer = function() {
		self.clockT = setTimeout(self.MyViewUpdate,  1010 - self.currTime.getMilliseconds());
	}
	

	self.getCurrTime = function() {
		var Time = new Date();
		// установка часовых поясов
	    Time.setHours(Time.getUTCHours()+self.OffsetH);
		self.currTime = Time;
		return self.currTime;
	}

	// запуск часов
	self.Start =  function(EV) {
		EV = EV||window.event;
		if(self.MyView) {self.MyViewUpdate();}
		else {self.getCurrTime();}
		ClockGo = true;
	}

	// остановка часов
	self.Stop = function(EV) { 
		EV = EV||window.event;
		EV.preventDefault();
		self.clockT = clearTimeout(self.clockT);
		ClockGo = false;
	}

	self.MyViewUpdate = function() { 
		self.getCurrTime();
		var j = (1/60)*self.currTime.getMinutes();
		self.posSec = self.currTime.getSeconds()*6;
		self.posMin = self.currTime.getMinutes()*6 + self.currTime.getSeconds()/10;
		self.posHr = 30*(self.currTime.getHours() + j);
		self.MyView.Update();
		self.Timer();
	}

}

