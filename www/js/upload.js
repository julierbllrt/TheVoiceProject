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