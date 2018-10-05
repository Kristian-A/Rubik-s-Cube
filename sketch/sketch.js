const SIDE_LENGTH = 100

let centers = {};
let edges = {};
let angle = 0;

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

	edges = {
		yg: new Edge(centers.y, centers.g),
		yr: new Edge(centers.y, centers.r)
	};

	centers.y.connect(centers.g, centers.r, centers.b, centers.o);
	centers.r.connect(centers.y, centers.g, centers.b, centers.b);
	centers.w.connect(centers.r, centers.g, centers.o, centers.b);
	centers.o.connect(centers.y, centers.b, centers.w, centers.g);
	centers.b.connect(centers.y, centers.o, centers.w, centers.r);
	centers.g.connect(centers.y, centers.r, centers.w, centers.o);
}

function draw() {
	background(51);
	rotateX(-QUARTER_PI);
	rotateY(angle);
	for (let c of Object.values(centers)) {
		c.draw();
	}
	angle += 0.01
	for (let e of Object.values(edges)) {
		e.draw();
	}
}
