
document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL)');
 	var q = 'INSERT INTO PICTOS(picto,mot) VALUES (?, ?)';
 	var dataArray = [{picto: "img/Adjectifs/autre.png", mot: "autre"},
					{picto: "img/Adjectifs/beau.png", mot: "beau"},
					{picto: "img/Adjectifs/blanc.png", mot: "blanc"},
					{picto: "img/Adjectifs/bleu.png", mot: "bleu"},
					{picto: "img/Adjectifs/bon.png", mot: "bon"},
					{picto: "img/Adjectifs/cher.png", mot: "cher"},
					{picto: "img/Adjectifs/dernier.png", mot: "dernier"},
					{picto: "img/Adjectifs/doux.png", mot: "doux"},
					{picto: "img/Adjectifs/fort.png", mot: "fort"},
					{picto: "img/Adjectifs/froid.png", mot: "froid"},
					{picto: "img/Adjectifs/grand.png", mot: "grand"},
					{picto: "img/Adjectifs/gros.png", mot: "gros"},
					{picto: "img/Adjectifs/heureux.png", mot: "heureux"},
					{picto: "img/Adjectifs/humain.png", mot: "humain"},
					{picto: "img/Adjectifs/jeune.png", mot: "jeune"},
					{picto: "img/Adjectifs/long.png", mot: "long"},
					{picto: "img/Adjectifs/mauvais.png", mot: "mauvais"},
					{picto: "img/Adjectifs/même.png", mot: "même"},
					{picto: "img/Adjectifs/noir.png", mot: "noir"},
					{picto: "img/Adjectifs/nouveau.png", mot: "nouveau"},
					{picto: "img/Adjectifs/pauvre.png", mot: "pauvre"},
					{picto: "img/Adjectifs/petit.png", mot: "petit"},
					{picto: "img/Adjectifs/plein.png", mot: "plein"},
					{picto: "img/Adjectifs/premier.png", mot: "premier"},
					{picto: "img/Adjectifs/propre.png", mot: "propre"},
					{picto: "img/Adjectifs/rouge.png", mot: "rouge"},
					{picto: "img/Adjectifs/seul.png", mot: "seul"},
					{picto: "img/Adjectifs/sombre.png", mot: "sombre"},
					{picto: "img/Adjectifs/tout.png", mot: "tout"},
					{picto: "img/Adjectifs/vieux.png", mot: "vieux"},
					{picto: "img/Adverbes/au milieu.png", mot: "au milieu"},
					{picto: "img/Adverbes/autour.png", mot: "autour"},
					{picto: "img/Adverbes/beaucoup.png", mot: "beaucoup"},
					{picto: "img/Adverbes/centre.png", mot: "centre"},
					{picto: "img/Adverbes/comment.png", mot: "comment"},
					{picto: "img/Adverbes/dedans.png", mot: "dedans"},
					{picto: "img/Adverbes/dehors.png", mot: "dehors"},
					{picto: "img/Adverbes/derrière.png", mot: "derrière"},
					{picto: "img/Adverbes/dessous.png", mot: "dessous"},
					{picto: "img/Adverbes/dessus.png", mot: "dessus"},
					{picto: "img/Adverbes/devant.png", mot: "devant"},
					{picto: "img/Adverbes/en haut.png", mot: "en haut"},
					{picto: "img/Adverbes/ensuite.png", mot: "ensuite"},
					{picto: "img/Adverbes/ici.png", mot: "ici"},
					{picto: "img/Adverbes/jamais.png", mot: "jamais"},
					{picto: "img/Adverbes/loin.png", mot: "loin"},
					{picto: "img/Adverbes/là bas.png", mot: "là bas"},
					{picto: "img/Adverbes/maintenant.png", mot: "maintenant"},
					{picto: "img/Adverbes/où.png", mot: "où"},
					{picto: "img/Adverbes/parfois.png", mot: "parfois"},
					{picto: "img/Adverbes/peu.png", mot: "peu"},
					{picto: "img/Adverbes/plus.png", mot: "plus"},
					{picto: "img/Adverbes/près.png", mot: "près"},
					{picto: "img/Adverbes/toujours.png", mot: "toujours"},
					{picto: "img/Adverbes/à côté de.png", mot: "à côté de"},
					{picto: "img/Chiffres & Nombres/cinq.png", mot: "cinq"},
					{picto: "img/Chiffres & Nombres/deux.png", mot: "deux"},
					{picto: "img/Chiffres & Nombres/huit.png", mot: "huit"},
					{picto: "img/Chiffres & Nombres/neuf.png", mot: "neuf"},
					{picto: "img/Chiffres & Nombres/quatre.png", mot: "quatre"},
					{picto: "img/Chiffres & Nombres/sept.png", mot: "sept"},
					{picto: "img/Chiffres & Nombres/six.png", mot: "six"},
					{picto: "img/Chiffres & Nombres/trois.png", mot: "trois"},
					{picto: "img/Chiffres & Nombres/un.png", mot: "un"},
					{picto: "img/Chiffres & Nombres/zéro.png", mot: "zéro"},
					{picto: "img/Nourriture/assiette.png", mot: "assiette"},
					{picto: "img/Nourriture/boisson.png", mot: "boisson"},
					{picto: "img/Nourriture/casserole.png", mot: "casserole"},
					{picto: "img/Nourriture/charcuterie.png", mot: "charcuterie"},
					{picto: "img/Nourriture/couteau.png", mot: "couteau"},
					{picto: "img/Nourriture/cuillère.png", mot: "cuillère"},
					{picto: "img/Nourriture/dessert.png", mot: "dessert"},
					{picto: "img/Nourriture/four.png", mot: "four"},
					{picto: "img/Nourriture/fourchette.png", mot: "fourchette"},
					{picto: "img/Nourriture/fromage.png", mot: "fromage"},
					{picto: "img/Nourriture/fruit.png", mot: "fruit"},
					{picto: "img/Nourriture/fruits secs.png", mot: "fruits secs"},
					{picto: "img/Nourriture/goûter.png", mot: "goûter"},
					{picto: "img/Nourriture/légumes.png", mot: "légumes"},
					{picto: "img/Nourriture/pain.png", mot: "pain"},
					{picto: "img/Nourriture/petit déjeuner.png", mot: "petit déjeuner"},
					{picto: "img/Nourriture/poisson.png", mot: "poisson"},
					{picto: "img/Nourriture/poêle.png", mot: "poêle"},
					{picto: "img/Nourriture/réfrigérateur.png", mot: "réfrigérateur"},
					{picto: "img/Nourriture/viande.png", mot: "viande"},
					{picto: "img/Personnes/ceci.png", mot: "ceci"},
					{picto: "img/Personnes/cela.png", mot: "cela"},
					{picto: "img/Personnes/eux.png", mot: "eux"},
					{picto: "img/Personnes/je.png", mot: "je"},
					{picto: "img/Personnes/moi.png", mot: "moi"},
					{picto: "img/Personnes/nous.png", mot: "nous"},
					{picto: "img/Personnes/qui.png", mot: "qui"},
					{picto: "img/Personnes/quoi.png", mot: "quoi"},
					{picto: "img/Personnes/tu.png", mot: "tu"},
					{picto: "img/Personnes/vous.png", mot: "vous"},
					{picto: "img/Quotidien/ampoules.png", mot: "ampoules"},
					{picto: "img/Quotidien/argent.png", mot: "argent"},
					{picto: "img/Quotidien/aspirateurs.png", mot: "aspirateurs"},
					{picto: "img/Quotidien/balai.png", mot: "balai"},
					{picto: "img/Quotidien/bouteilles.png", mot: "bouteilles"},
					{picto: "img/Quotidien/brosse à dents et dentifrice.png", mot: "brosse à dents et dentifrice"},
					{picto: "img/Quotidien/cahier.png", mot: "cahier"},
					{picto: "img/Quotidien/camions.png", mot: "camions"},
					{picto: "img/Quotidien/carte de crédit.png", mot: "carte de crédit"},
					{picto: "img/Quotidien/carte.png", mot: "carte"},
					{picto: "img/Quotidien/ceintures de sécurité.png", mot: "ceintures de sécurité"},
					{picto: "img/Quotidien/chargeur.png", mot: "chargeur"},
					{picto: "img/Quotidien/clé usb.png", mot: "clé usb"},
					{picto: "img/Quotidien/colle.png", mot: "colle"},
					{picto: "img/Quotidien/corbeille.png", mot: "corbeille"},
					{picto: "img/Quotidien/corde.png", mot: "corde"},
					{picto: "img/Quotidien/crayon.png", mot: "crayon"},
					{picto: "img/Quotidien/enveloppe.png", mot: "enveloppe"},
					{picto: "img/Quotidien/euro.png", mot: "euro"},
					{picto: "img/Quotidien/facture.png", mot: "facture"},
					{picto: "img/Quotidien/fauteuil.png", mot: "fauteuil"},
					{picto: "img/Quotidien/feuille.png", mot: "feuille"},
					{picto: "img/Quotidien/gant de toilette.png", mot: "gant de toilette"},
					{picto: "img/Quotidien/gomme.png", mot: "gomme"},
					{picto: "img/Quotidien/haut parleurs.png", mot: "haut parleurs"},
					{picto: "img/Quotidien/imprimante.png", mot: "imprimante"},
					{picto: "img/Quotidien/livre.png", mot: "livre"},
					{picto: "img/Quotidien/noeud.png", mot: "noeud"},
					{picto: "img/Quotidien/objet.png", mot: "objet"},
					{picto: "img/Quotidien/ordinateur.png", mot: "ordinateur"},
					{picto: "img/Quotidien/papier hygiénique.png", mot: "papier hygiénique"},
					{picto: "img/Quotidien/parfums.png", mot: "parfums"},
					{picto: "img/Quotidien/photo.png", mot: "photo"},
					{picto: "img/Quotidien/plan.png", mot: "plan"},
					{picto: "img/Quotidien/roue.png", mot: "roue"},
					{picto: "img/Quotidien/ruban adhésif.png", mot: "ruban adhésif"},
					{picto: "img/Quotidien/règle.png", mot: "règle"},
					{picto: "img/Quotidien/savon.png", mot: "savon"},
					{picto: "img/Quotidien/sceau.png", mot: "sceau"},
					{picto: "img/Quotidien/souris.png", mot: "souris"},
					{picto: "img/Quotidien/stylo à plume.png", mot: "stylo à plume"},
					{picto: "img/Quotidien/sèche-cheveux.png", mot: "sèche-cheveux"},
					{picto: "img/Quotidien/tabac.png", mot: "tabac"},
					{picto: "img/Quotidien/tableau.png", mot: "tableau"},
					{picto: "img/Quotidien/taille-crayon.png", mot: "taille-crayon"},
					{picto: "img/Quotidien/tiroir.png", mot: "tiroir"},
					{picto: "img/Quotidien/trousse.png", mot: "trousse"},
					{picto: "img/Quotidien/volant.png", mot: "volant"},
					{picto: "img/Ressenti/douleur.png", mot: "douleur"},
					{picto: "img/Ressenti/peur.png", mot: "peur"},
					{picto: "img/Ressenti/rire.png", mot: "rire"},
					{picto: "img/Ressenti/soif.png", mot: "soif"},
					{picto: "img/Ressenti/timide.png", mot: "timide"},
					{picto: "img/Ressenti/évanouissement.png", mot: "évanouissement"},
					{picto: "img/Santé/allergie.png", mot: "allergie"},
					{picto: "img/Santé/asthme.png", mot: "asthme"},
					{picto: "img/Santé/barbe.png", mot: "barbe"},
					{picto: "img/Santé/bosse.png", mot: "bosse"},
					{picto: "img/Santé/bouche.png", mot: "bouche"},
					{picto: "img/Santé/bras.png", mot: "bras"},
					{picto: "img/Santé/brûlures.png", mot: "brûlures"},
					{picto: "img/Santé/caries.png", mot: "caries"},
					{picto: "img/Santé/cheveu.png", mot: "cheveu"},
					{picto: "img/Santé/cicatrice.png", mot: "cicatrice"},
					{picto: "img/Santé/doigt.png", mot: "doigt"},
					{picto: "img/Santé/dos.png", mot: "dos"},
					{picto: "img/Santé/fesses.png", mot: "fesses"},
					{picto: "img/Santé/fièvre.png", mot: "fièvre"},
					{picto: "img/Santé/jambe.png", mot: "jambe"},
					{picto: "img/Santé/main.png", mot: "main"},
					{picto: "img/Santé/nez.png", mot: "nez"},
					{picto: "img/Santé/oreille.png", mot: "oreille"},
					{picto: "img/Santé/pieds.png", mot: "pieds"},
					{picto: "img/Santé/poitrine.png", mot: "poitrine"},
					{picto: "img/Santé/rhume.png", mot: "rhume"},
					{picto: "img/Santé/tête.png", mot: "tête"},
					{picto: "img/Santé/varicelle.png", mot: "varicelle"},
					{picto: "img/Santé/virus.png", mot: "virus"},
					{picto: "img/Santé/yeux.png", mot: "yeux"},
					{picto: "img/Santé/épaule.png", mot: "épaule"},
					{picto: "img/Sport & Loisirs/anniversaire.png", mot: "anniversaire"},
					{picto: "img/Sport & Loisirs/balançoire.png", mot: "balançoire"},
					{picto: "img/Sport & Loisirs/ballon de basket.png", mot: "ballon de basket"},
					{picto: "img/Sport & Loisirs/ballon de football.png", mot: "ballon de football"},
					{picto: "img/Sport & Loisirs/bouée.png", mot: "bouée"},
					{picto: "img/Sport & Loisirs/buts de rugby.png", mot: "buts de rugby"},
					{picto: "img/Sport & Loisirs/buts.png", mot: "buts"},
					{picto: "img/Sport & Loisirs/cadeau.png", mot: "cadeau"},
					{picto: "img/Sport & Loisirs/camping.png", mot: "camping"},
					{picto: "img/Sport & Loisirs/gourde.png", mot: "gourde"},
					{picto: "img/Sport & Loisirs/guitare.png", mot: "guitare"},
					{picto: "img/Sport & Loisirs/jouet.png", mot: "jouet"},
					{picto: "img/Sport & Loisirs/manège.png", mot: "manège"},
					{picto: "img/Sport & Loisirs/match.png", mot: "match"},
					{picto: "img/Sport & Loisirs/musique.png", mot: "musique"},
					{picto: "img/Sport & Loisirs/Noël.png", mot: "Noël"},
					{picto: "img/Sport & Loisirs/panier.png", mot: "panier"},
					{picto: "img/Sport & Loisirs/parasol.png", mot: "parasol"},
					{picto: "img/Sport & Loisirs/phare.png", mot: "phare"},
					{picto: "img/Sport & Loisirs/piano.png", mot: "piano"},
					{picto: "img/Sport & Loisirs/plongeoir.png", mot: "plongeoir"},
					{picto: "img/Sport & Loisirs/Père-Noël.png", mot: "Père-Noël"},
					{picto: "img/Sport & Loisirs/raquette.png", mot: "raquette"},
					{picto: "img/Sport & Loisirs/rugby.png", mot: "rugby"},
					{picto: "img/Sport & Loisirs/sable.png", mot: "sable"},
					{picto: "img/Sport & Loisirs/sac de couchage.png", mot: "sac de couchage"},
					{picto: "img/Sport & Loisirs/table de ping-pong.png", mot: "table de ping-pong"},
					{picto: "img/Sport & Loisirs/trampoline.png", mot: "trampoline"},
					{picto: "img/Sport & Loisirs/vague.png", mot: "vague"},
					{picto: "img/Verbes/aimer.png", mot: "aimer"},
					{picto: "img/Verbes/aller.png", mot: "aller"},
					{picto: "img/Verbes/arriver.png", mot: "arriver"},
					{picto: "img/Verbes/attendre.png", mot: "attendre"},
					{picto: "img/Verbes/avoir.png", mot: "avoir"},
					{picto: "img/Verbes/comprendre.png", mot: "comprendre"},
					{picto: "img/Verbes/connaître.png", mot: "connaître"},
					{picto: "img/Verbes/demander.png", mot: "demander"},
					{picto: "img/Verbes/dire.png", mot: "dire"},
					{picto: "img/Verbes/donner.png", mot: "donner"},
					{picto: "img/Verbes/entendre.png", mot: "entendre"},
					{picto: "img/Verbes/entrer.png", mot: "entrer"},
					{picto: "img/Verbes/faire.png", mot: "faire"},
					{picto: "img/Verbes/manger.png", mot: "manger"},
					{picto: "img/Verbes/mettre.png", mot: "mettre"},
					{picto: "img/Verbes/oublier.png", mot: "oublier"},
					{picto: "img/Verbes/parler.png", mot: "parler"},
					{picto: "img/Verbes/passer.png", mot: "passer"},
					{picto: "img/Verbes/penser.png", mot: "penser"},
					{picto: "img/Verbes/porter.png", mot: "porter"},
					{picto: "img/Verbes/pouvoir.png", mot: "pouvoir"},
					{picto: "img/Verbes/prendre.png", mot: "prendre"},
					{picto: "img/Verbes/regarder.png", mot: "regarder"},
					{picto: "img/Verbes/rendre.png", mot: "rendre"},
					{picto: "img/Verbes/rester.png", mot: "rester"},
					{picto: "img/Verbes/répondre.png", mot: "répondre"},
					{picto: "img/Verbes/savoir.png", mot: "savoir"},
					{picto: "img/Verbes/sentir.png", mot: "sentir"},
					{picto: "img/Verbes/sortir.png", mot: "sortir"},
					{picto: "img/Verbes/tenir.png", mot: "tenir"},
					{picto: "img/Verbes/trouver.png", mot: "trouver"},
					{picto: "img/Verbes/vivre.png", mot: "vivre"},
					{picto: "img/Verbes/voir.png", mot: "voir"},
					{picto: "img/Verbes/vouloir.png", mot: "vouloir"},
					{picto: "img/Verbes/être.png", mot: "être"},
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