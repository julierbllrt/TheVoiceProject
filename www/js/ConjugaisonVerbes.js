
// Terminaisons des groupes au Présent

var terminaisons1erGroupe = ["e","es","e","ons","ez","ent"];

var terminaisons2emeGroupe = ["is","is","it","issons","issez","issent"];

var terminaisons3emeGroupe_dre = ["ds","ds","d","ons","ez","ent"];
var terminaisons3emeGroupe = ["s","s","t","ons","ez","ent"];

// Terminaisons du Futur

var terminaisonsFutur = ["ai","as","a","ons","ez","ent"];



function recupSujetFromDB (tx, results){
	if(results.rows.item(0).personne!=null){
		{mot:results.rows.item(0).mot,genre:results.rows.item(0).genre, personne:results.rows.item(0).personne};
	}
	else{
		var leMot=results.rows.item(0).mot.toLowerCase();
		var laPersonne = 3;
		var leGenre = false;
		

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
	}
	return(leSujet);
}
		



function recupVerbeFromDB (tx, results){
	if(results.rows.item(0).picto.find("Verbes")!=-1){

		// si c'est un verbe
		var lInfinitif = results.rows.item(0).mot.toLowerCase();
		var leParticipePasse =results.rows.item(0).participe.toLowerCase();
		var lAuxiliaire = results.rows.item(0).auxiliaire.toLowerCase();
		var leGroupe = results.rows.item(0).groupe;
		var lePres1 = results.rows.item(0).pres1.toLowerCase();
		var lePres2 = results.rows.item(0).pres2.toLowerCase();
		var lePres3 = results.rows.item(0).pres3.toLowerCase();
		var lePres4 = results.rows.item(0).pres4.toLowerCase();
		var lePres5 = results.rows.item(0).pres5.toLowerCase();
		var lePres6 = results.rows.item(0).pres6.toLowerCase();
		var leIrregularFutur = results.rows.item(0).irrFutur.toLowerCase();

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

// <test>
//var sujet = {mot:"nous",genre:1,personne:};
//var verbe = {infinitif:"précéder",auxiliaire:"être",participePasse:"cédé",groupe:1,pres1: null,pres2: null,pres3: null,pres4: null,pres5: null,pres6: null,irregularFutur: null};
/// </test>


	var resultat = " ";
	var inf = verbe.infinitif;
	var irregularPresent = [verbe.pres1,verbe.pres2,verbe.pres3,verbe.pres4,verbe.pres5,verbe.pres6];

		
	if(verbe.pres1==null && verbe.pres2==null && verbe.pres3==null && verbe.pres4==null && verbe.pres5==null && verbe.pres6==null){
		switch(verbe.groupe){
		
			case 1: // conjugaison des verbes du 1er groupe

				var radical = inf.substr(inf.length - 4); // récupération du radical de l'infinitif (les 4 derniers caractères)

				if (radical.includes('ger')){	// verbe en -ger
					inf = inf.substr(0, inf.length - 3);
					if(sujet.personne == 4){
						inf = inf+'ge';
					}
					else if(sujet.personne < 4 || sujet.personne > 4){
						inf = inf+'g';
					}
				}

				else if (radical.includes('cer')){ // verbe en -cer
					inf = inf.substr(0, inf.length - 3);
					if(sujet.personne == 4){
						inf = inf+'ç';
					}
					else{
						inf = inf+'c';
					}
				}

				else if (radical.includes('yer')){ // verbe en -oyer, -ayer, -uyer
					inf = inf.substr(0, inf.length - 3);
					if(sujet.personne == 4 || sujet.personne == 5){
						inf = inf+'y';
					}
					else{
						inf = inf+'i';
					}
				}

				else if (radical.includes('eler')){ // verbe en -eler
					inf = inf.substr(0, inf.length - 3);
					if(sujet.personne == 4 || sujet.personne == 5){
						inf = inf+'l';
					}
					else{
						inf = inf+'ll';
					}
				}

				else if (radical.includes('eter')){ // verbe en -eter
					inf = inf.substr(0, inf.length - 3);
					if(sujet.personne == 4 || sujet.personne == 5){
						inf = inf+'t';
					}
					else{
						inf = inf+'tt';
					}
				}
				else if(radical.includes('éder') && (sujet.personne < 4 && sujet.personne > 5)){
					inf = inf.replace('é','è');	
				}

				else {
					inf = inf.substr(0, inf.length - 2);
				}


				resultat = inf + terminaisons1erGroupe[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
				break;

			case 2: // Conjugaison du 2e groupe

				inf = inf.substr(0, inf.length - 1);	// suppression de -ir

				if(verbe.infinitif=='haïr' && (sujet.personne < 4)){
					inf = inf.replace('ï','i');
				}
				resultat = inf + terminaisons2emeGroupe[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée

				break; 

			case 3: // conjugaison du 3e groupe
				break;
				
					// nous considérerons tous le 3ème groupe comme irrégulier, c'est plus simple...
				

		}		

	}

	else{
		resultat = irregularPresent[sujet.personne-1];
	}

	//document.getElementById("present").innerHTML = sujet.mot+" "+resultat;
	return resultat;

}

// Conjugaison des verbes au futur

function conjugaisonFutur(verbe, sujet){

// <test>
//var sujet = {mot:"nous",genre:1,personne:4};
//var verbe = {infinitif:"appuyer",auxiliaire:"avoir",participePasse:"appuyé",groupe:1,pres1: null,pres2: null,pres3: null,pres4: null,pres5: null,pres6: null,irregularFutur:null};
// </test>

	var resultat = "";
	var inf = verbe.infinitif;
	inf.toLowerCase();


	if(verbe.irregularFutur==null || verbe.irregularFutur==''){ // si le verbe est régulier
		
		switch(verbe.groupe){

			case 1: //	1er groupe
				var radical = inf.substr(inf.length - 4);

				if (radical.includes('eler')){ // radical en -eler
					inf = inf.substr(0, inf.length - 2);
					inf = inf+'l'+'er';
				}

				if (radical.includes('yer')){ // radical en -yer
					inf = inf.substr(0, inf.length - 3);
					inf = inf+'ier';
				}

				if (radical.includes('eter')){ // radical en -eter
					inf = inf.substr(0, inf.length - 2);
					inf = inf+'t'+'er';
				}
		

				break;

			case 2: // 2ème groupe
				
				break;

			case 3: // 3ème groupe

				var radical = inf.substr(inf.length - 3);

				if (radical.includes('re')){ // radical en -re
					inf = inf.substr(0, inf.length -1 );
				}

				else if (radical.includes('rir')){ // radical en -rir
					inf = inf.substr(0, inf.length - 2);
					inf = inf + 'r';
				}
				break;

		}
		resultat = inf + terminaisonsFutur[sujet.personne-1]; // rajout de la terminaison pour la personne spécifiée
	}

	else{	// si le verbe n'est pas régulier
		resultat = verbe.irregularFutur + terminaisonsFutur[sujet.personne-1];
	}
	//document.getElementById("futur").innerHTML = sujet.mot+" "+resultat;
	return resultat;
	
}


//Conjugaison des verbes au passé

function conjugaisonPasse(verbe, sujet){
	var avoir = ["ai","as","a","avons","avez","ont"];
	var etre = ["suis","es","est","sommes","êtes","sont"]; 

// <test>
//var sujet = {mot:"nous",genre:1,personne:4};
//var verbe = {infinitif:"manger",auxiliaire:"être",participePasse:"mangé",groupe:1,pres1: null,pres2: null,pres3: null,pres4: null,pres5: null,pres6: null,irregularFuturfutur: null};
// </test>

	var participe = verbe.participePasse;
	var resultat = "";
	var aux ;
	participe.toLowerCase();

	

	switch(verbe.auxiliaire){

		case "avoir":
			aux = avoir[sujet.personne-1];
			break;

		case "être":
			aux = etre[sujet.personne-1];
			if(participe.substr(participe.length - 2)=='us'){ // cas où le participe passé finit en -us
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
					if(sujet.personne>3 && participe.substr(participe.length - 1)!='s'){
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
	//document.getElementById("passé").innerHTML = resultat;
	return resultat;
}
