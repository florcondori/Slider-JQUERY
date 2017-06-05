$(document).ready(function(){
	$(".slider-img div:gt(0)").hide();

	setInterval(function(){
		$(".slider-img div:first-child").fadeOut(0).next("div").fadeIn(1000).end().appendTo(".slider-img");
	}, 5000);

	var controles = $(".controles a");
	controles.each(function(index){
		$(this).on("click",function(e){
			e.preventDefault();
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			$(".slider-img div:nth-child("+(index+1)+")").siblings().hide();
			$(".slider-img div:nth-child("+(index+1)+")").fadeIn(1000);
		});
	});

	var prev = $("#prev");
	var next = $("#next");

	prev.on("click", function(e){
		e.preventDefault();
		$(".slider-img div:first-child").fadeOut(0).end();
		$(".slider-img div:last-child").fadeIn(600);

	});

	next.on("click", function(e){
		e.preventDefault();
		$(".slider-img div:first-child").fadeOut(0).next("div").fadeIn(600).end().appendTo(".slider-img");
				
	});
});
