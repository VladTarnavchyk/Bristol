var config = {
    paths: {
            'nicescroll': "js/nicescroll",
            'owlcarousel': "js/owlcarousel",
            'niceselect': "js/jquery.nice-select",
            'select2': "js/select2",
            'floatingscroll': "js/jquery.floatingscroll",
            'mCustomScrollbar': "js/jquery.mCustomScrollbar.concat.min"

        },   
    shim: {
        'nicescroll': {
            deps: ['jquery']
        },
		'owlcarousel': {
            deps: ['jquery']
        },
        'niceselect': {
            deps: ['jquery']
        },
        'select2': {
            deps: ['jquery']
        },
        'floatingscroll': {
            deps: ['jquery']
        },
        'mCustomScrollbar': {
            deps: ['jquery']
        }
    }
};