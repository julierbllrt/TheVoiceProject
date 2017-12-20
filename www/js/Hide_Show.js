$(document).ready(function(){
	i=0;
	n=0;

	
 
 	$('#home').click(function(){
		$('#tablepicto'+n).css("display", "none");
		$('#tablecate'+i).css("display", "none");
		
		$('#form_saisie').css("display","flex");
		$('#page').css("position","fixed");
		$('#droite button').css("display", "table");
 		$('#droite img').css("display", "table");
 		$('#tablecate0').css("display", "table");
		
 		$('#tablefav'+i).css("display", "none");
 		$('#tableapropos').css("display", "none");
 		
 		
 		$('#gauche button').css("display", "none");
 		$('#gauche img').css("display", "none");
		$('#corps').css("display","none");
		$('#form_profil').css("display","none");
 		
 		i=0;
 		n=0;
 	});

 	$('#Favoris').click(function(){
		$('#tablecate0').css("display", "none");
		$('#tablefav0').css("display", "table");
		$('#droite button').css("display", "display");
 		$('#droite img').css("display", "display");
	});
 	
	$('#a_propos').click(function(){
		$('#tablecate0').css("display", "none");
		$('#tableapropos').css("display", "table");
		$('#droite button').css("display", "none");
 		$('#droite img').css("display", "none");
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
		else if ($('#tablepicto'+n).css("display")=="table"){
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
		else{
			$('#tablefav'+i).css("display", "none");
			i=i+1;
			$('#tablefav'+i).css("display", "table");
			$('#gauche img').css("display", "table");
			$('#gauche button').css("display","table");
			if (i==2){
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
		else if ($('#tablepicto'+n).css("display")== "table"){
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
		else{
			$('#tablefav'+i).css("display", "none");
			i=i-1;
			$('#tablefav'+i).css("display", "table");
			$('#droite img').css("display", "table");
			$('#droite button').css("display","table");
			if (i==0){
				$('#gauche button').css("display","none");
				$('#gauche img').css("display", "none");
			}
		}
	});

	$('#admin').change(function() {
		alert("changing");
		if ($(this).is(':checked')){
			alert("godelete");
			godeletemode();
		}
		else {
			alert("stopdelete");
			stopdeletemode();
		}
	});

	$('#settings').click(function(){
		$('#form_profil').css("display","flex");
		$('#page').css("position","static");

		$('#tablefav').css("display", "none");
 		$('#tableapropos').css("display", "none");
		
		$('#tablecate'+i).css("display", "none");
		$('#tablepicto'+n).css("display", "none");
		$('#droite button').css("display","none");
		$('#droite img').css("display", "none");
		$('#gauche button').css("display","none");
		$('#gauche img').css("display", "none");
		$('#form_saisie').css("display","none");		
	});
	
});

function displayDispo(){
	$('#page').css("position","static");
	$('#corps').css("display","flex");
	
	$('#tablepicto'+n).css("display", "none");
	$('#droite button').css("display","none");
	$('#droite img').css("display", "none");
	$('#gauche button').css("display","none");
	$('#gauche img').css("display", "none");
	$('#form_saisie').css("display","none");
	
}