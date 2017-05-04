console.log("");
console.log("");
console.log("");

document.body.onload = indexAssets;

var assets = [];
var exists;

console.log("assets:", assets);

function start() {
    // testjQuery();
    // indexAssets();
}

$.when($.ajax(indexAssets())).then(function() {
    addImages();
});

/*
function testjQuery() {
    if (!window.jQuery) {
        console.log("jQuery is not loaded");
    } else {
        console.log("jQuery is loaded");
    }
}
*/

// The "callback" argument is called with either true or false
// depending on whether the image at "url" exists or not.
function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = url;
}

function indexAssets() {
    console.log("Running function indexAssets()");
    $("span:not([class])").each(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        var path =
            "https://dealien.gitbooks.io/vr-camera-handbook/content/images/" +
            assetName +
            ".png";
        console.log(path);

        imageExists(path, function(exists) {
            console.log("RESULT: url=" + path + ", exists = " + exists);
            if (exists === true) {
                assets.push(assetName);
                console.log("assets:", assets);
            }
        });
    });
}

function addImages() {
    console.log("Running function addImages()");
    $("span:not([class])").replaceWith(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        if (assets.indexOf(assetName) != -1) {
            exists = true;
            console.log("Image exists for", assetName);
        } else {
            exists = false;
            console.log("Image does not exist for", assetName);
        }
        console.log("exists:", exists);
        console.log(
            "https://dealien.gitbooks.io/vr-camera-handbook/content/images/" +
                assetName +
                ".png"
        );
        if ((exists = true)) {
            return (
                '<img src="./images/' +
                assetName +
                '.png" width=24 height=24 align="middle" id="' +
                assetName +
                '">'
            );
        } else {
            return assetName;
        }
    });
}
