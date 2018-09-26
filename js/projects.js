
//GENERAL
/*
document.getElementById("projects").addEventListener("wheel", wheelProjects);

function wheelProjects(e) {

    if (e.deltaY < 0) {

        var t1 = new TimelineLite();

        t1
            .to("#icon-white-top", 2.1, { ease: Power4.easeOut, top: "-15%"}, "icon-white-top")
            .to("#icon-white-bottom", 2.1, {ease: Power4.easeOut, bottom: "-15%"}, "icon-white-top")
            .to("#projects", 0.3, { ease: Power3.easeOut, autoAlpha:0, display: "none"}, "icon-white-top")
            .to("#skills", 0.5, { ease: Power3.easeOut, autoAlpha:1, display: "flex", delay: 0.3}, "icon-white-top")

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
}
*/
//GENERAL

//animal-busters
document.getElementById("animal-busters").addEventListener("mouseenter", mouseenter_animal);
document.getElementById("animal-busters").addEventListener("mouseleave", mouseleave_animal);

document.getElementById("img-menu").addEventListener("click", changeColor);

    function mouseenter_animal() {
        var tl = new TimelineLite();

        tl
            .to("#animal-busters-img", 0.5, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, backgroundColor:"#0173c3", borderColor: "#0173c3"}, "animal-busters-img")
            .to("#animal-busters-keywords", 1, { ease: Power3.easeOut, zIndex: 1,autoAlpha:1,color: "white", delay:0.3}, "animal-busters-img")
            .to("#animal-busters-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"5%", delay:0.2}, "animal-busters-img")
            .to("#animal-busters-keywords-item2", 1.2, { ease: Power3.easeOut, top:"5%", delay:0.2}, "animal-busters-img")

        ;
    }

    function mouseleave_animal() {
        var tl = new TimelineLite();

        tl
            .to("#animal-busters-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "animal-busters-img")
            .to("#animal-busters", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "animal-busters-img")
            .to("#animal-busters-keywords", 0.6, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
            .to("#animal-busters-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "animal-busters-img")
            .to("#animal-busters-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "animal-busters-img")

        ;
    }



    function close_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", left:"0", backgroundColor:"white", borderColor: "white"}, "animal-busters")
            .to(".projects-item", 0.2, { cursor:"pointer"}, "animal-busters")

            .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")

            .to("#animal-busters-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/busters.png" }, "animal-busters")
            .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")

            .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#icon-black-left", 0.2, { ease: Power3.easeOut, paddingBottom:"0.4rem", marginRight:"0.6rem"}, "animal-busters")
            .to("#icon-black-right", 0.2, { ease: Power3.easeOut, paddingTop:"0.4rem", marginLeft:"0.6rem"}, "animal-busters")

            .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "animal-busters")
            .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "animal-busters")
            .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "animal-busters")
            .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0",width:"2.9rem", height:"2rem"}, "animal-busters")
            .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white", height:"9rem"}, "animal-busters")

            .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")
            .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")
            .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")

            .to("#animal-busters-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "animal-busters")
            .to("#animal-busters-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "animal-busters")
            .to("#animal-busters-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "animal-busters")

            .to("#animal-busters-img", 0.5, { ease: Power3.easeOut, bottom:"0", visibility:"visible",autoAlpha:1}, "animal-busters")
            .to("#animal-busters-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "animal-busters")
            .to("#animal-busters-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "animal-busters")
        ;

        //document.getElementById("projects").addEventListener("wheel", wheelProjects);

        document.getElementById("img-menu-1").removeEventListener("click", close_animal);

        document.getElementById("animal-busters").addEventListener("mouseenter", mouseenter_animal);
        document.getElementById("animal-busters").addEventListener("mouseleave", mouseleave_animal);

        document.getElementById("img-menu").addEventListener("click", changeColor);
        document.getElementById("img-menu").removeEventListener("click", hide_animal);

    }

    function hide_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "animal-busters")

            .to("#img-menu", 0.5, { ease: Power3.easeOut, visibility: "hidden", scale: 0}, "animal-busters")
            .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible", autoAlpha: 1 }, "animal-busters")

            .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "animal-busters")
            .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "animal-busters")
        ;

        document.getElementById("img-menu").removeEventListener("click", hide_animal);
        document.getElementById("img-menu-close").addEventListener("click", show_animal);

        document.getElementById("img-menu-1").removeEventListener("click", close_animal);

    }

    function show_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "animal-busters")

            .to("#img-menu", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible"}, "animal-busters")
            .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 0, visibility: "hidden", autoAlpha:0}, "animal-busters")

            .to("#films", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "animal-busters")
            .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "animal-busters")
            .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "animal-busters")

            .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "animal-busters")
            .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "animal-busters")
        ;

        document.getElementById("img-menu-close").removeEventListener("click", show_animal);
        document.getElementById("img-menu").addEventListener("click", hide_animal);

        document.getElementById("img-menu-1").addEventListener("click", close_animal);


    }

