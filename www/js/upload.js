//document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('files').addEventListener('change', handleFileSelect, false);
var category;

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
}

function handleFileSelect(evt) {
	var files = evt.target.files;
	var f = files[0];
	console.log(files);
	console.log(f.name);
	var reader = new FileReader();
	
	reader.onload = (function(theFile) {
		return function(e) {
			document.getElementById('list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
			//console.log(e.target);
			
			
			
		};
	})(f);
	
	navigator.Env.getDirectory("Downloads", 
		function (path) {
			if (path) {
				window.resolveLocalFileSystemURL("file:///storage/emulated/0/"+ path, function(dir) {
					console.log("got main dir", dir);
					dir.getFile(f.name, {create:false}, function(file) {
						console.log(cordova.file.externalDataDirectory);
						window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
							console.log(dirEntry);
							file.copyTo(dirEntry);
						}, fail);
						console.log("got the file", file);
						logOb = file;		
						console.log('getfile');
						
					});
				});
			}
		},
		function (error) {
			console.log("getDirectory error: " + error);
		}
	);

	reader.readAsDataURL(f);
	//console.log(f.toURL());
}
	
	
	
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

