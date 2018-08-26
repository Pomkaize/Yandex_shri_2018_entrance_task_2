var range = (function() {
    var input = $('.input_range__container_temperature > input[type=range]');

    input.val((28-10)*5);

    input.on('change', function (e) {
        $('.popup_icon_temperature > .popup_icon_subtext').text('+'+(10 + e.target.value*0.2).toFixed(0))
    });
})();


