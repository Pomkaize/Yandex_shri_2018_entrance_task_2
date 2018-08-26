var vParams = globalHelper.getViewPortSizes(),
    favoriteDv = document.getElementsByClassName('cards_block_favorite_dv')[0],
    main = document.getElementsByClassName('cards_block_main')[0],
    favoriteSc = document.getElementsByClassName('cards_block_favorite_sc')[0],
    temperaturePopupMenu = document.getElementsByClassName('filters_block_temperature')[0],
    lightPopupMenu = document.getElementsByClassName('filters_block_light')[0],
    balloonPopupMenu = document.getElementsByClassName('filters_block_balloon')[0];


$(document).ready(function() {
    horizontalScrollManager();
    fakeCardManager();
    favoriteScManager();
});

/* bad way i know ;( */
$(window).resize(function () {
    vParams = globalHelper.getViewPortSizes();
    horizontalScrollManager();
    favoriteScManager();
});




function horizontalScrollManager() {

    var listeningFavoriteSc = globalHelper.checkScrollHandler(favoriteSc),
        listeningMain = globalHelper.checkScrollHandler(main),
        listeningFavoriteDv = globalHelper.checkScrollHandler(favoriteDv),
        listeningPopups = globalHelper.checkScrollHandler(temperaturePopupMenu);

    if (vParams[0] < 900 && !listeningFavoriteSc) {
        globalHelper.listenHorizontalScroll(favoriteSc)
    }
    else if (vParams[0] >= 900 && listeningFavoriteSc) {
        globalHelper.stopListeningHorizontalScroll(favoriteSc)
    }

    if (vParams[0] < 630 && !listeningMain) {
        globalHelper.listenHorizontalScroll(main)
    }
    else if (vParams[0] >= 630 && listeningMain) {
        globalHelper.stopListeningHorizontalScroll(main)
    }

    if (!listeningFavoriteDv) {
        globalHelper.listenHorizontalScroll(favoriteDv)
    }

    if( !listeningPopups )
    {
        globalHelper.listenHorizontalScroll(temperaturePopupMenu);
        globalHelper.listenHorizontalScroll(lightPopupMenu);
        globalHelper.listenHorizontalScroll(balloonPopupMenu);
    }

}


function fakeCardManager() {
    var mainFakeHandler = fakeButtonHide($('.card_fake_main'), $(main), 'card_fake_main--disable'),
        favoriteScFakeHandler = fakeButtonHide($('.card_fake_favorite_sc'), $(favoriteSc), 'card_fake_favorite_sc--disable');

    $(main).on('mousewheel touchmove DOMMouseScroll', mainFakeHandler);
    $(favoriteSc).on('mousewheel touchmove DOMMouseScroll', favoriteScFakeHandler);

}


function fakeButtonHide(element, container, hideClass) {

    return function (e) {

        if (vParams[0] < 630 && element.hasClass('card_fake_main')) {
            return
        }

        var lastScroll = e.wheelDelta || 0;

        if (container.scrollTop() + container.innerHeight() - lastScroll >= container[0].scrollHeight && !element.hasClass(hideClass)) {
            element.addClass('animation_hide_fake_on');
            setTimeout(function () {
                element.addClass(hideClass);
                element.removeClass('animation_hide_fake_on');
            }, 300)

        }
        else if (container.scrollTop() + container.innerHeight() - lastScroll < container[0].scrollHeight && element.hasClass(hideClass)) {
            element.removeClass(hideClass);
            element.addClass('animation_hide_fake_off');
            setTimeout(function () {
                element.removeClass('animation_hide_fake_off');
            }, 300)
        }
    }
}

$('.card_fake').on('click', function () {
    var parent = $(this).parent(),
        scrollTop = parent.scrollTop();

    parent.stop().animate({scrollTop: scrollTop + 150}, 300, 'swing', function() {
        var event = jQuery.Event( "touchmove" );
        parent.trigger(event);
    });

});

$(".card_favorite_sc").on('click', function () {
   $(this).toggleClass('card_favorite_sc--active')
});





function favoriteScManager() {
    var cards = $(favoriteSc).children().not('.card_fake_favorite_sc');
    var overflowCards = cards.filter('.card_favorite_sc--overflow');

    if (vParams[0] >= 1366) {
        cards.filter(function(e) {
            return e > 8
        }).addClass('card_favorite_sc--overflow');
        if((overflowCards.length) <= 9 && cards.length >= 9) {
            cards.filter(function(e) {
                return e < 9
            }).removeClass('card_favorite_sc--overflow');
        }

    }
    else if ((vParams[0] >= 1160 && vParams[0] < 1366)) {
        if(cards.first().css('display') == 'block')
        {
            cards.filter(function(e) {
                return (e > 5)
            }).addClass('card_favorite_sc--overflow')

        } else {
            cards.filter(function(e) {
                return e < 6
            }).removeClass('card_favorite_sc--overflow')
        }
    }
    else if((vParams[0] < 1160) && cards)
    {
        cards.filter(function(e) {
            return $(this).css('display') === 'none';
        }).removeClass('card_favorite_sc--overflow')
    }
}

$(favoriteDv).children().on('click', function() {
    var cardContent = $(this).clone(),
        popupType = $(this).data('popup');

    if(popupType) {
        var currentPopup = $('.popup_' + popupType),
            additionalText = cardContent.find('.card__title').children().text(),
            title = cardContent.find('.card__title').children().remove().end().text();


        currentPopup.find('.popup__title').text(title);
        currentPopup.find('.popup_additional_text').text(additionalText);
        popup.toggle(currentPopup)
    }
});