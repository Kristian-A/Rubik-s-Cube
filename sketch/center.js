class Center {

	constructor(color, pos) {
		this.color = color;
		this.pos = pos;
		this.connections = undefined;
	}

	connect(top, right, bottom, left) {
		this.connections = [top, right, bottom, left];
	}

	draw() {
		push();
		translate(this.pos[0] * SIDE_LENGTH, this.pos[1] * SIDE_LENGTH, this.pos[2] * SIDE_LENGTH);
		fill(this.color);
		stroke(0);
		strokeWeight(2);
		box(SIDE_LENGTH);
		pop();
	}

};
