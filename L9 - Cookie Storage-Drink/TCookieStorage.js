function TCookieStorage(name, timeMS) {
	var self = this;
	self.name = String(name);
	self.timeMS = parseFloat(timeMS);

	var StorageH = {};	

	// getting ready to work with Storage
	self.Reset = function() {
		if(name) {
			StorageH = JSON.parse(getCookie(name));
			// console.log(getCookie(name));
			// console.log(JSON.parse(getCookie(name)));
		}
		else if(!name) {StorageH = {}; }
		return StorageH;
	}
    
	// adding value
	self.AddValue = function(K,V) {
		StorageH[K]=V;
		setCookie(name, JSON.stringify(StorageH), {expires: timeMS});
	}

	// delete value
	self.DeleteValue = function(K) {
		console.log(K in StorageH);
		if((K in StorageH)==true) {
			delete StorageH[K];
			setCookie(name, JSON.stringify(StorageH), {expires: timeMS});
			return true;
		} 
		else {return false;}
	}
    
    self.GetValue = function(K) {
		return StorageH[K];
	}

	self.GetKeys = function() {
		return Object.keys(StorageH)
	}

}

// functions for Cookies
function getCookie(name)
{
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '{}';
}

function setCookie(name, value, options)
{
    options=options || {};
    var expires=options.expires;
    if (typeof expires == "number" && expires)
    {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires=options.expires=d;
    }
    if (expires && expires.toUTCString)
    	options.expires=expires.toUTCString();
    value=encodeURIComponent(value);
    var updatedCookie=name+"="+value;
    for(var propName in options)
    {
        updatedCookie+="; "+propName;
        var propValue=options[propName]; 
        if (propValue !== true)
            updatedCookie+="="+propValue;
    }
    document.cookie=updatedCookie;
}
