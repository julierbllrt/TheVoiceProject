document.addEventListener('deviceready', function () {
	
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

function parler(){
	alert("parler");
	var text=document.getElementById("saisie");
	alert(text.value);
	TTS.speak({text: text.value});
}