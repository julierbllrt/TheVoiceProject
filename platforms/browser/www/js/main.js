

document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (nom TEXT NOT NULL, picto TEXT NOT NULL)');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("1erpicto", "img/1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("2emepicto", "img/2.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("3emepicto", "img/3.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/4.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/0.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/1_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/1-2-3.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/1-4.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/2 centimes.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/2 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/2 euros.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/2_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3-4.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/4 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/4_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 euros.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/6.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/7.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/8.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/9.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/2_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/3-4.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/4 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/4_1.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 centimes.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 dé.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 euros.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/6.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/7.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/8.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/9.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/5 centimes.png")');
	tx.executeSql('INSERT INTO PICTOS(nom,picto) VALUES ("4emepicto", "img/6.png")');
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
