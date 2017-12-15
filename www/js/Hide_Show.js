
$(document).ready(function(){
	i=0;
 
 	$('#home').click(function(){
 		$('#tablecate'+i).css("display", "none");
 		$('#tablepicto'+n).css("display", "none");
 		$('#gauche button').css("display", "none");
 		$('#gauche img').css("display", "none");
 		$('#droite button').css("display", "table");
 		$('#droite img').css("display", "table");
 		$('#tablecate0').css("display", "table");	
		$('#corps').css("display","none");
		$('#form_saisie').css("display","flex");
 		i=0;
 		n=0;
 	});

	$('.categorie').click(function(){
		$('#gauche button').css("display","none");
		$('#gauche img').css("display", "none");
		$('#tablecate'+i).css("display", "none");
		n=0;
		
		$('#tablepicto'+n).css("display","table");
		$('#droite img').css("display", "table");
		$('#droite button').css("display","table");
	});
	
	$('#droite').click(function(){
		if ($('#tablecate'+i).css("display")=="table"){
			$('#tablecate'+i).css("display", "none");
			i=i+1;
			$('#tablecate'+i).css("display", "table");
			$('#gauche img').css("display", "table");
			$('#gauche button').css("display","table");
			if (i==2){
				$('#droite button').css("display","none");
				$('#droite img').css("display", "none");
			}
		}
		else{
			$('#tablepicto'+n).css("display", "none");
			n=n+1;
			$('#tablepicto'+n).css("display", "table");
			$('#gauche img').css("display", "table");
			$('#gauche button').css("display","table");
			if (n==2){
				$('#droite button').css("display","none");
				$('#droite img').css("display", "none");
			}
		}

		
	});
	
	$('#gauche').click(function(){
		if($('#tablecate'+i).css("display")== "table"){
			$('#tablecate'+i).css("display", "none");
			i=i-1;
			$('#tablecate'+i).css("display", "table");
			$('#droite img').css("display", "table");
			$('#droite button').css("display","table");
			if (i==0){
				$('#gauche button').css("display","none");
				$('#gauche img').css("display", "none");
			}
		}
		else{
			$('#tablepicto'+n).css("display", "none");
			n=n-1;
			$('#tablepicto'+n).css("display", "table");
			$('#droite img').css("display", "table");
			$('#droite button').css("display","table");
			if (n==0){
				$('#gauche button').css("display","none");
				$('#gauche img').css("display", "none");
			}
		}
	});

});

function dispoPicto(){
	$('#tablepicto'+n).css("display", "none");
	$('#droite button').css("display","none");
	$('#droite img').css("display", "none");
	$('#gauche button').css("display","none");
	$('#gauche img').css("display", "none");
	$('#form_saisie').css("display","none");
	
	$('#corps').css("display","flex");

};