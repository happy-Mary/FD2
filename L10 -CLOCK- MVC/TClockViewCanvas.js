// VIEW
//class TClockViewCanvas
function TClockViewCanvas() {
	var self = this;
	self.NyDOM = null;
	self.MyModel = null;

	self.hour_hand = null;
	self.minute_hand = null;
	self.second_hand = null;
	self.canvLeft;
	self.canvTop;

	self.Set = function(Container, Model) { 
		self.MyDOM = Container;
		self.MyModel = Model;
	}

	self.Build = function() {
		// общие переменные
		var TimeCircle = parseFloat(360);
		var RadSmall=parseFloat(120);
		var RadBig = parseFloat(150);
		var centerX = 150;
		var centerY = 150;

	var canv = document.createElement("CANVAS");
	canv.setAttribute("class", "clockcanvas");
	canv.width = "300";
	canv.height = "300";
	canv.style.display = "block";
	canv.style.margin = "5px auto";
	canv.textContent = "Update your browser, please!";
	self.MyDOM.appendChild(canv);

	self.canvLeft = canv.offsetLeft;
	self.canvTop = canv.offsetTop;

	var Canvas = self.MyDOM.querySelector(".clockcanvas");
	var Ctx = Canvas.getContext("2d");
	// большой круг
	Ctx.fillStyle = "orange";
	Ctx.arc(centerX, centerY, RadBig, 0, Math.PI*2);
	Ctx.fill();
	// маленькие круги
		var cifra = 1;
		for (var GR = 30; GR <= TimeCircle; GR = GR + 30) {

			var Angle=parseFloat(GR)/180*Math.PI;
			var r = 20;

			var x = RadBig+RadSmall*Math.sin(Angle);
			var y = RadBig-RadSmall*Math.cos(Angle);

			Ctx.beginPath();
			Ctx.arc(x, y, r, 0, Math.PI*2);
			Ctx.fillStyle = "green";
			Ctx.fill();


			Ctx.font = "1.8em Arial";
			Ctx.fillStyle = "white";
			Ctx.textBaseline ="middle";
			Ctx.textAlign = "center";
			Ctx.fillText(cifra, x, y);
			cifra++;
		}
	}//конец Build

self.createContH = function() {
	var CanvH = document.createElement("CANVAS");
	CanvH.setAttribute("class", "clockcanvasH");
	CanvH.width = "300";
	CanvH.height = "300";
	CanvH.style.display = "block";
	CanvH.style.position = "absolute";
	CanvH.style.top = self.canvTop +"px";
	CanvH.style.left = self.canvLeft +"px";
	CanvH.textContent = "Update your browser, please!";
	self.MyDOM.appendChild(CanvH);
}

self.BuildHands = function() {
	// общие переменные
	var centerX = 150;
	var centerY = 150;

	var posHr = self.MyModel.posHr;
	var posMin = self.MyModel.posMin;
	var posSec = self.MyModel.posSec;
	if(posHr===undefined && posMin===undefined && posSec === undefined) 
		{posHr = 0; posMin = 0; posSec = 0;}

	var Canvas = self.MyDOM.querySelector(".clockcanvasH");
	var CtxH = Canvas.getContext("2d");

	// стили стрелок общие
	CtxH.strokeStyle = "black";
	CtxH.lineCap="round";
	// стрелка часовая
	var hr_height = 50;
	CtxH.lineWidth = 8;
	CtxH.beginPath();
	CtxH.moveTo(centerX, centerY);
	CtxH.lineTo(centerX + hr_height*Math.cos(Math.PI/2 - posHr*(Math.PI/180)), 
	           centerY - hr_height*Math.sin(Math.PI/2 - posHr*(Math.PI/180)));
	CtxH.stroke();

	// минутная стрелка
	var min_height = 100;
	CtxH.lineWidth="4";
	CtxH.beginPath();
	CtxH.moveTo(centerX, centerY);
	CtxH.lineTo(centerX + min_height*Math.cos(Math.PI/2 - posMin*(Math.PI/180)), 
	           centerY - min_height*Math.sin(Math.PI/2 - posMin*(Math.PI/180)));
	CtxH.stroke();

	// секундная стрелка
	var sec_height = 130;
    CtxH.lineWidth="2";
	CtxH.beginPath();
	CtxH.moveTo(centerX - 20*Math.cos(Math.PI/2 -posSec*(Math.PI/180)), 
	           centerY + 20*Math.sin(Math.PI/2 - posSec*(Math.PI/180)));
	CtxH.lineTo(centerX + sec_height*Math.cos(Math.PI/2 - posSec*(Math.PI/180)), 
	           centerY - sec_height*Math.sin(Math.PI/2 - posSec*(Math.PI/180)));
	CtxH.stroke();

}//конец BuildHands

// для перерисовки стрелок
self.ClearHands = function() {
	var Canvas = self.MyDOM.querySelector(".clockcanvasH");
	CtxH = Canvas.getContext("2d");
	CtxH.beginPath();
	CtxH.clearRect(0, 0, 300, 300);
}


	self.Update = function() {
		self.ClearHands();
		self.BuildHands();
	 }
}