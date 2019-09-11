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
const BPITRADE_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "ASP Classic", "MS SQL Server"];
const BPITRADE_CONCEPTS = ["Full Stack Web Development", "REST API",
						"Web Security", "Version Control (SVN)"];
const BPITRADE_HIGHLIGHTS = ["Main Page", "First glance of relevant information upon login.",
							"Research Page", "Easily search the information pertaining to a particular company.",
							"Trading Page", "Easy-to-use and intuitive stock trading page for investing on stocks online."];

const FIRSTMETRO_HEADER = "<strong>FirstMetroSec</strong>, the online stock <br>trading website by Technistock <br>for First Metro Securities.";
const FIRSTMETRO_URL = "https://www.firstmetrosec.ph";
const FIRSTMETRO_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "ASP Classic", "MS SQL Server"];
const FIRSTMETRO_CONCEPTS = ["Full Stack Web Development", "REST API",
						"Web Security", "Version Control (SVN)"];
const FIRSTMETRO_HIGHLIGHTS = ["Quotes Page", "Real-time quotes information to help users in their investment trading decisions.",
							"Portfolio Page", "Utilized AJAX and REST API to allow navigation through the portfolio pages without refreshing the website.",
							"Mutual Funds - Fundsmart", "Allows investing in mutual funds online. Displays important information clearly for research and decision-making."];
	
const OPEAPP_HEADER = "<strong>OPE-APP</strong>, an online pre-employment <br>exam website for PNOC-EC.";
const OPEAPP_URL_SITE = "http://opeapp.herokuapp.com";
const OPEAPP_URL_CODE = "https://github.com/AdrianPicar/OPE_APP";
const OPEAPP_TOOLS = ["HTML", "CSS", "Javascript", "JQuery", "PHP (CodeIgniter)", "MySQL"];
const OPEAPP_CONCEPTS = ["Full Stack Web Development", "Model-View-Controller (MVC)", "Version Control"];
const OPEAPP_HIGHLIGHTS = ["Admin Site - Applicants", "Easily search applicants on the list using filters. Created with AJAX to display the retrieved data without refreshing the page.",
						"Admin Site - Settings", "Edit exam settings for the applicants. Edit display content using a custom text editor.",
						"Applicant Site", "Question types vary from true or false, multiple choice, fill in the blanks, and multiple answers depending on the examiner."];

$(".project-link").on("click", function(){
	var projectName = $(this).attr('id');
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

	$(".highlights").each(function(index){
		var currSelector = "#highlight-"+ (index+1);
		$(currSelector + " > h3").html(highlightsList[highlightListIndex]);
		highlightListIndex++;
		$(currSelector + " > p").html(highlightsList[highlightListIndex]);
		highlightListIndex++;
		imageUrl = "images/screenshots/" + projectName + "_" + (index+1) + ".jpg";
		$(currSelector + " > img").attr("src", imageUrl);
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


		  