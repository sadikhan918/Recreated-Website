$(document).ready(function() {
	$('.productContainer').mouseover(function() {
		var classList = $(this).attr("class");
		var grandchild = $(this).find("img");
		var name = (grandchild).attr("name")
		var newimg = "images2/" + name + 2 + ".jpg";
		
		if(classList.includes("hasHover"))
			$(grandchild).fadeOut(200, function() {
				grandchild.attr("src", newimg)
			}).fadeIn(200)

	});

	$('.productContainer').mouseleave(function() {
		var classList = $(this).attr("class");
		var grandchild = $(this).find("img");
		var name = (grandchild).attr("name");
		var newimg = "images2/" + name + 1 + ".jpg";
		
		if(classList.includes("hasHover"))
			$(grandchild).fadeOut(200, function() {
				grandchild.attr("src", newimg);
			}).fadeIn(200);
	});

});