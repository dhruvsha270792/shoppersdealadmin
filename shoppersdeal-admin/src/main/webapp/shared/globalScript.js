function autoScroll() {
    var div = document.getElementById("adminApp");
    div.style.display = '';
    var top = div.offsetTop;
    if(window.scrollTop != top) 
        window.scrollTo(0, top);
}
function loadAutoScroll() {
    autoScroll();
    window.onload = null;
    return false;
}
function scrollAutoScroll() {
    autoScroll();
    window.setTimeout(function(){ window.onscroll = null; }, 100);
    return false;
}