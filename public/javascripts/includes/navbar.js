/*
  Javascript for the top navigation bar.
*/

/* global user */

// Change what the navbar displays if a user is logged in or not.
if (user.isLoggedIn()) {
  document.getElementById('navbar-logout').onclick = user.logout;
  document.getElementById('navbar-hello-user').innerText = 'Hello ' + user.getAttr("username");
  $("#navbar-user-details").show();
  $("#navbar-links").show();
} else {
  $("#navbar-login").show();
}

// Changes the navbar to show what page is open.
for (var i in document.getElementById('navbar-links').children) {
  var link = document.getElementById('navbar-links').children[i];
  console.log(link);
  if (link.tagName == "A" && link.href == window.location) {
    link.setAttribute('class', 'active');
  }
}
