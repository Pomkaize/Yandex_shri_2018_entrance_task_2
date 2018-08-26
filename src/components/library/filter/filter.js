var filter = (function() {

    var cards = $('.card_favorite_dv'),
        filters = $('.filter_favorite_dv'),
        activeClass = 'filter_favorite_dv--active',
        animationMobileMenuTime = 300,
        animationDvCardsTime = 500;

    function onFilterClick(jQfilter)
    {
        /* mobile filter means, open menu*/
        if(globalHelper.getViewPortSizes()[0] < 900 && jQfilter.hasClass(activeClass)) {

            handleMobileFilter(jQfilter);

        }
        /* handle standard filter*/
        else if(!jQfilter.hasClass(activeClass))
        {
                handleFilter(jQfilter);
        }
    }

    function handleMobileFilter(e)
    {

           var buttons = filters.not(e),
            activeButton = e;

        if (buttons.css('display') === 'none') {
            buttons.addClass('animation_filter_on');
            buttons.addClass('filter_favorite_dv--open');

            buttons.on('click', function submenu () {

                var newActiveButton = $(this);
                newActiveButton.addClass(activeClass);
                activeButton.removeClass(activeClass);
                newActiveButton.removeClass('animation_filter_on');

                var new_buttons = filters.not(newActiveButton);

                new_buttons.removeClass('animation_filter_on');
                new_buttons.addClass('animation_filter_off');
                setTimeout(function () {
                    new_buttons.removeClass('filter_favorite_dv--open');
                    new_buttons.removeClass('animation_filter_off');
                }, animationMobileMenuTime );
                new_buttons.unbind('click', submenu);
                newActiveButton.unbind('click');
                newActiveButton.on('click', function () {
                    onFilterClick(newActiveButton)
                });
            });
        }
        else {
            buttons.removeClass('animation_filter_on');
            buttons.addClass('animation_filter_off');
            setTimeout(function () {
                buttons.removeClass('filter_favorite_dv--open');
                buttons.removeClass('animation_filter_off');
                buttons.unbind('click')
            }, animationMobileMenuTime );
        }
    }

    function handleFilter(jQfilter)
    {
        var active = jQfilter.siblings('.' + activeClass);
        active.removeClass(activeClass);
        active.removeClass('filter_favorite_dv--open');
        jQfilter.addClass(activeClass);
        animateCards(cards, jQfilter.data('filter'))
    }


    function animateCards(elements, filter) {
        var toShowElements = elements.filter(function() {
                return ~jQuery(this).data("type").split(" ").indexOf(filter);
            });


        if(filter==='all')
        {
            hideElements(elements);
            showElements(elements)
        }
        else {
            hideElements(elements);
            showElements(toShowElements);
        }


        function hideElements(elements)
        {
            elements.addClass('animation_cards_off');
            elements.addClass('card_favorite_dv--disabled');
            setTimeout(function() {
                elements.removeClass('animation_cards_off');
            }, animationDvCardsTime )
        }

        function showElements(elements) {
            elements.removeClass('animation_cards_off');
            elements.removeClass('card_favorite_dv--disabled');
            elements.addClass('animation_cards_on');
            setTimeout(function() {
                elements.removeClass('animation_cards_on');
            }, animationDvCardsTime )
        }

    }
    return {
        click: onFilterClick
    }
})();

var active = $('.filter_favorite_dv');
active.on('click', function () {
    filter.click($(this))
});

$(".filter_light, .filter_temperature").on('click', function() {
    var className = $(this).hasClass('filter_temperature') ? 'filter_temperature--active' : 'filter_light--active';
    $(this).siblings().filter('.' + className).removeClass(className);
    $(this).addClass(className);
});