var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
jQuery functions for the Front end area
*/
jQuery(document).ready( function( $ ) {
	var vdayRoses = 0;
	// Valentine's Day Classic
	$(".valentines-day-classic").prepend("<div class='heart'></div>");
	
	//valentine's Day Rose
	if( $(".valentines-day-roses").length > 0 ){
		$(".valentines-day-roses").append("<div class='letter-box'></div>").find("input[type='text'], input[type='password'], input[type='email']").parent().parent().appendTo($(".letter-box"));
	}
	
	
	//valentine's Day Birds
	$('.valentines-day-birds').wrap("<div class='valentines-day-birds-container'></div>");
	$('.valentines-day-birds').prepend("<div class='bg-header'></div>").append("<div class='bg-bottom'></div>");
	
	// Valentine's Day Blue Birds
	$('.valentines-day-blue-birds').prepend('<div class="header"></div>').append('<div class="footer"></div>');

	
	// Xmas Classic
	$('.christmas-classic').wrap("<div class='christmas-classic-container'></div>");
	$('.christmas-classic').prepend('<div class="header"></div><div class="left"></div>').append('<div class="footer"></div>');
	
	// Xmas Red
	$('.christmas-red').wrap("<div class='christmas-red-container'></div>");
	$('.christmas-red').prepend('<div class="header"></div><div class="left"></div>').append('<div class="footer"></div>');
	$('.christmas-red .wpcf7-radio .wpcf7-list-item').first().addClass('active');
	$('.christmas-red .wpcf7-radio .wpcf7-list-item input').on( 'click', function() {
		$('.christmas-red .wpcf7-radio .wpcf7-list-item').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	$('.christmas-red .wpcf7-checkbox .wpcf7-list-item input').on( 'click', function() {
		$(this).parent().toggleClass('active');
	});
		
	// Xmas Simple
	$('.christmas-simple').wrap("<div class='christmas-simple-container'></div>");
	$('.christmas-simple').prepend( '<div class="header"></div><div class="middle"></div><div class="ribbon"></div>' ).append('<div class="footer"></div>');

});

}
/*
     FILE ARCHIVED ON 01:13:37 Mar 18, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:28:49 Oct 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 432.062
  exclusion.robots: 0.308
  exclusion.robots.policy: 0.295
  RedisCDXSource: 8.544
  esindex: 0.01
  LoadShardBlock: 400.628 (3)
  PetaboxLoader3.datanode: 337.748 (5)
  CDXLines.iter: 18.533 (3)
  load_resource: 264.368 (2)
  PetaboxLoader3.resolve: 121.074 (2)
*/