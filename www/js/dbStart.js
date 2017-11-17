
document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL)');
 	var q = 'INSERT INTO PICTOS(picto,mot) VALUES (?, ?)';
 	var dataArray = [{picto: "img/Adjectif/autre.png", mot: "autre"},
					{picto: "img/Adjectif/beau.png", mot: "beau"},
					{picto: "img/Adjectif/blanc.png", mot: "blanc"},
					{picto: "img/Adjectif/bleu.png", mot: "bleu"},
					{picto: "img/Adjectif/bon.png", mot: "bon"},
					{picto: "img/Adjectif/cher.png", mot: "cher"},
					{picto: "img/Adjectif/dernier.png", mot: "dernier"},
					{picto: "img/Adjectif/doux.png", mot: "doux"},
					{picto: "img/Adjectif/fort.png", mot: "fort"},
					{picto: "img/Adjectif/froid.png", mot: "froid"},
					{picto: "img/Adjectif/grand.png", mot: "grand"},
					{picto: "img/Adjectif/gros.png", mot: "gros"},
					{picto: "img/Adjectif/heureux.png", mot: "heureux"},
					{picto: "img/Adjectif/humain.png", mot: "humain"},
					{picto: "img/Adjectif/jeune.png", mot: "jeune"},
					{picto: "img/Adjectif/long.png", mot: "long"},
					{picto: "img/Adjectif/mauvais.png", mot: "mauvais"},
					{picto: "img/Adjectif/même.png", mot: "même"},
					{picto: "img/Adjectif/noir.png", mot: "noir"},
					{picto: "img/Adjectif/nouveau.png", mot: "nouveau"},
					{picto: "img/Adjectif/pauvre.png", mot: "pauvre"},
					{picto: "img/Adjectif/petit.png", mot: "petit"},
					{picto: "img/Adjectif/plein.png", mot: "plein"},
					{picto: "img/Adjectif/premier.png", mot: "premier"},
					{picto: "img/Adjectif/propre.png", mot: "propre"},
					{picto: "img/Adjectif/rouge.png", mot: "rouge"},
					{picto: "img/Adjectif/seul.png", mot: "seul"},
					{picto: "img/Adjectif/sombre.png", mot: "sombre"},
					{picto: "img/Adjectif/tout.png", mot: "tout"},
					{picto: "img/Adjectif/vieux.png", mot: "vieux"},
					{picto: "img/chiffresnombres/cinq.png", mot: "cinq"},
					{picto: "img/chiffresnombres/deux.png", mot: "deux"},
					{picto: "img/chiffresnombres/huit.png", mot: "huit"},
					{picto: "img/chiffresnombres/neuf.png", mot: "neuf"},
					{picto: "img/chiffresnombres/quatre.png", mot: "quatre"},
					{picto: "img/chiffresnombres/sept.png", mot: "sept"},
					{picto: "img/chiffresnombres/six.png", mot: "six"},
					{picto: "img/chiffresnombres/trois.png", mot: "trois"},
					{picto: "img/chiffresnombres/un.png", mot: "un"},
					{picto: "img/chiffresnombres/zéro.png", mot: "zéro"},
					{picto: "img/Personne/ceci.png", mot: "ceci"},
					{picto: "img/Personne/cela.png", mot: "cela"},
					{picto: "img/Personne/eux.png", mot: "eux"},
					{picto: "img/Personne/je.png", mot: "je"},
					{picto: "img/Personne/moi.png", mot: "moi"},
					{picto: "img/Personne/nous.png", mot: "nous"},
					{picto: "img/Personne/qui.png", mot: "qui"},
					{picto: "img/Personne/quoi.png", mot: "quoi"},
					{picto: "img/Personne/tu.png", mot: "tu"},
					{picto: "img/Personne/vous.png", mot: "vous"},
					{picto: "img/ressenti/peur.png", mot: "peur"},
					{picto: "img/ressenti/rire.png", mot: "rire"},
					{picto: "img/ressenti/soif.png", mot: "soif"},
					{picto: "img/ressenti/timide.png", mot: "timide"},
					{picto: "img/Verbe/aimer.png", mot: "aimer"},
					{picto: "img/Verbe/aller.png", mot: "aller"},
					{picto: "img/Verbe/arriver.png", mot: "arriver"},
					{picto: "img/Verbe/attendre.png", mot: "attendre"},
					{picto: "img/Verbe/avoir.png", mot: "avoir"},
					{picto: "img/Verbe/comprendre.png", mot: "comprendre"},
					{picto: "img/Verbe/connaître.png", mot: "connaître"},
					{picto: "img/Verbe/demander.png", mot: "demander"},
					{picto: "img/Verbe/dire.png", mot: "dire"},
					{picto: "img/Verbe/donner.png", mot: "donner"},
					{picto: "img/Verbe/entendre.png", mot: "entendre"},
					{picto: "img/Verbe/entrer.png", mot: "entrer"},
					{picto: "img/Verbe/faire.png", mot: "faire"},
					{picto: "img/Verbe/mettre.png", mot: "mettre"},
					{picto: "img/Verbe/oublier.png", mot: "oublier"},
					{picto: "img/Verbe/parler.png", mot: "parler"},
					{picto: "img/Verbe/passer.png", mot: "passer"},
					{picto: "img/Verbe/penser.png", mot: "penser"},
					{picto: "img/Verbe/porter.png", mot: "porter"},
					{picto: "img/Verbe/pouvoir.png", mot: "pouvoir"},
					{picto: "img/Verbe/prendre.png", mot: "prendre"},
					{picto: "img/Verbe/regarder.png", mot: "regarder"},
					{picto: "img/Verbe/rendre.png", mot: "rendre"},
					{picto: "img/Verbe/rester.png", mot: "rester"},
					{picto: "img/Verbe/répondre.png", mot: "répondre"},
					{picto: "img/Verbe/savoir.png", mot: "savoir"},
					{picto: "img/Verbe/sentir.png", mot: "sentir"},
					{picto: "img/Verbe/sortir.png", mot: "sortir"},
					{picto: "img/Verbe/tenir.png", mot: "tenir"},
					{picto: "img/Verbe/trouver.png", mot: "trouver"},
					{picto: "img/Verbe/vivre.png", mot: "vivre"},
					{picto: "img/Verbe/voir.png", mot: "voir"},
					{picto: "img/Verbe/vouloir.png", mot: "vouloir"},
					{picto: "img/Verbe/être.png", mot: "être"},
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
	db.transaction(populateDB, errorCB);
}