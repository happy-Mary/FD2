// общие переменные
var TimeCircle = parseFloat(360);
var RadSmall=parseFloat(120);
var RadBig = parseFloat(150);
var centerX = 150;
var centerY = 150;


// выравнивание стрелок при загрузке страницы
MakeClockCanvas();

function MakeClockCanvas(){
	// общие значения времени и углов стрелок
	var currTime = new Date();
	var Sec = currTime.getSeconds()*6;
	var Min = currTime.getMinutes()*6 + currTime.getSeconds()/10;
	var Hour = 30*(currTime.getHours() + (1/60)*currTime.getMinutes());

	//Canvas верстка
	var Canvas = document.getElementById("clockcanvas");
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


			Ctx.font = "bold 1.5em Arial";
			Ctx.fillStyle = "black";
			Ctx.textBaseline ="middle";
			Ctx.textAlign = "center";
			Ctx.fillText(cifra, x, y);
			cifra++;
		}

	// надпись времени
	var textTime = FormatDateTime(currTime);
	Ctx.font = "bold 1.3em Arial";
	Ctx.fillStyle = "black";
	Ctx.textBaseline ="middle";
	Ctx.textAlign = "center";
	Ctx.fillText(textTime, centerX, centerX-50);

	// стили стрелок общие
	Ctx.strokeStyle = "black";
	Ctx.lineCap="round";

	// стрелка часовая
	var hr_height = 50;
	Ctx.lineWidth="8";

	Ctx.beginPath();
	Ctx.moveTo(centerX, centerY);
	Ctx.lineTo(centerX + hr_height*Math.cos(Math.PI/2 - Hour*(Math.PI/180)), 
	           centerY - hr_height*Math.sin(Math.PI/2 - Hour*(Math.PI/180)));
	
	Ctx.stroke();

	// минутная стрелка
	var min_height = 100;
	Ctx.lineWidth="4";

	Ctx.beginPath();
	Ctx.moveTo(centerX, centerY);
	Ctx.lineTo(centerX + min_height*Math.cos(Math.PI/2 - Min*(Math.PI/180)), 
	           centerY - min_height*Math.sin(Math.PI/2 - Min*(Math.PI/180)));

	Ctx.stroke();

	// секундная стрелка
	var sec_height = 130;
    Ctx.lineWidth="2";


	Ctx.beginPath();
	Ctx.moveTo(centerX - 20*Math.cos(Math.PI/2 - Sec*(Math.PI/180)), 
	           centerY + 20*Math.sin(Math.PI/2 - Sec*(Math.PI/180)));

	Ctx.lineTo(centerX + sec_height*Math.cos(Math.PI/2 - Sec*(Math.PI/180)), 
	           centerY - sec_height*Math.sin(Math.PI/2 - Sec*(Math.PI/180)));
	
	Ctx.stroke();
   
    Ctx.beginPath();
	Ctx.clearRect(0, 0, Ctx.width, Ctx.height);

	// ТАЙМЕР
	setTimeout(MakeClockCanvas, 1020 - currTime.getMilliseconds());
}

// форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
  function FormatDateTime(DT)
  {
    var Hours=DT.getHours();
    var Minutes=DT.getMinutes();
    var Seconds=DT.getSeconds();
    return Str0L(Hours,2) + ':' + Str0L(Minutes,2) + ':' + Str0L(Seconds,2);
  }

  function Str0L(Val,Len){
    		var StrVal=Val.toString();
    		while ( StrVal.length < Len )
      		StrVal='0'+StrVal;
    		return StrVal;
  		}




