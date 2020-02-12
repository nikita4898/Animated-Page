

$(document).ready(function () {

	$('.learn-more').click(function(e){  // call the class or id on which you want to show up your modal
		$('.modal-wrapper').addClass('open');
		$('html, body').addClass('modal-open');
		e.stopPropagation();

	});

	$('.modal-close').click(function(){
		$('.modal-wrapper').removeClass('open');
		$('html, body').removeClass('modal-open');
	});

	$('.modal-content').click(function(e){
		e.stopPropagation();
	});

	$('html, body').click(function(){
		$('.modal-wrapper').removeClass('open');
		$('html, body').removeClass('modal-open');
	});

	setTimeout(function() {
		jQuery(".vision-banner .banner-text").addClass("load-animation");
	}, 2000);
	jQuery(window).scroll(function() {
		if(jQuery(".page-next-section").offset().top - jQuery(document).height() > 0){
			setTimeout(function(){
				jQuery('.page-next-section').addClass('show');
			},500);
		}
		else{
			jQuery('.page-next-section').removeClass('show');
		}
	});

	bannerH()
	sticky_nav();
	scroll_spy();
	// playVideo();
	nav_dropdown();
	menu_bg();

	
    // Add debug indicators fixed on right side
    // scene13.addIndicators();

    var winht = jQuery(window).height(),
    navht = jQuery(".page-nav-block").innerHeight(),
    triggerH = (navht/winht);
    jQuery(".spacer").css("top", navht);


    var controller = new ScrollMagic.Controller({
    	container: window
    });

    var scene = new ScrollMagic.Scene({
    	triggerElement: "#trigger-pyramid-section",
    	offset: 0,
    	triggerHook: triggerH,
    	duration: winht * 2 ,
    	reverse: true
    }).setPin(".pyramid-section-inner").setClassToggle("#trigger-pyramid-section", "enter").addTo(controller);

    var tween = new TimelineMax().add([
    	TweenMax.to('.pyramid-section .dash-heading.grey', 2, {opacity: 1, y: 0}),
    	TweenMax.to('.pyramid-section .top-content', 2, {opacity: 1, delay: 2}),
    	
    	]);
    var scene = new ScrollMagic.Scene({
    	triggerElement: "#trigger-pyramid-section",
    	offset: -winht * 2 / 2,
    	triggerHook: triggerH,
    	duration:winht/2,
    	reverse: true
    }).setTween(tween).addTo(controller);

    var tween1 = new TimelineMax().add([
        TweenMax.to('.pyramid-section .heading-block', 2, {opacity: 1}),
        TweenMax.to('.pyramid-section .bottom-content .left-col img', 0.3, {opacity: 1, delay: 2}),
        TweenMax.to('.pyramid-section .bottom-content .right-col img', 0.3, {opacity: 1, delay: 2}),
        ]);
    var scene1 = new ScrollMagic.Scene({
    	triggerElement: "#trigger-pyramid-section",
    	triggerHook: triggerH * 2,
    	offset: 0,
    	duration: winht / 2,
    	reverse: true
    }).setTween(tween1).addTo(controller);

    var tween2 = new TimelineMax().add([
        TweenMax.to('.pyramid-section .bottom-content .left-col ul li em', 1, {opacity: 1, width:"100%"}),
        TweenMax.to('.pyramid-section .bottom-content .right-col ul li em', 1, {opacity: 1, width:"100%"}),
        ]);
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger-pyramid-section",
        triggerHook: triggerH * 2,
        offset: winht / 2,
        duration: winht / 2,
        reverse: true
    }).setTween(tween2).addTo(controller);

    var tween3 = new TimelineMax().add([
        TweenMax.to('.pyramid-section .bottom-content .middle-col ul li:nth-of-type(1)', 0.3, {opacity: 1}),
        TweenMax.to('.pyramid-section .bottom-content .middle-col ul li:nth-of-type(2)', 0.3, {opacity: 1, delay: 0.5}),
        TweenMax.to('.pyramid-section .bottom-content .middle-col ul li:nth-of-type(3)', 0.3, {opacity: 1, delay: 1}),
        TweenMax.to('.pyramid-section .bottom-content .middle-col ul li:nth-of-type(4)', 0.3, {opacity: 1, delay: 1.5}),
        TweenMax.to('.pyramid-section .bottom-content .middle-col ul li:nth-of-type(5)', 0.3, {opacity: 1, delay: 2}),
        ]);
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger-pyramid-section",
        triggerHook: triggerH * 2,
        offset: (winht * 2) / 2,
        duration: winht / 2,
        reverse: true
    }).setTween(tween3).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-heading-section",
        offset: 0,
        triggerHook: triggerH,
        duration: winht / 1.5 ,
        reverse: true
    }).setPin(".section-content").setClassToggle("#trigger-heading-section", "enter").addTo(controller);

    var tween4 = new TimelineMax().add([
        TweenMax.to('.pyramid-section .section-content h2 em:nth-of-type(1)', 2, {opacity: 1}),
        TweenMax.to('.pyramid-section .section-content h2 em:nth-of-type(2)', 2, {opacity: 1, delay: 2}),
        ]);
    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger-heading-section",
        triggerHook: triggerH,
        offset: 0,
        duration: winht / 2,
        reverse: true
    }).setTween(tween4).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-spinning-block",
        offset: 0,
        triggerHook: triggerH,
        duration: winht * 2,
        reverse: true
    }).setPin(".spinning-inner-block").setClassToggle("#trigger-spinning-block", "enter").addTo(controller);

    var tween5 = new TimelineMax().add([
        TweenMax.to('.storage-compromise .dash-heading.grey', 1, {opacity: 1,y: 0}),
        TweenMax.to('.two-col-block.spinning-media .image-block', 1, {opacity: 1, y: 0, delay: 1}),
        TweenMax.to('.two-col-block.spinning-media .detail-block h2', 1, {opacity: 1, delay: 2}),
        ]);
    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger-spinning-block",
        triggerHook: triggerH,
        offset: 0,
        duration: winht,
        reverse: true
    }).setTween(tween5).addTo(controller);

    var tween6 = new TimelineMax().add([
        TweenMax.to('.two-col-block.spinning-media .detail-block .block-content', 2, {opacity: 1}),
        TweenMax.to('.two-col-block.spinning-media .detail-block .sub-heading h3:nth-of-type(1)', 2, {opacity: 1}),
        TweenMax.to('.two-col-block.spinning-media .detail-block .sub-heading span:nth-of-type(1)', 2, {opacity: 1, delay: 1}),
        TweenMax.to('.two-col-block.spinning-media .detail-block .sub-heading h3:nth-of-type(2)', 2, {opacity: 1, delay: 2}),
        TweenMax.to('.two-col-block.spinning-media .detail-block .sub-heading span:nth-of-type(2)', 2, {opacity: 1, delay: 3}),
        TweenMax.to('.two-col-block.spinning-media .detail-block .sub-heading h3:nth-of-type(3)', 2, {opacity: 1, delay: 4}),
        ]);
    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger-spinning-block",
        triggerHook: triggerH,
        offset: winht,
        duration: winht,
        reverse: true
    }).setTween(tween6).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-tradeoff-block",
        offset: 0,
        triggerHook: triggerH,
        duration: winht * 2,
        reverse: true
    }).setPin(".tradeoff-media").setClassToggle("#trigger-tradeoff-block", "enter").addTo(controller);

    var tween7 = new TimelineMax().add([
        TweenMax.to('.two-col-block.tradeoff-media .image-block', 1, {opacity: 1, y: 0}),
        TweenMax.to('.two-col-block.tradeoff-media .detail-block h2', 1, {opacity: 1, delay: 1})
        ]);
    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger-tradeoff-block",
        triggerHook: triggerH,
        offset: 0,
        duration: winht,
        reverse: true
    }).setTween(tween7).addTo(controller);

    var tween8 = new TimelineMax().add([
        TweenMax.to('.two-col-block.tradeoff-media .detail-block .block-content', 2, {opacity: 1}),
        TweenMax.to('.two-col-block.tradeoff-media .detail-block .sub-heading h3:nth-of-type(1)', 2, {opacity: 1}),
        TweenMax.to('.two-col-block.tradeoff-media .detail-block .sub-heading span:nth-of-type(1)', 2, {opacity: 1, delay: 1}),
        TweenMax.to('.two-col-block.tradeoff-media .detail-block .sub-heading h3:nth-of-type(2)', 2, {opacity: 1, delay: 2}),
        ]);
    var scene8 = new ScrollMagic.Scene({
        triggerElement: "#trigger-tradeoff-block",
        triggerHook: triggerH * 2,
        offset: winht,
        duration: winht,
        reverse: true
    }).setTween(tween8).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-wrap-block",
        offset: 0,
        triggerHook: triggerH,
        duration: winht * 2,
        reverse: true
    }).setPin(".wrap-div").setClassToggle("#trigger-wrap-block", "enter").addTo(controller);

    var tween9 = new TimelineMax().add([
        TweenMax.to('.wrap-div h2', 1.5, {opacity: 1, y: 0}),
        TweenMax.to('.three-col-block .corner-div', 1.5, {opacity: 1, y: 0, delay: 1}),
        ]);
    var scene9 = new ScrollMagic.Scene({
        triggerElement: "#trigger-wrap-block",
        triggerHook: triggerH,
        offset: 0,
        duration: winht,
        reverse: true
    }).setTween(tween9).addTo(controller);

    var tween10 = new TimelineMax().add([
        TweenMax.to('.three-col-block .center-div p span:nth-of-type(1)', 2, {opacity: 1}),
        TweenMax.to('.three-col-block .center-div p span:nth-of-type(2)', 2, {opacity: 1, y: 0, delay: 2}),
        ]);
    var scene10 = new ScrollMagic.Scene({
        triggerElement: "#trigger-wrap-block",
        triggerHook: triggerH * 2,
        offset: winht,
        duration: winht / 2,
        reverse: true
    }).setTween(tween10).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-introduction-section",
        offset: 0,
        triggerHook: triggerH,
        duration: winht * 2,
        reverse: true
    }).setPin(".introduction-inner-wrapper").setClassToggle("#trigger-introduction-section", "enter").addTo(controller);

    var tween11 = new TimelineMax().add([
        TweenMax.to('.introduction-section .dash-heading.grey', 1, {opacity: 1, y: 0}),
        TweenMax.to('.introduction-section .section-content', 1, {opacity: 1, delay: 1}),
        TweenMax.to('.introduction-section .intro-content img', 1, {opacity: 1, delay: 2}),
        ]);
    var scene11 = new ScrollMagic.Scene({
        triggerElement: "#trigger-introduction-section",
        triggerHook: triggerH,
        offset: 0,
        duration: winht,
        reverse: true
    }).setTween(tween11).addTo(controller);

    var tween12 = new TimelineMax().add([
        TweenMax.to('.introduction-section .intro-block.performance', 2, {opacity: 1}),
        TweenMax.to('.introduction-section .intro-block.storage', 2, {opacity: 1, delay: 1}),
        TweenMax.to('.introduction-section .intro-block.efficiency', 2, {opacity: 1, delay: 2}),
        ]);
    var scene12 = new ScrollMagic.Scene({
        triggerElement: "#trigger-introduction-section",
        triggerHook: triggerH,
        offset: winht,
        duration: winht,
        reverse: true
    }).setTween(tween12).addTo(controller);

    var tween13 = new TimelineMax().add([
        TweenMax.to('.storage-section .bg-control video', 2, {opacity: 1}),
        ]);
    var scene13 = new ScrollMagic.Scene({
        triggerElement: ".storage-section",
        triggerHook: triggerH * 4,
        duration: winht / 2,
        reverse: true
    }).setTween(tween13).addTo(controller);

    // scene13.addIndicators();
});

