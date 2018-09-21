
//F animation

var tl = new TimelineLite();

tl
    .to("#icon-black-left", 1.8, { ease: Power3.easeOut, marginRight:"0.8rem"}, "icon-black-left")
    .to("#icon-black-right", 1.8, {ease: Power3.easeOut, marginLeft:"0.8rem"}, "icon-black-left")
    .to("#menu-letter", 0.5, {ease: Power3.easeOut, autoAlpha:1, delay: 0.9}, "icon-black-left")

    //icon-white animation
    .to("#icon-white-top", 1.8, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
    .to("#icon-white-bottom", 1.8, {ease: Power4.easeOut, bottom:"85%"}, "icon-white-top")
    .to("#page-content", 1.8, {ease: Power4.easeOut,autoAlpha:1, visibility: "visible", delay:0.2}, "icon-white-top")

    .to("#word-animation", 0.9, {text:"know me", ease:Linear.easeNone, delay: 0.2}, "word-animation")
    .to("#icon-white-right", 0.9, { ease: SteppedEase.config(5)}, "word-animation")
    .to("#word-animation", 0.7, {text:"", ease:Linear.easeNone, delay: 0.3})
    .to("#word-animation", 1.2, {text:"know my work", ease:Linear.easeNone, delay: 0.3})
    .to("#word-animation", 0.7, {text:"", ease:Linear.easeNone, delay: 0.3})
    .to("#word-animation", 0.9, {text:"contact me", ease:Linear.easeNone})
    .to("#word-animation", 0.7, {text:"", ease:Linear.easeNone, delay: 0.3})
    .to("#word-animation", 0.2, {ease:Linear.easeNone, color: "white", fontWeight: "700"})
    .to("#word-animation", 0.9, {text:"scroll down", ease:Linear.easeNone})
;

//menu background color

function changeColor() {

    var t2 = new TimelineLite();
    var t3 = new TimelineLite();

    t2
        .to("#img-menu", 0.5, { ease: Power3.easeOut, visibility: "hidden", scale: 0}, "img-menu")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible", autoAlpha: 1 }, "img-menu")
        .to("#skills", 0.5, { ease: Power3.easeOut, zIndex: 0 }, "img-menu")
    ;


    t3
        .to("#background-menu", 0.5, { ease: Power3.easeOut, autoAlpha: 1, zIndex: 1}, "background-menu")
        .to("#menu-background-color", 0.5, { ease: Power3.easeOut, visibility:"visible"}, "background-menu")

        .to("#blur-background", 0.5, { ease: Power3.easeOut, filter:"blur(7px)"}, "background-menu")
        .to("#icon-white-top", 0.5, { ease: Power3.easeOut, filter:"blur(7px)"}, "background-menu")
        .to("#icon-white-bottom", 0.5, { ease: Power3.easeOut, filter:"blur(7px)"}, "background-menu")
    ;

/*
    t3 = new TimelineMax({onComplete:onRepeat});


    t3
        .to("#background-menu", 4, {background:"#38ef7d", ease:Power3.easeOut, autoAlpha: 0}, "background-menu")
        .to("#background-menu", 4, {background:"#38ef7d", ease:Power3.easeOut, autoAlpha: 1}, "background-menu")

        .to("#background-menu", 4, {background:"#06beb6", ease:Power3.easeOut, autoAlpha: 0, delay:4}, "background-menu")
        .to("#background-menu", 4, {background:"#06beb6", ease:Power3.easeOut, autoAlpha: 1, delay:4}, "background-menu")
        .to("#background-menu", 4, {background:"#ffc0cb", ease:Power3.easeOut, autoAlpha: 1})
        .to("#background-menu", 4, {background:"#d9a7c7", ease:Power3.easeOut, autoAlpha: 1})
        .to("#background-menu", 4, {background:"#FFAF7B", ease:Power3.easeOut})
        .to("#background-menu", 4, {background:"#EF3B36", ease:Power3.easeOut})
        .to("#background-menu", 4, {background:"#2F80ED", ease:Power3.easeOut})
    ;


    function onRepeat() {
        t3.restart();
    }
*/
}

function changeColorClose() {

    var t4 = new TimelineLite();
    var t5 = new TimelineLite();


    t4
        .to("#img-menu", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible"}, "img-menu")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 0, visibility: "hidden", autoAlpha:0}, "img-menu")
    ;

    t5
        .to("#background-menu", 0.5, { ease: Power3.easeOut, autoAlpha: 0, zIndex: 1}, "background-menu")
        .to("#menu-background-color", 0.5, { ease: Power3.easeOut, visibility:"hidden"}, "background-menu")

        .to("#blur-background", 0.5, { ease: Power3.easeOut, filter:"blur(0px)"}, "background-menu")
        .to("#icon-white-top", 0.5, { ease: Power3.easeOut, filter:"blur(0px)"}, "background-menu")
        .to("#icon-white-bottom", 0.5, { ease: Power3.easeOut, filter:"blur(0px)"}, "background-menu")
    ;

    //t3.stop();


}




