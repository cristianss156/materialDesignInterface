$(document).ready(function(){
	$(".tarjeta").click(function(){
		if($(this).height()==75){
			$(this).css({'zIndex':'5','boxShadow':'0px 5px 10px 5px rgba(0,0,0,0.16),0px 5px 10px 5px rgba(0,0,0,0.23)','height':'300px'});
			$(".tarjeta").not($(this)).css({'zIndex':'1','boxShadow':'0px 2px 5px 0px rgba(0,0,0,0.16),0px 2px 5px 0px rgba(0,0,0,0.23)','height':'75px'});
		}
		else if($(this).height()==300){
			$(this).css({'zIndex':'1','boxShadow':'0px 2px 5px 0px rgba(0,0,0,0.16),0px 2px 5px 0px rgba(0,0,0,0.23)','height':'75px'});
		}
	});
	$("#contenedorImg").click(function(){
		if($("#menu").marginLeft!=0){
			$("#contenedorMenu").css({'display':'block'});
			setTimeout(function(){$("#menu").css({'marginLeft':'0'});},100);
		}
	});
	$("#contenedorMenu").click(function(){
		$("#menu").css({'marginLeft':'-27%'});
		setTimeout(function(){$("#contenedorMenu").css({'display':'none'});},500);
	});
});

$(window).scroll(function(){
	if($(this).scrollTop()>=192){
		$("header").css({'marginTop':'-192px'});
		$("#titulo").css({'marginTop':'205px','fontSize':'24px'});
		$("#contenedorArriba").css({'bottom':'25px'});
		}
	else if($(this).scrollTop()===0){
		$("header").css({'marginTop':'0'});
		$("#titulo").css({'marginTop':'160px','fontSize':'56px'});
		$("#contenedorArriba").css({'bottom':'-70px'});
	}
});

$(window).resize(function(){
	if($(window).width()<767){
		$(".tarjeta").css({'marginLeft':'0','width':'100%'});
	}
	else if($(window).width()>767){
		$(".tarjeta").css({'marginLeft':'15%','width':'70%'});
	}
});

//función para volver arriba en la aplicación
function arriba(){
	$("html, body").animate({scrollTop:"0px"}, 250);
}