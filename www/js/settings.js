$(document).ready(function(){
	i=0;
	$('#nom').value;
	$('#prenom').value;
	$('#birthday').value;
	$('#tel').value;
	$('#description').value;

	
 
 	$('#set').click(function(){
		alert("click");
		var filepath = "C:\Users\ISEN\Documents\Projet_S1M1\TheVoiceProject\www\test.txt";
 		var nom =document.getElementById('nom').value;
		alert(nom);
		writeTextFile(filepath, nom);
 		$('#prenom');
		$('#birthday');
		$('#tel');
		$('#description');
		
 	});
	
	
});

jQuery(function($) {
       $('#form_addjts').submit(function(){
              writeToFile({
			id: $(this).find('.id').val(), 
			content: $(this).find('.content').val()
              });
              return false;
       }); 
       function writeToFile(data){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var fh = fso.OpenTextFile("D:\\data.txt", 8);
            fh.WriteLine(data.id + ',' + data.content);
            fh.Close(); 
       } 
}); 

////////////////////////////////////////////////////

function writeTextFile(filepath, output) {
	alert("write");
	var txtFile = new File(filepath);
	txtFile.open("w"); 
	alert("open");
	txtFile.writeln(output);
	alert("write");
	txtFile.close();
	alert("close");
}

////////////////////////////////////////////////////

function readTextFile(filepath) {
	var str = "";
	var txtFile = new File(filepath);
	txtFile.open("r");
	while (!txtFile.eof) {
		// read each line of text
		str += txtFile.readln() + "\n";
	}
	return str;
}