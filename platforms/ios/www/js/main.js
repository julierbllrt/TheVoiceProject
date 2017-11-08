$(document).ready(function(){

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (nom TEXT NOT NULL, picto TEXT NOT NULL)');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("1erpicto", "picto/1.jpg")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("2emepicto", "picto/2.jpg")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("3emepicto", "picto/3.jpg")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "picto/4.jpg")');
}

// Query the database
//
function queryDB(tx) {
	alert("going queryDB");
	tx.executeSql('SELECT * FROM PICTOS', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
	alert("going querySuccess");
	var imgPicto="";
	var len = results.rows.length;
	for (var i = 0; i < len; i++) {
		imgPicto +='<img class="picto" src="'+ results.rows.item(i).picto + '">';
		document.getElementById("picto"+i).innerHTML = imgPicto;
		imgPicto="";
	}
	
}

// Transaction error callback
//
function errorCB(err) {
	alert("Error processing SQL: "+err.code);
}

// Transaction success callback
//
function successCB() {
	alert("going successCB");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(queryDB, errorCB);
}

 // Cordova is ready
//
function onDeviceReady() {
	alert("going OnDeviceReady");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);
}
});