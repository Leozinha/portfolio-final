
//menu

function move(top,bottom) {

var move = new TimelineLite();

move
    .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: top}, "icon-white-top")
    .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: bottom}, "icon-white-top");

}

function projects() {

    changeColorClose();

    move("88%","88%");

    var projects = new TimelineLite();

    projects
        //.to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "85%"}, "icon-white-top")
        //.to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "85%"}, "icon-white-top")

        .to("#welcome-page", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#contact", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block"}, "welcome-page")

        .to("#main-title-1", 0.5, {text:"P", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-2", 0.5, {text:"R", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-3", 0.5, {text:"O", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-4", 0.5, {text:"J", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-5", 0.5, {text:"E", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-6", 0.5, {text:"C", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-7", 0.5, {text:"T", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-8", 0.5, {text:"S", ease:Linear.easeNone}, "welcome-page")

        .to("#pagination-number", 0.4, {text:"03", ease:Linear.easeNone}, "welcome-page")
    ;

}



function skills() {

    changeColorClose();

    move("-12%","-12%");

    var skills = new TimelineLite();

    skills
        //.to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: top}, "icon-white-top")
        //.to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: bottom}, "icon-white-top")

        .to("#welcome-page", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "flex"}, "welcome-page")
        .to("#contact", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")

        .to("#main-title-1", 0.5, {text:"S", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-2", 0.5, {text:"K", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-3", 0.5, {text:"I", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-4", 0.5, {text:"L", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-5", 0.5, {text:"L", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-6", 0.5, {text:"S", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-7", 0.5, {text:"", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "welcome-page")

        .to("#pagination-number", 0.5, {text:"02", ease:Linear.easeNone}, "welcome-page")

        .to("#st1-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "welcome-page")
        .to("#st1-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "welcome-page")
        .to("#st2-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "welcome-page")
        .to("#st2-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "welcome-page")
        .to("#st3-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "welcome-page")
        .to("#st3-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "welcome-page")
        .to("#st4-d", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.4}, "welcome-page")
        .to("#st4-e", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.4}, "welcome-page")
    ;

}

function contact() {

    changeColorClose();

    move("-12%","-12%");

    var contact = new TimelineLite();

    contact
        //.to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-15%"}, "icon-white-top")
        //.to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-15%"}, "icon-white-top")

        .to("#welcome-page", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")
        .to("#contact", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block"}, "welcome-page")
        .to("#projects", 0.5, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "welcome-page")

        .to("#main-title-1", 0.5, {text:"C", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-2", 0.5, {text:"O", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-3", 0.5, {text:"N", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-4", 0.5, {text:"T", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-5", 0.5, {text:"A", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-6", 0.5, {text:"C", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-7", 0.5, {text:"T", ease:Linear.easeNone}, "welcome-page")
        .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "welcome-page")

        .to("#pagination-number", 0.5, {text:"04", ease:Linear.easeNone}, "welcome-page")

        .to("#st1-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.6}, "welcome-page")
        .to("#st1-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.6}, "welcome-page")
        .to("#st2-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "welcome-page")
        .to("#st2-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 0.8}, "welcome-page")
        .to("#st3-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "welcome-page")
        .to("#st3-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1}, "welcome-page")
        .to("#st4-d2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "welcome-page")
        .to("#st4-e2", 1.8, { ease: Power3.easeOut, autoAlpha:0, delay: 1.2}, "welcome-page")

        .to("#line4", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 1.6}, "welcome-page")
        .to("#line3", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 1.8}, "welcome-page")
        .to("#line2", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 2}, "welcome-page")
        .to("#line1", 0.5, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, delay: 2.2}, "welcome-page")
        .to("#contact-link-span", 0.8, {ease: Power3.easeOut, visibility:"visible" ,autoAlpha:0.3, position:"relative", zIndex:1, delay:2.4}, "welcome-page")

        .to("#contact-facebook", 1.5, {ease: Power3.easeOut, left:"0",bottom:"0", delay:2.8}, "welcome-page")
        .to("#contact-insta", 1.5, {ease: Power3.easeOut, right:"0",bottom:"0", delay:2.8}, "welcome-page")
    ;



}
//menu

// SCROLLING

// welcome page - skills

document.getElementById("welcome-page").addEventListener('wheel', function(e) {

    if (e.deltaY > 0) {

        var tl = new TimelineLite();
        var photo = new TimelineLite();


        tl
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-12%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-12%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"K", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"I", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"L", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"L", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.5, {text:"02", ease:Linear.easeNone}, "icon-white-top")

            .to("#skills", 0.8, { ease: Power3.easeOut, autoAlpha:1, display: "flex", delay: 0.3}, "icon-white-top")
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
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "88%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "88%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"W", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"E", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"L", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"C", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"O", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"M", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"E", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.4, {text:"01", ease:Linear.easeNone}, "icon-white-top")

            .to("#skills", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#welcome-page", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "block", delay: 0.3}, "icon-white-top")

        ;

    }

    if (e.deltaY > 0) {

        var t2 = new TimelineLite();
       // var photo = new TimelineLite();


        t2
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "88%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "88%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"P", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"R", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"O", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"J", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"E", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"C", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"T", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.4, {text:"03", ease:Linear.easeNone}, "icon-white-top")

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
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-12%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-12%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"K", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"I", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"L", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"L", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.5, {text:"02", ease:Linear.easeNone}, "icon-white-top")

            .to("#projects", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "flex", delay: 0.3}, "icon-white-top")

        ;

    }

    if (e.deltaY > 0) {


        var t2 = new TimelineLite();
        var photo = new TimelineLite();


        t2
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-12%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-12%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"C", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"O", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"N", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"T", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"A", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"C", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"T", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.5, {text:"04", ease:Linear.easeNone}, "icon-white-top")

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
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "88%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "88%"}, "icon-white-top")

            .to("#main-title-1", 0.5, {text:"P", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-2", 0.5, {text:"R", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-3", 0.5, {text:"O", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-4", 0.5, {text:"J", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-5", 0.5, {text:"E", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-6", 0.5, {text:"C", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-7", 0.5, {text:"T", ease:Linear.easeNone}, "icon-white-top")
            .to("#main-title-8", 0.5, {text:"S", ease:Linear.easeNone}, "icon-white-top")

            .to("#pagination-number", 0.4, {text:"03", ease:Linear.easeNone}, "icon-white-top")

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

