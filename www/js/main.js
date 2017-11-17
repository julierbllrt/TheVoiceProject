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
 	tx.executeSql(q, ['img/'+category+'/%'], querySuccessClickCategory, errorCB);
 }
 
 function querySuccessClickCategory(tx, results){
	//alert("going querySuccess");
	var imgPicto="";
 	var len = results.rows.length;
 	for (var i = 0; i < len; i++) {
 		imgPicto +='<img id="' + results.rows.item(i).id + '" class="picto" src="' + results.rows.item(i).picto + '"><p class="mot">' + results.rows.item(i).mot + '</p>';
 		document.getElementById("picto"+i).innerHTML = imgPicto;
 		imgPicto="";
 	} 
 }
 
 
 /*
 
 // Insert DB
 //
 
 function goInsert(picto, mot){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){InsertDb(tx, picto, mot)}, errorCB);
 }
 
 function insertDb(tx, picto, mot){
 	tx.executeSql('INSERT INTO (picto,mot) VALUES(?,?)', ["img/picto, mot])
 }
 */