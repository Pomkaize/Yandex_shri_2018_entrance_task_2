/* helper, state... but it works*/
var globalHelper = (function Helper() {

    function getViewPortSizes() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return [w,h]
    }

    function disableScroll(fixedMargin = false) {

        let body = window.document.body,
            html = document.documentElement;

        if(fixedMargin)
        {
            body.style.paddingRight = getScrollWidth() + 'px';
        }
        body.classList.add('body-fixed');
        html.classList.add('body-fixed');
    }

    function  enableScroll(fixedMargin = false)
    {
        let body = window.document.body,
            html = document.documentElement;
        if(fixedMargin)
        {
            body.style.paddingRight = 0;
        }
        body.classList.remove('body-fixed');
        html.classList.remove('body-fixed');
    }

    function getScrollWidth() {

        var div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.position = 'absolute';
        div.style.left = '8888px';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        document.body.removeChild(div);

        return scrollWidth;
    }

    function scrollHorizontally (element) {
      return function (e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          element.scrollLeft -= (delta*40); // Multiplied by 40
          e.preventDefault();
      }
    }

    function listenHorizontalScroll (element) {
        if(element) {
            var handler = scrollHorizontally(element);
            element.addEventListener('mousewheel', handler, false);
            element.addEventListener('DOMMouseScroll', handler, false);
            this[element.className] = handler;
        }
    }

    function checkScrollHandler (element) {
      return typeof this[element.className] === 'function';
    }

    function stopListeningHorizontalScroll (element) {

     var handler = this[element.className];

     if(handler)
        {
            element.removeEventListener('mousewheel', this[element.className],false);
            element.removeEventListener('DOMMouseScroll', this[element.className], false);
            delete this[element.className]
        }
    }

    return {
        listenHorizontalScroll: listenHorizontalScroll,
        checkScrollHandler: checkScrollHandler,
        stopListeningHorizontalScroll: stopListeningHorizontalScroll,
        getViewPortSizes: getViewPortSizes,
        getScrollWidth: getScrollWidth,
        enableScroll: enableScroll,
        disableScroll: disableScroll
    }
})();




