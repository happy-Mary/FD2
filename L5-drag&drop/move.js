var P = document.getElementById("box");
var MasP = P.children;
var BD = document.body;

BD.onmousedown = function(EV) {
	EV=EV||window.event;
	EV.preventDefault();

	// получение текущего элемента
	var currElem = EV.target; 
	var X = currElem.parentNode;

    // получение касания мышью
    var touchX = EV.pageX - currElem.offsetLeft;
    var touchY = EV.pageY - currElem.offsetTop;
    currElem.style.position = "absolute";
    currElem.style.zIndex = 1000; 
    Move(EV);

document.onmousemove = Move; 
	
 	function Move(EV) {
 		EV=EV||window.event;
		EV.preventDefault();
        currElem.style.cursor = "move";
		document.body.appendChild(currElem);
 		currElem.style.top = EV.pageY - touchY + "px";
		currElem.style.left = EV.pageX - touchX + "px";
 	}

 document.onmouseup = function() {
    currElem.style.cursor = "default";
    document.onmousemove = null;
    document.onmouseup = null;
  	}
}
