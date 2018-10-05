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
