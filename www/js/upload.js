
document.getElementById('select_fichier').addEventListener('touchend',copier, fail);
document.getElementById('test').addEventListener('touchend',pick, false);
var category;
var fileOb;
var newDirOb;
var oldDirOb;

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
	console.log("//////////////////////////////////////////");
}

function pick() {
	alert("fuck1");
	window.OurCodeWorld.Filebrowser.filePicker.single({
		success: function(data){
			if(!data.length){
				// No file selected
				return;
			}

			console.log(data);
			pathToFile=data[0];
			document.getElementById('list').innerHTML = ['<img src="', pathToFile,'"/>'].join('');
			index=pathToFile.lastIndexOf('/');
			pathToDir=pathToFile.substring(0,index);
			fileName=pathToFile.substring(index+1);
			
			window.resolveLocalFileSystemURL(pathToDir, function(dir) {
				console.log("got main dir", dir);
				oldDirOb=dir;
				dir.getFile(fileName, {create:false}, function(file) {
					fileOb=file;
					console.log("got the file", file);
					window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
						newDirOb=dirEntry
						console.log(dirEntry);
						console.log("//////////////////////////////////////////");
					}, fail);
				});
			});
		
		},
		error: function(err){
			console.log(err);
		}
	});
	alert("fuck2");
	
	
}

function copier() {	
	var newName = document.getElementById("signification").value+".png";
	console.log(newName);
	console.log("fichier selectionné:",fileOb);
	console.log("dossier d'origine:",oldDirOb);
	console.log("dossier destinataire:",newDirOb);
	
	fileOb.moveTo(newDirOb, newName);
	alert(fileOb.name+" renommer");
	
	newDirOb.getFile(newName, {create:false}, function(file) {
		fileOb=file;
		alert(file.name+" nouveau nom");
	});
	
	alert(fileOb.name+" copié");
	console.log(fileOb);
	
	alert('getfile');
}





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


/* ARCHIVE

//document.addEventListener('deviceready', onDeviceReady, false);
//document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
	var files = evt.target.files;
	var f = files[0];
	var reader = new FileReader();
	reader.onload = (function(theFile) {
		return function(e) {
			document.getElementById('list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
		};
	})(f);
	console.log("//////////////////////////////////////////");
	
	
	
	navigator.Env.getDirectory("Downloads", 
		function (path) {
			window.resolveLocalFileSystemURL("file:///storage/emulated/0/"+ path, function(dir) {
				console.log("got main dir", dir);
				oldDirOb=dir;
				dir.getFile(f.name, {create:false}, function(file) {
					fileOb=file;
					console.log("got the file", file);
					window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
						newDirOb=dirEntry
						console.log(dirEntry);
						console.log("//////////////////////////////////////////");
					}, fail);
				});
			});
			
		},
		function (error) {
			console.log("getDirectory error: " + error);
		}
	);

	reader.readAsDataURL(f);
	//console.log(f.toURL());
	
}
*/
