//  RS REVOLUTION SLIDER 
var revapi839,revapi4,tpj=jQuery;void 0===window.RS_MODULES&&(window.RS_MODULES={}),void 0===RS_MODULES.modules&&(RS_MODULES.modules={}),RS_MODULES.modules.revslider8391={once:void 0!==RS_MODULES.modules.revslider8391?RS_MODULES.modules.revslider8391.once:void 0,init:function(){if(window.revapi839=void 0===window.revapi839||null===window.revapi839||0===window.revapi839.length?document.getElementById("rev_slider_839_1"):window.revapi839,null===window.revapi839||void 0===window.revapi839||0==window.revapi839.length){window.revapi839initTry=void 0===window.revapi839initTry?0:window.revapi839initTry+1,window.revapi839initTry<20&&requestAnimationFrame(function(){RS_MODULES.modules.revslider8391.init()});return}if(window.revapi839=jQuery(window.revapi839),void 0==window.revapi839.revolution){revslider_showDoubleJqueryError("rev_slider_839_1");return}revapi839.revolutionInit({revapi:"revapi839",sliderType:"carousel",sliderLayout:"fullscreen",visibilityLevels:"1500,1240,778,480",gridwidth:"1240,1024,778,480",gridheight:"700,600,500,400",lazyType:"smart",perspective:600,perspectiveType:"local",lazyloaddata:"lazy-src",lazyOnBg:!0,editorheight:"700,600,500,400",responsiveLevels:"1500,1240,778,480",fullScreenOffsetContainer:"#masthead",stopAtSlide:1,stopAfterLoops:0,stopLoop:!0,carousel:{showLayersAllTime:"individual",infinity:!0,justify:!0,justifyMaxWidth:!0},progressBar:{disableProgressBar:!0},navigation:{onHoverStop:!1,thumbnails:{enable:!0,tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',style:"gyges",hide_onmobile:!0,hide_under:778,h_align:"right",h_offset:15,v_offset:15,space:5,width:70,min_width:70,wrapper_padding:5,wrapper_color:"transparent"}},viewPort:{global:!0,globalDist:"-200px",enable:!1},fallbacks:{allowHTML5AutoPlayOnAndroid:!0}})}};
//  RS REVOLUTION SLIDER 

// GALLERY SLIDER
$(function() {
    if ($('.gallery-wrapper').length) {
        // Function to calculate total thumb width and toggle navigation buttons
        function toggleThumbNavigation() {
            let containerThumbWidth = $('.gallery-wrapper .content .gallery.thumb').outerWidth();
            let totalThumbWidth = 0;

            $('.gallery.thumb .swiper-container .swiper-wrapper .swiper-slide').each(function() {
                let thumbWidth = $(this).outerWidth();
                totalThumbWidth += thumbWidth;
            });

            if (totalThumbWidth < containerThumbWidth) {
                $('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').addClass('hide');
            } else {
                $('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').removeClass('hide');
            }
        }

        // Gallery thumbs Swiper
        var galleryThumbs = new Swiper('.gallery-wrapper .content .gallery.thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.thumb .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.thumb .swiper-prev-button',
            },
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 10 },
                414: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 5, spaceBetween: 10 },
                1024: { slidesPerView: 7, spaceBetween: 10 }
            },
            on: { init: toggleThumbNavigation }
        });

        // Full gallery Swiper
        var galleryFull = new Swiper('.gallery-wrapper .content .gallery.full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: { delay: 7000, disableOnInteraction: false, stopOnLastSlide: false },
            keyboard: { enabled: true },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.full .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.full .swiper-prev-button',
            },
            thumbs: { swiper: galleryThumbs },
            on: {
                slideChangeTransitionStart: function() {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide .overlay').removeClass('show');
                },
                slideChangeTransitionEnd: function() {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide-active .overlay').addClass('show');
                }
            }
        });

        // mySwiper Swiper
        var mySwiper = new Swiper(".mySwiper", {
            watchSlidesProgress: true,
            slidesPerView: 2,
            speed: 1500,
            spaceBetween: 20,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                576: { slidesPerView: 2, spaceBetween: 10 },
                992: { slidesPerView: 3, spaceBetween: 10 },
                1200: { slidesPerView: 4, spaceBetween: 10 }
            }
        });
    }
});

// Object with properties
var kktfwp = {
    "masonry": { "layout": "fitRows" },
    "preloader": { "state": true },
    "layoutVis": { "style": "" }
};

// Accessing properties of the kktfwp object
console.log(kktfwp.masonry.layout); // Outputs: fitRows
console.log(kktfwp.preloader.state); // Outputs: true
console.log(kktfwp.layoutVis.style); // Outputs: ""

// TAB
'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hide');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});

// TAB


