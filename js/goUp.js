console.log('i m in script');
var scrollElem = document.getElementById('scrollTop');

scrollElem.addEventListener('click', goUp);
window.addEventListener("scroll", detect);
var timeOut;

function goUp() {
    console.log('i m in function');
    let top = Math.max(document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
    }

}

function detect(e) {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = '1';
        e.preventDefault();
    } else {
        scrollElem.style.opacity = '0';
    }
    e.preventDefault();
};