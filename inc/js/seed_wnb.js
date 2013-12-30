jQuery(document).ready(function($){
	var button = '';
	if(seed_wnb_js_localize.button_label != '' && seed_wnb_js_localize.button_link != ''){
		var button = '<a href="'+seed_wnb_js_localize.button_link+'" target="'+seed_wnb_js_localize.button_target+'"><span class="wnb-bar-button">'+seed_wnb_js_localize.button_label+'</span></a>';
	}
	$('body').prepend('<div id="wnb-bar"><a href="' + seed_wnb_js_localize.button_link + '" target="'+seed_wnb_js_localize.button_target+'">' + seed_wnb_js_localize.msg + '</a></div>');

	var margin_push = [
		'.navbar-wrapper',
		'.content'
	]

	for(var i in margin_push) {
		var existing = $(margin_push[i]).css('margin-top');
		$(margin_push[i]).css('margin-top', (parseFloat(existing) + 25) + 'px');
	}
});
