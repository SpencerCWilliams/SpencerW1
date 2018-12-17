$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
var addEvent;
if (document.addEventListener) {
  addEvent = function(element, type, handler) {
    element.addEventListener(type, handler, false);
  };
} else if (document.attachEvent) {
  addEvent = function(element, type, handler) {
    element.attachEvent("on" + type, handler);
  };
}