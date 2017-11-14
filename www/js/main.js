

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id TEXT NOT NULL, picto TEXT NOT NULL, mot TEXT NOT NULL)');
	var q = 'INSERT INTO PICTOS(id,picto,mot) VALUES (?, ?, ?)';
	var dataArray = [{id: "1", picto: "img/je.png", mot: "je"}, 
					{id: "2", picto: "img/avoir_faim.png", mot: "avoir faim"},
					{id: "3", picto: "img/vouloir.png", mot: "vouloir"},
					{id: "4", picto: "img/frites.png", mot: "frites"},
					{id: "5", picto: "img/du.png", mot: "du"},
					{id: "6", picto: "img/poulet.png", mot: "poulet"},
					{id: "7", picto: "img/avec.png", mot: "avec"},
					{id: "8", picto: "img/une.png", mot: "une"},
					{id: "9", picto: "img/salade.png", mot: "salade"},
					{id: "10", picto: "img/eau.png", mot: "eau"},
					{id: "11", picto: "img/et.jpg", mot: "et"},
					{id: "12", picto: "img/0.png", mot: "zeros"},
					{id: "13", picto: "img/1.png", mot: "un"},
					{id: "14", picto: "img/2.png", mot: "deux"},
					{id: "15", picto: "img/3.png", mot: "trois"},
					{id: "16", picto: "img/4.png", mot: "quatre"},
					{id: "17", picto: "img/5.png", mot: "cinq"},
					{id: "18", picto: "img/2 euros.png", mot: "deux euros"},
					{id: "19", picto: "img/5 euros.png", mot: "cinq euros"},
					{id: "20", picto: "img/plus.png", mot: "plus"},
					{id: "21", picto: "img/plus.png", mot: "plus"},
					{id: "22", picto: "img/plus.png", mot: "plus"},
					{id: "23", picto: "img/plus.png", mot: "plus"},
					{id: "24", picto: "img/plus.png", mot: "plus"},
					{id: "25", picto: "img/plus.png", mot: "plus"},
					{id: "26", picto: "img/plus.png", mot: "plus"},
					{id: "27", picto: "img/plus.png", mot: "plus"},
					{id: "28", picto: "img/plus.png", mot: "plus"},
					{id: "29", picto: "img/plus.png", mot: "plus"},
					{id: "30", picto: "img/plus.png", mot: "plus"},
					{id: "31", picto: "img/plus.png", mot: "plus"},
					{id: "32", picto: "img/plus.png", mot: "plus"},
					{id: "33", picto: "img/plus.png", mot: "plus"},
					{id: "34", picto: "img/plus.png", mot: "plus"},
					{id: "35", picto: "img/plus.png", mot: "plus"},
					{id: "36", picto: "img/plus.png", mot: "plus"},
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
		imgPicto +='<img id="' + results.rows.item(i).id + '" class="picto" src="' + results.rows.item(i).picto + '"><p>' + results.rows.item(i).mot + '</p>';
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
