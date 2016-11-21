updateTime();

function updateTime() {
	var currTime = new Date();
	timeText.innerHTML = FormatDateTime(currTime);
    // координаты стрелок
    var Sec = currTime.getSeconds()*6;
    var Min = currTime.getMinutes()*6 + currTime.getSeconds()/10;
    var Hour = 30*(currTime.getHours() + (1/60)*currTime.getMinutes());

    secHand.setAttribute("transform", "rotate("+Sec+" 150 150)");
    minHand.setAttribute("transform", "rotate("+Min+" 150 150)");
    hourHand.setAttribute("transform", "rotate("+Hour+" 150 150)");

    setTimeout(updateTime, 1020 - currTime.getMilliseconds());
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