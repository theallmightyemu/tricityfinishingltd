
$(document).ready(function() {				
	$('#thumbs').galleriffic({
		imageContainerSel:      '#slideshow',
		controlsContainerSel:   '#controls',
		renderSSControls: false,
		nextLinkText: '<img alt="prev" src="../images/next.gif" />',
		prevLinkText: '<img alt="prev" src="../images/previous.gif" />',
		preloadImage: '../images/loading.gif',
		advOnClick:    false
	});

	$('a.advance-link').each(function(){
		$(this).click(function(event){
			event.preventDefault();
		})
	});
});

