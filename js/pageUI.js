            $(window).scroll(function() {

                var scrollTop = $(window).scrollTop();

                if (scrollTop > 48) {
				
                    $('#nav').addClass('getFixed');
                   //$('#top').hide();
				   //$('#nav').show();
                    $('body').addClass('header-fixed');
                    //hideFilters();
                } else {
                    if (scrollTop < 48) {
                        $('#nav').removeClass('getFixed');
						  // $('#top').show();
                    }
                    $('body').removeClass('header-fixed');
                }

            });