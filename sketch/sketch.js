const SIDE_LENGTH = 100

let centers = [];

angle = 0.1;

function setup() {
	createCanvas(600, 600, WEBGL);
	centers = {
		y: new Center([255, 255, 0], [0, -1, 0]),
		r: new Center([255, 0, 0], [1, 0, 0]),
		w: new Center([255, 255, 255], [0, 1, 0]),
		o: new Center([255, 140, 0], [-1, 0, 0]),
		b: new Center([0, 0, 255], [0, 0, 1]),
		g: new Center([0, 255, 0], [0, 0, -1])
	};

	centers.y.connect(centers.g, centers.r, centers.b, centers.o);
	centers.r.connect(centers.y, centers.g, centers.b, centers.b);
	centers.w.connect(centers.r, centers.g, centers.o, centers.b);
	centers.o.connect(centers.y, centers.b, centers.w, centers.g);
	centers.b.connect(centers.y, centers.o, centers.w, centers.r);
	centers.b.connect(centers.y, centers.r, centers.w, centers.o);
}

function draw() {
	background(51);
	rotateX(angle);
	//angle += 0.05;

	for (let c of Object.values(centers)) {
		c.draw();
	}
}
