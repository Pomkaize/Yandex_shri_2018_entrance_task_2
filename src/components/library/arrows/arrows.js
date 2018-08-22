function arrowFavoriteScManager() {
    this.finishRight = true;
    this.finishLeft = true;

    var that = this;

    $('.arrows_right_favorite_sc').on('click', function() {

        if(that.finishRight) {
            cardsSwiper($('.card_favorite_sc'), 'right_1');
            that.finishRight = false;
            setTimeout(function () {
                that.finishRight = true;
            }, 1000)
        }

    });

    $('.arrows_left_favorite_sc').on('click', function() {

        if(that.finishLeft) {
            cardsSwiper($('.card_favorite_sc'), 'left_1');
            that.finishLeft = false;
            setTimeout(function () {
                that.finishLeft = true;
            }, 1000)
        }
    });
}

arrowFavoriteScManager();


$('.arrows_right_favorite_dv').on('click', function () {
    var cards = $('.cards_block_favorite_dv');
   cards.animate({scrollLeft: cards.scrollLeft() + 300}, 300, 'swing', function() {
    });
});

$('.arrows_left_favorite_dv').on('click', function () {
    var cards = $('.cards_block_favorite_dv');
    cards.animate({scrollLeft: cards.scrollLeft() - 300}, 300, 'swing', function() {
    });
})

