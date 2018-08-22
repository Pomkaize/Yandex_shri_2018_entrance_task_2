$('.header__container').on('click', toggleHeader);

function toggleHeader() {
    if(globalHelper.getViewPortSizes()[0] < 630)
    {
        var menu = $('.menu_list_header');
        if(menu.hasClass('animation_slide_on')) {

            menu.removeClass('animation_slide_on');
            menu.addClass('animation_slide_off');
            setTimeout(function() {
                menu.removeClass(['animation_slide_off', 'menu_list_item_header--active'])
            }, 300)
        }
        else {
            menu.addClass(['animation_slide_on', 'menu_list_item_header--active']);
        }

    }
}