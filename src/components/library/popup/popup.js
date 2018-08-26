
var popup = (function() {

    var popUpAnimationTime = 300;

    function togglePopup(jQelement) {

        var container = jQelement,
            popupManager = container.parent();

        if (container.hasClass('popup--active')) {
            container.addClass('animation_popup_close');
            popupManager.addClass('animation_background_opacity_off');
            globalHelper.enableScroll(true);
            setTimeout(function () {
                container.removeClass('popup--active');
                container.removeClass('animation_popup_close');
                container.removeClass('animation_popup_open');
                popupManager.removeClass('popup_manager--active');
                popupManager.removeClass('animation_background_opacity_off');
            }, popUpAnimationTime);

        }
        else {

            container.addClass('animation_popup_open');
            container.addClass('popup--active');
            popupManager.addClass('animation_background_opacity_on');
            popupManager.addClass('popup_manager--active');
            globalHelper.disableScroll(true);
            setTimeout(function () {
                container.removeClass('animation_popup_open');
                popupManager.removeClass('animation_background_opacity_on');
            }, popUpAnimationTime);
        }
    }

    function toggleFilterBackground() {

        var elements = $(window.document.body).children().not('.popup_manager');

        if(elements.first().hasClass('animation_background_blur_on'))
        {
            elements.addClass('animation_background_blur_off');

            setTimeout(function(){
                elements.removeClass('animation_background_blur_on');
                elements.removeClass('animation_background_blur_off');
            }, popUpAnimationTime)
        }
        else
        {
            elements.addClass('animation_background_blur_on');
        }
    }

    return {
        toggle: function (jQelement) {
            togglePopup(jQelement);
            toggleFilterBackground()
        }
    }
    })();

$('.popup_button').on('click', function () {
    popup.toggle($(this).parent().parent())
});