jQuery(window).resize(function(){
	bannerH()
	scroll_spy();
	nav_dropdown();
	menu_bg();
});

/* Black bg JS */
function menu_bg() {
	var menuWidth = jQuery(".sub-menu-list").outerWidth() + 138;
	var menuHeight = jQuery(".sub-menu-list").outerHeight() + jQuery(".sub-navigation-menu").outerHeight() + 84;
	jQuery(".sub-navigation-menu .menu-bg").css({
		"height": menuHeight,
		"width": menuWidth
	});
	setTimeout(menu_bg,50);
}

/* animated banner height */
function bannerH() {
	var navH = jQuery(".page-nav-block").outerHeight(),
	totalH = jQuery(window).height() - navH;

	jQuery(".animate-banner").css("min-height", totalH);
	setTimeout(bannerH,50);
}

/* Sticky Navbar JS */
function sticky_nav() {

    // "use strict";

    if(jQuery(".page-nav-block").length > 0) {
    	var nav_pos = jQuery(".page-nav-block").offset().top;
    	jQuery(document).scroll(function () {
    		var scrollTop = jQuery(this).scrollTop();
    		if (scrollTop >= nav_pos) {
    			jQuery(".sub-navigation-menu, .page-navigation").css("opacity", 1);
    			jQuery(".page-nav-block .btn-wrapper").fadeIn(700);
    			jQuery(".page-nav-block").addClass("sticky");
    		} else if (scrollTop < nav_pos) {
    			if(jQuery(".sub-navigation-menu").hasClass("menu-open")) {
    				jQuery(".sub-navigation-menu").css("opacity", 1);
    			}
    			jQuery(".sub-navigation-menu, .page-navigation").css("opacity", 0.3);
    			jQuery(".page-nav-block .btn-wrapper").hide();
    			jQuery(".page-nav-block").removeClass("sticky");
    		}
    	});
    }
}

