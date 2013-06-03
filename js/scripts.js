$(function(){
			//Expand and collapse the "links" sidebar
			$('.links .expand').click(function(){
				$('.links .drop_down').slideDown();
			});

			$('.links .collapse').click(function(){
				$('.links .drop_down').slideUp();
			});

			//Expand and collapse the "page info" sidebar
			$('.page_info .expand').click(function(){
				$('.page_info .drop_down').slideDown();
			});

			$('.page_info .collapse').click(function(){
				$('.page_info .drop_down').slideUp();
			});

			//Expand and collapse the "another topic" sidebar - placeholder
			$('.another_topic .expand').click(function(){
				$('.another_topic .drop_down').slideDown();
			});

			$('.another_topic .collapse').click(function(){
				$('.another_topic .drop_down').slideUp();
			});

			$('.menu_bar #astronomy').mouseover(function(){
				$('.menu_bar #astronomy .hover_menu').slideDown();
			});
		});