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
      $.ajax({
         url: "https://dealien.gitbooks.io/vr-camera-handbook/content/images/" +
            assetName +
            ".png",
         type: "HEAD",
         error: function() //file not exists
         {
            return;
         },
         success: function() //file exists
         {
            return (
               '<img src="./images/' +
               assetName +
               '.png" width=24 height=24 align="middle">'
            );
         }
      });
   });
}