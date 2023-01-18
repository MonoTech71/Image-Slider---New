let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(e) {
    showSlide(slideIndex += e);
}


function showSlide(e) {
    let i;
    let slides = document.getElementsByClassName("myslides");


    if (e > slides.length) {slideIndex = 1}


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[slideIndex-1].style.display = "block";

}