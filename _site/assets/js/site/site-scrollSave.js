$(function() {
   $(window).on("unload", function(e) {
      var scrollPosition = $("div#contentContainer").scrollTop();
      localStorage.setItem("scrollPosition", scrollPosition);
   });
   if(localStorage.scrollPosition) {
      $("div#contentContainer").scrollTop(localStorage.getItem("scrollPosition"));
   }
});