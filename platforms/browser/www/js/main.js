

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id TEXT NOT NULL, picto TEXT NOT NULL, mot TEXT NOT NULL)');
	var q = 'INSERT INTO PICTOS(id,picto,mot) VALUES (?, ?, ?)';
	var dataArray = [{id: "1", picto: "img/1.png", mot: "un"}, 
					{id: "2", picto: "img/2.png", mot: "deux"},
					{id: "3", picto: "img/3.png", mot: "trois"},
					{id: "4", picto: "img/4.png", mot: "quatre"},
					{id: "5", picto: "img/0.png", mot: "zero"},
					{id: "6", picto: "img/1_1.png", mot: "un"},
					{id: "7", picto: "img/1-2-3.png", mot: "un, deux, trois"},
					{id: "8", picto: "img/1-4.png", mot: "un quart"},
					{id: "9", picto: "img/2 centimes.png", mot: "deux centimes"},
					{id: "10", picto: "img/2 dé.png", mot: "deux"},
					{id: "11", picto: "img/2 euros.png", mot: "deux euros"},
					{id: "12", picto: "img/2_1.png", mot: "deux"},
					{id: "13", picto: "img/3 dé.png", mot: "trois"},
					{id: "14", picto: "img/3_1.png", mot: "trois"},
					{id: "15", picto: "img/3-4.png", mot: "trois quarts"},
					{id: "16", picto: "img/4 dé.png", mot: "quatre"},
					{id: "17", picto: "img/4_1.png", mot: "quatre"},
					{id: "18", picto: "img/5 dé.png", mot: "dé"},
					{id: "19", picto: "img/5 euros.png", mot: "cinq euros"},
					{id: "20", picto: "img/5.png", mot: "cinq"},
					{id: "21", picto: "img/6.png", mot: "six"},
					{id: "22", picto: "img/7.png", mot: "sept"},
					{id: "23", picto: "img/8.png", mot: "huit"},
					{id: "24", picto: "img/9.png", mot: "neuf"},
					];
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].id, dataArray[i].picto, dataArray[i].mot])
	}											
}

// Query the database
//
function queryDbStart(tx) {
	//alert("going queryDbStart");
	tx.executeSql('SELECT * FROM PICTOS', [], querySuccessStart, errorCB);
}

// Query the success callback
//
function querySuccessStart(tx, results) {
	//alert("going querySuccessStart");
	var imgPicto="";
	var len = results.rows.length;
	for (var i = 0; i < len; i++) {
		imgPicto +='<img id="' + results.rows.item(i).id + '" class="picto" src="' + results.rows.item(i).picto + '">';
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
	//alert("going successCB");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(queryDbStart, errorCB);
}

// Cordova is ready
//
function onDeviceReady() {
	//alert("going OnDeviceReady");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);
}

// Click Picto
//

function onClickPicto(elmnt) {
	//alert("going onClickPicto");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(function(tx){queryDbClickPicto(tx, elmnt)}, errorCB);
}

function queryDbClickPicto(tx, id) {
	//alert("going queryDbClickPicto");
	var q = 'SELECT * FROM PICTOS WHERE id LIKE ? ';
	var button = document.getElementById(id);
	var imgElement = button.getElementsByTagName('img');
	var imgSrc = imgElement[0].id;
	tx.executeSql(q, [imgSrc], querySuccessClickPicto, errorCB);
}

function querySuccessClickPicto(tx, results) {
	//alert("going querySuccessClickPicto");
	var txtPicto = " " + results.rows.item(0).mot;
	document.getElementById("saisie").value += txtPicto;
}
