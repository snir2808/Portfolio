

$(window).on('load',function(){
    $('.loader .inner').fadeOut(500,function(){
        $('.loader').fadeOut(750)
    })
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })
})

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false,
    })
    var typed = new Typed('.typed',{
        strings: ['Front-End Developer.', 'React Expert.', 'Welcome To My Portfolio.'],
        typeSpeed: 70,
        loop: true, 
        startDelay: 1000,
        showCursor: false 
    })
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 5,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:5
	        }
	    }
	});



    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinish = false;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() +200){
            console.log(skillsTopOffset)
            console.log(window.pageYOffset)

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
                }
            }); 
        }
        if(!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() +200){
            $('.counter').each(function(){
                var element = $(this);
                var endVal = parseInt(element.text())
                element.countup(endVal)
            })
            countUpFinish = true
        }
    })
    
    $('#filters a').click(function(){
        $('#filters .current').removeClass("current")
        $(this).addClass("current")

        var selector = $(this).attr("data-filter")

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })
        return false

    })

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});


    const nav = $("#navigation")
    const navTop = nav.offset().top
    $(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
    }

})

function display(){
    var div = $('#mail')
    $(div).removeClass( "displayNone" )
    $(div).addClass('display');
}
var isOpen = false
var isTyped = false
function display(){
    var div = $('#mail')
    if(!isOpen){
        $(div).removeClass( "displayNone" )
        $(div).addClass('display');
        isOpen = true
        if(!isTyped){
            var typed = new Typed('.Email',{
                strings: [' Sniroos@gmail.com '],
                typeSpeed: 70,
                loop: false, 
                startDelay: 250,
                showCursor: false 
            })
            var typed = new Typed('.phone',{
                strings: [' +972533666263 '],
                typeSpeed: 70,
                loop: false, 
                startDelay: 250,
                showCursor: false 
            })
            isTyped = true
        }
        
    }else{
        $(div).removeClass( "display" )
        $(div).addClass('displayNone');
        isOpen = false
        
    }
}