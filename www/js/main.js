document.addEventListener('deviceready', onDeviceReady, false);

var favOb;

function errorCB(err) {
 	alert("Error processing SQL: "+err.code);
 }

function fail(e) {
	console.log("FileSystem Error");
	console.log(e);
}

function onDeviceReady(){
	window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
		console.log(dir.nativeURL);
		console.log("got main dir", dir);
		dir.getFile("fav.txt", {create:true, exclusive: false}, function(file) {
			console.log("got the file favOb", file);
			favOb = file;		
			console.log('getfile favOb');	
			setApropos();
			setFav();
		});
	});
	//setFav();
}


// Click Picto
//

function onClickPicto(elmnt) {
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(function(tx){queryDbClickPicto(tx, elmnt)}, errorCB);
}

function queryDbClickPicto(tx, id) {
	var q = "";
	var button = document.getElementById(id);
 	var catElement = button.firstElementChild;
	var category = catElement.className;
	var imgElement = button.getElementsByTagName('img');
	var imgSrc = imgElement[0].id;
	if (category == "Verbes"){
		q += 'SELECT * FROM VERBES WHERE id LIKE ? ';
	}
	else {
		q += 'SELECT * FROM PICTOS WHERE id LIKE ? ';
	}
	tx.executeSql(q, [imgSrc], querySuccessClickPicto, errorCB);
}

function querySuccessClickPicto(tx, results) {
	var txtPicto = " " + results.rows.item(0).mot;
	var  vitPicto = document.getElementById("vitId");
	blabla(txtPicto, vitPicto.value);
	document.getElementById("saisie").value += txtPicto;
}

function onClickPictoTxt(id){
	var button = document.getElementById(id);
	var txtPicto = button.firstElementChild.innerHTML;
	document.getElementById("saisie").value += txtPicto;
}



 // Click Category
 //

 function onClickCategory(category){
	//alert("going onclickcategory");
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){queryDbClickCategory(tx, category)}, errorCB);
 }
 
 function queryDbClickCategory(tx, category){
 	//alert("going querydb");
 	var q = "";
 	if (category == "Verbes"){
 		q += 'SELECT * FROM VERBES WHERE picto LIKE ?';
 	}
 	else{
 		q += 'SELECT * FROM PICTOS WHERE picto LIKE ?';
 	}
 	tx.executeSql(q, ['img/'+category+'/%'], function(tx, results){querySuccessClickCategory(tx, results, category)}, errorCB);
 }
 
 function querySuccessClickCategory(tx, results, category){
	//alert("going querysuccess");
	var imgPicto="";
 	var len = results.rows.length;
 	if (len >= 36){
 		len = 36;
 	}
 	for (var i = 0; i < 36; i++){
		document.getElementById("picto"+i).innerHTML="";
	}
	for (var k = 0; k < len; k++) {
		var actualbutton = document.getElementById("picto"+k);
		actualbutton.innerHTML = imgPicto;
			if(actualbutton.hasAttribute('class')){
				actualbutton.removeAttribute('class');
				if ($('#admin').is(':checked')){
					actualbutton.setAttribute('onclick', 'goDelete(this.id)');
				}
				else{
					actualbutton.setAttribute('onclick', 'onClickPicto(this.id)');
				}
			}
			
 		imgPicto +='<div class="'+ category +'" id="test'+k+'"><img id="' + results.rows.item(k).id + '" class="picto" src="' + results.rows.item(k).picto + '"><p class="mot">' + results.rows.item(k).mot + '</p>'+'<img class="cross" src="icon/delete.png">'+'</div>';
 		actualbutton.innerHTML = imgPicto;
 		imgPicto="";


 	}
	for(var j = len; j < 36; j++){
		var actualbutton = document.getElementById("picto"+j);
		if(!actualbutton.hasAttribute('class')){
			actualbutton.setAttribute('class', 'dispo');
			actualbutton.setAttribute('onclick', 'displayDispo()');
		}
	}
	if ($('#admin').is(':checked')){
		$('.cross').css("display", "block");
	}
	else{
		$('.cross').css("display", "none");
	}
 }
 



 // Delete in DB
 //

function godeletemode(){
	$('.cross').css("display", "block");
	for (var i=0; i<36; i++){
		var actualbutton = document.getElementById("picto"+i);
		if (!actualbutton.hasAttribute('class')){
			actualbutton.setAttribute('onclick', 'goDelete(this.id)');
		}
		else {
			actualbutton.setAttribute('onclick', 'displayDispo()');		
		}
	}
	for (var j=0; j<18; j++){
		var actualfav = document.getElementById("fav"+j);
		actualfav.setAttribute('onclick', 'deleteFav(this.id)');
	}
	
}

