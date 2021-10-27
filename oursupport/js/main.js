// smooth scrol and page up

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn('slow');
    } else {
        $('.pageup').fadeOut('slow');
    }
});



// sending form with jquery

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay').fadeIn('slow');
        $('[data-modal=msg_sent]').on('click', function() {
            $('.overlay').fadeOut('slow');
        });

        $('form').trigger('reset');
    });
    return false;
});


// different line widths for lines on Services page
let lines = document.querySelectorAll('.line');
let spans = document.querySelectorAll('.why__wrapper__reasons__block__line span');

if (spans.length > 0) {
    lines.forEach((line, i) => {
        if (document.querySelector('.why__wrapper__reasons')) {
            line.style.width = `${document.querySelector('.why__wrapper__reasons').offsetWidth - spans[i].offsetWidth - 22}px` 
        } else {
            line.style.width = `${676 - spans[i].offsetWidth - 22}px`
        }
        
    });
}


//menu

const hamburger = document.querySelector('label svg');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobileMenu__active');
    if (document.getElementById("checkbox").checked) {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }

});