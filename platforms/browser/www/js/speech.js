/* document.addEventListener('deviceready', parler(), false);


function parler() {
       
    TTS
        .speak({
            text: 'hello, world!',
            locale: 'en-GB',
            rate: 0.75
        }, function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
}
 */

//document.addEventListener('deviceready', parler(),false);

function parler(){
	//alert("parler");
	var word=document.getElementById("saisie");
	var u = new SpeechSynthesisUtterance();
       var txt = "";
       txt = word.value;
       u.text = txt;
       u.lang = 'fr-FR';
       speechSynthesis.speak(u);
}
