
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 10,
    callbacks: true,
    URLhashListener: true,
    autoplay:false,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    touchDrag: false,
    mouseDrag: false,
    dots: false
    });
})

$('#ibiza, #arona').click(function () {
    if (this.id == 'ibiza') { document.getElementById("model-1").classList.add('active'); document.getElementById("red").style.display = "inline-block"; document.getElementById("yellow").style.display = "none"; document.getElementById("red").classList.add('selected'); document.getElementById("colors-car").src = "assets/images/ibiza.png"; document.getElementById("summary-car").src = "assets/images/ibiza.png"; document.getElementById("preview-car").src = "assets/images/ibiza.png"; document.getElementById("colors-name").innerHTML = "IBIZA"; document.getElementById("summary-name").innerHTML = "IBIZA"; document.getElementById("model-summary").innerHTML = "Ibiza 1.3 Ecotech DSG"; document.getElementById("totalPrice").innerHTML = "193.500 TL"; document.getElementById("model-2").classList.remove('active'); document.getElementById("yellow").classList.remove('selected'); document.getElementById("black").classList.remove('selected'); document.getElementById("gray").classList.remove('selected'); }
    if (this.id == 'arona') { document.getElementById("model-2").classList.add('active'); document.getElementById("red").style.display = "none"; document.getElementById("yellow").style.display = "inline-block"; document.getElementById("yellow").classList.add('selected'); document.getElementById("colors-car").src = "assets/images/arona.png"; document.getElementById("summary-car").src = "assets/images/arona.png"; document.getElementById("preview-car").src = "assets/images/arona.png"; document.getElementById("colors-name").innerHTML = "ARONA"; document.getElementById("summary-name").innerHTML = "ARONA"; document.getElementById("model-summary").innerHTML = "Arona 1.5 Ecotech DSG"; document.getElementById("totalPrice").innerHTML = "253.900 TL"; document.getElementById("model-1").classList.remove('active'); document.getElementById("red").classList.remove('selected'); document.getElementById("black").classList.remove('selected'); document.getElementById("gray").classList.remove('selected'); document.getElementById("color-summary").innerHTML = "Dark Yellow"; }
});

$('#step-2, #step-3, #step-4').click(function () {
    if (this.id == 'step-2') { document.getElementById("step-3").classList.add('active'); document.getElementById("nav-2").classList.add('active'); document.getElementById("nav-1").classList.remove('active'); document.getElementById("step-2").classList.remove('active'); }
    if (this.id == 'step-3') { document.getElementById("step-4").classList.add('active'); document.getElementById("nav-3").classList.add('active'); document.getElementById("nav-2").classList.remove('active'); document.getElementById("step-3").classList.remove('active'); }
    if (this.id == 'step-4') { document.getElementById("step-5").classList.add('active'); document.getElementById("nav-4").classList.add('active'); document.getElementById("nav-3").classList.remove('active'); document.getElementById("step-4").classList.remove('active'); }
});

$('#red, #black, #gray').click(function () {
    if (this.id == 'red') { document.getElementById("color-summary").innerHTML = "Rose Red"; document.getElementById("red").classList.add('selected'); document.getElementById("black").classList.remove('selected'); document.getElementById("gray").classList.remove('selected'); document.getElementById("yellow").classList.remove('selected'); }
    if (this.id == 'yellow') { document.getElementById("color-summary").innerHTML = "Dark Yellow"; document.getElementById("yellow").classList.add('selected'); document.getElementById("red").classList.remove('selected'); document.getElementById("black").classList.remove('selected'); document.getElementById("gray").classList.remove('selected'); }
    if (this.id == 'black') { document.getElementById("color-summary").innerHTML = "Night Black"; document.getElementById("black").classList.add('selected'); document.getElementById("red").classList.remove('selected'); document.getElementById("gray").classList.remove('selected'); document.getElementById("yellow").classList.remove('selected'); }
    if (this.id == 'gray') { document.getElementById("color-summary").innerHTML = "Space Gray"; document.getElementById("gray").classList.add('selected'); document.getElementById("red").classList.remove('selected'); document.getElementById("black").classList.remove('selected'); document.getElementById("yellow").classList.remove('selected'); }
});

$('#nav-1, #nav-2, #nav-3, #nav-4').click(function () {
    if (this.id == 'nav-1') { 
        document.getElementById("nav-1").classList.add('active'); document.getElementById("step-2").classList.add('active');
        document.getElementById("nav-2").classList.remove('active'); document.getElementById("step-3").classList.remove('active');
        document.getElementById("nav-3").classList.remove('active'); document.getElementById("step-4").classList.remove('active');
        document.getElementById("nav-4").classList.remove('active'); document.getElementById("step-5").classList.remove('active');
    }
    if (this.id == 'nav-2') {
        document.getElementById("nav-1").classList.remove('active'); document.getElementById("step-2").classList.remove('active');
        document.getElementById("nav-2").classList.add('active'); document.getElementById("step-3").classList.add('active');
        document.getElementById("nav-3").classList.remove('active'); document.getElementById("step-4").classList.remove('active');
        document.getElementById("nav-4").classList.remove('active'); document.getElementById("step-5").classList.remove('active');
    }
    if (this.id == 'nav-3') {
        document.getElementById("nav-1").classList.remove('active'); document.getElementById("step-2").classList.remove('active');
        document.getElementById("nav-2").classList.remove('active'); document.getElementById("step-3").classList.remove('active');
        document.getElementById("nav-3").classList.add('active'); document.getElementById("step-4").classList.add('active');
        document.getElementById("nav-4").classList.remove('active'); document.getElementById("step-5").classList.remove('active');
    }
    if (this.id == 'nav-4') {
        document.getElementById("nav-1").classList.remove('active'); document.getElementById("step-2").classList.remove('active');
        document.getElementById("nav-2").classList.remove('active'); document.getElementById("step-3").classList.remove('active');
        document.getElementById("nav-3").classList.remove('active'); document.getElementById("step-4").classList.remove('active');
        document.getElementById("nav-4").classList.add('active'); document.getElementById("step-5").classList.add('active');
    }
});