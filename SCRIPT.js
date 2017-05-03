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
         '<img src="https://upload.wikimedia.org/wikipedia/en/5/54/USS_Enterprise_%28NCC-1701-A%29.jpg" width=20 height=20 align="middle">'
      );
   });
}