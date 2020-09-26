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
  
require(['jquery'],
    function($) {
        /********************Header open close catalog menu******************************/
        $('nav.navigation li.level0.first>a').click( function(e) {
            e.preventDefault();
            if( $( this ).hasClass('open') ) {
                $(this).removeClass('open');
                $(this).siblings('.level0.submenu').removeClass('open');
            } else {
                $(this).addClass('open');
                $(this).siblings('.level0.submenu').addClass('open');
            }
        } );
        /********************Header mobile open close catalog submenu******************************/
        $('nav.navigation li.level1 .toggle-icon').click( function() {
            if( $( this ).hasClass('open') ) {
                $(this).removeClass('open');
                $(this).siblings('.submenu').removeClass('open');
            } else {
                $(this).addClass('open');
                $(this).siblings('.submenu').addClass('open');
            }
        } );
        /******************** close catalog menu******************************/
        $(document).click( function(e) {
            var target = $(e.target);
            if ( target.is($( 'nav.navigation .toggle-icon')) ) return;
            if (target.is($( 'nav.navigation li.level0.first>a')) ) return;

            if( $( 'nav.navigation li.level0.first>a').hasClass('open') ) {
                $('nav.navigation li.level0.first>a').removeClass('open');
                $('nav.navigation li.level0.first>a').siblings('.level0.submenu').removeClass('open');
            }
        });
        /********************Header open mobile menu******************************/
        $('.humburger').click( function() {
                $('.header_top_menu_items').addClass('open');
        } );
        /********************Header close mobile menu******************************/
        $('.header_top_menu_items .close').click( function() {
            $('.header_top_menu_items').removeClass('open');
        } );
        $(document).click( function(e) {
            var target = $(e.target);
            if ( target.is($( '.header_top_menu_items .close')) || target.is($( '.humburger')) ) return;

            if( $( '.header_top_menu_items').hasClass('open') ) {
                $('.header_top_menu_items').removeClass('open');
            }
        });
        /********************SideBar open close catalog submenu******************************/
        $('#categories_nav_items .toogle').click( function() {
            if( $( this ).hasClass('open') ) {
                $(this).removeClass('open');
                $(this).siblings('.submenu').removeClass('open');
            } else {
                $(this).addClass('open');
                $(this).siblings('.submenu').addClass('open');
            }
        } );
        /********************SideBar open  catalog submenu when load******************************/
        jQuery(window).load(function(){
            var location_url = window.location.href;
            $('#categories_nav_items a').each(function (){
                var link = $(this).attr('href');
                if (link === location_url) {
                    $(this).parents('.toogle').addClass('open');
                    $(this).parents('.submenu').addClass('open');
                }
            });
        });
        
        /********************Product Page open close swatchers******************************/
        $('.catalog-product-view').find('#product-options-wrapper').find('.toogle_open').click( function() {
            if( $( this ).hasClass('open') ) {
                $(this).removeClass('open');
                $(this).siblings('.fieldset').removeClass('open');
            } else {
                $(this).addClass('open');
                $(this).siblings('.fieldset').addClass('open');
            }
        } );

        /********************Product Page open close short description******************************/
        $('.catalog-product-view').find('.read_more_button').click( function() {
            if( $( this ).hasClass('open') ) {
                $(this).removeClass('open');
                $('div[itemprop="description"]').removeClass('open');
            } else {
                $(this).addClass('open');
                $('div[itemprop="description"]').addClass('open');
            }
        } );

        /********************Header bottom_panel add fixed******************************/
        $(window).scroll(function () {
            var next_after_header = $('.page-header +');
            var header_bottom_panel = $('.header_bottom_panel');
            var bottom_panel_fixed = header_bottom_panel.offset();

            if ($(window).scrollTop() >= bottom_panel_fixed.top) {
                header_bottom_panel.addClass('bottom_panel_fixed');
                next_after_header.addClass('add_margin_top');
            }
            if ($(window).scrollTop() < 103) {
                header_bottom_panel.removeClass('bottom_panel_fixed');
                next_after_header.removeClass('add_margin_top');
            }
        } );
        /********************Footer open close  menu******************************/
        $('.footer-menu_content .title').click( function() {
            if( $( this ).find('.open').hasClass('active') ) {
                $(this).find('.open').removeClass('active');
                $(this).siblings('.menu').removeClass('active');
            } else {
                $(this).find('.open').addClass('active');
                $(this).siblings('.menu').addClass('active');
            }
        } );
        /********************Autorization Pop Up Close******************************/
        $('.mb-ajaxsuite-close-custome').click( function() {
            $('#mb-ajaxsuite-popup-wrapper').fadeOut('slow');
            $('#mb-ajaxsuite-blank').fadeOut('slow');
        } );
        /********************Open Rewriting Rules******************************/
        $('#reviews').click( function(e) {
            var target = $(e.target);
            if ( target.is($( '#link_rules')) ){
                $('.rewrating_rules_wrapper').addClass('open-rules');
                $('.rewrating_rules_overfloy').addClass('open-rules');
            }
        } );
        /********************Close Rewriting Rules******************************/
        $('.rewrating_rules_wrapper').click( function(e) {
            var target = $(e.target);
            if ( target.is($( '.close')) ){
                $('.rewrating_rules_wrapper').removeClass('open-rules');
                $('.rewrating_rules_overfloy').removeClass('open-rules');
            }
        } );
        $('.rewrating_rules_overfloy').click( function() {
                $('.rewrating_rules_wrapper').removeClass('open-rules');
                $('.rewrating_rules_overfloy').removeClass('open-rules');
        });
        /********************Move category title on mobile and desktop******************************/
        jQuery(window).load(function ()  {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                jQuery('.catalog-category-view:not(.category-akcii)').find('.page-title-wrapper').insertBefore(jQuery('#layer-product-list'));
            }else{
                jQuery('.catalog-category-view:not(.category-akcii)').find('.page-title-wrapper').insertBefore(jQuery('.page.messages'));
            }
        });
        jQuery(window).resize(function ()  {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                jQuery('.catalog-category-view:not(.category-akcii)').find('.page-title-wrapper').insertBefore(jQuery('#layer-product-list'));
            }else{
                jQuery('.catalog-category-view:not(.category-akcii)').find('.page-title-wrapper').insertBefore(jQuery('.page.messages'));
            }
        });
        /********************Open Close Nav Menu on Mobile******************************/
        $('.categories_nav_wrapper').find('.filter-subtitle').click( function() {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                if( $( this ).hasClass('open') ) {
                    $(this).removeClass('open');
                    $(this).siblings('.category-filter').removeClass('open');
                } else {
                    $(this).addClass('open');
                    $(this).siblings('.category-filter').addClass('open');
                }
            }
        });
        /********************Open Close Filter  on Mobile******************************/
        $('#layered-filter-block').find('.filter-title').click( function() {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                if( $( this ).hasClass('open') ) {
                    $(this).removeClass('open');
                    $(this).siblings('.filter-content').removeClass('open');
                } else {
                    $(this).addClass('open');
                    $(this).siblings('.filter-content').addClass('open');
                }
            }
        });
        /********************Open Close Pop-up Product  on Mobile******************************/
        $('.open-pop-up').click( function() {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                    $(this).parent('.product-item-info').parent('.product-item').addClass('open');
                   $('html').addClass('not-scroll');
            }
        });
        $('.close-pop-up').click( function() {
            var window_width = jQuery(window).width();
            if (window_width < 768){
                    $(this).parent('.product-item-info').parent('.product-item').removeClass('open');
                $('html').removeClass('not-scroll');
            }
        });
        /********************Open Agreement******************************/
        $('.agreement_info').find('a').click( function(e) {
            e.preventDefault();
            $('.agreement_wrapper').addClass('open-agreement');
            $('.agreement_overfloy').addClass('open-agreement');
       /*     var target = $(e.target);
            if ( target.is($('.agreement_info a span')) ){
                e.preventDefault();
                $('.agreement_wrapper').addClass('open-agreement');
                $('.agreement_overfloy').addClass('open-agreement');
            }*/
        } );
        /********************Close Agreement******************************/
        $('.agreement_wrapper').click( function(e) {
            var target = $(e.target);
            if ( target.is($( '.close')) ){
                $('.agreement_wrapper').removeClass('open-agreement');
                $('.agreement_overfloy').removeClass('open-agreement');
            }
        } );
        $('.agreement_overfloy').click( function() {
            $('.agreement_wrapper').removeClass('open-agreement');
            $('.agreement_overfloy').removeClass('open-agreement');
        });




    });