function shakeLink() {

    var link = new TimelineMax();

    link
        .to("#animal-busters-icons", 0.1, { ease: Power3.easeOut, right:"1%"})
        .to("#animal-busters-icons", 0.1, { ease: Power3.easeOut, right:"-1%"})
        .to("#animal-busters-icons", 0.1, { ease: Power3.easeOut, right:"0"})
    ;

    function restartShake() {
        link.restart();
    }

    document.getElementById("animal-busters-link").addEventListener("click", restartShake);

}

//films

document.getElementById("films").addEventListener("mouseenter", mouseenter_films);
document.getElementById("films").addEventListener("mouseleave", mouseleave_films);

    function mouseenter_films() {
        var tl = new TimelineLite();

        tl
            .to("#films-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "films-img")
            .to("#films", 0.5, { ease: Power3.easeOut, backgroundColor:"black", borderColor: "black"}, "films-img")
            .to("#films-keywords", 1, { ease: Power3.easeOut, zIndex: 1,autoAlpha:1,color: "white", delay:0.3}, "films-img")
            .to("#films-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"5%", delay:0.2}, "films-img")
            .to("#films-keywords-item2", 1.2, { ease: Power3.easeOut, top:"5%", delay:0.2}, "films-img")

        ;
    }

    function mouseleave_films() {
        var tl = new TimelineLite();

        tl
            .to("#films-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "films-img")
            .to("#films", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "films-img")
            .to("#films-keywords", 0.6, { ease: Power3.easeOut,autoAlpha:0}, "films-img")
            .to("#films-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "films-img")
            .to("#films-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "films-img")

        ;
    }

function close_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white"}, "films")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "films")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")

        .to("#films-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/films.png", width:"49%"}, "films")
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#icon-black-left", 0.2, { ease: Power3.easeOut, paddingBottom:"0.4rem", marginRight:"0.6rem"}, "films")
        .to("#icon-black-right", 0.2, { ease: Power3.easeOut, paddingTop:"0.4rem", marginLeft:"0.6rem"}, "films")

        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "films")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "films")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "films")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0",width:"2.9rem", height:"2rem"}, "films")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white", height:"9rem"}, "films")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")

        .to("#films-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "films")
        .to("#films-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "films")
        .to("#films-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "films")

        .to("#films-img", 0.5, { ease: Power3.easeOut, bottom:"0", visibility:"visible",autoAlpha:1}, "films")
        .to("#films-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "films")
        .to("#films-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "films")
    ;

   // document.getElementById("projects").addEventListener("wheel", wheelProjects);

    document.getElementById("img-menu-1").removeEventListener("click", close_films);

    document.getElementById("films").addEventListener("mouseenter", mouseenter_films);
    document.getElementById("films").addEventListener("mouseleave", mouseleave_films);

    document.getElementById("img-menu").addEventListener("click", changeColor);
    document.getElementById("img-menu").removeEventListener("click", hide_films);

}

function hide_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, visibility: "hidden", scale: 0}, "films")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible", autoAlpha: 1 }, "films")

        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "films")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "films")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_films);
    document.getElementById("img-menu-close").addEventListener("click", show_films);

    document.getElementById("img-menu-1").removeEventListener("click", close_films);


}

function show_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible"}, "films")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 0, visibility: "hidden", autoAlpha:0}, "films")

        .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")

        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "films")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "films")
    ;

    document.getElementById("img-menu-close").removeEventListener("click", show_films);
    document.getElementById("img-menu").addEventListener("click", hide_films);

    document.getElementById("img-menu-1").addEventListener("click", close_films);


}

