console.log("");
console.log("");
console.log("");

document.body.onload = start;

var assets = ["record", "menu", "power"];
var exists;

console.log("assets:", assets);

function start() {
    testjQuery();
    addImages();
}

function testjQuery() {
    if (!window.jQuery) {
        console.log("jQuery is not loaded");
    } else {
        console.log("jQuery is loaded");
    }
}

function addImages() {
    console.log("Running function addImages()");
    $("span:not([class])").replaceWith(function() {
        var assetName = $.trim($(this).text());
        console.log(assetName);
        if (assets.indexOf(assetName) != -1) {
            exists = true;
        } else {
            exists = false;
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