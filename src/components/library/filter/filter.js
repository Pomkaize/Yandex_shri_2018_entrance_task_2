
var active = $('.filter_container_favorite_dv');
active.on('click', function () {
    onFilterClick($(this))
});

function onFilterClick(e)
{
         var cards = $('.card_favorite_dv');
        /* mobile filter means*/
    console.log(e)
        if(globalHelper.getViewPortSizes()[0] < 900 && e.hasClass('filter--active')) {
                handleMobileFilter(e);

        }
        /* handle standard filter*/
        else {
            /* don't won'r handle current*/
            if(e.hasClass('filter--active')) {
                return;
            }

            else {
                handleFilter(e);
            }
        }


        function handleMobileFilter(e)
        {
            var buttons = $('.filter_favorite_dv').not(e),
                activeButton = e;

            if (buttons.css('display') === 'none') {
                buttons.addClass('animation_filter_on');
                buttons.addClass('filter_favorite_dv--open');

                buttons.on('click', function submenu () {
                    var newActiveButton = $(this);
                    newActiveButton.addClass('filter--active');
                    activeButton.removeClass('filter--active');
                    newActiveButton.removeClass('animation_filter_on');

                    var new_buttons = $('.filter_favorite_dv').not(newActiveButton);

                    new_buttons.removeClass('animation_filter_on');
                    new_buttons.addClass('animation_filter_off');
                    setTimeout(function () {
                        new_buttons.removeClass('filter_favorite_dv--open');
                        new_buttons.removeClass('animation_filter_off');
                    }, 300);
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
                }, 300);
            }
        }

    function handleFilter(e)
    {
        console.log(e);
       var active = e.siblings('.filter--active');
        active.removeClass('filter--active');
        active.removeClass('filter_favorite_dv--open');
        e.addClass('filter--active');
        console.log(e.data('filter'));
        hideByFilter(cards, e.data('filter'))
    }
}


function hideByFilter(elements, filter) {
    var pattern = "\"[data-type=\'"+filter +"\']\"",
        toHideElements = elements.not(pattern),
        toShowElements = elements.filter(function() {
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
        }, 500)
    }

    function showElements(elements) {
        elements.removeClass('animation_cards_off');
        elements.removeClass('card_favorite_dv--disabled');
        elements.addClass('animation_cards_on');
        setTimeout(function() {
            elements.removeClass('animation_cards_on');
        }, 500)
    }

}

$(".filter_light").on('click', function() {
    console.log( $(this).siblings());
   $(this).siblings().filter('.filter--active').removeClass('filter--active');
   $(this).addClass('filter--active');
});

