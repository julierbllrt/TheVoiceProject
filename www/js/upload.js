
document.getElementById('select_fichier').addEventListener('touchend',copier, fail);
document.getElementById('test').addEventListener('touchend',pick, false);
var cate;
var fileOb;
var newDirOb;
var oldDirOb;

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
	console.log("//////////////////////////////////////////");
}

function pick() {
	window.OurCodeWorld.Filebrowser.filePicker.single({
		success: function(data){
			if(!data.length){
				// No file selected
				return;
			}

			//console.log(data);
			pathToFile=data[0];
			document.getElementById('list').innerHTML = ['<img src="', pathToFile,'"/>'].join('');
			index=pathToFile.lastIndexOf('/');
			pathToDir=pathToFile.substring(0,index);
			fileName=pathToFile.substring(index+1);
			
			window.resolveLocalFileSystemURL(pathToDir, function(dir) {
				//console.log("got main dir", dir);
				oldDirOb=dir;
				dir.getFile(fileName, {create:false}, function(file) {
					fileOb=file;
					//console.log("got the file", file);
					
				});
			});
		
		},
		error: function(err){
			console.log(err);
		}
	});	
	
}




function changeForm() {
	
	document.getElementById("form_verbe").style.display="none";
	document.getElementById("form_personnes").style.display="none";
	document.getElementById("form_obj").style.display="none";
	
	cate = document.getElementById("new_cate").value; 
	alert(cate);
	if (cate=="Verbes"){
		
		document.getElementById("form_verbe").style.display="table";
		document.getElementById("form_irr").style.display="none";
		
	}else if (cate=="Personnes"){
		
		document.getElementById("form_personnes").style.display="table";
		
	}else if (cate=="Nourriture" || cate=="Emotion" || cate=="Santé" || cate=="Sport & Loisirs" || cate=="Quotidien" ){
		
		document.getElementById("form_obj").style.display="table";
		
	}
}





function copier() {	
	var newName = document.getElementById("signification").value+".png";
		
	//alert(cate);
	//console.log(newName);
	//console.log("fichier selectionné:",fileOb);
	//console.log("dossier d'origine:",oldDirOb);
	
	window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
		//alert(cordova.file.externalDataDirectory+cate);
		dirEntry.getDirectory(cate, {create:true},function(dir){
			console.log("dossier selec:",dir);
			newDirOb=dir;
			console.log(dir);
			fileOb.moveTo(newDirOb, newName);
			//alert(fileOb.name+" renommer");
			console.log("//////////////////////////////////////////");
		});		
	}, fail);
	
	
	//alert(fileOb.name+" copié");
	console.log(fileOb);
	
	
	if (cate=="Verbes"){
		
		document.getElementById("form_verbe").style.display("table");
		document.getElementById("form_irr").style.display("none");
		
		if(document.getElementById("irr").attr("cheched")){
			
			document.getElementById("form_irr").style.display("table");
			
		}
	}else if (cate=="Personne"){
		
		document.getElementById("form_personnes").style.display("table");
		
	}else if (cate=="Nourriture" || cate=="Emotion" || cate=="Santé" || cate=="Sport & Loisirs" || cate=="Quotidien" ){
		
		document.getElementById("form_obj").style.display("table");
		
	}
	
	//alert('getfile');
}





 // Insert DB
 //
 
function goInsertPicto(picto, mot, personne, genre){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){insertDb(tx, picto, mot, personne, genre)}, errorCB);
}
 

function insertDbPicto(tx, picto, mot, personne, genre){
 	tx.executeSql('INSERT INTO PICTOS(picto,mot,personne,genre) VALUES (?, ?, ?, ?)', [picto, mot, personne, genre]);
}

function goInsertVerbe(picto, mot, auxiliaire, participe, groupe, pres1, pres2, pres3, pres4, pres5, pres6, irrFutur){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){insertDb(tx, picto, mot, auxiliaire, participe, groupe, pres1, pres2, pres3, pres4, pres5, pres6, irrFutur)}, errorCB);
}

function insertDbVerbe(tx, picto, mot, auxiliaire, participe, groupe, pres1, pres2, pres3, pres4, pres5, pres6, irrFutur){
 	tx.executeSql('INSERT INTO VERBES(picto,mot,auxiliaire,participe,groupe,pres1,pres2,pres3,pres4,pres5,pres6,irrFutur) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )', [picto, mot, auxiliaire, participe, groupe, pres1, pres2, pres3, pres4, pres5, pres6, irrFutur]);
}


/* ARCHIVE
function sleep(seconds){
	var waitUntil = new Date().getTime() + seconds*1000;
	while (new Date().getTime() < waitUntil) true;
}

=======

/* ARCHIVE
function sleep(seconds){
	var waitUntil = new Date().getTime() + seconds*1000;
	while (new Date().getTime() < waitUntil) true;
}

>>>>>>> ed453f44d6d20093186de006c8a34be47c1f3f1f
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
