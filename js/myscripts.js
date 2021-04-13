// JavaScript Document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 241 || document.documentElement.scrollTop > 241) {
    document.getElementById("smallimageindexpage").style.display = "inline";
    document.getElementById("full-navbar-index").style.justifyContent  = "space-between";
    document.getElementById("navbar").style.position  = "static";

  } else {
    document.getElementById("smallimageindexpage").style.display = "none";
    document.getElementById("full-navbar-index").style.justifyContent  = "center";
    document.getElementById("navbar").style.position  = "static";
  }
}
