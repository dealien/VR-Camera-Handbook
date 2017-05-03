document.body.onload = start;

function start() {
   testjQuery();
   buttonImage();
}

function testjQuery() {
   if (!window.jQuery) {
      console.log("jQuery is not loaded");
   } else {
      console.log("jQuery is loaded");
   }
}

function buttonImage() {
   console.log("Running function linkNames()");
   $("span:not([class])").replaceWith(function() {
      var username = $.trim($(this).text());
      return (
         ''
      );
   });
}