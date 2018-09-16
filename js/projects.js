
//animal-busters
document.getElementById("animal-busters").addEventListener("mouseenter", mouseenter_animal);
document.getElementById("animal-busters").addEventListener("mouseleave", mouseleave_animal);

    function mouseenter_animal() {
        var tl = new TimelineLite();

        tl
            .to("#animal-busters-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "animal-busters-img")
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, backgroundColor:"#0173c3", borderColor: "#0173c3"}, "animal-busters-img")
            .to("#animal-busters-keywords", 1, { ease: Power3.easeOut, zIndex: 1,autoAlpha:1,color: "white", delay:0.3}, "animal-busters-img")
            .to("#animal-busters-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"0.6rem", delay:0.2}, "animal-busters-img")
            .to("#animal-busters-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"0.6rem", delay:0.2}, "animal-busters-img")

        ;
    }

    function mouseleave_animal() {
        var tl = new TimelineLite();

        tl
            .to("#animal-busters-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "animal-busters-img")
            .to("#animal-busters", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "animal-busters-img")
            .to("#animal-busters-keywords", 0.8, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
            .to("#animal-busters-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "animal-busters-img")
            .to("#animal-busters-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "animal-busters-img")

        ;
    }


    function close_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", left:"0", backgroundColor:"white", borderColor: "white"}, "animal-busters")
            .to(".projects-item", 0.2, { cursor:"pointer"}, "animal-busters")

            .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")

            .to("#animal-busters-img", 0.01, { ease: Power3.easeOut, src:"../imgs/busters.png" }, "animal-busters")
            .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")

            .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")
            .to("#icon-black-left", 0.2, { ease: Power3.easeOut, paddingBottom:"0.4rem", marginRight:"0.6rem"}, "animal-busters")
            .to("#icon-black-right", 0.2, { ease: Power3.easeOut, paddingTop:"0.4rem", marginLeft:"0.6rem"}, "animal-busters")

            .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "animal-busters")
            .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "animal-busters")
            .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "animal-busters")
            .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0"}, "animal-busters")
            .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white"}, "animal-busters")

            .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")
            .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")
            .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1 }, "animal-busters")

            .to("#animal-busters-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "animal-busters")
            .to("#animal-busters-keywords-item1", 0.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "animal-busters")
            .to("#animal-busters-keywords-item2", 0.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "animal-busters")

            .to("#animal-busters-img", 0.5, { ease: Power3.easeOut, bottom:"0", width:"69%", height:"69%", visibility:"visible",autoAlpha:1}, "animal-busters")
            .to("#animal-busters-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "animal-busters")
            .to("#animal-busters-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "animal-busters")
        ;

        document.getElementById("img-menu-1").removeEventListener("click", close_animal);

        document.getElementById("animal-busters").addEventListener("mouseenter", mouseenter_animal);
        document.getElementById("animal-busters").addEventListener("mouseleave", mouseleave_animal);

    }

    function hide_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "animal-busters")
            .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "animal-busters")
            .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "animal-busters")
        ;

        document.getElementById("img-menu").removeEventListener("click", hide_animal);
        document.getElementById("img-menu").addEventListener("click", show_animal);

    }

    function show_animal() {

        var tl = new TimelineLite();

        tl
            .to("#animal-busters", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "animal-busters")
            .to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "animal-busters")
            .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "animal-busters")
        ;

        document.getElementById("img-menu").removeEventListener("click", show_animal);
        document.getElementById("img-menu").addEventListener("click", hide_animal);

    }

//films

