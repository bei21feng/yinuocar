$(function(){
	$('#banner-left img').animate({right:'-50%'}, 800);
	$('#banner-right img').animate({left:'-50%'}, 800);
})
$(document).ready(function() {
	var resizeText = function () {
		var preferredFontSize = 140; // %
		var preferredSize = 1024 * 768;
		var currentSize = $(window).width() * $(window).height();
		var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
		var newFontSize = preferredFontSize * scalePercentage;
		$("body").css("font-size", newFontSize + '%');
	};
	$(window).bind('resize', function() {
		resizeText();
	}).trigger('resize');
	
});
function resize() {
	var ratio = $(window).width() / 1219 * 0.9;
	console.log($(window).width());
	$("#back-fix img").css({
		transform: "scale(" + ratio + ")"
	});
}
$(window, document).resize(function () {
	resize();
});

