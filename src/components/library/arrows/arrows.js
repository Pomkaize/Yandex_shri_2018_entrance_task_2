var cards = (function() {

    var animationFavoriteScTime = 500;

    function animateDvCards() {

        var cards = $('.cards_block_favorite_dv'),
            arrows = $('.arrows_right_favorite_dv, .arrows_left_favorite_dv'),
            scroll = 300,
            animationTime = 300;

        arrows.on('click', function () {

            var toScroll = $(this).hasClass('arrows_right_favorite_dv') ? scroll : -1*scroll;

            cards.animate({scrollLeft: cards.scrollLeft() + toScroll}, animationTime);
        })
    }

    function animateScCards() {
        var cards = $('.card_favorite_sc'),
            arrows = $('.arrows_left_favorite_sc, .arrows_right_favorite_sc'),
            that = this;

        var finishRight = true;
        var finishLeft = true;

        arrows.on('click', function() {

            if($(this).hasClass('arrows_right_favorite_sc') && finishRight) {
                cardAnimation('right_1');
                finishRight = false;

                setTimeout(function () {
                    finishRight = true;
                }, animationFavoriteScTime);
            }
            else if($(this).hasClass('arrows_left_favorite_sc') && finishLeft)
            {
                cardAnimation('left_1');
                finishLeft = false;

                setTimeout(function () {
                   finishLeft = true;
                }, animationFavoriteScTime)
            }
        });



        function cardAnimation(direction)
        {

            var toHidden = cards.filter(function() { return $(this).css("display") != "none" }),
                toShow = cards.filter(function() { return $(this).css("display") == "none" });

            hideElements(toHidden);
            showElements(toShow);

            function hideElements(elements)
            {
                elements.addClass('animation_cards_slide_off_' + direction);
                setTimeout(function() {
                    elements.addClass('card_favorite_sc--overflow');
                    elements.removeClass('animation_cards_slide_off_' + direction);
                }, animationFavoriteScTime)
            }

            function showElements(elements) {
                elements.removeClass('animation_cards_slide_off_' + direction);
                elements.removeClass('card_favorite_sc--overflow');
                elements.addClass('animation_cards_slide_on_' + direction);
                setTimeout(function() {
                    elements.removeClass('animation_cards_slide_on_' + direction);
                }, animationFavoriteScTime)
            }
        }

    }


    animateDvCards();
    animateScCards();

})();

