

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (nom TEXT NOT NULL, picto TEXT NOT NULL)');
	var q = 'INSERT INTO PICTOS(nom,picto) VALUES (?, ?)';
	var dataArray = [{id: "1", picto: "img/1.png"}, 
					{id: "2", picto: "img/2.png"},
					{id: "3", picto: "img/3.png"},
					{id: "4", picto: "img/4.png"},
					{id: "5", picto: "img/0.png"},
					{id: "6", picto: "img/1_1.png"},
					{id: "7", picto: "img/1-2-3.png"},
					{id: "8", picto: "img/1-4.png"},
					{id: "9", picto: "img/2 centimes.png"},
					{id: "10", picto: "img/2 dé.png"},
					{id: "11", picto: "img/2 euros.png"},
					{id: "12", picto: "img/2_1.png"},
					{id: "13", picto: "img/3 dé.png"},
					{id: "14", picto: "img/3_1.png"},
					{id: "15", picto: "img/3-4.png"},
					{id: "16", picto: "img/4 dé.png"},
					{id: "17", picto: "img/4_1.png"},
					{id: "18", picto: "img/5 dé.png"},
					{id: "19", picto: "img/5 euros.png"},
					{id: "20", picto: "img/5.png"},
					{id: "21", picto: "img/6.png"},
					{id: "22", picto: "img/7.png"},
					{id: "23", picto: "img/8.png"},
					{id: "24", picto: "img/9.png"},
					];
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].id, dataArray[i].picto])
	}											
}

// Query the database
//
function queryDB(tx) {
	//alert("going queryDB");
	tx.executeSql('SELECT * FROM PICTOS', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
	//alert("going querySuccess");
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
	//alert("going successCB");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(queryDB, errorCB);
}

 // Cordova is ready
//
function onDeviceReady() {
	//alert("going OnDeviceReady");
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);
}
