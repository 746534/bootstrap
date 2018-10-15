$(function(){
	var j=1;
	$('.wrap .header .visible-xs-block').click(
		function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
			if(j){
				$('.header .box').css('display','block')
				j=0;
			}else if(j==0){
				$('.header .box').css('display','none')
				j=1;
			}
		}
		)
})