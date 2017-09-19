import $ from 'jquery';

const scriptName = () => {

    $('.fitforce-menu-toggle').on('click', function(){
        $('.fitforce-menu-panel-mobile').slideToggle();
        $('body').toggleClass('no-scroll')
    });

    $('.anchor').on('click', function(e){
        e.preventDefault();
        var elem = $(this).attr('href'),
            positionscroll = $(elem).offset().top;
        $('body,html').animate({scrollTop:positionscroll}, 1000);

    });
};

export default scriptName();