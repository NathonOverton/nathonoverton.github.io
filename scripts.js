var a = document.getElementById("audio1"); 
var b = document.getElementById("audio2"); 
var c = document.getElementById("audio3"); 
var d = document.getElementById("audio4"); 
var e = document.getElementById("audio5"); 
var f = document.getElementById("audio6"); 
var g = document.getElementById("audio7"); 
var h = document.getElementById("audio8"); 
var i = document.getElementById("audio9"); 
var j = document.getElementById("audio10"); 

function playAudio(audioSelect) { 
	if (audioSelect == 1) {
	a.load();
	a.play();
	}
	if (audioSelect == 2) {
	b.load();
	b.play();
	}
	if (audioSelect == 3) {
	c.load();
	c.play();
	}
	if (audioSelect == 4) {
	d.load();
	d.play();
	}
	if (audioSelect == 5) {
	e.load();
	e.play();
	}
	if (audioSelect == 6) {
	f.load();
	f.play();
	}
	if (audioSelect == 7) {
	g.load();
	g.play();
	}
	if (audioSelect == 8) {
	h.load();
	h.play();
	}
	if (audioSelect == 9) {
	i.load();
	i.play();
	}
	if (audioSelect == 10) {
	j.load();
	j.play();
	}
} 

function pauseAudio() { 
    a.pause(); 
    b.pause(); 
    c.pause(); 
    d.pause(); 
    e.pause(); 
    f.pause(); 
    g.pause(); 
    h.pause(); 
    i.pause(); 
    j.pause(); 
} 