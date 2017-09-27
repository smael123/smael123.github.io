$(function () {	
	$("#page-nav a").each(function (index, val) {
		var hrefVal = $(val).attr('href');
		
		$(val).click(function() {
			$('body').scrollTo(hrefVal, 900);
		})
	})
})