function shakeLinkFilms() {

    var link = new TimelineMax();

    link
        .to("#films-icons", 0.1, { ease: Power3.easeOut, right:"1%"})
        .to("#films-icons", 0.1, { ease: Power3.easeOut, right:"-1%"})
        .to("#films-icons", 0.1, { ease: Power3.easeOut, right:"0"})
    ;

    function restartShakeFilms() {
        link.restart();
    }

    document.getElementById("films-icons").addEventListener("click", restartShakeFilms);
}

//bioliving

document.getElementById("bioliving").addEventListener("mouseenter", mouseenter_bioliving);
document.getElementById("bioliving").addEventListener("mouseleave", mouseleave_bioliving);

function mouseenter_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "bioliving-img")
        .to("#bioliving", 0.5, { ease: Power3.easeOut, backgroundColor:"#73B219", borderColor: "#73B219"}, "bioliving-img")
        .to("#bioliving-keywords", 1, { ease: Power3.easeOut, zIndex: 1 ,autoAlpha:1,color: "white", delay:0.3}, "bioliving-img")
        .to("#bioliving-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"5%", delay:0.2}, "bioliving-img")
        .to("#bioliving-keywords-item2", 1.2, { ease: Power3.easeOut, top:"5%", delay:0.2}, "bioliving-img")

    ;
}

function mouseleave_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "bioliving-img")
        .to("#bioliving", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "bioliving-img")
        .to("#bioliving-keywords", 0.6, { ease: Power3.easeOut,autoAlpha:0}, "bioliving-img")
        .to("#bioliving-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "bioliving-img")
        .to("#bioliving-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "bioliving-img")

    ;
}

function close_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white", marginBottom:"-1.5rem"}, "bioliving")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "bioliving")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")

        .to("#bioliving-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/bioliving.png", width:"60%"}, "bioliving")
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#icon-black-left", 0.2, { ease: Power3.easeOut, paddingBottom:"0.4rem", marginRight:"0.6rem"}, "bioliving")
        .to("#icon-black-right", 0.2, { ease: Power3.easeOut, paddingTop:"0.4rem", marginLeft:"0.6rem"}, "bioliving")

        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "bioliving")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "bioliving")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "bioliving")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0", width:"2.9rem", height:"2rem"}, "bioliving")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white", height:"9rem"}, "bioliving")

        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")

        .to("#bioliving-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "bioliving")
        .to("#bioliving-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "bioliving")
        .to("#bioliving-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "bioliving")

        .to("#bioliving-img", 0.5, { ease: Power3.easeOut, bottom:"0", visibility:"visible",autoAlpha:1}, "bioliving")
        .to("#bioliving-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "bioliving")
        .to("#bioliving-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "bioliving")
    ;

    //document.getElementById("projects").addEventListener("wheel", wheelProjects);

    document.getElementById("img-menu-1").removeEventListener("click", close_bioliving);

    document.getElementById("bioliving").addEventListener("mouseenter", mouseenter_bioliving);
    document.getElementById("bioliving").addEventListener("mouseleave", mouseleave_bioliving);

    document.getElementById("img-menu").addEventListener("click", changeColor);
    document.getElementById("img-menu").removeEventListener("click", hide_bioliving);

}

function hide_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, visibility: "hidden", scale: 0}, "img-menu")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible", autoAlpha: 1 }, "img-menu")

        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "bioliving")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "bioliving")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_bioliving);
    document.getElementById("img-menu-close").addEventListener("click", show_bioliving);

    document.getElementById("img-menu-1").removeEventListener("click", close_bioliving);

}

function show_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible"}, "img-menu")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 0, visibility: "hidden", autoAlpha:0}, "img-menu")

        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")

        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "bioliving")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "bioliving")
    ;

    document.getElementById("img-menu-close").removeEventListener("click", show_bioliving);
    document.getElementById("img-menu").addEventListener("click", hide_bioliving);

    document.getElementById("img-menu-1").addEventListener("click", close_bioliving);


}

