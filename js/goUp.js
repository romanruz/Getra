
var scrollElem = document.getElementById('scrollTop');

scrollElem.addEventListener('click', goUp);
window.addEventListener("scroll", detect);
var timeOut;

function goUp(e) {
    let top = Math.max(document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
        e.preventDefault();
    }

}



function detect(e) {
    console.log ();
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