document.getElementById("films").addEventListener("mouseenter", mouseenter_films);
document.getElementById("films").addEventListener("mouseleave", mouseleave_films);

    function mouseenter_films() {
        var tl = new TimelineLite();

        tl
            .to("#films-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "animal-busters-img")
            .to("#films", 0.5, { ease: Power3.easeOut, backgroundColor:"black", borderColor: "black"}, "animal-busters-img")
            .to("#films-keywords", 1, { ease: Power3.easeOut, zIndex: 1,autoAlpha:1,color: "white", delay:0.3}, "animal-busters-img")
            .to("#films-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"0.6rem", delay:0.2}, "animal-busters-img")
            .to("#films-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"0.6rem", delay:0.2}, "animal-busters-img")

        ;
    }

    function mouseleave_films() {
        var tl = new TimelineLite();

        tl
            .to("#films-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "animal-busters-img")
            .to("#films", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "animal-busters-img")
            .to("#films-keywords", 0.8, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
            .to("#films-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "animal-busters-img")
            .to("#films-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "animal-busters-img")

        ;
    }

function close_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white"}, "films")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "films")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")

        .to("#films-img", 0.01, { ease: Power3.easeOut, src:"../imgs/films.png" }, "films")
        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "films")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "films")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "films")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0"}, "films")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white"}, "films")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")

        .to("#films-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "films")
        .to("#films-keywords-item1", 0.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "films")
        .to("#films-keywords-item2", 0.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "films")

        .to("#films-img", 0.5, { ease: Power3.easeOut, bottom:"0", width:"49%", height:"49%", visibility:"visible",autoAlpha:1}, "films")
        .to("#films-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "films")
        .to("#films-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "films")
    ;

    document.getElementById("img-menu-1").removeEventListener("click", close_films);

    document.getElementById("films").addEventListener("mouseenter", mouseenter_films);
    document.getElementById("films").addEventListener("mouseleave", mouseleave_films);

}

function hide_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "films")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "films")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_films);
    document.getElementById("img-menu").addEventListener("click", show_films);

}

function show_films() {

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "films")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "films")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "films")
    ;

    document.getElementById("img-menu").removeEventListener("click", show_films);
    document.getElementById("img-menu").addEventListener("click", hide_films);

}

//bioliving

document.getElementById("bioliving").addEventListener("mouseenter", mouseenter_bioliving);
document.getElementById("bioliving").addEventListener("mouseleave", mouseleave_bioliving);

function mouseenter_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "animal-busters-img")
        .to("#bioliving", 0.5, { ease: Power3.easeOut, backgroundColor:"#73B219", borderColor: "#73B219"}, "animal-busters-img")
        .to("#bioliving-keywords", 1, { ease: Power3.easeOut, zIndex: 1 ,autoAlpha:1,color: "white", delay:0.3}, "animal-busters-img")
        .to("#bioliving-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"0.6rem", delay:0.2}, "animal-busters-img")
        .to("#bioliving-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"0.6rem", delay:0.2}, "animal-busters-img")

    ;
}

function mouseleave_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "animal-busters-img")
        .to("#bioliving", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "animal-busters-img")
        .to("#bioliving-keywords", 0.8, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
        .to("#bioliving-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "animal-busters-img")
        .to("#bioliving-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "animal-busters-img")

    ;
}

function close_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white", marginBottom:"-1.5rem"}, "bioliving")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "bioliving")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")

        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, src:"../imgs/bioliving.png" }, "bioliving")
        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "bioliving")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "bioliving")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "bioliving")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0"}, "bioliving")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"white"}, "bioliving")

        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")

        .to("#bioliving-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "bioliving")
        .to("#bioliving-keywords-item1", 0.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "bioliving")
        .to("#bioliving-keywords-item2", 0.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "bioliving")

        .to("#bioliving-img", 0.5, { ease: Power3.easeOut, bottom:"0", width:"60%", height:"60%", visibility:"visible",autoAlpha:1}, "bioliving")
        .to("#bioliving-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "bioliving")
        .to("#bioliving-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "bioliving")
    ;

    document.getElementById("img-menu-1").removeEventListener("click", close_bioliving);

    document.getElementById("bioliving").addEventListener("mouseenter", mouseenter_bioliving);
    document.getElementById("bioliving").addEventListener("mouseleave", mouseleave_bioliving);

}

function hide_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "bioliving")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "bioliving")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_bioliving);
    document.getElementById("img-menu").addEventListener("click", show_bioliving);

}

