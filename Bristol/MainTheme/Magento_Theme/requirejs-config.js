var config = {
    paths: {       
            'owlcarousel': "js/owlcarousel",
            'niceselect': "js/jquery.nice-select",
            'colorbox': "js/jquery.colorbox-min",
			'nicescroll': "js/jquery.nicescroll.min",
			'maskedinput': "js/jquery.inputmask.bundle",
			'countdown': "js/jquery.countdown"
        },   
    shim: {
		'owlcarousel': {
            deps: ['jquery']
        },
		'niceselect': {
            deps: ['jquery']
        },
		'colorbox': {
            deps: ['jquery']
        },
		'nicescroll': {
            deps: ['jquery']
        },
		'maskedinput': {
            deps: ['jquery']
        },
		'countdown': {
            deps: ['jquery']
        }
    }
};