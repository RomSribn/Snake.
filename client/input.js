(function(){
	const keys = {
		SHIFT: 16,
		SPACE: 32,
		CTRL: 17,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	};

	function isKey(key){
		let code;
		if(typeof keys[key] !== 'undefined'){
			code = keys[key];
		} else {
			code = key.charCodeAt(0);
		}
		
		return (event.keyCode == code);
	}

	window.input = {
		isKey: function(key){
			return isKey(key.toUpperCase());
		},
		isLock: false
	};
})();