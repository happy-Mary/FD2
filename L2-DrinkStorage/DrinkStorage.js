// making Object
var DrinkStorage = new THashStorage();


var ingredients = [];
var recepieH = {name_key:nameDrink, alcоhol_key:"", ingred_key:ingredients}; 
var nameDrink;


function PutInfo(){
// getting information
var nameDrink = prompt("Введите название напитка:","");

// adding drink-name to recepie-hash
recepieH.name_key=nameDrink;
// alcohol or not
var Alc = confirm("Это алкогольный напиток?\n ДА-нажмите ОК, НЕТ-ОТМЕНА");

if(Alc === false) 
	recepieH.alcоhol_key = "нет";
else 
	recepieH.alcоhol_key = "да";

// asking for ingredients
var ingredient="";
    do {
	 	var ingredient = prompt("Введите 1 ингредиент напитка","");
	 	if ((ingredient!==null)&&(ingredient.length)) ingredients.push(ingredient);
	 } while(ingredient!==null);


// adding key to main hash
DrinkStorage.AddValue(nameDrink, recepieH);
}

// getting info about drink
function GetInfo() {
	var g_info = document.getElementById('getInformation').value;
	console.log(DrinkStorage.GetValue(g_info));

		if(recepieH.name_key == undefined) {
			var DivMes = "Такого напитка нет";
		} else {
			var DivMes = "Напиток: " +  recepieH.name_key +'\n'+
				"Алкогольный: " + recepieH.alcоhol_key + '\n'+
				"Рецепт приготовления: " + recepieH.ingred_key + " смешать, готово!!!";
				// TODO: нет переносов на странице
	}
var message = document.getElementById('messageId');
message.innerHTML = DivMes;
}

// delete drink
function DelInfo() {
	var d_info = document.getElementById('deleteInformation').value;
	var Napitok = DrinkStorage.GetValue(d_info);
	console.log(Napitok); //отладка

	if(Napitok === undefined) {
			alert("Удалять нечего");
		} else {
			DrinkStorage.DeleteValue(d_info);
			alert("Элемент удален");
	}
}

function GetInfoKeys() {
		var DivMes = DrinkStorage.GetKeys();
		var message = document.getElementById('messageId');
		message.innerHTML = DivMes;
}