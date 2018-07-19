window.addEventListener('scroll', function(e) {
    if ($(window).scrollTop() <= 1 || $(window).scrollTop() == $(document).height() - $(window).height() - 1) {
        console.log('in');
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        e.preventDefault();
        new WOW().init();
    }
});


// wow slideInLeft" data-wow-iteration="1" data-wow-offset="10" data-wow-duration="2s" data-wow-delay="0.3s
let h1dataOffset = 100;
let h1 = document.getElementsByTagName('h1')


for (let i = 0; i < h1.length; i++) {
    h1[i].classList.add('wow', 'slideInLeft');
    h1[i].setAttribute('data-wow-offset', h1dataOffset);
}
let h2dataOffset = 50;

let h2 = document.getElementsByTagName('h2')

for (let i = 0; i < h2.length; i++) {
    h2[i].classList.add('wow', 'rollIn');
    h2[i].setAttribute('data-wow-offset', h2dataOffset);
    h2[i].setAttribute('data-wow-delay', 0);
}

let picWrapper = document.getElementsByClassName ('picWrapper');
let picWrapperA = picWrapper[0].getElementsByTagName('a');

for(let i = 0;i<picWrapperA.length;i++){
    console.log(picWrapperA[i])
    picWrapperA[i].classList.add('wow', 'rollIn');
}


new WOW().init();