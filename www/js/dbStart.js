
document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL,personne INT, genre INT)');
 	var q = 'INSERT INTO PICTOS(picto,mot,personne,genre) VALUES (?, ?, ?, ?)';
 	
 	var dataArray = [{picto: 'img/Adjectifs/autre.png', mot: 'autre', personne: null, genre: 0},
						{picto: 'img/Adjectifs/beau.png', mot: 'beau', personne: null, genre: 0},
						{picto: 'img/Adjectifs/blanc.png', mot: 'blanc', personne: null, genre: 0},
						{picto: 'img/Adjectifs/bleu.png', mot: 'bleu', personne: null, genre: 0},
						{picto: 'img/Adjectifs/bon.png', mot: 'bon', personne: null, genre: 0},
						{picto: 'img/Adjectifs/cher.png', mot: 'cher', personne: null, genre: 0},
						{picto: 'img/Adjectifs/dernier.png', mot: 'dernier', personne: null, genre: 0},
						{picto: 'img/Adjectifs/doux.png', mot: 'doux', personne: null, genre: 0},
						{picto: 'img/Adjectifs/fort.png', mot: 'fort', personne: null, genre: 0},
						{picto: 'img/Adjectifs/froid.png', mot: 'froid', personne: null, genre: 0},
						{picto: 'img/Adjectifs/grand.png', mot: 'grand', personne: null, genre: 0},
						{picto: 'img/Adjectifs/gros.png', mot: 'gros', personne: null, genre: 0},
						{picto: 'img/Adjectifs/heureux.png', mot: 'heureux', personne: null, genre: 0},
						{picto: 'img/Adjectifs/humain.png', mot: 'humain', personne: null, genre: 0},
						{picto: 'img/Adjectifs/jeune.png', mot: 'jeune', personne: null, genre: 0},
						{picto: 'img/Adjectifs/long.png', mot: 'long', personne: null, genre: 0},
						{picto: 'img/Adjectifs/mauvais.png', mot: 'mauvais', personne: null, genre: 0},
						{picto: 'img/Adjectifs/même.png', mot: 'même', personne: null, genre: 0},
						{picto: 'img/Adjectifs/noir.png', mot: 'noir', personne: null, genre: 0},
						{picto: 'img/Adjectifs/nouveau.png', mot: 'nouveau', personne: null, genre: 0},
						{picto: 'img/Adjectifs/pauvre.png', mot: 'pauvre', personne: null, genre: 0},
						{picto: 'img/Adjectifs/petit.png', mot: 'petit', personne: null, genre: 0},
						{picto: 'img/Adjectifs/plein.png', mot: 'plein', personne: null, genre: 0},
						{picto: 'img/Adjectifs/premier.png', mot: 'premier', personne: null, genre: 0},
						{picto: 'img/Adjectifs/propre.png', mot: 'propre', personne: null, genre: 0},
						{picto: 'img/Adjectifs/rouge.png', mot: 'rouge', personne: null, genre: 0},
						{picto: 'img/Adjectifs/seul.png', mot: 'seul', personne: null, genre: 0},
						{picto: 'img/Adjectifs/sombre.png', mot: 'sombre', personne: null, genre: 0},
						{picto: 'img/Adjectifs/tout.png', mot: 'tout', personne: null, genre: 0},
						{picto: 'img/Adjectifs/vieux.png', mot: 'vieux', personne: null, genre: 0},

						{picto: 'img/Adverbes/au milieu.png', mot: 'au milieu', personne: null, genre: null},
						{picto: 'img/Adverbes/autour.png', mot: 'autour', personne: null, genre: null},
						{picto: 'img/Adverbes/beaucoup.png', mot: 'beaucoup', personne: null, genre: null},
						{picto: 'img/Adverbes/centre.png', mot: 'centre', personne: null, genre: null},
						{picto: 'img/Adverbes/comment.png', mot: 'comment', personne: null, genre: null},
						{picto: 'img/Adverbes/dedans.png', mot: 'dedans', personne: null, genre: null},
						{picto: 'img/Adverbes/dehors.png', mot: 'dehors', personne: null, genre: null},
						{picto: 'img/Adverbes/derrière.png', mot: 'derrière', personne: null, genre: null},
						{picto: 'img/Adverbes/dessous.png', mot: 'dessous', personne: null, genre: null},
						{picto: 'img/Adverbes/dessus.png', mot: 'dessus', personne: null, genre: null},
						{picto: 'img/Adverbes/devant.png', mot: 'devant', personne: null, genre: null},
						{picto: 'img/Adverbes/en haut.png', mot: 'en haut', personne: null, genre: null},
						{picto: 'img/Adverbes/ensuite.png', mot: 'ensuite', personne: null, genre: null},
						{picto: 'img/Adverbes/ici.png', mot: 'ici', personne: null, genre: null},
						{picto: 'img/Adverbes/jamais.png', mot: 'jamais', personne: null, genre: null},
						{picto: 'img/Adverbes/loin.png', mot: 'loin', personne: null, genre: null},
						{picto: 'img/Adverbes/là bas.png', mot: 'là bas', personne: null, genre: null},
						{picto: 'img/Adverbes/maintenant.png', mot: 'maintenant', personne: null, genre: null},
						{picto: 'img/Adverbes/où.png', mot: 'où', personne: null, genre: null},
						{picto: 'img/Adverbes/parfois.png', mot: 'parfois', personne: null, genre: null},
						{picto: 'img/Adverbes/peu.png', mot: 'peu', personne: null, genre: null},
						{picto: 'img/Adverbes/plus.png', mot: 'plus', personne: null, genre: null},
						{picto: 'img/Adverbes/près.png', mot: 'près', personne: null, genre: null},
						{picto: 'img/Adverbes/toujours.png', mot: 'toujours', personne: null, genre: null},
						{picto: 'img/Adverbes/à côté de.png', mot: 'à côté de', personne: null, genre: null},

						{picto: 'img/Chiffres & Nombres/zéro.png', mot: 'zéro', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/un.png', mot: 'un', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/deux.png', mot: 'deux', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/trois.png', mot: 'trois', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/quatre.png', mot: 'quatre', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/cinq.png', mot: 'cinq', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/six.png', mot: 'six', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/sept.png', mot: 'sept', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/huit.png', mot: 'huit', personne: null, genre: null},
						{picto: 'img/Chiffres & Nombres/neuf.png', mot: 'neuf', personne: null, genre: null},

						{picto: 'img/Nourriture/boisson.png', mot: 'boisson', personne: 3, genre: 1},
						{picto: 'img/Nourriture/charcuterie.png', mot: 'charcuterie', personne: 3, genre: 1},
						{picto: 'img/Nourriture/dessert.png', mot: 'dessert', personne: 3, genre: 0},
						{picto: 'img/Nourriture/fromage.png', mot: 'fromage', personne: 3, genre: 0},
						{picto: 'img/Nourriture/fruit.png', mot: 'fruit', personne: 3, genre: 0},
						{picto: 'img/Nourriture/fruits secs.png', mot: 'fruits secs', personne: 6, genre: 0},
						{picto: 'img/Nourriture/goûter.png', mot: 'goûter', personne: 3, genre: 0},
						{picto: 'img/Nourriture/légumes.png', mot: 'légumes', personne: 6, genre: 0},
						{picto: 'img/Nourriture/pain.png', mot: 'pain', personne: 3, genre: 0},
						{picto: 'img/Nourriture/petit déjeuner.png', mot: 'petit déjeuner', personne: 3, genre: 0},
						{picto: 'img/Nourriture/poisson.png', mot: 'poisson', personne: 3, genre: 0},
						{picto: 'img/Nourriture/viande.png', mot: 'viande', personne: 3, genre: 1},
						
						{picto: 'img/Personnes/je.png', mot: 'je', personne: 1, genre: 0},
						{picto: 'img/Personnes/tu.png', mot: 'tu', personne: 2, genre: 0},
						{picto: 'img/Personnes/il_elle.png', mot: 'il', personne: 3, genre: 0},
						{picto: 'img/Personnes/nous.png', mot: 'nous', personne: 4, genre: 0},
						{picto: 'img/Personnes/vous.png', mot: 'vous', personne: 5, genre: 0},
						{picto: 'img/Personnes/ils.JPG', mot: 'ils', personne: 6, genre: 0},
						{picto: 'img/Personnes/elles.png', mot: 'elles', personne: 6, genre: 1},
						{picto: 'img/Personnes/me.png', mot: 'me', personne: null, genre: 0},
						{picto: 'img/Personnes/te.png', mot: 'te', personne: null, genre: 0},
						{picto: 'img/Personnes/se.png', mot: 'se', personne: null, genre: 0},
						{picto: 'img/Personnes/moi.png', mot: 'moi', personne: 1, genre: 0},
						{picto: 'img/Personnes/son.png', mot: 'son', personne: 3, genre: 0},
						{picto: 'img/Personnes/eux.png', mot: 'eux', personne: 6, genre: 0},
						{picto: 'img/Personnes/qui.png', mot: 'qui', personne: null, genre: 0},
						{picto: 'img/Personnes/quoi.png', mot: 'quoi', personne: null, genre: 0},
						{picto: 'img/Personnes/ceci.png', mot: 'ceci', personne: 3, genre: 0},
						{picto: 'img/Personnes/cela.png', mot: 'cela', personne: 3, genre: 0},
						{picto: 'img/Personnes/la.png', mot: 'la', personne: 3, genre: 0},
						{picto: 'img/Personnes/le.png', mot: 'le', personne: 3, genre: 0},
						{picto: 'img/Personnes/les.png', mot: 'les', personne: 3, genre: 0},
			
						{picto: 'img/Quotidien/balai.png', mot: 'balai', personne: 3, genre: 0},
						{picto: 'img/Quotidien/dentifrice.png', mot: 'dentifrice', personne: 6, genre: 0},
						{picto: 'img/Quotidien/taille-crayon.png', mot: 'taille-crayon', personne: 3, genre: 0},
						{picto: 'img/Quotidien/carte de crédit.png', mot: 'carte de crédit', personne: 6, genre: 1},
						{picto: 'img/Quotidien/colle.png', mot: 'colle', personne: 3, genre: 1},
						{picto: 'img/Quotidien/corbeille.png', mot: 'corbeille', personne: 3, genre: 1},
						{picto: 'img/Quotidien/ciseaux.png', mot: 'ciseaux', personne: 3, genre: 0},
						{picto: 'img/Quotidien/fourchette.png', mot: 'fourchette', personne: 3, genre: 0},
						{picto: 'img/Quotidien/brosse_à_dents.png', mot: 'brosse_à_dents', personne: 3, genre: 0},
						{picto: 'img/Quotidien/voiture.png', mot: 'voiture', personne: 3, genre: 0},
						{picto: 'img/Quotidien/vélo.png', mot: 'vélo', personne: 3, genre: 0},
						{picto: 'img/Quotidien/souris.png', mot: 'souris', personne: 3, genre: 0},
						{picto: 'img/Quotidien/ordinateur.png', mot: 'ordinateur', personne: 3, genre: 0},
						{picto: 'img/Quotidien/papier_hygiénique.png', mot: 'papier_hygiénique', personne: 3, genre: 0},
						{picto: 'img/Quotidien/ruban adhésif.png', mot: 'ruban adhésif', personne: 3, genre: 0},
						{picto: 'img/Quotidien/règle.png', mot: 'règle', personne: 3, genre: 1},
						{picto: 'img/Quotidien/stylo à plume.png', mot: 'stylo à plume', personne: 3, genre: 0},
						{picto: 'img/Quotidien/trousse.png', mot: 'trousse', personne: 3, genre: 1},
						{picto: 'img/Quotidien/scotch.png', mot: 'scotch', personne: 3, genre: 0},
						{picto: 'img/Quotidien/chaise.png', mot: 'chaise', personne: 3, genre: 0},
						{picto: 'img/Quotidien/avion.png', mot: 'avion', personne: 3, genre: 0},
						{picto: 'img/Quotidien/assiette.png', mot: 'assiette', personne: 3, genre: 1},
						{picto: 'img/Quotidien/casserole.png', mot: 'casserole', personne: 3, genre: 1},
						{picto: 'img/Quotidien/couteau.png', mot: 'couteau', personne: 3, genre: 0},
						{picto: 'img/Quotidien/cuillère.png', mot: 'cuillère', personne: 3, genre: 1},
						{picto: 'img/Quotidien/four.png', mot: 'four', personne: 3, genre: 0},
						{picto: 'img/Quotidien/fourchette.png', mot: 'fourchette', personne: 3, genre: 1},
						{picto: 'img/Quotidien/poêle.png', mot: 'poêle', personne: 3, genre: 1},
						{picto: 'img/Quotidien/réfrigérateur.png', mot: 'réfrigérateur', personne: 3, genre: 0},

						{picto: 'img/Emotion/douleur.png', mot: 'douleur', personne: 3, genre: 1},
						{picto: 'img/Emotion/peur.png', mot: 'peur', personne: 3, genre: 1},
						{picto: 'img/Emotion/rire.png', mot: 'rire', personne: 3, genre: 0},
						{picto: 'img/Emotion/soif.png', mot: 'soif', personne: 3, genre: 1},
						{picto: 'img/Emotion/timide.png', mot: 'timide', personne: 3, genre: 0},
						{picto: 'img/Emotion/évanouissement.png', mot: 'évanouissement', personne: 3, genre: 0},
						{picto: 'img/Emotion/heureux.JPG', mot: 'heureux', personne: 3, genre: 0},
						{picto: 'img/Emotion/joyeux.png', mot: 'joyeux', personne: 3, genre: 0},
						{picto: 'img/Emotion/mal.png', mot: 'mal', personne: 3, genre: 0},
						{picto: 'img/Emotion/malheureux.JPG', mot: 'malheureux', personne: 3, genre: 0},
						{picto: 'img/Emotion/faim.png', mot: 'faim', personne: 3, genre: 0},
						{picto: 'img/Emotion/mépriser.png', mot: 'mépriser', personne: 3, genre: 0},
						{picto: 'img/Emotion/amoureux.png', mot: 'amoureux', personne: 3, genre: 0},
						{picto: 'img/Emotion/colère.png', mot: 'colère', personne: 3, genre: 0},
						{picto: 'img/Emotion/rire.png', mot: 'rire', personne: 3, genre: 0},
						{picto: 'img/Emotion/optimiste.png', mot: 'optimiste', personne: 3, genre: 0},

						{picto: 'img/Interactions/au revoir.png', mot: 'au revoir', personne: 3, genre: 0},
						{picto: 'img/Interactions/à demain.png', mot: 'à demain', personne: 3, genre: 0},
						{picto: 'img/Interactions/bonjour.png', mot: 'bonjour', personne: 3, genre: 0},
						{picto: 'img/Interactions/bonne nuit.png', mot: 'bonne nuit', personne: 3, genre: 0},
						{picto: 'img/Interactions/deRien.png', mot: 'de rien', personne: 3, genre: 0},
						{picto: 'img/Interactions/merci.png', mot: 'merci', personne: 3, genre: 0},
						{picto: 'img/Interactions/bonjour.png', mot: "à tout à l'heure", personne: 3, genre: 0},

						{picto: 'img/Santé/allergie.png', mot: 'allergie', personne: 3, genre: 1},
						{picto: 'img/Santé/asthme.png', mot: 'asthme', personne: 3, genre: 0},
						{picto: 'img/Santé/barbe.png', mot: 'barbe', personne: 3, genre: 1},
						{picto: 'img/Santé/bosse.png', mot: 'bosse', personne: 3, genre: 1},
						{picto: 'img/Santé/bouche.png', mot: 'bouche', personne: 3, genre: 1},
						{picto: 'img/Santé/bras.png', mot: 'bras', personne: 3, genre: 0},
						{picto: 'img/Santé/brûlures.png', mot: 'brûlures', personne: 3, genre: 1},
						{picto: 'img/Santé/caries.png', mot: 'caries', personne: 3, genre: 1},
						{picto: 'img/Santé/cheveu.png', mot: 'cheveu', personne: 3, genre: 0},
						{picto: 'img/Santé/cicatrice.png', mot: 'cicatrice', personne: 3, genre: 1},
						{picto: 'img/Santé/doigt.png', mot: 'doigt', personne: 3, genre: 0},
						{picto: 'img/Santé/dos.png', mot: 'dos', personne: 3, genre: 0},
						{picto: 'img/Santé/fesses.png', mot: 'fesses', personne: 3, genre: 1},
						{picto: 'img/Santé/fièvre.png', mot: 'fièvre', personne: 3, genre: 1},
						{picto: 'img/Santé/jambe.png', mot: 'jambe', personne: 3, genre: 1},
						{picto: 'img/Santé/main.png', mot: 'main', personne: 3, genre: 1},
						{picto: 'img/Santé/nez.png', mot: 'nez', personne: 3, genre: 0},
						{picto: 'img/Santé/oreille.png', mot: 'oreille', personne: 3, genre: 1},
						{picto: 'img/Santé/pieds.png', mot: 'pieds', personne: 3, genre: 0},
						{picto: 'img/Santé/poitrine.png', mot: 'poitrine', personne: 3, genre: 1},
						{picto: 'img/Santé/rhume.png', mot: 'rhume', personne: 3, genre: 0},
						{picto: 'img/Santé/tête.png', mot: 'tête', personne: 3, genre: 1},
						{picto: 'img/Santé/varicelle.png', mot: 'varicelle', personne: 3, genre: 1},
						{picto: 'img/Santé/virus.png', mot: 'virus', personne: 3, genre: 0},
						{picto: 'img/Santé/yeux.png', mot: 'yeux', personne: 3, genre: 0},
						{picto: 'img/Santé/épaules.png', mot: 'épaules', personne: 3, genre: 1},

						{picto: 'img/Animaux/chat.png', mot: 'chat', personne: 3, genre: 0},
						{picto: 'img/Animaux/chien.png', mot: 'chien', personne: 3, genre: 0},
						{picto: 'img/Animaux/lapin.png', mot: 'lapin', personne: 3, genre: 0},
						{picto: 'img/Animaux/cheval.png', mot: 'cheval', personne: 3, genre: 0},
						{picto: 'img/Animaux/souris.png', mot: 'souris', personne: 3, genre: 0},
						{picto: 'img/Animaux/rat.png', mot: 'rat', personne: 3, genre: 0},
						{picto: 'img/Animaux/lézard.png', mot: 'lézard', personne: 3, genre: 0},
						{picto: 'img/Animaux/serpent.png', mot: 'serpent', personne: 3, genre: 0},
						{picto: 'img/Animaux/tigre.png', mot: 'tigre', personne: 3, genre: 0},
						{picto: 'img/Animaux/lion.png', mot: 'lion', personne: 3, genre: 0},
						{picto: 'img/Animaux/chauve-souris.png', mot: 'chauve-souris', personne: 3, genre: 0},

						{picto: 'img/Maison/porte.png', mot: 'porte', personne: 3, genre: 0},
						{picto: 'img/Maison/salon.png', mot: 'salon', personne: 3, genre: 0},
						{picto: 'img/Maison/cuisine.png', mot: 'cuisine', personne: 3, genre: 0},
						{picto: 'img/Maison/micro-ondes.png', mot: 'micro-ondes', personne: 3, genre: 0},
						{picto: 'img/Maison/wc.png', mot: 'wc', personne: 3, genre: 0},
						{picto: 'img/Maison/fenêtre.png', mot: 'fenêtre', personne: 3, genre: 0},
						{picto: 'img/Maison/escalier.png', mot: 'escalier', personne: 3, genre: 0},
						{picto: 'img/Maison/jardin.png', mot: 'jardin', personne: 3, genre: 0},
						{picto: 'img/Maison/maison.png', mot: 'maison', personne: 3, genre: 0},
						{picto: 'img/Maison/chambre.png', mot: 'chambre', personne: 3, genre: 0},

						{picto: 'img/Lieu/Paris.JPG', mot: 'Paris', personne: 3, genre: 0},
						{picto: 'img/Lieu/Rome.JPG', mot: 'Rome', personne: 3, genre: 0},
						{picto: 'img/Lieu/Shangai.JPG', mot: 'Shangai', personne: 3, genre: 0},
						{picto: 'img/Lieu/Tokyo.JPG', mot: 'Tokyo', personne: 3, genre: 0},
						{picto: 'img/Lieu/New york.JPG', mot: 'New york', personne: 3, genre: 0},
						{picto: 'img/Lieu/Miami.JPG', mot: 'Miami', personne: 3, genre: 0},
						{picto: 'img/Lieu/Dubai.JPG', mot: 'Dubai', personne: 3, genre: 0},
						{picto: 'img/Lieu/Dublin.JPG', mot: 'Dublin', personne: 3, genre: 0},
						{picto: 'img/Lieu/Los angeles.JPG', mot: 'Los angeles', personne: 3, genre: 0},
						{picto: 'img/Lieu/Russie.JPG', mot: 'Russie', personne: 3, genre: 0},
						{picto: 'img/Lieu/Sydney.JPG', mot: 'Sydney', personne: 3, genre: 0},
						{picto: 'img/Lieu/Suisse.JPG', mot: 'Suisse', personne: 3, genre: 0},
						{picto: 'img/Lieu/Venise.JPG', mot: 'Venise', personne: 3, genre: 0},
						{picto: 'img/Lieu/Berlin.JPG', mot: 'Berlin', personne: 3, genre: 0},

						{picto: 'img/Metier/acteur.png', mot: 'acteur', personne: 3, genre: 0},
						{picto: 'img/Metier/boulanger.png', mot: 'boulanger', personne: 3, genre: 0},
						{picto: 'img/Metier/chanteur_(masc.)___chanteuse_(fém.).png', mot: 'Chanteur', personne: 3, genre: 0},
						{picto: 'img/Metier/docteur.png', mot: 'docteur', personne: 3, genre: 0},
						{picto: 'img/Metier/journaliste.png', mot: 'journaliste', personne: 3, genre: 0},
						{picto: 'img/Metier/vendeur.png', mot: 'vendeur', personne: 3, genre: 0},
						{picto: 'img/Metier/professeur.png', mot: 'professeur', personne: 3, genre: 0},
						{picto: 'img/Metier/orthophoniste.png', mot: 'orthophoniste', personne: 3, genre: 0},


						{picto: 'img/Sport & Loisirs/anniversaire.png', mot: 'anniversaire', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/balançoire.png', mot: 'balançoire', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/ballon de basket.png', mot: 'ballon de basket', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/ballon de football.png', mot: 'ballon de football', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/bouée.png', mot: 'bouée', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/buts de rugby.png', mot: 'buts de rugby', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/buts.png', mot: 'buts', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/cadeau.png', mot: 'cadeau', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/camping.png', mot: 'camping', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/gourde.png', mot: 'gourde', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/guitare.png', mot: 'guitare', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/jouet.png', mot: 'jouet', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/manège.png', mot: 'manège', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/match.png', mot: 'match', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/musique.png', mot: 'musique', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/Noël.png', mot: 'Noël', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/panier.png', mot: 'panier', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/parasol.png', mot: 'parasol', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/phare.png', mot: 'phare', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/piano.png', mot: 'piano', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/plongeoir.png', mot: 'plongeoir', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/Père-Noël.png', mot: 'Père-Noël', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/raquette.png', mot: 'raquette', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/rugby.png', mot: 'rugby', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/sable.png', mot: 'sable', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/sac de couchage.png', mot: 'sac de couchage', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/table de ping-pong.png', mot: 'table de ping-pong', personne: 3, genre: 1},
						{picto: 'img/Sport & Loisirs/trampoline.png', mot: 'trampoline', personne: 3, genre: 0},
						{picto: 'img/Sport & Loisirs/vague.png', mot: 'vague', personne: 3, genre: 1}];
	
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].picto, dataArray[i].mot, dataArray[i].personne, dataArray[i].genre]);
	}

	tx.executeSql('DROP TABLE IF EXISTS VERBES');
	tx.executeSql('CREATE TABLE IF NOT EXISTS VERBES (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL, auxiliaire TEXT NOT NULL, participe TEXT NOT NULL, groupe INT NOT NULL, pres1 TEXT, pres2 TEXT, pres3 TEXT, pres4 TEXT, pres5 TEXT,pres6 TEXT, irrFutur TEXT)');
 	var q = 'INSERT INTO VERBES(picto,mot,auxiliaire,participe,groupe,pres1,pres2,pres3,pres4,pres5,pres6,irrFutur) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )';
 	var dataArray = [{picto: 'img/Verbes/aimer.png', mot: 'aimer', auxiliaire: 'avoir', participe: 'aimé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/aller.png', mot: 'aller', auxiliaire: 'être', participe: 'allé', groupe: 1, pres1 : 'vais', pres2: 'vas', pres3: 'va', pres4: 'allons', pres5: 'allez', pres6: 'vont', irrFutur: 'ir'},
						{picto: 'img/Verbes/arriver.png', mot: 'arriver', auxiliaire: 'être', participe: 'arrivé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/attendre.png', mot: 'attendre', auxiliaire: 'avoir', participe: 'attendu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/avoir.png', mot: 'avoir', auxiliaire: 'avoir', participe: 'eu', groupe: 3, pres1 : 'ai', pres2: 'as', pres3: 'a', pres4: 'avons', pres5: 'avez', pres6: 'ont', irrFutur: 'aur'},
						{picto: 'img/Verbes/comprendre.png', mot: 'comprendre', auxiliaire: 'avoir', participe: 'compris', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/connaître.png', mot: 'connaître', auxiliaire: 'avoir', participe: 'connu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/demander.png', mot: 'demander', auxiliaire: 'avoir', participe: 'demandé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/dire.png', mot: 'dire', auxiliaire: 'avoir', participe: 'dit', groupe: 3, pres1 : 'dis', pres2: 'dis', pres3: 'dit', pres4: 'disons', pres5: 'dites', pres6: 'disent', irrFutur: null},
						{picto: 'img/Verbes/donner.png', mot: 'donner', auxiliaire: 'avoir', participe: 'donné', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/entendre.png', mot: 'entendre', auxiliaire: 'avoir', participe: 'entendu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/entrer.png', mot: 'entrer', auxiliaire: 'être', participe: 'entré', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/faire.png', mot: 'faire', auxiliaire: 'avoir', participe: 'fait', groupe: 3, pres1 : 'fais', pres2: 'fais', pres3: 'fait', pres4: 'faisons', pres5: 'faites', pres6: 'font', irrFutur: 'fer'},
						{picto: 'img/Verbes/manger.png', mot: 'manger', auxiliaire: 'avoir', participe: 'mangé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/mettre.png', mot: 'mettre', auxiliaire: 'avoir', participe: 'mis', groupe: 3, pres1 : 'mets', pres2: 'mets', pres3: 'met', pres4: 'mettons', pres5: 'mettez', pres6: 'mettent', irrFutur: null},
						{picto: 'img/Verbes/oublier.png', mot: 'oublier', auxiliaire: 'avoir', participe: 'oublié', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/parler.png', mot: 'parler', auxiliaire: 'avoir', participe: 'parlé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/passer.png', mot: 'passer', auxiliaire: 'avoir', participe: 'passé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/penser.png', mot: 'penser', auxiliaire: 'avoir', participe: 'pensé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/porter.png', mot: 'porter', auxiliaire: 'avoir', participe: 'porté', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/pouvoir.png', mot: 'pouvoir', auxiliaire: 'avoir', participe: 'pu', groupe: 3, pres1 : 'peux', pres2: 'peux', pres3: 'peut', pres4: 'pouvons', pres5: 'pouvez', pres6: 'peuvent', irrFutur: 'pourr'},
						{picto: 'img/Verbes/prendre.png', mot: 'prendre', auxiliaire: 'avoir', participe: 'pris', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/regarder.png', mot: 'regarder', auxiliaire: 'avoir', participe: 'regardé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/rester.png', mot: 'rester', auxiliaire: 'être', participe: 'resté', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/répondre.png', mot: 'répondre', auxiliaire: 'avoir', participe: 'répondu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/savoir.png', mot: 'savoir', auxiliaire: 'avoir', participe: 'su', groupe: 3, pres1 : 'sais', pres2: 'sais', pres3: 'sait', pres4: 'savons', pres5: 'savez', pres6: 'savent', irrFutur: 'saur'},
						{picto: 'img/Verbes/sentir.png', mot: 'sentir', auxiliaire: 'avoir', participe: 'senti', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/sortir.png', mot: 'sortir', auxiliaire: 'être', participe: 'sorti', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/tenir.png', mot: 'tenir', auxiliaire: 'avoir', participe: 'tenir', groupe: 3, pres1 : 'tiens', pres2: 'tiens', pres3: 'tient', pres4: 'tenons', pres5: 'tenez', pres6: 'tiennent', irrFutur: 'tiendr'},
						{picto: 'img/Verbes/trouver.png', mot: 'trouver', auxiliaire: 'avoir', participe: 'trouvé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrFutur: null},
						{picto: 'img/Verbes/vivre.png', mot: 'vivre', auxiliaire: 'avoir', participe: 'vécu', groupe: 3, pres1 : 'vis', pres2: 'vis', pres3: 'vit', pres4: 'vivont', pres5: 'vivez', pres6: 'vivent', irrFutur: null},
						{picto: 'img/Verbes/voir.png', mot: 'voir', auxiliaire: 'avoir', participe: 'vu', groupe: 3, pres1 : 'vois', pres2: 'vois', pres3: 'voit', pres4: 'voyons', pres5: 'voyez', pres6: 'voient', irrFutur: 'verr'},
						{picto: 'img/Verbes/vouloir.png', mot: 'vouloir', auxiliaire: 'avoir', participe: 'voulu', groupe: 3, pres1 : 'veux', pres2: 'veux', pres3: 'veut', pres4: 'voulons', pres5: 'voulez', pres6: 'veulent', irrFutur: 'voudr'},
						{picto: 'img/Verbes/être.png', mot: 'être', auxiliaire: 'avoir', participe: 'été', groupe: 3, pres1 : 'suis', pres2: 'es', pres3: 'est', pres4: 'sommes', pres5: 'êtes', pres6: 'sont', irrFutur: 'ser'}
					];
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].picto, dataArray[i].mot, dataArray[i].auxiliaire, dataArray[i].participe, dataArray[i].groupe, dataArray[i].pres1, dataArray[i].pres2, dataArray[i].pres3, dataArray[i].pres4, dataArray[i].pres5, dataArray[i].pres6, dataArray[i].irrFutur])
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
function checkDb() {
	startOb.file(function(file) {
		var reader = new FileReader();
		var txtPicto = "";
		reader.onloadend = function(e) {
			var res=this.result;
			if(res==""){
				var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
				alert("populating db");
				db.transaction(populateDB, errorCB);
				startOb.createWriter(function(fileWriter) {       
					var blob = new Blob(["Started"], {type:'text/plain'});
					fileWriter.write(blob);
				}, fail);
			}
			else{
				alert("already started");
			}

		};
		reader.readAsText(file);
	}, fail);
	
	
}


function onDeviceReady(){
	window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
		console.log(dir.nativeURL);
		console.log("got main dir", dir);
		dir.getFile("start.txt", {create:true, exclusive: false}, function(file) {
			console.log("got the file startOb", file);
			startOb = file;		
			console.log('getfile startOb');	
			checkDb();
		});
	});
}