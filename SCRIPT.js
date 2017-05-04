document.body.onload = start;

console.log("");
console.log("");
console.log("");

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
      console.log(assetName);
      console.log(
         "https://dealien.gitbooks.io/vr-camera-handbook/content/images/" +
            assetName +
            ".png"
      );
      $.ajax({
         url: "https://dealien.gitbooks.io/vr-camera-handbook/content/images/" +
            assetName +
            ".png",
         type: "HEAD",
         error: function() {
            return '<span class="missing-asset">' + assetName + "</span>";
         },
         success: function() {
            return (
               '<img src="./images/' +
               assetName +
               '.png" width=24 height=24 align="middle" id="image-asset ' +
               assetName +
               '">'
            );
         }
      });
   });
}