function shakeLinkBio() {

    var link = new TimelineMax();

    link
        .to("#bioliving-icons", 0.1, { ease: Power3.easeOut, right:"1%"})
        .to("#bioliving-icons", 0.1, { ease: Power3.easeOut, right:"-1%"})
        .to("#bioliving-icons", 0.1, { ease: Power3.easeOut, right:"0"})
    ;

    function restartShakeBio() {
        link.restart();
    }

    document.getElementById("bioliving-icons").addEventListener("click", restartShakeBio);
}

//cubo

document.getElementById("cubo").addEventListener("mouseenter", mouseenter_cubo);
document.getElementById("cubo").addEventListener("mouseleave", mouseleave_cubo);

function mouseenter_cubo() {
    var tl = new TimelineLite();

    tl
        .to("#cubo-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "cubo-img")
        .to("#cubo", 0.5, { ease: Power3.easeOut, backgroundColor:"#F6B53E", borderColor: "#F6B53E"}, "cubo-img")
        .to("#cubo-keywords", 1, { ease: Power3.easeOut, zIndex: 1 ,autoAlpha:1,color: "white", delay:0.3}, "cubo-img")
        .to("#cubo-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"5%", delay:0.2}, "cubo-img")
        .to("#cubo-keywords-item2", 1.2, { ease: Power3.easeOut, top:"5%", delay:0.2}, "cubo-img")

    ;
}

function mouseleave_cubo() {
    var tl = new TimelineLite();

    tl
        .to("#cubo-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "cubo-img")
        .to("#cubo", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "cubo-img")
        .to("#cubo-keywords", 0.6, { ease: Power3.easeOut,autoAlpha:0}, "cubo-img")
        .to("#cubo-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "cubo-img")
        .to("#cubo-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "cubo-img")
    ;
}

function close_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white", marginBottom:"-1.5rem"}, "cubo")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "cubo")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")

        .to("#cubo-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/cubo.png", width:"42%"}, "cubo")
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#icon-black-left", 0.2, { ease: Power3.easeOut, paddingBottom:"0.4rem", marginRight:"0.6rem"}, "cubo")
        .to("#icon-black-right", 0.2, { ease: Power3.easeOut, paddingTop:"0.4rem", marginLeft:"0.6rem"}, "cubo")

        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "cubo")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "cubo")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "cubo")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0", width:"2.9rem", height:"2rem"}, "cubo")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, background:"rgb(255, 255, 255)", height:"9rem"}, "cubo")

        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")

        .to("#cubo-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "cubo")
        .to("#cubo-keywords-item1", 1.2, { ease: Power3.easeOut, bottom:"49%"}, "cubo")
        .to("#cubo-keywords-item2", 1.2, { ease: Power3.easeOut, top:"49%"}, "cubo")

        .to("#cubo-img", 0.5, { ease: Power3.easeOut, bottom:"0", visibility:"visible",autoAlpha:1}, "cubo")
        .to("#cubo-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "cubo")
        .to("#cubo-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "cubo")
    ;

    //document.getElementById("projects").addEventListener("wheel", wheelProjects);

    document.getElementById("img-menu-1").removeEventListener("click", close_cubo);

    document.getElementById("cubo").addEventListener("mouseenter", mouseenter_cubo);
    document.getElementById("cubo").addEventListener("mouseleave", mouseleave_cubo);

    document.getElementById("img-menu").addEventListener("click", changeColor);
    document.getElementById("img-menu").removeEventListener("click", hide_cubo);

}

function hide_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, visibility: "hidden", scale: 0}, "cubo")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible", autoAlpha: 1 }, "cubo")

        .to("#cubo-img", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "cubo")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "cubo")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_cubo);
    document.getElementById("img-menu-close").addEventListener("click", show_cubo);

    document.getElementById("img-menu-1").removeEventListener("click", close_cubo);

}

function show_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, scale: 1, visibility: "visible"}, "cubo")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, scale: 0, visibility: "hidden", autoAlpha:0}, "cubo")

        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")

        .to("#cubo-img", 0.01, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "cubo")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "cubo")
    ;

    document.getElementById("img-menu-close").removeEventListener("click", show_cubo);
    document.getElementById("img-menu").addEventListener("click", hide_cubo);

    document.getElementById("img-menu-1").addEventListener("click", close_cubo);

}

