document.addEventListener('deviceready', function () {
	
	TTS["stop"] = function(){
		TTS.speak({text: ''});
	};
	
	
	TTS.speak({
		text: 'Bonjour',
		locale: 'fr-FR',
		rate: 1
	}, function () {
		console.log('OK !');
	}, function (reason) {
		console.log(reason);
	});
},false);