/* Custom ScrollSpy JS */
function scroll_spy() {
	"use strict";
	var sections = jQuery('section'),
	nav = jQuery('.page-navigation'),
	nav_height = jQuery(".page-nav-block").outerHeight();

	if(jQuery(".page-nav-block").length > 0) {
		jQuery(document).scroll(function(){
			var scrollTop = jQuery(this).scrollTop();

			sections.each(function() {
				var section_top = jQuery(this).offset().top - nav_height;

				if (scrollTop >= section_top) {
					nav.find('.page-nav-link a').removeClass('active');
					sections.removeClass('active');

					jQuery(this).addClass('active');
					nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
				}
			});
		});

		nav.find('.page-nav-link a').click(function () {
			var page_id = jQuery(this).attr('href');

			jQuery('html, body').animate({
				scrollTop: jQuery(page_id).offset().top - nav_height
			}, 1000);

			return false;
		}); 
	}      
}

/* Video play only entering in viewport */

$.fn.isInViewport = function() {

    var elementTop = $(this).offset().top;

    var elementBottom = elementTop + $(this).outerHeight() / 2;

    var viewportTop = $(window).scrollTop();

    var viewportHalf = viewportTop + $(window).height() / 2;

    return elementBottom > viewportTop && elementTop < viewportHalf;

};

