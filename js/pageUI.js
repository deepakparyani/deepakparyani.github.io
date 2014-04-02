            $(window).scroll(function() {

                var scrollTop = $(window).scrollTop();

                if (scrollTop > 48) {
				
                    $('#nav').addClass('getFixed');
                   
                    $('body').addClass('header-fixed');
                    //hideFilters();
                } else {
                    if (scrollTop < 48) {
                        $('#nav').removeClass('getFixed');
                    }
                    $('body').removeClass('header-fixed');
                }

            });