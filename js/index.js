$(document).ready(function(){
    showTextAndNavigation(1000, 300);
    changeNavigation();
    checkMessageScroll();
    scroll('.button-navigation');
    speedStarsShow(200);
    whichSectionIsChosen();
    Language();
});

//Function for chose section in navigation
function whichSectionIsChosen(){
    $(document).scroll(function(){
        if($('#js-header').offset().top + $('#js-header').height() -200 >= $(window).scrollTop()){
            $('.button-navigation').removeAttr('style');
        }
        else if(($('#h3-about').offset().top - 200) <= $(window).scrollTop() && $('#js-about').offset().top + $('#js-about').height() >= $(window).scrollTop()){
            $('.button-navigation').removeAttr('style');
            $('.button-navigation[data-scroll="#h3-about"]').css('background-color', 'rgb(255, 255, 255, 0.5)');
        }
        else if(($('#h3-works').offset().top - 200) <= $(window).scrollTop() && $('#h3-works').offset().top + $('#js-works').height() - 200 >= $(window).scrollTop()){
            $('.button-navigation').removeAttr('style');
            $('.button-navigation[data-scroll="#h3-works"]').css('background-color', 'rgb(255, 255, 255, 0.5)');
        }
        else if(($('#h3-skills').offset().top - 200) <= $(window).scrollTop() && $('#h3-skills').offset().top + $('#js-skills').height() - 200 >= $(window).scrollTop()){
            $('.button-navigation').removeAttr('style');
            $('.button-navigation[data-scroll="#h3-skills"]').css('background-color', 'rgb(255, 255, 255, 0.5)');
        }
        else if(($('#h3-contact').offset().top - 200) <= $(window).scrollTop() && $('#h3-contact').offset().top + $('#js-contact').height() >= $(window).scrollTop()){
            $('.button-navigation').removeAttr('style');
            $('.button-navigation[data-scroll="#h3-contact"]').css('background-color', 'rgb(255, 255, 255, 0.5)');
        }
    });
}
//Function for first screen animation
function showTextAndNavigation(speed, speedNavigation){
    $('#js-block-header').animate({
        opacity: '1'
    }, speed);
    $('#js-navigation').animate({
        top: '0'
    }, speedNavigation);
    $('#js-text-about').animate({
        opacity: '1'
    }, speed);
}
//Function for scroll on navigation click
function scroll(clickElement){
    $(clickElement).click(function(){
        var scrollName = $(this).attr('data-scroll');
        var scrollElem = $(scrollName);
        var scrollTop = scrollElem.offset().top;
    
        $('html, body').animate({scrollTop: (scrollTop - 110)}, 500);
    });
}
//Function for show/hide stars in skills
function speedStarsShow(speed){
    $('.skill-block').mouseover(function(){
        $(this).children('.stars').slideDown(speed);
    });
    $('.skill-block').mouseleave(function(){
        $(this).children('.stars').slideUp(speed);
    });
}
//Function for show/hide message scroll
function checkMessageScroll(){
    var checkScroll = true;
    $('body').hover(function(){
        if($(window).scrollTop() == 0 && checkScroll){
            $('.message-to-scroll').fadeIn(500);
            checkScroll = false;
        }
        $(window).scroll(function(){
            $('.message-to-scroll').fadeOut(500);
            checkScroll = false;
        });
    });
}
//Function for language
function Language(){
    $('#js-left-side').mouseover(function(){
        if($(window).width() > 576){
            $('#js-language').css({
                'transform': 'rotate(0deg)'
            });
        }

    });
    $('#js-left-side').mouseleave(function(){
        if($(window).width() > 576){
            $('#js-language').css({
                'transform': 'rotate(-90deg)'
            });
        }
    });
    $('#js-lang-EN').click(function(){
        $('#js-lang-UA').removeClass('selected-lang');
        $(this).addClass('selected-lang');
        //Changing language on English
        $('.button-navigation[data-scroll="#h3-about"]').text('About');
        $('.button-navigation[data-scroll="#h3-works"]').text('Works');
        $('.button-navigation[data-scroll="#h3-skills"]').text('Skills');
        $('.button-navigation[data-scroll="#h3-contact"]').text('Contact');
        $('#js-name-header').text('Roman Dranchuk');
        $('#js-frontEnd-header ').text('Front-End developer');
        $('#h3-about').text('About');
        $('#h3-about').css('margin-right', '30px');
        $('#js-text-about').html('<p>As a dedicated Frontend Developer based in Ukraine, I\'m on a continuous journey of learning and creating. Coding isn\'t just my profession, it\'s my passion. Join me on this exciting web development adventure! <br><b>Let\'s build the web together!</b></p>');
        $('#h3-works').text('Projects');
        $('.h4-hidden-block').text('Used:');
        $('#name-of-project-1').text('Name of project');
        $('#name-of-project-2').text('Name of project');
        $('#name-of-project-3').text('Name of project');
        $('#name-of-project-4').text('Name of project');
        $('#name-of-project-5').text('Name of project');
        $('#name-of-project-6').text('Name of project');
        $('#name-of-project-7').text('Name of project');
        $('#name-of-project-8').text('Name of project');
        $('#name-of-project-9').text('Name of project');
        $('#about-project-1').text('About project');
        $('#about-project-2').text('About project');
        $('#about-project-3').text('About project');
        $('#about-project-4').text('About project');
        $('#about-project-5').text('About project');
        $('#about-project-6').text('About project');
        $('#about-project-7').text('About project');
        $('#about-project-8').text('About project');
        $('#about-project-9').text('About project');
        $('#h3-skills').text('Skills');
        $('#h3-contact').text('Contact');
        $('#js-name-contact').text('Roman Dranchuk');
        $('#js-frontEnd-contact ').text('Front-End developer');
        $('.button-text').text('Send e-mail');
    });
    $('#js-lang-UA').click(function(){
        $('#js-lang-EN').removeClass('selected-lang');
        $(this).addClass('selected-lang');
        //Changing language on Ukrainian
        $('.button-navigation[data-scroll="#h3-about"]').text('Про мене');
        $('.button-navigation[data-scroll="#h3-works"]').text('Роботи');
        $('.button-navigation[data-scroll="#h3-skills"]').text('Навички');
        $('.button-navigation[data-scroll="#h3-contact"]').text('Контакт');
        $('#js-name-header').text('Роман Дранчук');
        $('#js-frontEnd-header ').text('Front-End розробник');
        $('#h3-about').text('Про мене');
        $('#h3-about').css('margin-right', '65px');
        $('#js-text-about').html('<p>Відданий Frontend розробник із України. Моя мета - навчатися та творити. Програмування це не лише професія, а й моє захоплення. Приєднуйтесь до мене у цій захоплюючій подорожі розробки веб-сайтів!<br><b>Давайте будувати інтернет разом!</b></p>');
        $('#h3-works').text('Проекти');
        $('.h4-hidden-block').text('Використані технології:');
        $('#name-of-project-1').text('Назва роботи');
        $('#name-of-project-2').text('Назва роботи');
        $('#name-of-project-3').text('Назва роботи');
        $('#name-of-project-4').text('Назва роботи');
        $('#name-of-project-5').text('Назва роботи');
        $('#name-of-project-6').text('Назва роботи');
        $('#name-of-project-7').text('Назва роботи');
        $('#name-of-project-8').text('Назва роботи');
        $('#name-of-project-9').text('Назва роботи');
        $('#about-project-1').text('Про роботу');
        $('#about-project-2').text('Про роботу');
        $('#about-project-3').text('Про роботу');
        $('#about-project-4').text('Про роботу');
        $('#about-project-5').text('Про роботу');
        $('#about-project-6').text('Про роботу');
        $('#about-project-7').text('Про роботу');
        $('#about-project-8').text('Про роботу');
        $('#about-project-9').text('Про роботу');
        $('#h3-skills').text('Навички');
        $('#h3-contact').text('Контакт');
        $('#js-name-contact').text('Роман Дранчук');
        $('#js-frontEnd-contact ').text('Front-End розробник');
        $('.button-text').text('Надіслати e-mail');
    });
}
// Function for chanche navigation if window width is lower than 576
function changeNavigation(){
    if($(window).width() < 576){
        var rightSide = $('#js-right-side').html();
        $('#js-right-side').empty();
        var language = $('#js-language');
        $('#js-language').remove();
        language.css('transform', 'rotate(0deg)');
        $('#js-left-side').removeClass('flex');
        $('#js-left-side').css('width', '77px');
        $('#js-left-side').after(language);
        $('#js-right-side').css({
            'width': '77px',
            'height': '77px',
            'background-color': 'rgb(255, 255, 255, 0.5)',
            'border-radius': '50%',
            'padding': '0',
        });
        var newNavigationButtons = $('<div class="changing-color flex-row"></div>');
        newNavigationButtons.css({
            'position': 'fixed',
            'top': '-100px',
            'width': '100%',
            'height': '50px',
            'z-index': '4',
        });
        $('#js-navigation').after(newNavigationButtons);
        newNavigationButtons.append('<div style="display: flex; justify-content: space-between; width: 90%; margin: 0 auto;">' + rightSide + '</div>');
        addBurgerMenu();
        function addBurgerMenu(){
            $('#js-right-side').addClass('flex-row')
            var burger = $('<div></div>');
            burger.css({'margin': '0 auto', 'position': 'relative'});
            $(burger).appendTo($('#js-right-side'));
            var burgerElement_1 = $('<div id="burger-element-1"></div>');
            var burgerElement_2 = $('<div id="burger-element-2"></div>');
            var burgerElement_3 = $('<div id="burger-element-3"></div>');
            setCssForBurgerElement(burgerElement_1);
            setCssForBurgerElement(burgerElement_2);
            setCssForBurgerElement(burgerElement_3);
            $(burger).append(burgerElement_1, burgerElement_2, burgerElement_3);

            $('#js-right-side').click(function(){
                if(newNavigationButtons.css('top') == '-100px'){
                    $('#burger-element-1').css({'transition': '200ms', 'margin-bottom': '-9px'});
                    $('#burger-element-3').css({'transition': '200ms', 'margin-top': '-9px'});
                    $('#burger-element-1, #burger-element-2').css({
                        'transform': 'rotate(45deg)'
                    });
                    $('#burger-element-3').css({
                        'transform': 'rotate(-45deg)'
                    });
                    newNavigationButtons.animate({'top': '100px'}, 300);
                }
                else{
                    $('#burger-element-1, #burger-element-2').css({
                        'transform': 'rotate(0deg)'
                    });
                    $('#burger-element-3').css({
                        'transform': 'rotate(0deg)'
                    });
                    $('#burger-element-1').css({'transition': '200ms', 'margin-bottom': '2px'});
                    $('#burger-element-3').css({'transition': '200ms', 'margin-top': '2px'});
                    newNavigationButtons.animate({'top': '-100px'}, 300);
                }
            });
            function setCssForBurgerElement(element){
                element.css({
                    'height': '7px',
                    'width': '36px',
                    'border-radius': '9px',
                    'margin': '2px auto',
                    'background-color': 'black'
                })
            }
        }
    }
}