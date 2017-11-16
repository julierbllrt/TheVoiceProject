

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL)');
 	var q = 'INSERT INTO PICTOS(picto,mot) VALUES (?, ?)';
 	var dataArray = [{picto: "img/je.png", mot: "je"}, 
 					{picto: "img/avoir_faim.png", mot: "avoir faim"},
 					{picto: "img/vouloir.png", mot: "vouloir"},
 					{picto: "img/frites.png", mot: "frites"},
 					{picto: "img/du.png", mot: "du"},
 					{picto: "img/poulet.png", mot: "poulet"},
 					{picto: "img/avec.png", mot: "avec"},
 					{picto: "img/une.png", mot: "une"},
 					{picto: "img/salade.png", mot: "salade"},
 					{picto: "img/eau.png", mot: "eau"},
 					{picto: "img/et.jpg", mot: "et"},
 					{picto: "img/chiffresnombres/0.png", mot: "zeros"},
 					{picto: "img/chiffresnombres/1.png", mot: "un"},
 					{picto: "img/chiffresnombres/2.png", mot: "deux"},
 					{picto: "img/chiffresnombres/3.png", mot: "trois"},
 					{picto: "img/chiffresnombres/4.png", mot: "quatre"},
 					{picto: "img/chiffresnombres/5.png", mot: "cinq"},
 					{picto: "img/chiffresnombres/2 euros.png", mot: "deux euros"},
 					{picto: "img/chiffresnombres/5 euros.png", mot: "cinq euros"},
 					{picto: "img/affiche/affiches.png", mot: "affiches"},
 					{picto: "img/affiche/affiche_1.png", mot: "affiche_1"},
 					{picto: "img/affiche/affiche_2.png", mot: "affiche_2"},
 					{picto: "img/affiche/affiche_3.png", mot: "affiche_3"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 				{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
 					{picto: "img/plus.png", mot: "plus"},
					];
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].picto, dataArray[i].mot])
	}											
}

// Query the database
//
function queryDbStart(tx) {
	//alert("going queryDbStart");
	tx.executeSql('SELECT * FROM PICTOS WHERE mot = ?', ["plus"], querySuccessStart, errorCB);
}

// Query the success callback
//
function querySuccessStart(tx, results) {
	//alert("going querySuccessStart");
	var imgPicto="";
	var len = results.rows.length;
	for (var i = 0; i < len; i++) {
		imgPicto +='<img id="' + results.rows.item(i).id + '" class="picto" src="' + results.rows.item(i).picto + '"><p class="mot">' + results.rows.item(i).mot + '</p>';
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

function errorCB(err) {
 	alert("Error processing SQL: "+err.code);
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

function onClickCategory(category){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){queryDbClickCategory(tx, category)}, errorCB);
 }
 
 function queryDbClickCategory(tx, category){
 	var q = 'SELECT * FROM PICTOS WHERE picto LIKE ?';
 	alert(category);
 	tx.executeSql(q, ['img/'+category+'/%'], querySuccessClickCategory, errorCB);
 }
 
 function querySuccessClickCategory(tx, results){
	var imgPicto="";
 	var len = results.rows.length;
 	for (var i = 0; i < len; i++) {
 		imgPicto +='<img id="' + results.rows.item(i).id + '" class="picto" src="' + results.rows.item(i).picto + '"><p>' + results.rows.item(i).mot + '</p>';
 		document.getElementById("picto"+i).innerHTML = imgPicto;
 		imgPicto="";
 	} 
 }
 
 
 
 
 // Insert DB
 //
 
 function goInsert(picto, mot){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){InsertDb(tx, picto, mot)}, errorCB);
 }
 
 function insertDb(tx, picto, mot){
 	tx.executeSql('INSERT INTO (picto,mot) VALUES(?,?)', ["img/picto, mot])
 }
 