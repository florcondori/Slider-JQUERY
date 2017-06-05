$(document).ready(function(){
	$(".slider-img div:gt(0)").hide();

	/*setInterval(function(){
		$("ul li:first-child").fadeOut(0).next("li").fadeIn(1000).end().appendTo("ul");
	}, 5000);*/

	var controles = $(".controles a");
	controles.each(function(index){
		$(this).on('click',function(e){
			e.preventDefault();
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			$(".slider-img div:nth-child("+(index+1)+")").fadeIn(1000);
		});
	});
});
