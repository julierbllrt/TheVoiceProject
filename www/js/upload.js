var category;
$(document).ready(function(){
	var txt = "";
    var image = "";
	$('.categorie').click(function(){
		    category = this.innerHTML;
            alert(category);
		$('.dispo').click(function(){
            alert(category);
            //document.location.href="upload.html";
            sleep(2);
            alert(category);
            $('.valider').click(function(){
            	    alert("autre chose");
				    var signification = document.getElementById("signification");
				    var fichier = document.getElementById("files");
				    txt = signification.value;
				    image = fichier.files[0];
				    var myObject, imagecopy;
				    myObject = new ActiveXObject("image.png");
				    imagecopy = myObject.file.copy("img/"+ this.innerHTML +"");
            });           
        });
	});
});


 // Insert DB
 //
 
 function goInsert(picto, mot){
 	var db = window.openDatabase("Database", "1.0", "Picto Demo", 200000);
 	db.transaction(function(tx){insertDb(tx, picto, mot)}, errorCB);
 }
 
 function insertDb(tx, picto, mot){
 	tx.executeSql('INSERT INTO PICTOS(picto,mot) VALUES(?,?)', [picto, mot], onClick);
 }


function sleep(seconds){
	var waitUntil = new Date().getTime() + seconds*1000;
	while (new Date().getTime() < waitUntil) true;
}
/*var category;
$(document).ready(function(){
	var txt = "";
    var image = "";
	$('.categorie').click(function(){
		    category = this.innerHTML;
            alert(category);
		$('.dispo').click(function(){
            alert(category);
            document.location.href="upload.html";
            sleep(2);
            alert(category);
            $('.valider').click(function(){
            	    alert("autre chose");
				    var signification = document.getElementById("signification");
				    var fichier = document.getElementById("files");
				    txt = signification.value;
				    image = fichier.files[0];
				    var myObject, imagecopy;
				    myObject = new ActiveXObject("image.png");
				    imagecopy = myObject.file.copy("img/"+ this.innerHTML +"");
            });           
        });
	});
});*/