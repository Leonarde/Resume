$(function() {
	
	$('#hire-trigger').click(function(event) {
		$('.control-bar').addClass('control-bar-full');
	});
	$('#giveup-trigger').click(function(event) {
		$('.control-bar').removeClass('control-bar-full');
	});

});