function shakeLinkCubo() {

    var link = new TimelineMax();

    link
        .to("#cubo-icons", 0.1, { ease: Power3.easeOut, right:"1%"})
        .to("#cubo-icons", 0.1, { ease: Power3.easeOut, right:"-1%"})
        .to("#cubo-icons", 0.1, { ease: Power3.easeOut, right:"0"})
    ;

    function restartShakeCubo() {
        link.restart();
    }

    document.getElementById("cubo-icons").addEventListener("click", restartShakeCubo);

}

//---//

//animal-busters-click
var video = document.getElementById("animal-busters-video");
video.src = "";

document.getElementById("animal-busters").addEventListener('click', function() {

    //document.getElementById("projects").removeEventListener("wheel", projects_scroll);

    video.src = "https://www.dropbox.com/s/bbe65gkdx91lthn/animal_busters.mp4?raw=1";


    document.getElementById("animal-busters").removeEventListener("mouseenter", mouseenter_animal);
    document.getElementById("animal-busters").removeEventListener("mouseleave", mouseleave_animal);
    document.getElementById("img-menu").removeEventListener("click", changeColor);

    document.getElementById("animal-busters-link").addEventListener("click", shakeLink);

    document.getElementById("img-menu-1").addEventListener("click", close_animal);
    document.getElementById("img-menu").addEventListener("click", hide_animal);

    document.getElementById("animal-busters-video").play();
    document.getElementById("animal-busters-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"})

        .to("#animal-busters", 0.5, { ease: Power3.easeOut, position:"absolute", left:"0", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "animal-busters")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")

        .to("#animal-busters-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/busters_blue.png" }, "animal-busters")
        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "animal-busters")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block",src:"../imgs/close_white.png", padding:"0.6rem"}, "animal-busters")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/busters_blue.png"}, "animal-busters")

        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "animal-busters")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/show.png", padding:"0.5rem", width:"2.5rem", height:"2.5rem"}, "animal-busters")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, src:"../imgs/hide.png"}, "animal-busters")

        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"#0173c3", height:"8.5rem"}, "animal-busters")

        .to("#films", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#animal-busters-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "animal-busters")
        .to("#animal-busters-img", 1.5, { ease: Power3.easeOut,position:"relative",bottom:"32%", visibility:"visible",autoAlpha:1, delay:0.3}, "animal-busters")
        .to("#animal-busters-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1}, "animal-busters-img")
        .to("#animal-busters-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:0.5, delay:0.8}, "animal-busters-img")
        .to("#animal-busters-link", 0.9, {text:"visit", ease:Linear.easeNone}, "animal-busters-icons")
    ;
});

//films-click
document.getElementById("films").addEventListener('click', function() {

    video.src = "https://www.dropbox.com/s/3r7jxjsnpzhjaks/films.mp4?raw=1";

    //document.getElementById("projects").removeEventListener("wheel", wheelProjects);

    document.getElementById("films").removeEventListener("mouseenter", mouseenter_films);
    document.getElementById("films").removeEventListener("mouseleave", mouseleave_films);
    document.getElementById("img-menu").removeEventListener("click", changeColor);


    document.getElementById("img-menu-1").addEventListener("click", close_films);
    document.getElementById("img-menu").addEventListener("click", hide_films);

    document.getElementById("films-link").addEventListener("click", shakeLinkFilms);

    document.getElementById("animal-busters-video").play();
    document.getElementById("animal-busters-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"})

        .to("#films", 0.5, { ease: Power3.easeOut, position:"absolute", right:"0", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "films")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "films")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block",src:"../imgs/close_white.png", padding:"0.6rem"}, "films")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "films")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/show.png", padding:"0.5rem", width:"2.5rem", height:"2.5rem"}, "films")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, src:"../imgs/hide.png"}, "films")

        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"black", height:"8.5rem"}, "films")

        .to("#animal-busters", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#films-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "films")
        .to("#films-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"32%", visibility:"visible",autoAlpha:1, delay:0.3}, "films")
        .to("#films-img-color", 1.5, { ease: Power3.easeOut, width:"38%"}, "films")
        .to("#films-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1}, "films-img")
        .to("#films-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:0.5, delay:0.8}, "films-img")
        .to("#films-link", 0.9, {text:"visit", ease:Linear.easeNone}, "films-icons")
    ;

});


//bioliving-click
document.getElementById("bioliving").addEventListener('click', function() {

    video.src = "https://www.dropbox.com/s/49garqcovrulgvb/bioliving.mp4?raw=1";

    //document.getElementById("projects").removeEventListener("wheel", wheelProjects);

    document.getElementById("bioliving").removeEventListener("mouseenter", mouseenter_bioliving);
    document.getElementById("bioliving").removeEventListener("mouseleave", mouseleave_bioliving);
    document.getElementById("img-menu").removeEventListener("click", changeColor);


    document.getElementById("img-menu-1").addEventListener("click", close_bioliving);
    document.getElementById("img-menu").addEventListener("click", hide_bioliving);

    document.getElementById("bioliving-link").addEventListener("click", shakeLinkBio);

    document.getElementById("animal-busters-video").play();
    document.getElementById("animal-busters-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"})

        .to("#bioliving", 0.5, { ease: Power3.easeOut, position:"absolute", bottom:"0", left:"0",marginBottom:"-2rem", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "bioliving")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")

        .to("#bioliving-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/bioliving_green.png", width: "32%"}, "bioliving")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "bioliving")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block",src:"../imgs/close_white.png", padding:"0.6rem"}, "bioliving")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "bioliving")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/show.png", padding:"0.5rem", width:"2.5rem", height:"2.5rem"}, "bioliving")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, src:"../imgs/hide.png"}, "bioliving")

        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"#73B219", height:"8.5rem"}, "bioliving")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#cubo", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#bioliving-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "bioliving")
        .to("#bioliving-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"30%", visibility:"visible",autoAlpha:1, delay:0.3}, "bioliving")
        .to("#bioliving-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1, paddingTop:"3.5rem"}, "bioliving-img")
        .to("#bioliving-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:0.5, delay:0.8}, "bioliving-img")
        .to("#bioliving-link", 0.9, {text:"visit", ease:Linear.easeNone}, "bioliving-icons")
    ;

});

//cubo-click

document.getElementById("cubo").addEventListener('click', function() {

    video.src = "https://www.dropbox.com/s/3pu6sduchtzpwrk/cubo.mp4?raw=1";

    //document.getElementById("projects").removeEventListener("wheel", wheelProjects);

    document.getElementById("cubo").removeEventListener("mouseenter", mouseenter_cubo);
    document.getElementById("cubo").removeEventListener("mouseleave", mouseleave_cubo);
    document.getElementById("img-menu").removeEventListener("click", changeColor);


    document.getElementById("img-menu-1").addEventListener("click", close_cubo);
    document.getElementById("img-menu").addEventListener("click", hide_cubo);

    document.getElementById("cubo-link").addEventListener("click", shakeLinkCubo);

    document.getElementById("animal-busters-video").play();
    document.getElementById("animal-busters-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"})

        .to("#cubo", 0.5, { ease: Power3.easeOut, position:"absolute", bottom:"0", right:"0",marginBottom:"-2rem", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "cubo")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")

        .to("#cubo-img-color", 0.01, { ease: Power3.easeOut, src:"../imgs/cubo_orange.png", width:"30%"}, "cubo")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut,display:"none", autoAlpha:0}, "cubo")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block",src:"../imgs/close_white.png", padding:"0.6rem"}, "cubo")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "cubo")

        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/show.png", padding:"0.5rem", width:"2.5rem", height:"2.5rem"}, "cubo")
        .to("#img-menu-close", 0.5, { ease: Power3.easeOut, src:"../imgs/hide.png"}, "cubo")

        .to("#menu-background", 0.8, { ease: Power3.easeOut, background:"linear-gradient(to right, rgb(247,152,104) , rgb(246,181,62))", height:"8.5rem"}, "cubo")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#bioliving", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#cubo-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "cubo")
        .to("#cubo-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"32%", visibility:"visible",autoAlpha:1, delay:0.3}, "cubo")
        .to("#cubo-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1}, "cubo-img")
        .to("#cubo-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:0.5, delay:0.8}, "cubo-img")
        .to("#cubo-link", 0.9, {text:"visit", ease:Linear.easeNone}, "cubo-icons")
    ;

});


