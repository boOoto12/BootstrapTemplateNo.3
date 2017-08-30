// Bootstrap Template No.3

$(function(){
    
    'use strict';
	
 $(window).scroll(function () { if ($(this).scrollTop() >= 20 ) 
 
 
 {
	 $(".navbar-default").css("backgroundColor", "#222").end();
	 $(".navbar-default").css("margin-top", "0").end();
	 $(".navbar-default .nav li a").css("padding", "15px 10px 20px 15px").end();
//	 $(".navbar-default .navbar-brand").css("padding-top", "10px").end();
	 
 } else
 
 
 {  $(".navbar-default").css("backgroundColor", "transparent").end();
	 $(".navbar-default").css("margin-top", "25px").end();
	 $(".navbar-default .nav li").css("padding-top", "0").end();
	 $(".navbar-default .navbar-brand").css("marginBottom", "0").end();
           
 }
							                                  
});

	


   // Nice Scroll
    
    $("body").niceScroll({
        cursorcolor: "#FED136",
        cursorwidth: "5px",
		cursorborderradius: "100px",
		cursorborder: 0
    });
	
});

// Loading Page 
	
	$(window).on('load', function(){
		
		
		$('.loading-overlay .sk-folding-cube').fadeOut(2000, function(){
			
			
			$('.loading-overlay').fadeOut(1000);
			
		});
	});
