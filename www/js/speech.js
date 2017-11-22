document.addEventListener('deviceready', parler());


function parler() {
	var word=document.getElementById("saisie");
       
	TTS
		.speak({
		     text:word.value,
		     locale:'fr-FR',
		     rate: 1
		}, function () {
		     console.log('success');
		}, function (reason) {
		     console.log(reason);
		});
	word.value="";
}
/*
//synthese vocale fonctionnelle uniquement sur ordi

function parler(){
	alert("parler");
	
	var u = new SpeechSynthesisUtterance();
       var txt = "";
       txt = word.value;
       u.text = txt;
       u.lang = 'fr-FR';
       speechSynthesis.speak(u);
	word.value="";
}
*/