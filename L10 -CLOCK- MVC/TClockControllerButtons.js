// CONTROLLER
//class TClockControllerButtons
function TClockControllerButtons() {
	var self = this;

	self.MyDom = null;
	self.MyModel = null;

	self.Set = function(Container, Model) {
		self.MyDom = Container;
		self.MyModel = Model;

	var ButtonStart = self.MyDom.querySelector(".start");
	ButtonStart.addEventListener("click", self.MyModel.Start); //запускает часы
	var ButtonStop = self.MyDom.querySelector(".stop");
	ButtonStop.addEventListener("click", self.MyModel.Stop); //останавливает часы

	}
}