/********************************Sorter Select***********************************/
require(['jquery','niceselect','domReady'],
    function($) {
        $('.toolbar select.sorter-options').each(function(){
            $(this).niceSelect();
            $(this).on('change', function(){
                var select_value = $(this).val();
                console.log(select_value);
                if(select_value != '') {
                    window.location.href = select_value;
                }
            });
        });
        //
        // $('#limiter').niceSelect();
        // $('.wishlist-toolbar').find('#limiter').niceSelect();
        $('.one-step-checkout-wrapper').find('.select').niceSelect();

    }
);

/********************************NiceScroll***********************************/
require(['jquery','nicescroll','domReady'],
    function($) {
/*        $('.agreement_wrapper').each(function(){
            $(this).niceScroll(".agreement_wrapper", {
                cursorcolor: "#DBB189",
                cursorwidth: "1px",
                cursorborder: "1px solid #DBB189",
                cursorborderradius: "0px",
                background: "#DBB189",
                autohidemode: false
            });
        });*/



  /*          $('#searchsuite-autocomplete').find('.product').niceScroll("#product", {
                cursorcolor: "#424242",
                cursorwidth: "1px",
                cursorborder: "1px solid #424242",
                cursorborderradius: "0px",
                background: "#424242",
                autohidemode: false
            });*/


    }
);




