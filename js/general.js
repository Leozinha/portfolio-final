
//TODO: colocar titulo e paginaçao; desktop size responsive;

//welcome page - skills
document.getElementById("welcome-page").addEventListener('wheel', function(e) {

    if (e.deltaY > 0) {

        var tl = new TimelineLite();
        var photo = new TimelineLite();


        tl
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-15%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-15%"}, "icon-white-top")
            .to("#skills", 0.8, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")
            .to("#welcome-page", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")

            /*
            .to("#menu-title-1", 0.6, { text:{value:"MY", padSpace:false}, ease:Linear.easeNone, color: "white"}, "icon-white-top")

            .to("#icon-black-left", 1.8, { ease: Power3.easeOut, marginRight:"1.8rem", position: "absolute"}, "menu-title-1")
            .to("#icon-black-right", 1.8, {ease: Power3.easeOut, marginLeft:"1.8rem", position: "absolute"}, "menu-title-1")

            .to("#menu-letter", 0.6, { ease:Linear.easeNone, autoAlpha: "0"}, "menu-letter")

            .to("#menu-title-2", 0.6, { text:{value:"SKILLS", padSpace:false}, ease:Linear.easeNone, color: "white"}, "menu-letter")

            .to("#menu-title-1", 0.6, { text:{value:"PORT", padSpace:false}, ease:Linear.easeNone, delay:0.2, color:"black"}, "menu-title-1")

            .to("#icon-black-left", 1.8, { ease: Power3.easeOut, marginRight:"3.8rem", position: "absolute"}, "menu-title-1")
            .to("#icon-black-right", 1.8, {ease: Power3.easeOut, marginLeft:"3.8rem", position: "absolute"}, "menu-title-1")

            .to("#menu-letter", 0.6, { ease:Linear.easeNone, autoAlpha: "1"}, "menu-letter")

            .to("#menu-title-2", 0.6, { text:{value:"OLIO", padSpace:false}, ease:Linear.easeNone, delay:0.2, color:"black"}, "menu-letter")
            */
        ;

        photo
            .to("#st1-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "st1-d")
            .to("#st1-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "st1-d")
            .to("#st2-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "st1-d")
            .to("#st2-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "st1-d")
            .to("#st3-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "st1-d")
            .to("#st3-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "st1-d")
            .to("#st4-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.4}, "st1-d")
            .to("#st4-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.4}, "st1-d")
        ;



/*
        TweenMax.fromTo(".st0", 4,
            {
                strokeDashoffset:2000,
                autoAlpha:0.8
            },
            {
                strokeDashoffset:0,
                autoAlpha:1
            }
        );
*/


    }
});


//skills - projects

document.getElementById("skills").addEventListener('wheel', function(e) {

    if (e.deltaY < 0) {

        var t1 = new TimelineLite();

        t1
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "85%"}, "icon-white-top")
            .to("#skills", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#welcome-page", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;

    }

    if (e.deltaY > 0) {

        var t2 = new TimelineLite();
       // var photo = new TimelineLite();


        t2
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "85%"}, "icon-white-top")
            .to("#skills", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;

    }
});

//projects - contact

document.getElementById("projects").addEventListener('wheel', function(e) {

    if (e.deltaY < 0) {

        var t1 = new TimelineLite();

        t1
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-15%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-15%"}, "icon-white-top")
            .to("#projects", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;

    }

    if (e.deltaY > 0) {

        var t2 = new TimelineLite();
        var photo = new TimelineLite();


        t2
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-15%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-15%"}, "icon-white-top")
            .to("#projects", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#contact", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;


                photo
                    .to("#st1-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.6}, "st1-d2")
                    .to("#st1-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.6}, "st1-d2")
                    .to("#st2-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "st1-d2")
                    .to("#st2-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "st1-d2")
                    .to("#st3-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "st1-d2")
                    .to("#st3-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "st1-d2")
                    .to("#st4-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "st1-d2")
                    .to("#st4-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "st1-d2")

                    .to("#line4", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 1.6}, "st1-d2")
                    .to("#line3", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 1.8}, "st1-d2")
                    .to("#line2", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 2}, "st1-d2")
                    .to("#line1", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 2.2}, "st1-d2")
                    .to("#contact-link-span", 0.8, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, position:"relative", zIndex:1, delay:2.4}, "st1-d2")

                    .to("#contact-facebook", 1.5, {ease: Power3.easeOut, left:"0",bottom:"0", delay:2.8}, "st1-d2")
                    .to("#contact-insta", 1.5, {ease: Power3.easeOut, right:"0",bottom:"0", delay:2.8}, "st1-d2")


                ;

    }
});


//contact - projects
document.getElementById("contact").addEventListener('wheel', function(e) {

    if (e.deltaY < 0) {

        var t1 = new TimelineLite();

        t1
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "85%"}, "icon-white-top")
            .to("#contact", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;

    }

});

//menu
/*
document.getElementById("animal-busters").addEventListener('mouseenter', function() {

    var t1 = new TimelineLite();

    t1
        .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
        .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "85%"}, "icon-white-top")
        .to("#contact", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
        .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

    ;

});*/

