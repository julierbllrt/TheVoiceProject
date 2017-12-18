
// Terminaisons des groupes au Présent

var terminaisons1erGroupe = ["e","es","e","ons","ez","ent"];

var terminaisons2emeGroupe = ["is","is","it","issons","issez","issent"];

var terminaisons3emeGroupe_dre = ["ds","ds","d","ons","ez","ent"];
var terminaisons3emeGroupe = ["s","s","t","ons","ez","ent"];

// Terminaisons du Futur

var terminaisonsFutur = ["ai","as","a","ons","ez","ent"];

// Déclaration de l'objet Personne par constructeur
function Sujet(mot, genre, nombre, personne){
	this.mot = mot; //	string
	this.genre = genre; // bool (0 -> masculin, 1 -> féminin)
	this.nombre = nombre; // bool (0 -> singulier, 1 -> pluriel)
	this.personne = personne; // 1 ≤ personne ≤ 6
	};
}

recupSujetFromDB = function(tx, results){	// à implementer avec la DB
		var leMot=results.rows.item(0).mot;
		var laPersonne = 3;
		var leGenre = false;
		
		leMot.toLowerCase();
		switch(leMot){
			case "je":
				laPersonne=1;
				break;
			case "moi":
				laPersonne=1;
				break;
			case "tu":
				laPersonne=2;
				break;
			case "il":
				laPersonne=3;
				break;
			case "elle":
				laPersonne=3;
				leGenre = 1;
				break;
			case "nous":
				laPersonne=4;
				
				break;
			case "vous":
				laPersonne=5;
				
				break;
			case "ils":
				laPersonne=6;
				
				break;
			case "elles":
				leGenre = 1;
				
				laPersonne=6;
				break;
			default :
				laPersonne=3;
				break;
		}
		var leSujet = {mot:leMot,genre:leGenre,personne:laPersonne};
		return(leSujet);


// définition d'un objet Verbe par constructeur
function Verbe(infinitif, auxiliaire, participePasse, groupe, isIrregular, irregularPresent, irregularFutur) {
    this.infinitif =infinitif;	//string
    this.participePasse = participePasse;	//string
    this.groupe = groupe;	// int
    this.irregularPresent = irregularPresent; // Liste de longueur 6
    this.irregularFutur = irregularFutur; // String
}

recupVerbeFromDB = function(tx, results){
	if(var results.rows.item(0).picto.find("Verbes")!=-1){

		// si c'est un verbe
		var lInfinitif = results.rows.item(0).mot;
		var leParticipePasse =results.rows.item(0).participe;
		var lAuxiliaire = results.rows.item(0).auxiliaire;
		var leGroupe = results.rows.item(0).groupe;
		var lePres1 = results.rows.item(0).pres1;
		var lePres2 = results.rows.item(0).pres2;
		var lePres3 = results.rows.item(0).pres3;
		var lePres4 = results.rows.item(0).pres4;
		var lePres5 = results.rows.item(0).pres5;
		var lePres6 = results.rows.item(0).pres6;
		var leIrregularFutur = results.rows.item(0).irrFutur;

		var leVerbe = {infinitif:lInfinitif,
						auxiliaire:lAuxiliaire,
						participePasse:leParticipePasse,
						groupe:leGroupe,
						pres1: lePres1,
						pres2: lePres2,
						pres3: lePres3,
						pres4: lePres4,
						pres5: lePres5,
						pres6: lePres6,
						irregularFuturfutur: leIrregularFutur
						};
		
	}
	return(leVerbe);	
}
// Conjugaison des verbes au présent
function conjugaisonPresent(verbe, sujet){
	var resultat = "";
	var inf= verbe.infinitif;
	inf.toLowerCase();
	var irregularPresent[verbe.pres1,verbe.pres2,verbe.pres3,verbe.pres4,verbe.pres5,verbe.pres6];
		
	if(verbe.pres1!=null){
		switch(verbe.groupe){
		
		case 1: // conjugaison des verbes du 1er groupe

			var radical1 = inf.substr(inf.length - 4); // récupération du radical de l'infinitif (les 4 derniers caractères)

			if (radical1.includes('ger')){	// verbe en -ger
				inf = inf.substr(0, inf.length - 3);
				if(sujet.personne == 4){
					inf = inf+'ge';
				}
				else{
					inf = inf+'g';
				}
			}

			else if (radical1.includes('cer')){ // verbe en -cer
				inf = inf.substr(0, inf.length - 3);
				if(sujet.personne == 4){
					inf = inf+'ç';
				}
				else{
					inf = inf+'c';
				}
			}

			else if (radical1.includes('yer')){ // verbe en -oyer, -ayer, -uyer
				inf = inf.substr(0, inf.length - 3);
				if(sujet.personne == 4 || sujet.personne == 5){
					inf = inf+'y';
				}
				else{
					inf = inf+'i';
				}
			}

			else if (radical1.includes('eler')){ // verbe en -eler
				inf = inf.substr(0, inf.length - 3);
				if(sujet.personne == 4 || sujet.personne == 5){
					inf = inf+'l';
				}
				else{
					inf = inf+'ll';
				}
			}

			else if (radical1.includes('eter')){ // verbe en -eter
				inf = inf.substr(0, inf.length - 3);
				if(sujet.personne == 4 || sujet.personne == 5){
					inf = inf+'t';
				}
				else{
					inf = inf+'tt';
				}
			}

			else{
				inf = inf.substr(0, inf.length - 2);
			}

			resultat = inf + terminaisons1erGroupe[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
			break;

		case 2: // Conjugaison du 2e groupe

			inf = inf.substr(0, inf.length - 2);	// suppression de -ir
			resultat = inf + terminaisons1erGroupe[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée

			break;

		case 3: // conjugaison du 3e groupe

			var radical3 = inf.substr(inf.length - 3); 

			if (radical3.includes('dre')){ // cas des verbes en -dre
				
				inf = inf.substr(0, inf.length - 3);	// suppression du radical en -dre
				resultat = inf + terminaisons3emeGroupe_endre[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
				break;
			}

			var radical4 = inf.substr(inf.length - 2);
			if (radical4.includes('ir')){	// cas des verbes en -ir
				
				inf = inf.substr(0, inf.length - 3);	// suppression du radical en -ir
				resultat = inf + terminaisons1erGroupe[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
				break;
			}

		}		

	}
	else{
		resultat = irregularPresent[sujet.personne-1];
	}
	
	return resultat;
}

// Conjugaison des verbes au futur

function conjugaisonverbeFutur(verbe, sujet){
	var resultat = "";
	var inf = verbe.infinitif;
	inf.toLowerCase();


	if(verbe.irregularFutur!=null){ // si le verbe est régulier
		
		switch(verbe.groupe){

			case 1: //	1er groupe
				var radical1 = inf.substr(inf.length - 4);

				if (radical1.includes('eler')){ // radical en -eler
					inf = inf.substr(0, inf.length - 2);
					inf = inf+'l'+'er';
				}

				else if (radical1.includes('yer')){ // radical en -eler
					inf = inf.substr(0, inf.length - 2);
					inf = inf+'i'+'er';
				}

				break;

			case 2: // 2ème groupe
				
				break;

			case 3: // 3ème groupe

				var radical3 = inf.substr(inf.length - 3);

				if (radical3.includes('re')){ // radical en -re
					inf = inf.substr(0, inf.length -1 );
				}

				else if (radical3.includes('rir')){ // radical en -rir
					inf = inf.substr(0, inf.length - 2);
					inf = inf + 'r'+'ir';
				}
				break;

		}
		resultat = inf + terminaisonsFutur[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
	}

	else{	// si le verbe n'est pas régulier
		resultat = verbe.irregularFutur + terminaisonsFutur[sujet.personne-1];
	}
	return resultat;
	
}

// Conjugaison des verbes au futur

function ConjugaisonPasse(verbe, sujet){
	var avoir = ["ai","as","a","avons","avez","ont"];
	var etre = ["suis","es","est","sommes","êtes","sont"]; 

	var participe = verbe.participePasse;
	var resultat = "";
	participe.toLowerCase();
	

	switch(verbe.auxiliaire){

		case "avoir":
			aux = avoir[sujet.personne-1];
			break;

		case "être":
			aux = etre[sujet.personne-1];
			if(substr(participe.length - 2)=='us'){ // cas où le participe passé finit en -us
				if(sujet.genre==1){
					participe = participe.substr(0, participe.length - 1); //	suppression du 's' pour mettre un 't' à la place
					participe = participe+'t';
					if (sujet.personne<4){
						participe = participe+'e';
					}
					else{
						participe = participe+'es';
					}
				}
			}
			else{
				if (sujet.genre==0){
					if(sujet.personne>3 && substr(participe.length - 1)!='s'){
					participe = participe+'s';
					}
				}
				else{
					if(sujet.personne<4){
					participe = participe+'e';
					}
					else{
						participe = participe+'es'
					}
				}
			}
			break;			
	}
	resultat = aux+" "+participe;
	return resultat;
}

