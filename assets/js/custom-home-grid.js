

//For background slider
$(function() {
			
				$( '#ri-grid' ).gridrotator( {
					rows : 2,
					columns : 4,
					maxStep : 2,
					interval : 2000,
					w1024 : {
						rows : 2,
						columns : 4
					},
					w768 : {
						rows : 3,
						columns : 4
					},
					w480 : {
						rows : 2,
						columns : 2
					},
					w320 : {
						rows : 2,
						columns : 2
					},
					w240 : {
						rows : 2,
						columns : 2
					},
				} );
			
			});



/***************************************************
		  		swipebox
***************************************************/


	jQuery(function($) {

			/* Basic Gallery */
			$(".swipebox").swipebox();
			
			/* Video */
			$(".swipebox-video").swipebox();


			/* Isotope */
			var swipeboxInstance = $(".swipebox-isotope:not(.isotope-hidden .swipebox-isotope)").swipebox();

			var $container = $('#portfolio-list');
			var optionFilter = $('.filter'),
			optionFilterLinks = optionFilter.find('a');
			optionFilterLinks.attr('href', '#');

			onAnimationCompleted = function(){
				swipeboxInstance.refresh();
			};

			optionFilterLinks.click( function(){
				var selector = $(this).attr('data-filter');
				$container.isotope({ 
					filter : '.' + selector, 
					itemSelector : '.all',
					layoutMode : 'fitRows',
					animationEngine : 'best-available',
				}, onAnimationCompleted);

				// Highlight the correct filter
				optionFilterLinks.removeClass('current');
				$(this).addClass('current');
				return false;
			});
		});
	
//swipebox  END