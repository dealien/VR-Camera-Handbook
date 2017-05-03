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
   console.log("Running function buttonTrigger()");
   $("span:not([class])").replaceWith(function() {
      var assetName = $.trim($(this).text());
      return (
         '<img src="./images/' + assetName + '.png" width=20 height=20 align="middle">'
      );
   });
}