// HEADER
! function(a) {
	"use strict";
	a(document).ready((function() {
		a(window).trigger("resize"),
			function() {
				a(".main-nav").hasClass("transparent") ? a(".main-nav").addClass("js-transparent") : a(".main-nav").hasClass("dark") || a(".main-nav").addClass("js-no-transparent-white");
				a(window).scroll((function() {
					a(window).scrollTop() > 0 ? (a(".js-transparent").removeClass("transparent"), a(".main-nav, .nav-logo-wrap .logo").addClass("small-height"), a(".light-after-scroll").removeClass("dark"), a(".main-nav").addClass("body-scrolled")) : 0 === a(window).scrollTop() && (a(".js-transparent").addClass("transparent"), a(".main-nav, .nav-logo-wrap .logo").removeClass("small-height"), a(".light-after-scroll").addClass("dark"), a(".main-nav").removeClass("body-scrolled"))
				})), s.click((function() {
					e.hasClass("js-opened") ? (e.slideUp("slow", "easeOutExpo").removeClass("js-opened"), a(this).removeClass("active"), a(this).attr("aria-expanded", "false")) : (e.slideDown("slow", "easeOutQuart").addClass("js-opened"), a(this).addClass("active"), a(this).attr("aria-expanded", "true"), a(".main-nav").hasClass("not-top") && a(window).scrollTo(".main-nav", "slow"))
				})), a(document).on("click", (function(n) {
					if (a(window).width() <= 1024) {
						var t = a(".main-nav");
						t === n.target || t.has(n.target).length || (e.slideUp("slow", "easeOutExpo").removeClass("js-opened"), s.removeClass("active"), s.attr("aria-expanded", "false"))
					}
				})), s.keydown((function(s) {
					13 != s.keyCode && 32 != s.keyCode || (e.hasClass("js-opened") ? (e.slideUp("slow", "easeOutExpo").removeClass("js-opened"), a(this).removeClass("active"), a(this).attr("aria-expanded", "false")) : (e.slideDown("slow", "easeOutQuart").addClass("js-opened"), a(this).addClass("active"), a(this).attr("aria-expanded", "true"), a(".main-nav").hasClass("not-top") && a(window).scrollTo(".main-nav", "slow")))
				})), e.find("a:not(.mn-has-sub)").click((function() {
					s.hasClass("active") && (e.slideUp("slow", "easeOutExpo").removeClass("js-opened"), s.removeClass("active"), s.attr("aria-expanded", "false"))
				}));
				var n, t = a(".mn-has-sub");
				t.attr({
					role: "button",
					"aria-expanded": "false",
					"aria-haspopup": "true"
				}), t.click((function() {
					if (a(".main-nav").hasClass("mobile-on")) return (n = a(this).parent("li:first")).hasClass("js-opened") ? (a(this).attr("aria-expanded", "false"), n.find(".mn-sub:first").slideUp((function() {
						n.removeClass("js-opened")
					}))) : (a(this).attr("aria-expanded", "true"), n.addClass("js-opened"), n.find(".mn-sub:first").slideDown()), !1
				})), (n = t.parent("li")).hover((function() {
					a(".main-nav").hasClass("mobile-on") || (a(this).find(".mn-has-sub:first").attr("aria-expanded", "true").addClass("js-opened"), a(this).find(".mn-sub:first").stop(!0, !0).fadeIn("fast"))
				}), (function() {
					a(".main-nav").hasClass("mobile-on") || (a(this).find(".mn-has-sub:first").attr("aria-expanded", "false").removeClass("js-opened"), a(this).find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast"))
				})), a(".inner-nav a").focus((function() {
					a(".main-nav").hasClass("mobile-on") || !a("html").hasClass("no-touch") || a(this).parent("li").find(".mn-sub:first").is(":visible") || (a(this).parent("li").parent().children().find(".mn-has-sub:first").attr("aria-expanded", "false").removeClass("js-opened"), a(this).parent("li").parent().children().find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast"))
				})), a(".inner-nav a").first().keydown((function(s) {
					a(".main-nav").hasClass("mobile-on") || s.shiftKey && 9 == s.keyCode && (a(this).parent("li").find(".mn-has-sub:first").attr("aria-expanded", "false").removeClass("js-opened"), a(this).parent("li").find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast"))
				})), a(".mn-sub li:last a").keydown((function(s) {
					a(".main-nav").hasClass("mobile-on") || s.shiftKey || 9 != s.keyCode || (a(this).parent("li").parent().parent().find(".mn-has-sub:first").attr("aria-expanded", "false").removeClass("js-opened"), a(this).parent("li").parent().stop(!0, !0).delay(100).fadeOut("fast"))
				})), a(document).keydown((function(s) {
					a(".main-nav").hasClass("mobile-on") || 27 == s.keyCode && (t.parent("li").find(".mn-sub:first li .mn-sub").is(":visible") ? (t.parent("li").find(".mn-sub:first li .mn-has-sub").attr("aria-expanded", "false").removeClass("js-opened"), t.parent("li").find(".mn-sub:first li .mn-sub").stop(!0, !0).delay(100).fadeOut("fast")) : (t.parent("li").find(".mn-has-sub:first").attr("aria-expanded", "false").removeClass("js-opened"), t.parent("li").find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast")))
				})), t.on("click", (function() {
					if (!a(".main-nav").hasClass("mobile-on")) return a(this).hasClass("js-opened") ? (a(this).removeClass("js-opened"), a(this).attr("aria-expanded", "false"), a(this).parent("li").find(".mn-sub:first").fadeOut("fast"), !1) : (a(this).addClass("js-opened"), a(this).attr("aria-expanded", "true"), a(this).parent("li").find(".mn-sub:first").fadeIn("fast"), !1)
				}))
			}(), init_scroll_navigate(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(a) {
				return new bootstrap.Tooltip(a)
			}))
	})), a(window).resize((function() {
		var s;
		a(".mobile-on .desktop-nav > ul").css("max-height", a(window).height() - a(".main-nav").height() - 20 + "px"), a(window).width() <= 1024 ? (a(".main-nav").addClass("mobile-on"), a(".mobile-nav").hasClass("active") || e.css("display", "none")) : a(window).width() > 1024 && (a(".main-nav").removeClass("mobile-on"), e.css("display", "block")), s = (a(window).width() - a(".container").first().width()) / 2, a(".split-column-left").css("padding-left", s + "px"), a(".split-column-right").css("padding-right", s + "px")
	}));
	var s = a(".mobile-nav"),
		e = a(".desktop-nav");
	s.attr("aria-expanded", "false")
}(jQuery);
// HEADER



