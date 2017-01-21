// TODO: динамическая передача месяца из файла??? switch, case
// TODO: что делать, если ошибки в csv

// содержимое файла берем через ajax
// нет хоста, загрузила содержимое в json

var csvText;
// var file = "an.csv"
// function TestLoadData() {
//         $.ajax(an.csv,
//             { type:'GET', dataType:'text', success:DataLoaded, error:ErrorHandler }
//         );
//     }

//     function DataLoaded(data) {
//     	var csvText = data;
// }
//     function ErrorHandler(jqXHR,StatusStr,ErrorStr) {
//         alert(StatusStr+' '+ErrorStr);
//     }

var csvText = JSON.parse(document.getElementsByClassName("jsonData")[0].textContent);

var rows=csvText.split(/\r\n|\n/);

// как в РВ передать переменную (для месяца) ????????
function TakeMonth1(V,I,A) {
	return /\d\d[/.][0][8][/.]\d{4}[/,]\d+/.test(V);
}

function TakeMonth2(V,I,A) {
	return /\d\d[/.][0][9][/.]\d{4}[/,]\d+/.test(V);
}

// разделили месяца
function Parse(arr, regFunc) {
	var month = [];
	for(var i = 0; i<arr.filter(regFunc).length; i++) {
		month.push(arr.filter(regFunc)[i].split(','));
	}
	return month;
}

var month1 = Parse(rows, TakeMonth1);
console.log(month1);
var month2 = Parse(rows, TakeMonth2);

// по ним создаем li
var month1_cont = document.getElementsByClassName("slide1")[0];
var month2_cont = document.getElementsByClassName("slide2")[0];

// var j= 1;
function makeDays(container, monthArr) {
	var j = 1
	for(var i = 0; i<monthArr.length; i++){
		var day = document.createElement("li");
		container.appendChild(day);
		var div_char = document.createElement("div");
		// тут храним к-во посетителей в день
		var dataSpan = document.createElement("span");
		dataSpan.className = "number";
		// убираем пробелы в строке посетит., чтобы привести к числу
		var str = monthArr[i][1];
		var strdata = str.replace(/\s+/g,"");
		dataSpan.innerHTML = parseFloat(strdata);
		dataSpan.style.display = "none";
		dataSpan.style.position = "absolute";
		dataSpan.style.top = "-30px";
		dataSpan.style.fontWeight = "bold";
		dataSpan.style.fontSize = "14px";

		div_char.addEventListener("mouseover", function(ev){
			ev.preventDefault();
			ev = ev || window.event;
			var curr = ev.currentTarget;
			curr.childNodes[0].style.display = "inline";
		}, false);

		div_char.addEventListener("mouseout", function(ev){
			ev.preventDefault();
			ev = ev || window.event;
			var curr = ev.currentTarget;
			curr.childNodes[0].style.display = "none";
		}, false);



		div_char.appendChild(dataSpan);
		// высота графиков
		var degreeHeight = document.getElementsByClassName("leftCount")[0].offsetHeight;
		div_char.style.height = degreeHeight*dataSpan.innerHTML/1000+"px";
		// чтобы были видны маленькие значения
		if(dataSpan.innerHTML<50) {
			div_char.style.height = dataSpan.innerHTML*0.5 + "px";
		}
		day.appendChild(div_char);
		// числа дней
		var dayCount = document.createElement("span");
		dayCount.innerHTML = j;
		j++;
		dayCount.className = "dayCount";
		dayCount.style.display = "inline-block";
		dayCount.style.height = "25px";
		dayCount.style.width = "inherit";
		dayCount.style.lineHeight = "25px";
		dayCount.style.textAlign = "center";
        dayCount.style.position = "absolute";
        dayCount.style.bottom = "-25px";
        day.appendChild(dayCount);
	}
}

makeDays(month1_cont, month1);
makeDays(month2_cont, month2);


window.onload = requestAnimationFrame(Move);

function Move() {
	var currMonth;
	var radio = document.getElementsByTagName("input");
    var slider = document.getElementsByClassName("slider")[0];
    var slide1 = document.getElementsByClassName("slide1")[0];
    var monthName = document.getElementsByClassName("monthName")[0];
    
if(radio[0].checked === true) {
	slider.style.left = "0px";
	var currMonth = "Август 2016";
} else if (radio[1].checked === true) {
	slider.style.left = -(slide1.offsetWidth) + "px";
	var currMonth = "Сентябрь 2016";

}
    monthName.innerHTML = currMonth;
requestAnimationFrame(Move);
}
