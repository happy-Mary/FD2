(function() {
var all_Form = [
   {label: "Разработчики:", type:"text", name: "razrab", width: 450},
   {label: "Название сайта:", type:"text", name: "sait", width: 450},
   {label: "URL сайта:", type: "url", name: "url-site", width: 300},
   {label: "Дата запуска сайта:", type: "date", name: "dade", width: 150},
   {label: "Посетителей в сутки:", type: "number", name: "users", width: 150},
   {label: "E-mail для связи:", type: "email", name: "email", width: 250},
   {label: "Рубрика каталога:", type: "select", name: "list", options: ["здоровье", "домашний уют", "бытовая техника"], width: 255},
   {label: "Размещение:", type: "radio", name: "radio", items: ["бесплатное", "платное", "VIP"]},
   {label: "Разрешить отзывы:", type: "checkbox", name: "val-1"},
   {label: "Описание сайта:", type: "textarea", name: "description", width: 600},
   {type: "submit", name:"pushilka", value: "Опубликовать"}
];

var next_Form = [
   {label: "Имя:", type:"text", name: "razrab", width: 450},
   {label: "Адрес:", type: "url", name: "url-site", width: 300},
   {label: "E-mail:", type: "email", name: "email", width: 250},
   {label: "Тема доклада:", type: "select", name: "list", options: ["Оптимизация", "MVC", "Валидация"], width: 255},
   {label: "Размещение:", type: "radio", name: "radio", items: ["бесплатное", "платное", "VIP"]},
   {label: "Написать комментарий:", type: "textarea", name: "description", width: 600},
   {type: "submit", name:"pushilka", value: "Ответить"}
];



function makeForm(arr, id_n) {
	var Form = document.forms[id_n];

	var Field = document.createElement("fieldset");
	Field.style.border='0';


// цикл создания формы
for (var i = 0; i < arr.length; i++) {
	var br = document.createElement('br');
	// функция повторяющихся действий
	function makeElem() {
		Elem.name = arr[i].name;
		Elem.style.width = arr[i].width + "px";
		Elem.style.marginTop = ".2em";
		Elem.required = true;
		Field.appendChild(Elem);
		Field.appendChild(br);
	}

	// создание лэйбла
	if ('label' in arr[i] === true) {
	var L = document.createElement('label');
	var Ltext = document.createTextNode(arr[i].label);
	L.appendChild(Ltext);
	L.style.width = "150px";
	L.style.margin = ".3em 0"
	L.style.display = "inline-block";
	Field.appendChild(L);
	}
	// конец лэйбла

	// условие для radio
	if (arr[i].type === "radio") {
		// создание радиокнопок
		for (var k = 0; k < arr[i].items.length; k++) {
			var Elem = document.createElement('input');
			Elem.type = arr[i].type;
			var text_radio = document.createTextNode(arr[i].items[k]);

			Field.appendChild(Elem);
			Field.appendChild(text_radio);
			Field.appendChild(br);
			} // конец цикла radio

	// условие для checkbox
	} else if (arr[i].type === "checkbox") { 
			var Elem = document.createElement('input');
			Elem.type = arr[i].type;
			Elem.checked = true;
			makeElem();
	// условие для select
	} else if (arr[i].type === "select")  {
			var Elem = document.createElement('select');
			// создание списка
			for (var k = 0; k < arr[i].options.length; k++) {
				var option = document.createElement('option');
				option.value = k;
				var options = document.createTextNode(arr[i].options[k]);
				option.appendChild(options);
				Elem.appendChild(option);
			}
			makeElem()
	// условие для textarea	
	} else if (arr[i].type === "textarea")  {
			var Elem = document.createElement('textarea');
			Elem.rows = 10;
			Elem.style.display = "block";
			makeElem()
	// условие для textarea	
	} else if (arr[i].type === "submit")  {
			var Elem = document.createElement('input');
			Elem.type = arr[i].type;
			Elem.value = arr[i].value;
			makeElem();

	} else {
	var Elem = document.createElement('input');
	Elem.type = arr[i].type;
	makeElem();
	}
 }
 // конец цикла
Form.appendChild(Field);
}

makeForm(all_Form, "dyn_form");
makeForm(next_Form, "cr_form");
})();