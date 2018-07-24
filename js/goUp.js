var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

var scrollElem = document.getElementById('scrollTop');

scrollElem.addEventListener('click', goUp);
window.addEventListener("scroll", detect);
var timeOut;

function goUp(e) {
    $('.wow').removeClass('animated');
    $('.wow').removeAttr('style');
    new WOW().init();
    if (iOS) {
        window.scrollTo(0, 0);
    }
    let top = Math.max(window.pageYOffset);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
    }

}



function detect(e) {
    if (window.pageYOffset > 700) {
        scrollElem.style.opacity = '1';
        e.preventDefault();
    } else {
        scrollElem.style.opacity = '0';
        e.preventDefault();
    }
    e.preventDefault();
};
// function detect(e) {
//     console.log (window.pageYOffset);
//     if (window.pageYOffset > document.documentElement.clientHeight) {
//         scrollElem.style.opacity = '1';
//         e.preventDefault();
//     } else {

//         scrollElem.style.opacity = '0';
//         e.preventDefault();
//     }
//     e.preventDefault();
// };