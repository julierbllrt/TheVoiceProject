
document.addEventListener("deviceready", onDeviceReady, false);

var currentRow;
// Populate the database
//
function populateDB(tx) {
	//alert("going populateDB");
	tx.executeSql('DROP TABLE IF EXISTS PICTOS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PICTOS (id INTEGER PRIMARY KEY AUTOINCREMENT, picto TEXT NOT NULL, mot TEXT NOT NULL,personne INT, genre INT, auxiliaire TEXT, participe TEXT, groupe INT, pres1 TEXT, pres2 TEXT, pres3 TEXT, pres4 TEXT, pres5 TEXT,pres6 TEXT, irrégulierFutur TEXT)');
 	var q = 'INSERT INTO PICTOS(picto,mot,personne,genre,auxiliaire,participe,groupe,pres1,pres2,pres3,pres4,pres5,pres6,irrégulierFutur) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )';
 	var dataArray = [{picto: 'pictomot.png', mot: 'mot', personne: personne, genre: genre, auxiliaire: 'auxiliaire', participe: 'participe', groupe: groupe, pres1 : 'pres1', pres2: 'pres2', pres3: 'pres3', pres4: 'pres4', pres5: 'pres5', pres6: 'pres6', irrégulierFutur: 'irrégulierFutur'},
						{picto: 'img/Verbes/aimer.png', mot: 'aimer', personne: null, genre: null, auxiliaire: 'avoir', participe: 'aimé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/aller.png', mot: 'aller', personne: null, genre: null, auxiliaire: 'être', participe: 'allé', groupe: 1, pres1 : 'vais', pres2: 'vas', pres3: 'va', pres4: 'allons', pres5: 'allez', pres6: 'vont', irrégulierFutur: 'ir'},
						{picto: 'img/Verbes/arriver.png', mot: 'arriver', personne: null, genre: null, auxiliaire: 'être', participe: 'arrivé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/attendre.png', mot: 'attendre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'attendu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/avoir.png', mot: 'avoir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'eu', groupe: 3, pres1 : 'ai', pres2: 'as', pres3: 'a', pres4: 'avons', pres5: 'avez', pres6: 'ont', irrégulierFutur: 'aur'},
						{picto: 'img/Verbes/comprendre.png', mot: 'comprendre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'compris', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/connaître.png', mot: 'connaître', personne: null, genre: null, auxiliaire: 'avoir', participe: 'connu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/demander.png', mot: 'demander', personne: null, genre: null, auxiliaire: 'avoir', participe: 'demandé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/dire.png', mot: 'dire', personne: null, genre: null, auxiliaire: 'avoir', participe: 'dit', groupe: 3, pres1 : 'dis', pres2: 'dis', pres3: 'dit', pres4: 'disons', pres5: 'dites', pres6: 'disent', irrégulierFutur: null},
						{picto: 'img/Verbes/donner.png', mot: 'donner', personne: null, genre: null, auxiliaire: 'avoir', participe: 'donné', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/entendre.png', mot: 'entendre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'entendu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/entrer.png', mot: 'entrer', personne: null, genre: null, auxiliaire: 'être', participe: 'entré', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/faire.png', mot: 'faire', personne: null, genre: null, auxiliaire: 'avoir', participe: 'fait', groupe: 3, pres1 : 'fais', pres2: 'fais', pres3: 'fait', pres4: 'faisons', pres5: 'faites', pres6: 'font', irrégulierFutur: 'fer'},
						{picto: 'img/Verbes/manger.png', mot: 'manger', personne: null, genre: null, auxiliaire: 'avoir', participe: 'mangé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/mettre.png', mot: 'mettre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'mis', groupe: 3, pres1 : 'mets', pres2: 'mets', pres3: 'met', pres4: 'mettons', pres5: 'mettez', pres6: 'mettent', irrégulierFutur: null},
						{picto: 'img/Verbes/oublier.png', mot: 'oublier', personne: null, genre: null, auxiliaire: 'avoir', participe: 'oublié', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/parler.png', mot: 'parler', personne: null, genre: null, auxiliaire: 'avoir', participe: 'parlé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/passer.png', mot: 'passer', personne: null, genre: null, auxiliaire: 'avoir', participe: 'passé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/penser.png', mot: 'penser', personne: null, genre: null, auxiliaire: 'avoir', participe: 'pensé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/porter.png', mot: 'porter', personne: null, genre: null, auxiliaire: 'avoir', participe: 'porté', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/pouvoir.png', mot: 'pouvoir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'pu', groupe: 3, pres1 : 'peux', pres2: 'peux', pres3: 'peut', pres4: 'pouvons', pres5: 'pouvez', pres6: 'peuvent', irrégulierFutur: 'pourr'},
						{picto: 'img/Verbes/prendre.png', mot: 'prendre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'pris', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/regarder.png', mot: 'regarder', personne: null, genre: null, auxiliaire: 'avoir', participe: 'regardé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/rester.png', mot: 'rester', personne: null, genre: null, auxiliaire: 'être', participe: 'resté', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/répondre.png', mot: 'répondre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'répondu', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/savoir.png', mot: 'savoir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'su', groupe: 3, pres1 : 'sais', pres2: 'sais', pres3: 'sait', pres4: 'savons', pres5: 'savez', pres6: 'savent', irrégulierFutur: 'saur'},
						{picto: 'img/Verbes/sentir.png', mot: 'sentir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'senti', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/sortir.png', mot: 'sortir', personne: null, genre: null, auxiliaire: 'être', participe: 'sorti', groupe: 3, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/tenir.png', mot: 'tenir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'tenir', groupe: 3, pres1 : 'tiens', pres2: 'tiens', pres3: 'tient', pres4: 'tenons', pres5: 'tenez', pres6: 'tiennent', irrégulierFutur: 'tiendr'},
						{picto: 'img/Verbes/trouver.png', mot: 'trouver', personne: null, genre: null, auxiliaire: 'avoir', participe: 'trouvé', groupe: 1, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Verbes/vivre.png', mot: 'vivre', personne: null, genre: null, auxiliaire: 'avoir', participe: 'vécu', groupe: 3, pres1 : 'vis', pres2: 'vis', pres3: 'vit', pres4: 'vivont', pres5: 'vivez', pres6: 'vivent', irrégulierFutur: null},
						{picto: 'img/Verbes/voir.png', mot: 'voir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'vu', groupe: 3, pres1 : 'vois', pres2: 'vois', pres3: 'voit', pres4: 'voyons', pres5: 'voyez', pres6: 'voient', irrégulierFutur: 'verr'},
						{picto: 'img/Verbes/vouloir.png', mot: 'vouloir', personne: null, genre: null, auxiliaire: 'avoir', participe: 'voulu', groupe: 3, pres1 : 'veux', pres2: 'veux', pres3: 'veut', pres4: 'voulons', pres5: 'voulez', pres6: 'veulent', irrégulierFutur: 'voudr'},
						{picto: 'img/Verbes/être.png', mot: 'être', personne: null, genre: null, auxiliaire: 'avoir', participe: 'été', groupe: 3, pres1 : 'suis', pres2: 'es', pres3: 'est', pres4: 'sommes', pres5: 'êtes', pres6: 'sont', irrégulierFutur: 'ser'},
						{picto: 'img/Adjectifs/autre.png', mot: 'autre', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/beau.png', mot: 'beau', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/blanc.png', mot: 'blanc', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/bleu.png', mot: 'bleu', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/bon.png', mot: 'bon', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/cher.png', mot: 'cher', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/dernier.png', mot: 'dernier', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/doux.png', mot: 'doux', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/fort.png', mot: 'fort', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/froid.png', mot: 'froid', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/grand.png', mot: 'grand', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/gros.png', mot: 'gros', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/heureux.png', mot: 'heureux', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/humain.png', mot: 'humain', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/jeune.png', mot: 'jeune', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/long.png', mot: 'long', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/mauvais.png', mot: 'mauvais', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/même.png', mot: 'même', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/noir.png', mot: 'noir', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/nouveau.png', mot: 'nouveau', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/pauvre.png', mot: 'pauvre', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/petit.png', mot: 'petit', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/plein.png', mot: 'plein', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/premier.png', mot: 'premier', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/propre.png', mot: 'propre', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/rouge.png', mot: 'rouge', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/seul.png', mot: 'seul', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/sombre.png', mot: 'sombre', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/tout.png', mot: 'tout', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adjectifs/vieux.png', mot: 'vieux', personne: null, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/au milieu.png', mot: 'au milieu', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/autour.png', mot: 'autour', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/beaucoup.png', mot: 'beaucoup', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/centre.png', mot: 'centre', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/comment.png', mot: 'comment', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/dedans.png', mot: 'dedans', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/dehors.png', mot: 'dehors', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/derrière.png', mot: 'derrière', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/dessous.png', mot: 'dessous', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/dessus.png', mot: 'dessus', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/devant.png', mot: 'devant', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/en haut.png', mot: 'en haut', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/ensuite.png', mot: 'ensuite', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/ici.png', mot: 'ici', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/jamais.png', mot: 'jamais', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/loin.png', mot: 'loin', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/là bas.png', mot: 'là bas', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/maintenant.png', mot: 'maintenant', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/où.png', mot: 'où', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/parfois.png', mot: 'parfois', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/peu.png', mot: 'peu', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/plus.png', mot: 'plus', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/près.png', mot: 'près', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/toujours.png', mot: 'toujours', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Adverbes/à côté de.png', mot: 'à côté de', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/zéro.png', mot: 'zéro', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/un.png', mot: 'un', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/deux.png', mot: 'deux', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/trois.png', mot: 'trois', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/quatre.png', mot: 'quatre', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/cinq.png', mot: 'cinq', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/six.png', mot: 'six', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/sept.png', mot: 'sept', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/huit.png', mot: 'huit', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Chiffres & Nombres/neuf.png', mot: 'neuf', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/assiette.png', mot: 'assiette', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/boisson.png', mot: 'boisson', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/casserole.png', mot: 'casserole', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/charcuterie.png', mot: 'charcuterie', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/couteau.png', mot: 'couteau', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/cuillère.png', mot: 'cuillère', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/dessert.png', mot: 'dessert', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/four.png', mot: 'four', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/fourchette.png', mot: 'fourchette', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/fromage.png', mot: 'fromage', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/fruit.png', mot: 'fruit', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/fruits secs.png', mot: 'fruits secs', personne: 6, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/goûter.png', mot: 'goûter', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/légumes.png', mot: 'légumes', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/pain.png', mot: 'pain', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/petit déjeuner.png', mot: 'petit déjeuner', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/poisson.png', mot: 'poisson', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/poêle.png', mot: 'poêle', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/réfrigérateur.png', mot: 'réfrigérateur', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Nourriture/viande.png', mot: 'viande', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/ceci.png', mot: 'ceci', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/cela.png', mot: 'cela', personne: 3, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/je.png', mot: 'je', personne: 1, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/moi.png', mot: 'moi', personne: 1, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/nous.png', mot: 'nous', personne: 4, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/qui.png', mot: 'qui', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/quoi.png', mot: 'quoi', personne: null, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/tu.png', mot: 'tu', personne: 2, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Personnes/vous.png', mot: 'vous', personne: 5, genre: null, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/ampoules.png', mot: 'ampoules', personne: 6, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/argent.png', mot: 'argent', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/aspirateurs.png', mot: 'aspirateurs', personne: 6, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/balai.png', mot: 'balai', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/bouteilles.png', mot: 'bouteilles', personne: 6, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/brosse à dents et dentifrice.png', mot: 'brosse à dents et dentifrice', personne: 6, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/cahier.png', mot: 'cahier', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/camions.png', mot: 'camions', personne: 6, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/carte de crédit.png', mot: 'carte de crédit', personne: 6, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/carte.png', mot: 'carte', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/ceintures de sécurité.png', mot: 'ceintures de sécurité', personne: 6, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/chargeur.png', mot: 'chargeur', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/clé usb.png', mot: 'clé usb', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/colle.png', mot: 'colle', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/corbeille.png', mot: 'corbeille', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/corde.png', mot: 'corde', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/crayon.png', mot: 'crayon', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/enveloppe.png', mot: 'enveloppe', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/euro.png', mot: 'euro', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/facture.png', mot: 'facture', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/fauteuil.png', mot: 'fauteuil', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/feuille.png', mot: 'feuille', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/gant de toilette.png', mot: 'gant de toilette', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/gomme.png', mot: 'gomme', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/haut parleurs.png', mot: 'haut parleurs', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/imprimante.png', mot: 'imprimante', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/livre.png', mot: 'livre', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/nœud.png', mot: 'nœud', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/objet.png', mot: 'objet', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/ordinateur.png', mot: 'ordinateur', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/papier hygiénique.png', mot: 'papier hygiénique', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/parfums.png', mot: 'parfums', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/photo.png', mot: 'photo', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/plan.png', mot: 'plan', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/roue.png', mot: 'roue', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/ruban adhésif.png', mot: 'ruban adhésif', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/règle.png', mot: 'règle', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/savon.png', mot: 'savon', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/sceau.png', mot: 'sceau', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/souris.png', mot: 'souris', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/stylo à plume.png', mot: 'stylo à plume', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/sèche-cheveux.png', mot: 'sèche-cheveux', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/tabac.png', mot: 'tabac', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/tableau.png', mot: 'tableau', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/taille-crayon.png', mot: 'taille-crayon', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/tiroir.png', mot: 'tiroir', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/trousse.png', mot: 'trousse', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Quotidien/volant.png', mot: 'volant', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/douleur.png', mot: 'douleur', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/peur.png', mot: 'peur', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/rire.png', mot: 'rire', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/soif.png', mot: 'soif', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/timide.png', mot: 'timide', personne: 3, genre: , auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Ressenti/évanouissement.png', mot: 'évanouissement', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/allergie.png', mot: 'allergie', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/asthme.png', mot: 'asthme', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/barbe.png', mot: 'barbe', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/bosse.png', mot: 'bosse', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/bouche.png', mot: 'bouche', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/bras.png', mot: 'bras', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/brûlures.png', mot: 'brûlures', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/caries.png', mot: 'caries', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/cheveu.png', mot: 'cheveu', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/cicatrice.png', mot: 'cicatrice', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/doigt.png', mot: 'doigt', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/dos.png', mot: 'dos', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/fesses.png', mot: 'fesses', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/fièvre.png', mot: 'fièvre', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/jambe.png', mot: 'jambe', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/main.png', mot: 'main', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/nez.png', mot: 'nez', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/oreille.png', mot: 'oreille', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/pieds.png', mot: 'pieds', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/poitrine.png', mot: 'poitrine', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/rhume.png', mot: 'rhume', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/tête.png', mot: 'tête', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/varicelle.png', mot: 'varicelle', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/virus.png', mot: 'virus', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/yeux.png', mot: 'yeux', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Santé/épaules.png', mot: 'épaules', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/anniversaire.png', mot: 'anniversaire', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/balançoire.png', mot: 'balançoire', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/ballon de basket.png', mot: 'ballon de basket', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/ballon de football.png', mot: 'ballon de football', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/bouée.png', mot: 'bouée', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/buts de rugby.png', mot: 'buts de rugby', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/buts.png', mot: 'buts', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/cadeau.png', mot: 'cadeau', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/camping.png', mot: 'camping', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/gourde.png', mot: 'gourde', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/guitare.png', mot: 'guitare', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/jouet.png', mot: 'jouet', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/manège.png', mot: 'manège', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/match.png', mot: 'match', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/musique.png', mot: 'musique', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/Noël.png', mot: 'Noël', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/panier.png', mot: 'panier', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/parasol.png', mot: 'parasol', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/phare.png', mot: 'phare', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/piano.png', mot: 'piano', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/plongeoir.png', mot: 'plongeoir', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/Père-Noël.png', mot: 'Père-Noël', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/raquette.png', mot: 'raquette', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/rugby.png', mot: 'rugby', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/sable.png', mot: 'sable', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/sac de couchage.png', mot: 'sac de couchage', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/table de ping-pong.png', mot: 'table de ping-pong', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/trampoline.png', mot: 'trampoline', personne: 3, genre: 0, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null},
						{picto: 'img/Sport & Loisirs/vague.png', mot: 'vague', personne: 3, genre: 1, auxiliaire: null, participe: null, groupe: null, pres1 : null, pres2: null, pres3: null, pres4: null, pres5: null, pres6: null, irrégulierFutur: null}
						];
	for (var i=0; i<dataArray.length; i++){
		tx.executeSql(q, [dataArray[i].picto, dataArray[i].mot, dataArray[i].personne, dataArray[i].genre, dataArray[i].auxiliaire, dataArray[i].participe, dataArray[i].groupe, dataArray[i].pres1, dataArray[i].pres2, dataArray[i].pres3, dataArray[i].pres4, dataArray[i].pres5, dataArray[i].pres6, dataArray[i].irrégulierFutur])
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