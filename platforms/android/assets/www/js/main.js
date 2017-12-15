function errorCB(err) {
 	alert("Error processing SQL: "+err.code);
 }




// Click Picto
//

function onClickPicto(elmnt) {
	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
	db.transaction(function(tx){queryDbClickPicto(tx, elmnt)}, errorCB);
}

function queryDbClickPicto(tx, id) {
	var q = 'SELECT * FROM PICTOS WHERE id LIKE ? ';
	var button = document.getElementById(id);
	var imgElement = button.getElementsByTagName('img');
	var imgSrc = imgElement[0].id;
	tx.executeSql(q, [imgSrc], querySuccessClickPicto, errorCB);
}

function querySuccessClickPicto(tx, results) {
	var txtPicto = " " + results.rows.item(0).mot;
	blabla(txtPicto);
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
 	var q = 'SELECT * FROM PICTOS WHERE picto LIKE ?';
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
			actualbutton.setAttribute('onclick','dispoPicto()');
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


 // Défilement
 //

 /*function defilement(){
 	while (var i < 2){


 	}
 }*/
