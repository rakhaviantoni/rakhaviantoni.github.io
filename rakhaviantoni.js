$(document).ready(function($) {
    setTimeout(function(){
        $('.preloader-wrapper2').addClass('animated slideOutUp');
        setTimeout(function(){
            $('.preloader-wrapper').addClass('animated slideOutUp');
        }, 100);
    }, 1500);
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    clipRelativeInput: true
});
particlesJS.load('particles-js', 'particlesjs.json');