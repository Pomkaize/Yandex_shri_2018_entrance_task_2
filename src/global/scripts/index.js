/* helper, state... but it works*/
function Helper() {
    this.getViewPortSizes = function () {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return [w,h]
    };
    this.scrollHorizontally = function(element) {
      return function (e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          element.scrollLeft -= (delta*40); // Multiplied by 40
          e.preventDefault();
      }
    };
    this.listenHorizontalScroll = function (element) {
        var handler = this.scrollHorizontally(element);
        element.addEventListener('mousewheel', handler, false);
        element.addEventListener('DOMMouseScroll', handler, false);
        this[element.className] = handler;
    };
    this.checkScrollHandler = function (element) {
      return typeof this[element.className] === 'function';
    };
    this.stopListeningHorizontalScroll = function (element) {

         var handler = this[element.className];
        console.log(handler);
        if(handler)
        {
            element.removeEventListener('mousewheel', this[element.className],false);
            element.removeEventListener('DOMMouseScroll', this[element.className], false);
            delete this[element.className]
        }

    };
}


var globalHelper = new Helper();

