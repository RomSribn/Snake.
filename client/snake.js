function Snake(game) {
	this.game = game;

	this.ROUTE = {
		UP: 2,
		DOWN: 0,
		LEFT: 1,
		RIGHT: 3
	};

	const defaultPosX = Math.ceil(this.game.sceneWidth / 2);
	const defaultPosY = Math.ceil(this.game.sceneHeight / 2);


	this.body = [
		{x: defaultPosX, y: defaultPosY - 1},
		{x: defaultPosX, y: defaultPosY},
		{x: defaultPosX, y: defaultPosY + 1}
	];


	this.setRoute('RIGHT');


	Snake.prototype.addElement = function(){
		const lastIndex = this.body.length - 1;

		const newSnakeElement = {
			x: this.body[lastIndex].x,
			y: this.body[lastIndex].y
		};


		
	}
}