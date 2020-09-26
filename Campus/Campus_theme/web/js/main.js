require(['jquery'],
    function($) {
        /********************Footer Open Close Menu on Mobile******************************/
        $('.footer-menu .title .open').click( function() {
                if( $( this ).hasClass('active') ) {
                    $(this).removeClass('active');
                    $(this).closest('.footer-menu').find('.menu').removeClass('active');
                } else {
                    $(this).addClass('active');
                    $(this).closest('.footer-menu').find('.menu').addClass('active');
                }
        } );

        //******************************Transfer logo to Darken_Part on Mobile ***************************************/
        jQuery(window).load(function ()  {
            var window_width = jQuery(window).width();
            if (window_width <=767) {
                jQuery('.darken_part_container').find('.left_links').after(jQuery('.logo'));
            }else {
                jQuery('.middle_left_part').prepend(jQuery('.logo'));
            }
        });
        jQuery(window).resize(function ()  {
            var window_width = jQuery(window).width();
            if (window_width <=767) {
                jQuery('.darken_part_container').find('.left_links').after(jQuery('.logo'));
            }else {
                jQuery('.middle_left_part').prepend(jQuery('.logo'));
            }
        });
        //******************************Transfer social icons to mobile menu on Mobile ***************************************/
        jQuery(window).load(function ()  {
            var window_width = jQuery(window).width();
            if (window_width <=767) {
                jQuery('.social-icons-mobile').prepend(jQuery('.darken_part_container').find('a[target="_blank"]'));
            }else {
                jQuery('header .menu.social-menu').prepend(jQuery('.header-mobile-menu').find('a[target="_blank"]'));
            }
        });
        jQuery(window).resize(function ()  {
            var window_width = jQuery(window).width();
            if (window_width <=767) {
                jQuery('.social-icons-mobile').prepend(jQuery('.darken_part_container').find('a[target="_blank"]'));
            }else {
                jQuery('header .menu.social-menu').prepend(jQuery('.header-mobile-menu').find('a[target="_blank"]'));
            }
        });
        //******************************Open Close MobileMenu ***************************************/
        $('.gamburger').click( function() {
            var window_width = jQuery(window).width();
            if (window_width <=767){
                if( $( '.main_navigation_menu').hasClass('active') ) {
                    $('.main_navigation_menu').removeClass('active');
                } else {
                    $('.main_navigation_menu').addClass('active');
                }
            }
        });
        $('.back-button').click( function() {
            var window_width = jQuery(window).width();
            if (window_width <=767){
              if( $( '.main_navigation_menu').find('li.level1>ul').hasClass('active')){
                  var link_text = $( '.main_navigation_menu').find('ul.level0.active').siblings('a').find('span').text();
                  $( '.main_navigation_menu').find('li.level1>ul').removeClass('active');
                  $('.header-mobile-menu').find('.category-title span').text(link_text);
              }else {
                  if( $( '.main_navigation_menu').find('li.level0>ul').hasClass('active')){
                      var link_text = '';
                      $( '.main_navigation_menu').find('li.level0>ul').removeClass('active');
                      $('.header-mobile-menu').find('.category-title span').text(link_text);
                  }else {
                      $('.main_navigation_menu').removeClass('active');
                  }
              }
            }
        });
        //******************************Open Close Mobile SubMenu ***************************************/
        $('li.level0 ').find('a').click( function(event) {
            if($(this).closest('li').hasClass('parent')){
                var window_width = jQuery(window).width();
                if (window_width <=768){
                    event.preventDefault();
                    var link_text = $(this).find('span').text();
                    $(this).siblings('ul').addClass('active');
                    $('.header-mobile-menu').find('.category-title span').text(link_text);
                }
            }
        });
        //******************************Open Close Filter on Mobile ***************************************/
        $('.open-filter').click( function() {
                var window_width = jQuery(window).width();
                if (window_width <=768){
                    $(this).addClass('hidden');
                    $('.close-filter').removeClass('hidden');
                    $('.sidebar').find('.filter').addClass('open');
                }
        });
        $('.close-filter').click( function() {
            var window_width = jQuery(window).width();
            if (window_width <=768){
                $(this).addClass('hidden');
                $('.open-filter').removeClass('hidden');
                $('.sidebar').find('.filter').removeClass('open');
            }
        });
        //******************************Open Close Contact Form ***************************************/
        $('.button-form-wrapper').find('.button').click( function() {
            if( $(this).hasClass('active')){

            }else{
                $('.button-form-wrapper').addClass('active');
                $(this).addClass('active');
                $('.form-contact-wrapper').addClass('active');
            }
        });
        $('.form-contact-wrapper').find('.form-close').click( function() {
            $('.button-form-wrapper').removeClass('active').find('.button').removeClass('active');
            $('.form-contact-wrapper').removeClass('active');
        });
        // //******************************Set class select swatch-option-link-layered color ***************************************/
        // $('.stickly_filter_button_wrap').click(function ()  {
        //     if ( $('.color').hasClass('selected')) {
        //         $(this).parent('.swatch-option-link-layered').addClass('selected');
        //     }else {
        //         $(this).parent('.swatch-option-link-layered').removeClass('selected');
        //     }
        // });
        // $( window ).unload(function() {
        //     return "Bye now!";
        // });
        // if (sessionStorage.getItem("is_reloaded")) {
        //     console.log('Страница перезагружена');
        // }
        //
        // if ( $('.color').hasClass('selected')) {
        //     $(this).parent('.swatch-option-link-layered').addClass('selected');
        // }else {
        //     $(this).parent('.swatch-option-link-layered').removeClass('selected');
        // }


    });

