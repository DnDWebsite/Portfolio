$(document).ready(function(){
	
	
	$('.language').click(function(){
		
		var lang=$(this).data("language");
		$.ajax({ type:'POST',
                     url:'langAjax.php',
                     dataType:'json',
                     data:{'lang':lang},
                     success:function(data){
						 alert('radi');
						 var i=0;
						var key;
                        $.each(data, function(key,value){
							alert(value.key_id);
						});
					 },
					error: function(){alert('ne radi');}
                   
          // document.getElementById("account_grid").innerHTML=data.tab;
                      
                 });
	});
});