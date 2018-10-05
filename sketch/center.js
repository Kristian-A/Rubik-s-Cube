class Center {

	constructor(col, pos) {
		this.col = col;
		this.pos = createVector(pos[0], pos[1], pos[2]);
		this.connections = [];
	}

	connect(top, right, bottom, left) {
		this.connections = [top, right, bottom, left];
	}

	draw() {
		let m = createVector(this.pos.x, this.pos.y, this.pos.z).mult(SIDE_LENGTH);
		push();
		fill(this.col);
		stroke(0);
		strokeWeight(2);
		translate(m.x, m.y, m.z);
		box(SIDE_LENGTH);
		pop();
	}

};

class Edge {

	constructor(c1, c2) {
		this.pos1 = p5.Vector.add(c1.pos, c2.pos).add(c1.pos.copy().mult(0.5))
		this.pos1.mult(SIDE_LENGTH);
		this.rot1 = c1.pos.y ? HALF_PI : 0;
		this.col1 = c1.col;

		this.pos2 = p5.Vector.add(c1.pos, c2.pos).add(c2.pos.copy().mult(0.5))
		this.pos2.mult(SIDE_LENGTH);
		this.rot2 = c2.pos.y ? HALF_PI : 0;
		this.col2 = c2.col;
	}

	draw() {
		push();
		stroke(0);
		strokeWeight(2);
		fill(this.col1);
		translate(this.pos1.x, this.pos1.y, this.pos1.z);
		rotateX(this.rot1);
		plane(SIDE_LENGTH, SIDE_LENGTH);
		pop();

		push();
		stroke(0);
		strokeWeight(2);
		fill(this.col2);
		translate(this.pos2.x, this.pos2.y, this.pos2.z);
		rotateX(this.rot2);
		plane(SIDE_LENGTH, SIDE_LENGTH);
		pop();
	}

}