var video_dur = jQuery(".storage-section .bg-control .storage-video")[0].duration;
$(window).on('load resize scroll', function() {

    if ($(".storage-section").isInViewport()) {
        if (jQuery(".storage-section .bg-control video").hasClass("storage-video")) {
            jQuery(".storage-section .bg-control .storage-video")[0].play();
        }
        jQuery(".storage-section .bg-control .storage-video").removeClass("storage-video");

        setTimeout(function(){
            jQuery('.storage-section .section-content').addClass('show-text');
        },(video_dur * 1000));

    } else {
        jQuery(".storage-section .bg-control video").addClass("storage-video");
        jQuery('.storage-section .section-content').removeClass('show-text');
    }
});

// function playVideo() {
// 	"use strict";

// 	if (jQuery(".storage-section").length > 0) {
// 		var video_pos = jQuery(".storage-section").offset().top - jQuery(window).innerHeight();


//         jQuery(document).scroll(function(){
//             var scrollTop = jQuery(this).scrollTop();
//             console.log("top",jQuery(".storage-section").offset().top, "ht",jQuery(window).innerHeight());
//             console.log("st",scrollTop,"vdpo",video_pos);

//             if(scrollTop >= video_pos) {
//                 if (jQuery(".storage-section .bg-control video").hasClass("storage-video")) {
//                     jQuery(".storage-section .bg-control .storage-video")[0].play();
//                 }
//                 jQuery(".storage-section .bg-control .storage-video").removeClass("storage-video");
//             }
//             // else if (scrollTop < video_pos) {
//             //     jQuery(".storage-section .bg-control video").addClass("storage-video");
//             // }
//         });
//     }
// }

/* navigation-dropdown js */
function nav_dropdown() {
	jQuery(".sub-navigation-menu .selected-text").click(function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		jQuery(".page-nav-block.sticky .page-navigation, .page-nav-block .btn-wrapper").css("opacity", 0.3);
		jQuery(this).closest(".sub-navigation-menu").siblings().removeClass("menu-open").find(".sub-menu-list").stop(true,true).fadeOut(500);
		jQuery(this).closest(".sub-navigation-menu").css("opacity", 1).toggleClass("menu-open").find(".sub-menu-list").stop(true,true).fadeToggle(500);
		if(!jQuery(".sub-navigation-menu").hasClass("menu-open")) {
			jQuery(".page-nav-block.sticky .page-navigation, .page-nav-block .btn-wrapper").css("opacity", 1);
		}
		if(jQuery(".sub-navigation-menu").hasClass("menu-open")) {
			jQuery(this).css("opacity", 1);
		}
	});
	jQuery(".sub-menu-list .list-item a").click(function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		var selected_text;
		jQuery('.sub-menu-list .list-item').removeClass('selected').show();
		jQuery(this).closest(".sub-menu-list .list-item").addClass('selected').hide();
		selected_text = jQuery(this).html();
		jQuery(this).closest('.sub-navigation-menu').find('.selected-text span').html(selected_text);
		jQuery(".page-nav-block.sticky .page-navigation, .page-nav-block .btn-wrapper").css("opacity", 1);
		jQuery('.sub-navigation-menu').removeClass('menu-open');
		jQuery('.sub-menu-list').fadeOut(500);
	});
	jQuery("body,html").click(function(){
		jQuery(".page-nav-block.sticky .page-navigation, .page-nav-block .btn-wrapper").css("opacity", 1);
		jQuery('.sub-navigation-menu').removeClass('menu-open');
		jQuery('.sub-menu-list').fadeOut(500);
	});
}