function Game(){
	//default settings for game
	this.cellSize = 16;
	this.canvasWidth = 1280;
	this.canvasHeight = 720;
	this.backgroundColor = 'gray';
	this.canvasBgc = '#000'
	this.snakeColor = 'green';
	this.snakeHeadColor = 'red';
	this.score = 0;
	this.status = 1;
	this.STATUS = {
		PLAY: 0,
		NONE: 1,
		GAMEOVER: 2,
		PAUSE: 4
	};



	document.body.style.textAlign = 'center';

	this.canvas = document.createElement('canvas');
	document.body.appendChild(this.canvas);

	this.canvas.width = this.canvasWidth;
	this.canvas.height = this.canvasHeight;
	this.canvas.style.backgroundColor = this.canvasBgc;

	this.context = this.canvas.getContext('2d');

	this.sceneWidth = Math.ceil(this.canvasWidth / this.cellSize);
	this.sceneHeight = Math.ceil(this.canvasHeight / this.cellSize);

	this.snake = new Snake(this);

	this.apple = new Apple(this);


	Game.prototype.reset = function(){
		this.snake = new Snake(this);
		this.apple = new Apple(this);

		this.score = 0;
	};

	Game.prototype.init = function(){
		this.reset();
	};

	Game.prototype.update = function(){
		if(this.getStatus() === this.STATUS.PLAY){
			this.snake.update();
		}
		input.isLock = false;
	}
};
















