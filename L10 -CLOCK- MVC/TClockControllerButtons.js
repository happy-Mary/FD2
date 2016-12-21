// CONTROLLER
//class TClockControllerButtons
function TClockControllerButtons() {
	var self = this;

	self.MyDom = null;
	self.MyModel = null;

	self.Set = function(Container, Model) {
		self.MyDom = Container;
		self.MyModel = Model;
	// кнопки, слушаем событие, вызываем методы модели
	var ButtonStart = self.MyDom.querySelector(".start");
	ButtonStart.addEventListener("click", MyModel.Start); //запускает часы
	var ButtonStop = self.MyDom.querySelector(".stop");
	ButtonStop.addEventListener("click", MyModel.Stop); //останавливает часы
	}

}