/********************************Sorter Select***********************************/
require(['jquery','niceselect'],
    function($) {
        $('.toolbar select.toolbar_sorter').each(function(){
            $(this).niceSelect();
            $(this).on('change', function(){
                var select_value = $(this).val();
                console.log(select_value);
                if(select_value != '') {
                    window.location.href = select_value;
                }
            });
        });

        $('#limiter').niceSelect();
        $('.wishlist-toolbar').find('#limiter').niceSelect();

    }
);

/********************************FloatingScroll Compare page***********************************/
require(['jquery','floatingscroll'],
    function($) {
        $(".comparison.right").floatingScroll();
    }
);

// /********************************FloatingScroll Compare page***********************************/
// require(['jquery','mCustomScrollbar'],
//     function($) {
//         $(".comparison.right").mCustomScrollbar();
//     }
// );


/******************************************Make styckly filter apply button*****************************************/
require(['jquery'],
	function($) {
		$('.filter-options-content a').each(function() {
			$(this).click(function(){
				if($('.stickly_filter_button_wrap').hasClass('hidden_button')) {
					$('.stickly_filter_button_wrap').removeClass('hidden_button');
				}

				var link_height = $(this).height();
				var element_height = $('.stickly_filter_button_wrap').outerHeight();


				if(element_height >= link_height) {
					var margin_top = -(link_height + 8);
				} else {
					margin_top =  0;
				}

				$('.stickly_filter_button_wrap').css({
					'top': $(this).offset().top - $('.sidebar .filter-content').offset().top,
					'margin-top':  margin_top
				});
                
			});
		});

		$(document).on('click', '.stickly_filter_button', function(e){
			e.preventDefault();
			$('.am_shopby_apply_filters button').trigger('click');
		});

        /********************Open Close Filner Option Content******************************/
        $('.filter-options-title').click( function() {
            if( $( this ).hasClass('active') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        } );
        jQuery(window).load(function ()  {
            $('.filter-options-title:nth-child(1)').addClass('active');
            $('.filter-options-title:nth-child(3)').addClass('active');
            $('.filter-options-title:nth-child(5)').addClass('active');
            $('.filter-options-title:nth-child(7)').addClass('active');
        });

	}
);