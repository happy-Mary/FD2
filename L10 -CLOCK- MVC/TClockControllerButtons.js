// CONTROLLER
//class TClockControllerButtons
function TClockControllerButtons() {
	var self = this;
	// ссылка на дом-контейнер
	self.MyDom = null;
	// ссылка на модель, которой надо управлять
	self.MyModel = null;
	// метод для установки MyDom, MyModel
	self.Set = function(Container, Model) {
		MyDom = Container;
		MyModel = Model;
		// кнопки, слушаем событие, вызываем методы модели
	var ButtonStart = MyDom.querySelector(".start");
	ButtonStart.addEventListener("click", MyModel.Start); //запускает часы
	var ButtonStop = MyDom.querySelector(".stop");
	ButtonStop.addEventListener("click", MyModel.Stop); //останавливает часы
	}

}