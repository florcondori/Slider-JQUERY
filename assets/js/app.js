$(document).ready(function(){
	$("ul li:gt(1)").hide();

	setInterval(function(){
		$("ul li:first-child").fadeOut(0).next("li").fadeIn(1000).end().appendTo("ul");
	}, 4000);
});
