
//lines + circle animation
/*
t1 = new TimelineLite({onComplete:onRepeat});

t1
    .to("#line4", 1, {ease: Power4.easeOut, position:"relative", right:"0.2rem"})
    .to("#line4", 1, {ease: Power4.easeOut, position:"relative", left:"0.4rem"})
;

function onRepeat() {
    t1.restart();
}

t2 = new TimelineLite({onComplete:onRepeat2});

t2
    .to("#line3", 1, {ease: Power4.easeOut, position:"relative", right:"-0.2rem"})
    .to("#line3", 1, {ease: Power4.easeOut, position:"relative", left:"-0.4rem"})
;

function onRepeat2() {
    t2.restart();
}

t3 = new TimelineLite({onComplete:onRepeat3});

t3
    .to("#line2", 1, {ease: Power4.easeOut, position:"relative", right:"0.2rem"})
    .to("#line2", 1, {ease: Power4.easeOut, position:"relative", left:"0.4rem"})
;

function onRepeat3() {
    t3.restart();
}

t4 = new TimelineLite({onComplete:onRepeat4});

t4
    .to("#line1", 1, {ease: Power4.easeOut, position:"relative", right:"-0.2rem"})
    .to("#line1", 1, {ease: Power4.easeOut, position:"relative", left:"-0.4rem"})
;

function onRepeat4() {
    t4.restart();
}
*/


document.getElementById("contact-link-span").addEventListener('mouseenter', function() {

    var tl = new TimelineLite();

    tl
        .to("#line4", 0.5, {ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "st1-d2")
        .to("#line3", 0.5, {ease: Power3.easeOut, autoAlpha:1, delay: 0.4}, "st1-d2")
        .to("#line2", 0.5, {ease: Power3.easeOut, autoAlpha:1, delay: 0.6}, "st1-d2")
        .to("#line1", 0.5, {ease: Power3.easeOut, autoAlpha:1, delay: 0.8}, "st1-d2")
        .to("#contact-link-span", 0.8, {ease: Power3.easeOut, fontSize:"2.2rem",autoAlpha:1, delay:1.1}, "st1-d2")

        .to("#contact-insta", 0.8, {ease: Power3.easeOut, padding:"0.1rem", delay:1.1}, "st1-d2")
        .to("#contact-facebook", 0.8, {ease: Power3.easeOut, padding:"0.1rem", delay:1.1}, "st1-d2")

    ;

});


