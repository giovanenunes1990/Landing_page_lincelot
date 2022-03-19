window.onload = function () {

    $('.svg-collection, .banner').mouseenter(function () {
        $('.svg-collection .heart polygon').css('animation', ' animate-main 4s linear forwards');
        setTimeout(() => {
            $('.svg-collection .heart .cls-2').css('opacity', '1');
        }, 4000);
        setTimeout(() => {
            $('.svg-collection .four path').css('animation', ' animate-four 4s linear forwards');
        }, 4100);
        setTimeout(() => {
            $('.svg-collection .four .cls-2').css('opacity', '1');
        }, 8100);
        setTimeout(() => {
            $('.svg-collection .boot path').css('animation', ' animate-three 4s linear forwards');
        }, 8200);
        setTimeout(() => {
            $('.svg-collection .node path').css('animation', ' animate-two 5s linear forwards');
        }, 12200);



    });
};
var item = '';

function ident(par) {
    item = `${par}`;


    var test = document.querySelector(`#${item}`);
    let short = `#${item}`;

    test.addEventListener("mouseover", function (event) {
        document.querySelector(short + ' .overlay').style.opacity = '1';
    });
    test.addEventListener("mouseleave", function (event) {
        document.querySelector(short + ' .overlay').style.opacity = '0';
    });

    this.onmouseover = null;

}

let open = false;

function openMenuMobile() {
    open = true;
    document.querySelector('.menu-mobile-overlay').style.width = '100vw';
    document.querySelector('.menu-mobile').style.width = '75vw';
    document.querySelector('.menu-mobile ul').style.display = 'block';
    document.querySelector('.btn-mobile').classList.add('btn-mobile-adapted');
    document.querySelector('.btn-mobile .line_2').style.display = 'none';
    document.querySelector('.line_1').classList.add('incline-left');
    document.querySelector('.line_3').classList.add('incline-right');
}

function closeMenuMobile() {
    open = false;
    document.querySelector('.menu-mobile-overlay').style.width = '0';
    document.querySelector('.menu-mobile').style.width = '0';
    document.querySelector('.menu-mobile ul').style.display = 'none';
    document.querySelector('.btn-mobile').classList.remove('btn-mobile-adapted');
    document.querySelector('.btn-mobile .line_2').style.display = 'block';
    document.querySelector('.line_1').classList.remove('incline-left');
    document.querySelector('.line_3').classList.remove('incline-right');
}

function mobile() {

    if (open == false) {
        openMenuMobile();
    } else {
        closeMenuMobile();
    }

}
function resizeClear(event) {

    closeMenuMobile();

}
function moreClick(event) {
    if (event.target === event.currentTarget) {
        closeMenuMobile();
    }
}

$('.desk a.internal').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffSet = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffSet
    }, 500);
});

$('.menu-mobile a.internal').click(function (e) {
    e.preventDefault();
    closeMenuMobile();
    var id = $(this).attr('href'),
        targetOffSet = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffSet
    }, 500);

});


let theme = 'light';
$(".theme-changes").click(function () {

    if (theme == 'light') {
        $(".btn-body .circle").css({ 'left': '0px', 'backgroundColor': 'lightgray' });
        $(".btn-body").css({ 'backgroundColor': 'lightgray' });

        $('.menu, .menu-mobile, .main').removeClass('menu-day').addClass('menu-night');
        $('.about__text, .contact, .footer, .desk ul li a, .menu-mobile ul li a, .menu-mobile ul li').css('color', '#d4d4d4');
        $(".line_1, .line_2, .line_3").css('backgroundColor', '#d4d4d4');

        theme = 'dark';
    } else if (theme == 'dark') {
        $(".btn-body .circle").css({ 'left': '27.5px', 'backgroundColor': '#2a77eb' });
        $(".btn-body").css({ 'backgroundColor': '#2a77eb' });

        $('.menu, .menu-mobile, .main').removeClass('menu-night').addClass('menu-day');
        $('.about__text, .contact, .footer, .desk ul li a, .menu-mobile ul li a, .menu-mobile ul li').css('color', '#303030');
        $(".line_1, .line_2, .line_3").css('backgroundColor', '#303030');

        theme = 'light';
    }


});



document.querySelector('.btn-mobile').addEventListener('click', mobile);
document.querySelector('.menu-mobile-overlay').addEventListener('click', moreClick);
window.addEventListener('resize', resizeClear, true);



