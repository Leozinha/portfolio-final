
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
    .to("#word-animation", 0.9, {text:"scroll down!", ease:Linear.easeNone})
;



