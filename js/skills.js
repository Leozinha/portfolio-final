// wave animation

TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("#wave-1", { y: "90px",x:"-200px" });
TweenLite.set("#wave-2", { y: "73px",x:"-200px" });
TweenLite.set("#wave-3", { y: "85px",x:"-200px" });

var svg   = document.querySelector("svg");
var wave  = document.querySelector("#wave");
var wave2  = document.querySelector("#wave2");
var wave3  = document.querySelector("#wave3");

var width = 700;

var amplitude = 40;
var frequency = 4;
var segments  = 200;
var interval  = width / segments;

for (var i = 0; i < segments; i++) {

    var norm  = i / (segments - 1);
    var point = wave.points.appendItem(svg.createSVGPoint());

    point.x = i * interval;
    point.y = amplitude / 2;

    TweenMax.to(point, 1.8, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);

}

for (var a = 0; a < segments; a++) {

    var norm2  = a / (segments - 1);
    var point2 = wave2.points.appendItem(svg.createSVGPoint());

    point2.x = a * interval;
    point2.y = amplitude / 2;

    TweenMax.to(point2, 1.8, { y: -point2.y, repeat: -1, yoyo: true }).progress(norm2 * frequency);

}

for (var e = 0; e < segments; e++) {

    var norm3  = e / (segments - 1);
    var point3 = wave3.points.appendItem(svg.createSVGPoint());

    point3.x = e * interval;
    point3.y = amplitude / 2;

    TweenMax.to(point3, 1.8, { y: -point3.y, repeat: -1, yoyo: true }).progress(norm3 * frequency);

}


