// JavaScript Document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 241 || document.documentElement.scrollTop > 241) {
    document.getElementById("littlelogo").style.display = "inline";
    document.getElementById("full-navbar-index").style.justifyContent  = "space-between";


  } else {
    document.getElementById("littlelogo").style.display = "none";
    document.getElementById("full-navbar-index").style.justifyContent  = "center";
  }
}