function stopdeletemode(){
	$('.cross').css("display", "none");
	for (var i=0; i<36; i++){
		var actualbutton = document.getElementById("picto"+i);
		if (!actualbutton.hasAttribute('class')){
			actualbutton.setAttribute('onclick', 'onClickPicto(this.id)');
		}
		else{
			actualbutton.removeAttribute('onclick');
		}
	}
	for (var j=0; j<18; j++){
		var actualfav = document.getElementById("fav"+j);
		actualfav.setAttribute('onclick', 'onClickPictoTxt(this.id)');
	}
	
}

 function goDelete(id){
 	//alert("go delete");
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	if (confirm("Confirmer la suppression du picto ?")==true){
 		db.transaction(function(tx){querydbDelete(tx, id)}, errorCB);
 	}
 }

 function querydbDelete(tx, id){
 	//alert("going querydbdelete");
 	var button = document.getElementById(id);
 	var catElement = button.firstElementChild;
	var category = catElement.className;
	var imgElement = button.getElementsByTagName('img');
	var imgSrc = imgElement[0].id;
	tx.executeSql('DELETE FROM PICTOS WHERE id = ?', [imgSrc], onClickCategory(category), errorCB);
 }


// Set A propos
//

function setApropos(){
	var txtPicto = "";
	var nom = document.getElementById('nom');
	var prenom = document.getElementById('prenom');
	var birthday = document.getElementById('birthday');
	var tel = document.getElementById('tel');
	var des = document.getElementById('description');

	if(nom.value!="" && prenom.value!=""){
		txtPicto += "<p>Je m'appelle " + prenom.value + " " + nom.value + "</p>";
		document.getElementById("apropos0").innerHTML = txtPicto;
		txtPicto = "";
	}

	if(birthday.value!=""){
		txtPicto += "<p>J'ai " + CalculAge(birthday.value) + " ans</p>";
		document.getElementById("apropos1").innerHTML = txtPicto;
		txtPicto = "";
	}

	if(tel.value!=""){
		txtPicto += "<p>Mon numéro de téléphone est le " + tel.value + "</p>";
		document.getElementById("apropos2").innerHTML = txtPicto;
		txtPicto = "";
	}

	if(prenom.value!=""){
		txtPicto += "<p>Bonjour, je m'appelle " + prenom.value + ". Et toi ?";
		document.getElementById("apropos3").innerHTML = txtPicto;
		txtPicto = "";
	}

	if(des.value!=""){
		txtPicto += "<p>"+des.value+"</p>";
		document.getElementById("apropos4").innerHTML = txtPicto;
		txtPicto = "";
	}

}

function CalculAge(birthday) {
    var td=new Date();
    var dtn=birthday.split("-");
    var an=dtn[0];
    var mois=dtn[1];
    var day= dtn[2];
    var age=td.getFullYear()-an;
    var mMois=td.getMonth()-mois+1;  
    if(mMois < 0)
    {
        age=age-1;
    }  
    else
    {
        if(mMois == 0)
        {
            var mDate=td.getDay()-day+1;
            if(mDate < 0)
            {
                age=age-1;
            }        
        }
    }
    return(age);
}



//  Favoris
//

function setFav(){
	favOb.file(function(file) {
		var reader = new FileReader();
		var txtPicto = "";
		reader.onloadend = function(e) {
			var res=this.result.split("\\");
			for (var i=0; i<res.length-1; i++){
				var favToSet = document.getElementById("fav"+i); 
				txtPicto += '<p>'+res[i]+'</p><img class="cross" src="icon/delete.png">';
				favToSet.innerHTML = txtPicto;
				txtPicto = "";
			}
			for (var j=res.length-1; j<18; j++){
				document.getElementById("fav"+j).innerHTML="";
			}
			if ($('#admin').is(':checked')){
				$('.cross').css("display", "block");
			}
			else{
				$('.cross').css("display", "none");
			}
		};
		reader.readAsText(file);
	}, fail);

}

function isEmpty(txt){
	var compteur=0;
	for (var i=0; i<txt.length; i++){
		if (txt.charAt(i)==" "){
			compteur++;
		}
	}
	return(compteur==txt.length);
}


function newFav(){
	var toAdd = document.getElementById("saisie").value;
	if(!favOb){
		return;
	} 
	document.getElementById("saisie").value = "";
	favOb.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			var splitresult = this.result.split("\\");
			if(!isEmpty(toAdd) && splitresult.length<19){
				var favStr = splitresult.join("\\");
				toAdd += "\\";
				favStr += toAdd;
				favOb.createWriter(function(fileWriter) {       
					var blob = new Blob([favStr], {type:'text/plain'});
					fileWriter.write(blob);
				}, fail);
			}
			else if(isEmpty(toAdd)){
				alert("Un Favoris ne peut pas être vide");
			}
			else {
				alert("Trop de favoris, veuillez en supprimer un.");
			}
		};
		reader.readAsText(file);
	}, fail);
}


function deleteFav(id){
	if(!favOb){
		return;
	}
	var splitid = id.split("v");
	var pos = splitid[1];
	favOb.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			var splitresult = this.result.split("\\");
			splitresult.splice(pos, 1);
			var favStr = splitresult.join("\\");
			favOb.createWriter(function(fileWriter) {       
				var blob = new Blob([favStr], {type:'text/plain'});
				fileWriter.write(blob);
			}, fail);
		};
		reader.readAsText(file);
	}, fail);
}