togglePopup($('.popup_light'))

function togglePopup(jQelement) {
   var container = jQelement;
    if(container.hasClass('popup_active'))
    {
       container.hide();
       container.parent().hide();
       container.removeClass('popup_active');
        toggleFilterBackground();
    }
    else {
        container.show();
        container.addClass('popup_active');
        container.parent().show();
        container.parent().css('display', 'flex');
        toggleFilterBackground();
    }

}

$('.popup_button').on('click', function () {
    togglePopup($(this).parent().parent())
});


function toggleFilterBackground() {
    var elements = $(window.document.body).children().not('.popup_manager');
    if(elements.first().hasClass('blur_filter'))
    {
        elements.removeClass('blur_filter');
    }
    else
    {
        elements.addClass('blur_filter');
    }
}

function handlePopups() {

}