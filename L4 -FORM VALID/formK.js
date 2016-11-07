// общие переменные
var Form = document.forms.n_form;
Form.onsubmit = ValAll;

// назначение события всем элементам одновременно
function AddElemEvent() {
for (var i = 0; i < Form.length; i++) {
		var Elem = Form[i];
		if((Elem.type ==="checkbox")||(Elem.type ==="radio")||(Elem.tagName === "SELECT")) { Elem.setAttribute("change", "findError(this)")};
		Elem.setAttribute("onblur", "valueElem(this)");
	}
}
AddElemEvent();

// получение элемента по потере фокуса
function valueElem(Elem) {

		var Res=true;
        if (Elem.type === "text") {
        	Res=TextElem(Elem);
        } else if (Elem.type === "url") {
        	Res=UrlElem(Elem);
        } else if (Elem.type === "number") {
        	Res=NumElem(Elem);
        } else if (Elem.type === "date") {
        	Res=DateElem(Elem);
        } else if (Elem.type === "email") {
        	Res=EmailElem(Elem);
        } else if (Elem.type === "checkbox") {
        	Res=CheckElem(Elem);
        } else if (Elem.type === "radio") {
        	Res=RadioElem(Elem);
         } else if (Elem.tagName === "SELECT") {
        	Res=SelectElem(Elem);
        } else if (Elem.tagName === "TEXTAREA") {
        	Res=TextareaElem(Elem);
        }
        return Res;
    }

// ФУНКЦИИ ВАЛИДАЦИИ
// обработка текстовых полей
function TextElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	console.log(Elem.value);
	// проверка количества символов
		if ((ElemV.length > 30) || (ElemV.length < 1)) {
		span.innerHTML = '* Введите не более 30 символов!';
		 return false;

	 // проверка на наличие чисел
     	} else if (ElemV.search(/[0-9]/) !== -1) {
	 	span.innerHTML = '* Введите символ, не число!';
	 	 return false;
	 	 
    	} else {span.innerHTML = ' ';  return true;}
}

// обработка url полей
function UrlElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	// проверка количества символов
	if (ElemV.length < 5) {
		span.innerHTML = '* Введите не менее 5 символов!';
		return false;
		
	} else {span.innerHTML = ' '; 
		return true;}
}

// обработка Num полей
function NumElem(Elem) {
 	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	// проверка на число и пустую строку
	if (isNaN(ElemV) || (!ElemV)) {
		span.innerHTML = '* Введите число!';
		return false;	
	}  else {span.innerHTML = ' ';
		return true;
	}	
}

// обработка полей даты
function DateElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	// проверка на пустую строку
	if (!ElemV) {
		span.innerHTML = '* Введите дату!';
		return false;	
	}  else {span.innerHTML = ' ';
		return true;}	
}

// обработка полей мэйла
	function EmailElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	// проверка на наличие @ и пустую строку
	if (ElemV.indexOf("@") === -1) {
		span.innerHTML = '* Некорректное значение!';
		return false;	
	} else {span.innerHTML = ' '; 
		return true;
	}
}

// обработка чекбокса
	function CheckElem(Elem) {
		var span = Elem.nextSibling; 
		var ElemV = Elem.checked;
		if (ElemV === false) {
		span.innerHTML = '* Отзывы помогут оценить вашу работу';
		return false;
	} else {span.innerHTML = ' '; 
		return true;
	}
}

// обработка радиокнопки
function RadioElem() {
		var Elem = Form.elements["payment"];
		var span = document.getElementById("error");
		var ElemV = Form.elements["payment"].value;
		if (ElemV === "") {
		span.innerHTML = '* Выберите значение';
		return false;	
	} else {span.innerHTML = ' ';
		return true;
	}
}

// обработка списка
function SelectElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	if(ElemV === "0") {
		span.innerHTML = '* Выберите один из вариантов';
		return false;
	} else {span.innerHTML = ' ';
		return true;
	}	
}

// обработка текстового поля
function TextareaElem(Elem) {
	var span = Elem.nextSibling; 
	var ElemV = Elem.value;
	if (!ElemV) {
		span.innerHTML = '* Напишите хоть что-нибудь...';
		return false;	
	} else {span.innerHTML = ' ';
	return true;
	}
}

// ФУНЦКЦИЯ ИТОГОВОЙ ВАЛИДАЦИИ
function ValAll() {
	var TotalRes = true;                  
for (var i = 0; i < Form.length; i++) {
	var Elem = Form[i];
	if (!valueElem(Elem) && TotalRes) {      
        if ((Elem.type === "radio")||(Elem.type === "checkbox")) {(Elem.scrollIntoView());
        } else {
        	Elem.focus();
        } 
          TotalRes=false;             
        }
}
	return TotalRes;   
}


