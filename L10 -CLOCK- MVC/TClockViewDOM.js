// VIEW
// class TClockViewDOM
function TClockViewDOM() {
	var self = this;
	// переменные-ссылка на ДОМ контейнер и модель
	self.MyDOM = null;
	self.MyModel = null;

	// метод для установки MyDOM, MyView
	self.Set = function() { }

	self.Build = function() { 
	// метод строит часы внутри заданного дом-контейнера
	}

	// !!!!! тут переменные, которые помнят, например стрелки и т.д.

	self.Update = function() { 
		// обновляет положение стрелок согласно времени, взятому из модели,
		// вызвана в апдейт модели
	}


}