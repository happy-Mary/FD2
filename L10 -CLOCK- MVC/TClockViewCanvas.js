// VIEW
//class TClockViewCanvas
function TClockViewCanvas() {
	var self = this;

	self.NyDOM = null;
	self.MyModel = null;
}

// переменные, которые помнят стрелки
	self.hour_hand = null;
	self.minute_hand = null;
	self.second_hand = null;

	// метод для установки MyDOM, MyView
	self.Set = function(Container, Model) { 
		self.MyDOM = Container;
		self.MyModel = Model;
	}

	self.Update = function() { }

	self.Build = function() {
		// общие переменные
		var TimeCircle = parseFloat(360);
		var RadSmall=parseFloat(120);
		var RadBig = parseFloat(150);
		var centerX = 150;
		var centerY = 150;

	var canv = document.createElement("canvas");
	canv.id = "clockcanvas";
	canv.width = "400";
	canv.height = "400";
	canv.textContent = "Update your browser!";



	MyDOM.appendChild(canv);
	}