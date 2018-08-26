    function changeTooltip(e) {

        return '<div class="balloon_value"> +' + (10 + e.value*0.2).toFixed(0) + '</div>'
    }

    $(".balloon_js_container").roundSlider({
        handleShape: "square",
        editableTooltip: false,
        width: 22,
        radius: 110,
        value: 90,
        handleSize: "40",
        animation: false,
        sliderType: "min-range",
        circleShape: "pie",
        startAngle: 315,
        endAngle: 320,
        tooltipFormat: changeTooltip,
        change: function(options) {
            $('.popup_balloon .popup_icon_subtext').text('+' +(10 + options.value*0.2).toFixed(0));
        }
    });
