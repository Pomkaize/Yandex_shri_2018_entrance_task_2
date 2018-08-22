$('.menu_list_item_header').on('click', function(e) {
    var active = $(this).siblings('.menu_list_item_header--active');
    active.removeClass('menu_list_item_header--active');
    $(this).addClass('menu_list_item_header--active');
    toggleHeader();
    e.stopPropagation();
});