var category;
$(document).ready(function(){
	if (window.FileReader) {
		function handleFileSelect(evt) {
			var files = evt.target.files;
			var f = files[0];
			var reader = new FileReader();
			reader.onload = (function(theFile) {
				return function(e) {
					document.getElementById('list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
				};
			})(f);
    
			reader.readAsDataURL(f);
			test(f);
		}
	} 
	else {
		alert('This browser does not support FileReader');
	}
	
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	function test(fichier) {
		//var root = "/img/Personnes";//cordova.file.externalApplicationStorageDirectory
		//alert(root);
		//var parentName = root.substring(root.lastIndexOf('/')+1);
		//alert(parentName);
		//var parentEntry = new DirectoryEntry(parentName,root);
		//alert(parentEntry);
		fichier.CopyFile (navigator.Env.getDirectory("Downloads"), cordova.file.externalApplicationStorageDirectory);
		alert("ENFINNNNNNNNNNNNNNN");
	}	    

var txt = "";
var image = "";/*
$('.categorie').click(function(){
	category = this.innerHTML;
	$('.dispo').click(function(){
		//document.location.href="upload.html";
		sleep(2);
		alert(category);
		$('.valider').click(function(){
			alert("autre chose");
				var signification = document.getElementById("signification");
				var fichier = document.getElementById("files");
				txt = signification.value;
				image = fichier.files[0];
				var myObject, imagecopy;
				myObject = new ActiveXObject("image.png");
				imagecopy = myObject.file.copy("img/"+ this.innerHTML +"");
			});           
		});
	});
});*/


 // Insert DB
 //
 
function goInsert(picto, mot){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){insertDb(tx, picto, mot)}, errorCB);
}
 
function insertDb(tx, picto, mot){
 	tx.executeSql('INSERT INTO PICTOS(picto,mot) VALUES(?,?)', [picto, mot], onClick);
}


function sleep(seconds){
	var waitUntil = new Date().getTime() + seconds*1000;
	while (new Date().getTime() < waitUntil) true;
}
/*var category;
$(document).ready(function(){
	var txt = "";
    var image = "";
	$('.categorie').click(function(){
		    category = this.innerHTML;
            alert(category);
		$('.dispo').click(function(){
            alert(category);
            document.location.href="upload.html";
            sleep(2);
            alert(category);
            $('.valider').click(function(){
            	    alert("autre chose");
				    var signification = document.getElementById("signification");
				    var fichier = document.getElementById("files");
				    txt = signification.value;
				    image = fichier.files[0];
				    var myObject, imagecopy;
				    myObject = new ActiveXObject("image.png");
				    imagecopy = myObject.file.copy("img/"+ this.innerHTML +"");
            });           
        });
	});
});*/

});