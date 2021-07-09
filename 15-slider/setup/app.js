// node list
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelectorAll('.nextBtn');
const prevBtn = document.querySelectorAll('.prevBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    counter++;
});
prevBtn.addEventListener('click', function() {
    counter--;
});

function carousel() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter})`
    })
}