function show_bioliving() {

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "bioliving")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "bioliving")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "bioliving")
    ;

    document.getElementById("img-menu").removeEventListener("click", show_bioliving);
    document.getElementById("img-menu").addEventListener("click", hide_bioliving);

}

//cubo

document.getElementById("cubo").addEventListener("mouseenter", mouseenter_cubo);
document.getElementById("cubo").addEventListener("mouseleave", mouseleave_cubo);

function mouseenter_cubo() {
    var tl = new TimelineLite();

    tl
        .to("#cubo-img", 0.5, { ease: Power3.easeOut, autoAlpha:0}, "animal-busters-img")
        .to("#cubo", 0.5, { ease: Power3.easeOut, backgroundColor:"#F6B53E", borderColor: "#F6B53E"}, "animal-busters-img")
        .to("#cubo-keywords", 1, { ease: Power3.easeOut, zIndex: 1 ,autoAlpha:1,color: "white", delay:0.3}, "animal-busters-img")
        .to("#cubo-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"0.6rem", delay:0.2}, "animal-busters-img")
        .to("#cubo-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"0.6rem", delay:0.2}, "animal-busters-img")

    ;
}

function mouseleave_cubo() {
    var tl = new TimelineLite();

    tl
        .to("#cubo-img", 1, { ease: Power3.easeOut, autoAlpha:1, delay: 0.2}, "animal-busters-img")
        .to("#cubo", 1, { ease: Power3.easeOut, backgroundColor:"white", borderColor: "white"}, "animal-busters-img")
        .to("#cubo-keywords", 0.8, { ease: Power3.easeOut,autoAlpha:0}, "animal-busters-img")
        .to("#cubo-keywords-item1", 1.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "animal-busters-img")
        .to("#cubo-keywords-item2", 1.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "animal-busters-img")

    ;
}

function close_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, position:"relative", width:"50%", height:"95%", backgroundColor:"white", borderColor: "white", marginBottom:"-1.5rem"}, "cubo")
        .to(".projects-item", 0.2, { cursor:"pointer"}, "cubo")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")

        .to("#cubo-img", 0.01, { ease: Power3.easeOut, src:"../imgs/cubo.png" }, "cubo")
        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"block", autoAlpha:1}, "cubo")
        .to("#img-menu-1", 0.001, { ease: Power3.easeOut, display:"none", padding:"0"}, "cubo")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:0, visibility:"hidden", backgroundColor:"white"}, "cubo")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, display:"flex" ,src:"../imgs/menu.png", padding:"0"}, "cubo")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, background:"rgb(255, 255, 255)"}, "cubo")

        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")

        .to("#cubo-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"flex", width:"100%", height:"100%"}, "cubo")
        .to("#cubo-keywords-item1", 0.2, { ease: Power3.easeOut, paddingBottom:"5.5rem"}, "cubo")
        .to("#cubo-keywords-item2", 0.2, { ease: Power3.easeOut, paddingTop:"5.5rem"}, "cubo")

        .to("#cubo-img", 0.5, { ease: Power3.easeOut, bottom:"0", width:"44%", height:"44%", visibility:"visible",autoAlpha:1}, "cubo")
        .to("#cubo-p", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "cubo")
        .to("#cubo-icons", 0.2, { ease: Power3.easeOut,display:"none",autoAlpha:0}, "cubo")
    ;

    document.getElementById("img-menu-1").removeEventListener("click", close_cubo);

    document.getElementById("cubo").addEventListener("mouseenter", mouseenter_cubo);
    document.getElementById("cubo").addEventListener("mouseleave", mouseleave_cubo);

}

function hide_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#cubo-img", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "cubo")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "cubo")
    ;

    document.getElementById("img-menu").removeEventListener("click", hide_cubo);
    document.getElementById("img-menu").addEventListener("click", show_cubo);

}

