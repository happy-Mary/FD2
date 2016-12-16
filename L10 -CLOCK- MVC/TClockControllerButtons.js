// CONTROLLER
//class TClockControllerButtons
function TClockControllerButtons(Conteiner, Model) {
	var self = this;
	// ссылка на дом-контейнер
	self.MyDom = Conteiner;
	// ссылка на модель, которой надо управлять
	self.MyModel = Model;
	// метод для установки MyDom, MyModel
	self.Set = function() { }

	// кнопки, слушаем событие, вызываем методы модели
	var ButtonStart = document.querySelector(".start");
	ButtonStart.addEventListener("click", MyModel.Start); //запускает часы
	var ButtonStop = document.querySelector(".stop");
	ButtonStop.addEventListener("click", MyModel.Stop); //останавливает часы
}