let Plane = function(pos, col) {
	this.pos = pos.mult(SIDE_LENGTH);
	this.col = col;
	this.rot = [];

	this.findRotation = (center) => {
		pos = center.pos;
		this.rot = [pos.y*HALF_PI, pos.x*HALF_PI];
	}

	this.draw = () => {
		push();
		stroke(0);
		strokeWeight(2);
		fill(this.col);
		translate(this.pos.x, this.pos.y, this.pos.z);
		rotateX(this.rot[0]);
		rotateY(this.rot[1]);
		plane(SIDE_LENGTH, SIDE_LENGTH);
		pop();
	}
}

class Edge {

	constructor(c1, c2) {
		this.planes = [new Plane(p5.Vector.add(c1.pos, c2.pos).add(c1.pos.copy().mult(0.5)), c1.col),
			new Plane(p5.Vector.add(c1.pos, c2.pos).add(c2.pos.copy().mult(0.5)), c2.col)];

		this.planes[0].findRotation(c1);
		this.planes[1].findRotation(c2);
	}

	draw() {
		for (let plane of this.planes) {
			plane.draw();
		}
	}
}


class Corner {

	constructor(c1, c2, c3) {
		this.planes = [
			new Plane(p5.Vector.add(c1.pos, c2.pos).add(c3.pos).add(c1.pos.copy().mult(0.5)), c1.col),
			new Plane(p5.Vector.add(c1.pos, c2.pos).add(c3.pos).add(c2.pos.copy().mult(0.5)), c2.col),
			new Plane(p5.Vector.add(c1.pos, c2.pos).add(c3.pos).add(c3.pos.copy().mult(0.5)), c3.col),
		];

		this.planes[0].findRotation(c1);
		this.planes[1].findRotation(c2);
		this.planes[2].findRotation(c3);
	}

	draw() {
		for (let plane of this.planes) {
			plane.draw();
		}
	}
}
