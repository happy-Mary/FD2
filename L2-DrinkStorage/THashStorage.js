//making class
	function THashStorage() {
	var StorageH = {};
	var self = this;
	// methods
	self.Reset = function() {
		StorageH = {};
	}
	
	self.AddValue = function(K,V) {
		StorageH[K]=V;
	}
	
	self.GetValue = function(K) {
		return StorageH[K];
	}
	
	self.DeleteValue = function(K) {
		delete StorageH[K];
	}
	
	self.GetKeys = function() {
		return Object.keys(StorageH);
	}
}
