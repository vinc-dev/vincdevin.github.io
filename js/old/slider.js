const sliderPath = '../assets/';
const sliderDelay = 5000;
const changeImageDuration = 1000;
const sliderImages = [
    'Download-Cool-Wallpaper-Cars-Background.jpg',
    'unique-car-mobile-wallpaper-hd-in-idea-h1so-with-car-mobile-wallpaper-free-in-galleries.jpg',
    'fcb66403f85f3b204ec9b4a476ae2562.jpg'
];

let sliderCount = 0;
let sliderWidth = 0;
let animateSlider;

let init = () => {
    sliderCount = sliderImages.length;
    sliderWidth = $('.slide img').width();
};

let autoSlide = () => {
    animateSlider = setInterval(() => {
        slideRight();
    }, sliderDelay);
};

let slideLeft = () => {
    init();

    clearInterval(animateSlider);

    $('.slide').animate({
        left: + sliderWidth
    }, changeImageDuration, () => {
        $('.slide img:last-child').prependTo('.slide');
        $('.slide').css({
            left: ''
        });
    });

    autoSlide();
};

let slideRight = () => {
    init();

    clearInterval(animateSlider);

    $('.slide').animate({
        left: - sliderWidth
    }, changeImageDuration, () => {
        $('.slide img:first-child').appendTo('.slide');
        $('.slide').css({
            left: ''
        });
    });

    autoSlide();
};

$(function() {
    autoSlide();
});