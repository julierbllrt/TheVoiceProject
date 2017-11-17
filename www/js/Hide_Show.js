$(document).ready(function(){
	i=0;

	
 
 
	
	$('.categorie').click(function(){
		//console.log(this.innerHTML);
		//onClickCategory(this.innerHTML);
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