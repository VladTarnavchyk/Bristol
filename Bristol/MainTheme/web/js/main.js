// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {

      // Call our function and pass any params we received
      fn(...params);
    });

  }
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();


// Header main menu

require(['jquery'],
	function($) {
		//Toogle tab on Home Page
		$(window).load(function(){
			$('.tabs_top_block').find('.tab_title_item:first-child').addClass('active');
			dataCatBlockLoad = $('.tabs_top_block').find('.tab_title_item:first-child').find('a').attr('data-cat-block');
			$('.tabs_content_block').find('.tab_content_item').each(function(){
				var dataAttr = $(this).attr('data-cat-block');
				if( dataAttr == dataCatBlockLoad  ){
					$('.tabs_content_block').find('.tab_content_item').removeClass('active');
					$(this).addClass('active');
				}
			});
		});
		$('.tabs_top_block').find('.tab_title_item').click(function(){
			dataCatBlock = $(this).find('a').attr('data-cat-block');
			$('.tabs_top_block').find('.tab_title_item').removeClass('active');
			$(this).addClass('active');
			$('.tabs_content_block').find('.tab_content_item').each(function(){
				var dataAttr = $(this).attr('data-cat-block');
				if( dataAttr == dataCatBlock  ){
					$('.tabs_content_block').find('.tab_content_item').removeClass('active');
					$(this).addClass('active');
				}
			});
		});

		// show/hide header parent nav Items

		// tabs correct check function

		// $('.navigation > ul > li').click(function(){
		//   var tab_id = $(this).attr('data-tab');
		//
		//   $('.navigation > ul > li').removeClass('active');
		//   $('.tab-content').removeClass('current');
		//
		//   $(this).addClass('current');
		//   $("#"+tab_id).addClass('current');
		// })

		$('.navigation > ul > li.parent').click( function() {

		  $( this ).toggleClass( 'active', function() {
			if( $( this ).hasClass('active') ) {
			  $('.navigation > ul > li.parent').removeClass('active');
			  $( this ).addClass('active');
			  $( this ).find( "ul.level0.submenu" ).css({ 'display': 'flex' });
			} else {
				$( this ).find( "ul.level0.submenu" ).css({ 'display': 'none' });
			}
		  } );
		} );

		/*********************************Show header search form************************************/
		$('.header_icons > .search_form').click(function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.header_search_form_wrap').hide();
			} else {
				$(this).addClass('active');
				$('.header_search_form_wrap').show();
			}
		});
		
		/*********************************Move responsive blocks******************************/
		function moveResponsiveBlocks() {
			var window_width = $(window).width();
			if(window_width < 993) {
				$('.languages_container').prependTo('.mobile_menu_languages');
				$('.header_menu').insertAfter('.navigation > ul');
				
				$('.product-info-price').insertBefore('.product_main_info_wrapper');
			} else {
				$('.languages_container').insertAfter('.header_contacts');
				$('.header_menu').insertBefore('.header_contacts');
				
				$('.product-info-price').prependTo('.product-options-bottom');
			}
		}
		moveResponsiveBlocks();
		
		$(window).resize(function(){
			moveResponsiveBlocks();
		});
		
		/******************************Show/Hide mobile menu**********************************/
		$('.show_mobile_menu_btn').click(function(e){
			e.preventDefault();
			$('.navigation').addClass('visible');
		});
		$('.mobile_menu_close_btn').click(function(e){
			e.preventDefault();
			$('.navigation').removeClass('visible');
		});
		
	}
);

/********************************Sorter Select***********************************/
require(['jquery', 'niceselect'],
	function($) {
		$('.top_toolbar select.toolbar_sorter').each(function(){
			$(this).niceSelect();
			$(this).on('change', function(){
				var select_value = $(this).val();
				console.log(select_value);
				if(select_value != '') {
					window.location.href = select_value;
				}
			});
		});
	}
);

/***********************************Scrollbar for filter options**********************************/
require(['jquery', 'nicescroll'],
	function($) {
		/**************************************Show/Hide filter content*************************************/
		$('.filter-options-title').each(function(){
			$(this).click(function(){
				if(!$(this).hasClass('filter_slider_item')) {
					if($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).next().slideUp();
						$(this).next().find('.fiter_item_content').niceScroll().remove();
					} else {
						$('.filter-options-title').removeClass('active');
						$('.filter-options-title').not('.filter_slider_item').next().slideUp();
						$('.filter-options-title').not('.filter_slider_item').next().find('.fiter_item_content').niceScroll().remove();
						$(this).addClass('active');
						$(this).next().slideDown();
						$(this).next().find('.fiter_item_content').niceScroll("ol.items", {
							cursorwidth: "10px",
							autohidemode: false
						});
					}
				}
			});
		});
	}
);