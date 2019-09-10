/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('.header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
/* 			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});
 */
})(jQuery);

//Adrian code below

const BPITRADE_HEADER = "<strong>BPITrade</strong>, the online stock <br>trading website by Technistock <br>for BPI Securities.";
const BPITRADE_URL = "https://www.bpitrade.com";
const BPITRADE_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "ASP Classic", "MS SQL"];
const BPITRADE_CONCEPTS = ["Procedural Programming", "Full Stack Web Development", 
						"Web Security", "Version Control (SVN)"];
const BPITRADE_HIGHLIGHTS = ["Nice trading website", "The website is so good.",
							"Very good functionalities", "Functions really well."];

const FIRSTMETRO_HEADER = "<strong>FirstMetroSec</strong>, the online stock <br>trading website by Technistock <br>for First Metro Securities.";
const FIRSTMETRO_URL = "https://www.firstmetrosec.ph";
const FIRSTMETRO_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "ASP Classic", "MS SQL"];
const FIRSTMETRO_CONCEPTS = ["Procedural Programming", "Full Stack Web Development", "REST API",
						"Web Security", "Version Control (SVN)"];
const FIRSTMETRO_HIGHLIGHTS = ["Nice FM website", "The website is so good.",
							"Very good first metro functionalities", "Functions really well."];
	
const OPEAPP_HEADER = "<strong>OPE-APP</strong>, an online pre-employment <br>exam website for PNOC-EC.";
const OPEAPP_URL_SITE = "http://opeapp.herokuapp.com";
const OPEAPP_URL_CODE = "https://github.com/AdrianPicar/OPE_APP";
const OPEAPP_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "PHP (CodeIgniter)", "MySQL"];
const OPEAPP_CONCEPTS = ["Model-View-Controller (MVC)", "Full Stack Web Development", "Version Control"];
const OPEAPP_HIGHLIGHTS = ["Nice OPEAPP website", "The website is so good.",
							"Very good OPEAPP functionalities", "Functions really well."];

$(".project-link").on("click", function(){
	var projectName = $(this).attr('id');
	var highlightNum = 1;
	var highlightListIndex = 0;
	var imageUrl = "";
	var headerContent = "";
	var siteUrl = "";
	var codeUrl = "";
	var showCodeLink = true;
	var toolsList = [];
	var conceptsList = [];
	var toolsContent = "";
	var conceptsContent = "";

	switch(projectName){
		case "bpitrade" : 
			headerContent = BPITRADE_HEADER;
			siteUrl = BPITRADE_URL;
			toolsList = BPITRADE_TOOLS;
			conceptsList = BPITRADE_CONCEPTS;
			highlightsList = BPITRADE_HIGHLIGHTS;
			showCodeLink = false;
			break;
		case "firstmetro" : 
			headerContent = FIRSTMETRO_HEADER;
			siteUrl = FIRSTMETRO_URL;
			toolsList = FIRSTMETRO_TOOLS;
			conceptsList = FIRSTMETRO_CONCEPTS;
			highlightsList = FIRSTMETRO_HIGHLIGHTS;
			showCodeLink = false;
			break;
		case "opeapp" : 
			headerContent = OPEAPP_HEADER;
			siteUrl = OPEAPP_URL_SITE;
			codeUrl = OPEAPP_URL_CODE;
			toolsList = OPEAPP_TOOLS;
			conceptsList = OPEAPP_CONCEPTS;
			highlightsList = OPEAPP_HIGHLIGHTS;
			break;
		default : 
			break;
	}

	$("#header-project > .inner > h1").html(headerContent);
	$("#header-project").addClass("header");
	$("#header-project").css("background-image", 'url(assets/css/images/overlay.png), url(images/'+projectName+'.jpg)');
	$("#site-link").attr("href", siteUrl);

	if(showCodeLink){
		$("#code-link").attr("href", codeUrl);
		$("#code-link").css("display", "inline-block");
	}else{
		$("#code-link").css("display", "none");
	}
	
	$.each(toolsList, function(index, val){
		toolsContent += "&bull;&emsp; "	+ val + "<br>";
	});
	$.each(conceptsList, function(index, val){
		conceptsContent += "&#9642;&emsp; "	+ val + "<br>";
	});
	$("#tools-col-1").html(toolsContent);
	$("#tools-col-2").html(conceptsContent);

	$(".highlights").each(function(){
		var currSelector = "#highlight-"+ highlightNum;
		$(currSelector + " > h3").html(highlightsList[highlightListIndex]);
		highlightListIndex++;
		$(currSelector + " > p").html(highlightsList[highlightListIndex]);
		
		imageUrl = "images/screenshots/" + projectName + "_" + highlightNum + ".jpg";
		$(currSelector + " > img").attr("src", imageUrl);
		highlightNum++;
	});

	$(".project-article").each(function(){
		$(this).css("display", "block");
	});
	$("#"+projectName+"-article").css("display", "none");

	$("#home").css("display", "none");
	$("#project-con").css("display", "block");

	$(".carousel-highlights").slick("slickGoTo", 0, true);
	$('.carousel-highlights').slick('slickSetOption', "autoplaySpeed", 3000, true);
});

//end of project-link
			
$("#home-link").on("click", function(){
	$("#project-con").css("display", "none");
	$("#home").css("display", "block");
});
//end of home-link


		  