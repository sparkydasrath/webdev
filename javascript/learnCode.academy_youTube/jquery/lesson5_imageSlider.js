'use strict';

$(function(){

    // config
    var width = 720;
    var animationTime = 1000;
    var intervalTime = 1000;
    var currentSlide = 1;

    // cacheDOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide')
    
    var interval;



    // setInterval
    
    
    setInterval(function(){
        $($slideContainer).animate({'margin-left': '-='+width}, animationTime, function(){
            currentSlide++;
            if (currentSlide === $slides.length)
            {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        }) 
    }, intervalTime);
        // animate margin-left of slides
        // if it's last slide, go to position 1 (0px)
    
       // listen for mouseenter to pause
       // listen for mouseleave to resume 

    $slider.on('mouseenter', pauseSlider).on('mouseLeave', startSlider);
});