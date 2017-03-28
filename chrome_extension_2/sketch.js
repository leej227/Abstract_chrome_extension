var sketch = function(p5) {
	var canvas;

	p5.setup = function() {
		console.log('runnning p5 setup');
		canvas = p5.createCanvas(window.innerWidth,2000);
		canvas.position(0,0);
		canvas.style('z-index', '-1');
		p5.noStroke();

	};

	p5.draw = function() {
    p5.background(255);
		p5.fill(p5.random(255),p5.random(255),p5.random(255));
		p5.ellipse(p5.mouseX+(p5.random(0,2)), p5.mouseY+(p5.random(0,2)),60,60);
	};
};

var p5sketch = new p5(sketch);