function show_cubo() {

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        .to("#cubo-img", 0.01, { ease: Power3.easeOut, visibility:"visible", autoAlpha:1}, "cubo")
        //.to("#animal-busters-video", 0.5, { ease: Power3.easeOut, autoAlpha:0.75}, "cubo")
        .to("#menu-background", 0.5, { ease: Power3.easeOut, autoAlpha:1}, "cubo")
    ;

    document.getElementById("img-menu").removeEventListener("click", show_cubo);
    document.getElementById("img-menu").addEventListener("click", hide_cubo);

}


//---//


//animal-busters-click
document.getElementById("animal-busters").addEventListener('click', function() {

    document.getElementById("animal-busters").removeEventListener("mouseenter", mouseenter_animal);
    document.getElementById("animal-busters").removeEventListener("mouseleave", mouseleave_animal);

    document.getElementById("img-menu-1").addEventListener("click", close_animal);
    document.getElementById("img-menu").addEventListener("click", hide_animal);


    document.getElementById("animal-busters-video").play();
    document.getElementById("animal-busters-video").loop = true;


    var tl = new TimelineLite();

    tl
        .to("#animal-busters", 0.5, { ease: Power3.easeOut, position:"absolute", left:"0", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "animal-busters")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")

        .to("#animal-busters-img", 0.01, { ease: Power3.easeOut, src:"../imgs/busters_blue.png" }, "animal-busters")
        .to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "animal-busters")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "animal-busters")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "animal-busters")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block", padding:"1rem"}, "animal-busters")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "animal-busters")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/menu.png", padding:"0.8rem"}, "animal-busters")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"#0173c3"}, "animal-busters")

        .to("#films", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0 }, "animal-busters")
        .to("#animal-busters-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "animal-busters")
        .to("#animal-busters-img", 1.5, { ease: Power3.easeOut,position:"relative",bottom:"32%", width:"40%", height:"40%", visibility:"visible",autoAlpha:1, delay:0.3}, "animal-busters")
        .to("#animal-busters-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1}, "animal-busters-img")
        .to("#animal-busters-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:1, delay:0.8}, "animal-busters-img")
        .to("#animal-busters-link", 0.9, {text:"visitar", ease:Linear.easeNone}, "animal-busters-icons")
    ;
});

//films-click
document.getElementById("films").addEventListener('click', function() {

    document.getElementById("films").removeEventListener("mouseenter", mouseenter_films);
    document.getElementById("films").removeEventListener("mouseleave", mouseleave_films);

    document.getElementById("img-menu-1").addEventListener("click", close_films);
    document.getElementById("img-menu").addEventListener("click", hide_films);

    //document.getElementById("films-video").play();
    //document.getElementById("films-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#films", 0.5, { ease: Power3.easeOut, position:"absolute", right:"0", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "films")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")

        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "films")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "films")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "films")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block", padding:"1rem"}, "films")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "films")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/menu.png", padding:"0.8rem"}, "films")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"black"}, "films")

        .to("#animal-busters", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#bioliving", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#cubo", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "films")
        .to("#films-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "films")
        .to("#films-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"32%", width:"25%", height:"25%", visibility:"visible",autoAlpha:1, delay:0.3}, "films")
        .to("#films-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1, paddingTop:"3.5rem"}, "films-img")
        .to("#films-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:1, delay:0.8}, "films-img")
        .to("#films-link", 0.9, {text:"visitar", ease:Linear.easeNone}, "films-icons")
    ;
});


//bioliving-click
document.getElementById("bioliving").addEventListener('click', function() {

    document.getElementById("bioliving").removeEventListener("mouseenter", mouseenter_bioliving);
    document.getElementById("bioliving").removeEventListener("mouseleave", mouseleave_bioliving);

    document.getElementById("img-menu-1").addEventListener("click", close_bioliving);
    document.getElementById("img-menu").addEventListener("click", hide_bioliving);

    //document.getElementById("bioliving-video").play();
    //document.getElementById("bioliving-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#bioliving", 0.5, { ease: Power3.easeOut, position:"absolute", bottom:"0", left:"0",marginBottom:"-2rem", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "bioliving")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")

        .to("#bioliving-img", 0.01, { ease: Power3.easeOut, src:"../imgs/bioliving_green.png" }, "bioliving")
        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "bioliving")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "bioliving")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "bioliving")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block", padding:"1rem"}, "bioliving")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "bioliving")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/menu.png", padding:"0.8rem"}, "bioliving")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, backgroundColor:"#73B219"}, "bioliving")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#cubo", 0.01, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "bioliving")
        .to("#bioliving-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "bioliving")
        .to("#bioliving-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"31%", width:"31.8%", height:"31%", visibility:"visible",autoAlpha:1, delay:0.3}, "bioliving")
        .to("#bioliving-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1, paddingTop:"3.5rem"}, "bioliving-img")
        .to("#bioliving-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:1, delay:0.8}, "bioliving-img")
        .to("#bioliving-link", 0.9, {text:"visitar", ease:Linear.easeNone}, "bioliving-icons")
    ;
});

//cubo-click
document.getElementById("cubo").addEventListener('click', function() {

    document.getElementById("cubo").removeEventListener("mouseenter", mouseenter_cubo);
    document.getElementById("cubo").removeEventListener("mouseleave", mouseleave_cubo);

    document.getElementById("img-menu-1").addEventListener("click", close_cubo);
    document.getElementById("img-menu").addEventListener("click", hide_cubo);

    //document.getElementById("cubo-video").play();
    //document.getElementById("cubo-video").loop = true;

    var tl = new TimelineLite();

    tl
        .to("#cubo", 0.5, { ease: Power3.easeOut, position:"absolute", bottom:"0", right:"0",marginBottom:"-2rem", width: "95%", height:"105%", backgroundColor:"white", borderColor: "white"}, "cubo")
        .to(".projects-item", 0.2, { cursor:"initial"}, "animal-busters")

        .to("#icon-white-bottom", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#icon-white-top", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")

        .to("#cubo-img", 0.01, { ease: Power3.easeOut, src:"../imgs/cubo_orange.png" }, "cubo")
        //.to("#background-video", 0.2, { ease: Power3.easeOut,autoAlpha:1, visibility:"visible"}, "cubo")

        .to("#menu-title-1", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#menu-title-2", 0.2, { ease: Power3.easeOut,autoAlpha:0, visibility:"hidden"}, "cubo")
        .to("#hide-menu-1", 0.001, { ease: Power3.easeOut, display:"none", autoAlpha:0}, "cubo")
        .to("#img-menu-1", 0.5, { ease: Power3.easeOut, display:"block", padding:"1rem"}, "cubo")
        .to("#divider-menu", 0.5, { ease: Power3.easeOut, autoAlpha:1, visibility:"visible", backgroundColor:"white"}, "cubo")
        .to("#img-menu", 0.5, { ease: Power3.easeOut, src:"../imgs/menu.png", padding:"0.8rem"}, "cubo")
        .to("#menu-background", 0.8, { ease: Power3.easeOut, background:"linear-gradient(to right, rgb(247,152,104) , rgb(246,181,62))"}, "cubo")

        .to("#animal-busters", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#films", 0.2, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#bioliving", 0.001, { ease: Power3.easeOut, visibility:"hidden", autoAlpha:0}, "cubo")
        .to("#cubo-keywords", 0.2, { ease: Power3.easeOut,autoAlpha:0, display:"none"}, "cubo")
        .to("#cubo-img", 1.5, { ease: Power3.easeOut, position:"relative",bottom:"32%", width:"20%", height:"20%", visibility:"visible",autoAlpha:1, delay:0.3}, "cubo")
        .to("#cubo-p", 1.2, { ease: Power3.easeOut,display:"flex",autoAlpha:1, paddingTop:"3.5rem"}, "cubo-img")
        .to("#cubo-icons", 1.5, { ease: Power3.easeOut,display:"flex",autoAlpha:1, delay:0.8}, "cubo-img")
        .to("#cubo-link", 0.9, {text:"visitar", ease:Linear.easeNone}, "cubo-icons")
    ;
});


