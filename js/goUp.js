
var scrollElem = document.getElementById('scrollTop');

scrollElem.addEventListener('click', goUp);
window.addEventListener("scroll", detect);
var timeOut;

function goUp() {
    let top = Math.max(document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
        e.preventDefault();
    } else {
        clearTimeout(timeOut);
        e.preventDefault();
    }

}

function detect(e) {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = '1';
        e.preventDefault();
    } else {

        scrollElem.style.opacity = '0';
        e.preventDefault();
    }
    e.preventDefault();
};