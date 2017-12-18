
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
	setApropos();
	setFav();
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
				if (document.getElementById("deletemode").innerHTML=="GO DELETE"){
					actualbutton.setAttribute('onclick', 'onClickPicto(this.id)');
				}
				else{
					actualbutton.setAttribute('onclick', 'goDelete(this.id)');
				}
			}
 		imgPicto +='<div class="'+ category +'" id="test'+k+'"><img id="' + results.rows.item(k).id + '" class="picto" src="' + results.rows.item(k).picto + '"><p class="mot">' + results.rows.item(k).mot + '</p>'+'<img class="cross" src="img/croix png projet.png">'+'</div>';
 		actualbutton.innerHTML = imgPicto;
 		imgPicto="";

 	}
	for(var j = len; j < 36; j++){
		var actualbutton = document.getElementById("picto"+j);
		if(!actualbutton.hasAttribute('class')){
			actualbutton.removeAttribute('onclick');
			actualbutton.setAttribute('class', 'dispo');
		}
 	}
 	if(document.getElementById("deletemode").innerHTML=="STOP DELETE"){
 		$('.cross').css("display", "block");
 	}
 	else{
 		$('.cross').css("display", "none");
 	}

 }
 



 // Delete in DB
 //

function godeletemode(){
	var buttondelete = document.getElementById("deletemode");
	buttondelete.setAttribute('onclick', 'stopdeletemode()');
	buttondelete.innerHTML="STOP DELETE";
	$('.cross').css("display", "block");
	for (var i=0; i<36; i++){
		var actualbutton = document.getElementById("picto"+i);
		if (actualbutton.className!="dispo"){
			actualbutton.setAttribute('onclick', 'goDelete(this.id)');
		}
	}
	
}

function stopdeletemode(){
	var buttondelete=document.getElementById("deletemode");
	buttondelete.setAttribute('onclick', 'godeletemode()');
	buttondelete.innerHTML="GO DELETE";
	$('.cross').css("display", "none");
	for (var i=0; i<36; i++){
		var actualbutton = document.getElementById("picto"+i);
		if (actualbutton.className!="dispo"){
			actualbutton.setAttribute('onclick', 'onClickPicto(this.id)');
		}
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


 $('#admin').change(function() {
	  if ($(this).is(':checked')) {
	    $('#deletemode').css("display","block");
	  } else {
	    $('#deletemode').css("display","none");
	  }
	});


// Set A propos
//

function setApropos(){
	var txtPicto = "";
	var nom = document.getElementById('nom');
	var prenom = document.getElementById('prenom');
	var birthday = document.getElementById('birthday');
	var tel = document.getElementById('tel');
	var des = document.getElementById('description');

	if(nom.value!=undefined && prenom.value!=undefined){
		txtPicto += "Je m'appelle " + prenom.value + " " + nom.value;
		document.getElementById('apropos0').innerHTML = '<p>' + txtPicto + '</p>';
		txtPicto = "";
	}

	if(birthday.value!=undefined){
		txtPicto += "J'ai ";
		document.getElementById('apropos1').innerHTML = '<p>' + txtPicto + '</p>';
		txtPicto = "";
	}

	if (tel!=undefined){
		txtPicto += "Mon numéro de téléphone est le " + tel.value;
		document.getElementById('apropos2').innerHTML = '<p>' + txtPicto + '</p>';
		txtPicto = "";
	}

}

function CalculAge(birthday) {
    var td=new Date();
    var dtn=birthday;
    var an=dtn.substr(6,4);
    var mois=dtn.substr(3,2);
    var day= dtn.substr(0,2);
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
    return age;
}



//  Favoris
//

function setFav(){
	favOb.file(function(file) {
		var reader = new FileReader();
		var txtPicto = "";

		reader.onloadend = function(e) {
			var res=this.result.split("\n");
			for (var i=0; i<res.length; i++){
				var favToSet = document.getElementById("fav"+i); 
				txtPicto += '<p>'+res[i]+'</p>';
				favToSet.innerHTML = txtPicto;
				txtPicto = "";
			}
		};
		reader.readAsText(file);
	}, fail);
}


function newFav(){
	var toAdd = document.getElementById();


	if(!favOb){
		return;
	} 
	favOb.createWriter(function(fileWriter) {       
		var blob = new Blob([str], {type:'text/plain'});
		fileWriter.write(blob);
	}, fail);
}