document.body.onload = start;

function start() {
  testjQuery();
  linkNames();
}

function testjQuery() {
  if (!window.jQuery) {
    console.log("jQuery is not loaded");
  } else {
    console.log("jQuery is loaded");
  }
}

function linkNames() {
  console.log("Running function linkNames()");
  $('span:not([class])').replaceWith(function() {
    var username = $.trim($(this).text());
    return '<a href="https://socialclub.rockstargames.com/member/' + username + '" target="_blank">' + username + '</a>';
  });
}
