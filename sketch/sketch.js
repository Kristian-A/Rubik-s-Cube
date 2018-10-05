const SIDE_LENGTH = 100

let centers = {};
let edges = {};
let corners = {};
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
		yr: new Edge(centers.y, centers.r),
		yo: new Edge(centers.y, centers.o),
		yb: new Edge(centers.y, centers.b),
		wg: new Edge(centers.w, centers.g),
		wr: new Edge(centers.w, centers.r),
		wo: new Edge(centers.w, centers.o),
		wb: new Edge(centers.w, centers.b),
		br: new Edge(centers.b, centers.r),
		bo: new Edge(centers.b, centers.o),
		og: new Edge(centers.o, centers.g),
		gr: new Edge(centers.g, centers.r)
	};

	corners = {
		yob: new Corner(centers.y, centers.o, centers.b),
		yog: new Corner(centers.y, centers.o, centers.g),
		ybr: new Corner(centers.y, centers.b, centers.r),
		ygr: new Corner(centers.y, centers.g, centers.r),
		wob: new Corner(centers.w, centers.o, centers.b),
		wog: new Corner(centers.w, centers.o, centers.g),
		wbr: new Corner(centers.w, centers.b, centers.r),
		wgr: new Corner(centers.w, centers.g, centers.r),


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
	rotateX(QUARTER_PI);
	rotateY(angle);
	angle += 0.01

	for (let c of Object.values(centers)) {
		c.draw();
	}
	for (let e of Object.values(edges)) {
		e.draw();
	}
	for (let c of Object.values(corners)) {
		c.draw();
	}

}
