function removeTelegramAds(){
	
	jQuery("#checkout-container").remove();
	jQuery(".tp-modal").remove();
	jQuery(".tp-backdrop").remove();
	jQuery("body").removeClass('tp-modal-open');
	
}

jQuery(function() {
setInterval(function(){ 
   removeTelegramAds()
}, 5000);
});