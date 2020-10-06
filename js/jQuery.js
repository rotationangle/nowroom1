$(function () {
    /* ===============================================
    #ヘッダー変化
    =============================================== */
    var $win = $(window),
        $header = $('.js-header'),
        animationClass = 'is-animation';

    $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if (value > 110) {
            $header.addClass(animationClass);
        } else {
            $header.removeClass(animationClass);
        }
    });

    /* ===============================================
    #ドロワーメニュー
    =============================================== */
    $(document).ready(function () {
        $('.drawer').drawer();
    });

    /* ===============================================
    #スワイパー
    =============================================== */
    var media_slider = new Swiper('.swiper-container', {
        // ここからオプション
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            999: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 15,
            }
        },

        onSlideChangeStart: function () {
            $('.swiper-slide').addClass('swiper-moving');
        },
        onSlideChangeEnd: function () {
            $('.swiper-slide').removeClass('swiper-moving');
        },
    })

    var price_slider = new Swiper('.price-swiper-container', {
        // ここからオプション
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            999: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
        },

        onSlideChangeStart: function () {
            $('.swiper-slide').addClass('swiper-moving');
        },
        onSlideChangeEnd: function () {
            $('.swiper-slide').removeClass('swiper-moving');
        },
    })

    /* ===============================================
    #ホバー変化
    =============================================== */
    $('.price-card.left').hover(
        function () {
            $('.price-card.left').addClass('hover');
            $('.price-card-view.left').addClass('hover');
            $(this).css('color', '#fff');
        },
        function () {
            $('.price-card.left').removeClass('hover');
            $('.price-card-view.left').removeClass('hover');
            $(this).css('color', '');
        }
    );

    $('.price-card.right').hover(
        function () {
            $('.price-card.right').addClass('hover');
            $('.price-card-view.right').addClass('hover');
        },
        function () {
            $('.price-card.right').removeClass('hover');
            $('.price-card-view.right').removeClass('hover');
        }
    );

    /* ===============================================
    #アコーディオン
    =============================================== */
    $('.accordion-item .accordion-head').on("click", function () {
        $(this).next().slideToggle();
        return false;
    });

    /* ===============================================
    #スムーススクロール
    =============================================== */
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function () {
        // 移動速度を指定（ミリ秒）
        let speed = 600;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
            {
                scrollTop: position - $(".js-header").outerHeight()//ヘッダーの高さをひく
            },
            speed
        );
        return false;
    });


});