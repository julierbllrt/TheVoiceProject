var nom =document.getElementById('nom');
var prenom =document.getElementById('prenom');
//var birthday = document.getElementById('birthday');
var tel = document.getElementById('tel');
var des = document.getElementById('description');
var logOb;
i=0;


document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("set").addEventListener("touchend", function(){
	i=0;
	var  string = nom.value + "\n" + prenom.value + "\n" + tel.value + "\n" + des.value + "\n";
	writeLog(string);
	alert('Les nouvelles informations on été enregistré');
});

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
}
   
function onDeviceReady() {
	window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
		console.log(dir.nativeURL);
		console.log("got main dir", dir);
		dir.getFile("log.txt", {create:true, exclusive: false}, function(file) {
			console.log("got the file", file);
			logOb = file;		
			console.log('getfile');
			readLog();	
		});
	});
}


function writeLog(str) {
	console.log(str);
	if(!logOb){
		return;
	} 
	logOb.createWriter(function(fileWriter) {       
		var blob = new Blob([str], {type:'text/plain'});
		fileWriter.write(blob);
	}, fail);
	
	alert(str+' enregistré');
}

function readLog() {
	logOb.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			var res=this.result.split("\n");
			alert(res);
			nom.value=res[0];
			prenom.value=res[1];
			//birthday.value=res[2];
			tel.value=res[2];
			des.value=res[3];
			alert(this.result);
		};
		reader.readAsText(file);
	}, fail);

}
/*
function justForTesting() {
	logOb.file(function(file) {
		var freader = new FileReader();

		freader.onloadend = function(e) {
			alert(this.result);
		};

		freader.readAsText(file);
	}, fail);
}*/