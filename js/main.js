// прелоадер
window.onload = function () {
    /*   document.body.classList.add('loaded_hiding');
       window.setTimeout(function () {

       }, 500);*/
}
$(document).ready(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    var bLazy = new Blazy({
        offset: 100
        , success: function (element) {
            setTimeout(function () {
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/, '');
            }, 200);
        }
    });
    // ПЛАВНЫЙ СКРОЛ ПО ССЫЛКЕ ПЕРВОГО ЭКРАНА
    $(".arrow").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    }); //конец   $(".arrow").on("click"

    // ПЛАВНЫЙ СКРОЛ ПО КНОПКЕ ВВЕРХ
    $(".arrowUp").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    }); //конец   $(".arrow").on("click"


    // ПЛАВНЫЙ СКРОЛ ПО КЛИКУ НА ССЫЛКИ МЕНЮ/////////////////////
    $(".nav__menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - 70 + 'px'}, 1000);
    }); //конец   $(".nav__menu").on("click"


    ///////////////////////////////////
    // выбираем все секции забираем у них id и превращаем в обыкновенный массив(get)
    // var section = $('section').map(function(index, elem) {
    //     return $(this).attr('id');
    // }).get();


    ///изменение цвета ссылок навигации  в заисимости от положения скрола на странице////////////////////////////////////
    $(window).on("scroll", function (event) {
        //возвращает местоположение скрола
        let doc = $(document).scrollTop(),
            //возврю местопол верха секции относительно начала документа
            about = $('#about').offset().top,
            child_1 = $('.nav__menu li:nth-child(1) a'),
            child_2 = $('.nav__menu li:nth-child(2) a'),
            child_3 = $('.nav__menu li:nth-child(3) a'),
            child_4 = $('.nav__menu li:nth-child(4) a');
        // let numberChild = (x) => { return $('.nav__menu li:nth-child("\x") a') };
        (doc < about * 0.7) ? child_1.addClass('js_aActive') : child_1.removeClass('js_aActive');
        (doc > (about * 0.7) && doc < about * 1.5) ? child_2.addClass('js_aActive') : child_2.removeClass('js_aActive');
        (doc > about * 1.5 && doc < about * 2.1) ? child_3.addClass('js_aActive') : child_3.removeClass('js_aActive');
        ($(window).scrollTop() + $(window).height() >= $(document).height()) ? child_4.addClass('js_aActive') : child_4.removeClass('js_aActive');
        // // ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ ВНИЗ КНОПКИ ВВЕРХ
        (doc > 600) ? $('.wrapButtonUp').css('display', 'block') : $('.wrapButtonUp').css('display', 'none');

    }); //конец  $(window).on("scroll"

    /////////////////////////////////////////


    // ИЗМЕНЕНИЕ БУРГЕРА  В КРЕСТИК ПО СОБЫТИЮ click+ анимация навигации
    var link = $('.burger_link'),
        nav__animate = $('.nav__animate');
    $('nav').on('click', '.burger_link', function (event) {
        event.preventDefault();
        link.toggleClass('burger_link_active');
        // let animateNav = (width, pad) => {
        //     return nav__animate.animate({
        //         'width': width,
        //         'margin-left': pad
        //     }, 1000);
        // }
        function animateNav(width, pad) {
            return nav__animate.animate({
                'width': width,
                'margin-left': pad
            }, 1000);
        }

        //расширяющаяся полоса меню из блока 0 ширины  в разные стороны
        if (link.hasClass('burger_link_active')) {
            // $('.nav__animate ul').css('display', 'flex');

            animateNav('100vw', '-55px');
            $('.nav__menu').slideDown(1100);

        } else {
            $('.nav__menu').slideUp(1800);
            animateNav(0, 0);

            // $('.nav__animate ul').css('display', 'none');

        }
    });

    /////////бегающие полоски при наведении на бургер//////
    $('.burger_link').hover(function () {
        $('.fLine span').animate({'width': '100%'}, 900);
        $('.tLine span').animate({'width': '100%'}, 1200);
        $('.treeLine span').animate({'width': '100%'}, 1500);
    }, function () {
        $('.fLine span').animate({'width': 0}, 900);
        $('.tLine span').animate({'width': 0}, 1200);
        $('.treeLine span').animate({'width': 0}, 1500);
    }); //конец   $('.burger_link').hover

    ////анимиование блоков мои работы/////////////////////////

    $('.my-works__link').hover(function () {
        $(this).find($('.my-works__ver-line')).animate({'height': '80%'}, 1000);
        $(this).find($('.my-works__hor-line')).animate({'width': '90%'}, 1000);
        $(this).css({
            // 'transform': 'scale(1.1)',
            'transition': '1s',
            'z-index': '10'
        });
    }, function () {
        $(this).find($('.my-works__ver-line')).animate({'height': 0}, 1000);
        $(this).find($('.my-works__hor-line')).animate({'width': 0}, 1000);
        $(this).css({
            // 'transform': 'scale(1.0)',
            'transition': '1s',
            'z-index': 0
        });
    }); //конец   $('.wrapProjectImg').hover
    // акордеон работ
    // $('.my-works__title').click(function(event) {
    //     $('.my-works__slide').slideToggle(1000);
    // });


    // анимация по скроллу

    const animItems = document.querySelectorAll("._anim-items");

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (var i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-none')) {
                        // для повторной анимации, если повторной анимации не надо  убрать условие else
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        // функия позволяет получить расстояние от верха и левой стороны страницы до элемента
        function offset(elem) {
            const rect = elem.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
    }
    /*вызываем функции сразу для того , что бы элементы которые видны при загрузке страницы
     в начале сразу анимировались не дожидаясь события скролла*/
    animOnScroll();

});