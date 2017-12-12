document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("set").addEventListener("touchend", function(){
	var nom =document.getElementById('nom');
	alert(nom.value);
	writeLog(nom.value);		
});

var logOb;

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
}
   
function onDeviceReady() {
	alert("devideready function");
	
	window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
		alert("window.truc function");
		console.log(dir.nativeURL);
		console.log("got main dir", dir);
		dir.getFile("log.txt", {create:true, exclusive: false}, function(file) {
			console.log("got the file", file);
			logOb = file;
			writeLog("AppStart");			
		});
	});

}


function writeLog(str) {
	alert("in writeLog ");
	if(!logOb){
		alert("echec log "+str);
	} 
	var log =str+" suc.\n"
	alert("going to log "+log);
	logOb.createWriter(function(fileWriter) {
		fileWriter.seek(fileWriter.length);         
		var blob = new Blob([log], {type:'text/plain'});
		console.log(blob);
		fileWriter.write(blob);
		alert("ok, in theory i worked");
	}, fail);
}

function justForTesting() {
	logOb.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			alert(this.result);
		};

		reader.readAsText(file);
	}, fail);

}
