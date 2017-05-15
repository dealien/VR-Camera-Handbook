/*
Code drafted on CodePen:

https://codepen.io/Vyren/pen/BRdVeM?editors=1010
*/

console.clear();

document.body.onload = start;

var assets = [];
var exists;
var path_to_images = "assets/";
var path_to_button_images = "assets/inline/";

// Custom image size settings
var custom_images = [
    "pair_settings",
    "pairing_confirm",
    "pairing_success",
    "pairing_process",
    "multi_pair"
];
var image_properties = [{
    width: 77,
    height: 64
}, {
    width: 102,
    height: 64
}, {
    width: 102,
    height: 64
}, {
    width: 102,
    height: 64
}, {
    width: 102,
    height: 64
}];

console.log("assets:", assets);
console.log("custom_images:", custom_images);
console.log("image_properties:", image_properties);

function start() {
    testjQuery();
    // indexAssets();
}

$.when($.ajax(indexAssets())).then(function() {
    addImages();
});

function testjQuery() {
    if (!window.jQuery) {
        console.error("jQuery is not loaded");
    } else {
        console.info("jQuery is loaded");
    }
}

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
    console.info("Running function indexAssets()");
    $("span:not([class])").each(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        var path =
            "https://dealien.gitbooks.io/vr-camera-handbook/content/" +
            path_to_button_images +
            assetName +
            ".png";
        console.log(path);
        console.count("items tested for index");
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
    console.info("Running function addImages()");
    $("span:not([class])").replaceWith(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        if (assets.indexOf(assetName) != -1) {
            exists = true;
            console.log("Image exists for", assetName);
            var width = 24;
            var height = 24;
            if (custom_images.indexOf(assetName) != -1) {
                width = image_properties[custom_images.indexOf(assetName)].width;
                height = image_properties[custom_images.indexOf(assetName)].height;
            }
            return (
                '<img src="https://dealien.gitbooks.io/vr-camera-handbook/content/' +
                path_to_button_images +
                assetName +
                '.png" width=' +
                width +
                " height=" +
                height +
                ' align="middle" id="' +
                assetName +
                '">'
            );
        } else {
            exists = false;
            console.error("Image does not exist for", assetName);
            return '<span class="missing-asset">' + assetName + "</span>";
        }
        console.log(
            "https://dealien.gitbooks.io/vr-camera-handbook/content/" +
            path_to_button_images +
            assetName +
            ".png"
        );
    });

    // Add all other images
    $("span.img").each(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        var path =
            "https://dealien.gitbooks.io/vr-camera-handbook/content/" +
            path_to_images +
            assetName +
            ".png";
        var ipath =
        "https://dealien.gitbooks.io/vr-camera-handbook/content/" +
        path_to_images +
        assetName +
        "_thumbnail.png";
        console.log(path);
        var addedImage = {
            name: assetName,
            location: path_to_images,
            path: path,
            exists: imageExists(path, function(exists) {
                return exists;
            })
        };
        console.log("Added image", addedImage);
        var content =
            '<a href="' +
            path +
            '" class="image-gallery" target="_blank"><figure class="image-gallery"><img src="' +
            ipath +
            '" alt="" class="image-gallery"></figure></a>';
        $(this).replaceWith(content);
    });
}
