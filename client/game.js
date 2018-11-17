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
	};



	Game.prototype.render = function(){
		//clear scene
		this.context.fillStyle = this.backgroundColor;
		this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);


		//dynamic render
		this.snake.render();
		this.apple.render();

		switch(this.getStatus()){
			
			case this.STATUS.PLAY:
			break;

			case this.STATUS.NONE:
			this.showMsg('Snake!', 'Press space to play');

			
			case this.STATUS.GAMEOVER:
			this.showMsg('Game Over', 'Press space to play again', `Score: ${this.score}`);
			break;

			case this.STATUS.GAMEWIN:
			this.showMsg('You win!', 'Press space to play again!', `Score: ${this.score}`);

			case this.STATUS.PAUSE:
			showMsg('Pause', 'Press space to continue');
		}

		Game.prototype.showMsg = function(header, action, addition){
			//bg
			this.context.beginPath();
			this.context.fillStyle = 'rgba(0, 0, 0, 0.7)';
			this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
			this.context.closePath();

			//top txt
			this.context.beginPath();
			this.context.font = 'normal normal 32px monospace';
			this.context.fillStyle = '#aa0000';
			this.context.textAlign = 'center';
			this.context.fillText(action, this.canvasWidth / 2, this.canvasHeight / 2);
			this.context.closePath();

			//md txt
			this.context.beginPath();
			this.context.font = 'normal normal 14px monospace';
			this.context.fillStyle = '#aa0000';
			this.context.textAlign = 'center';
			this.context.fillText(action, this.canvasWidth / 2, this.canvasHeight / 2 + 32);
			this.context.closePath();

			//btm add txt
			if(addition !== undefined){
				this.context.beginPath();
				this.context.font = 'normal normal 14px monospace';
				this.context.fillStyle = '#aa0000';
				this.context.textAlign = 'center';
				this.context.fillText(action, this.canvasWidth / 2, this.canvasHeight / 2 + 32);
				this.context.closePath();
			}
		}


		Game.prototype.setStatus = function(value){
			this.onStatusChange(value, this.status);
			this.status = value;
		};

		Game.prototype.getStatus = function(){
			return this.status;
		};

		Game.prototype.onStatusChange = function(newstatus, oldstatus){
			if(newstatus === this.STATUS.PLAY && oldstatus !== this.STATUS.PAUSE){
				this.apple.create();
			}
		};




		Game.prototype.handleInput = function(evt){
			if(input.isKey('SPACE')){
				if(this.getStatus() === this.STATUS.GAMEOVER || this.getStatus() === this.STATUS.GAMEWIN){
					this.reset();
					this.setStatus(this.STATUS.PLAY);
				}
				if(this.getStatus() === this.STATUS.PAUSE){
					this.setStatus(this.STATUS.PLAY);
				}
				if(this.getStatus() === this.STATUS.PLAY){
					this.setStatus(this.STATUS.PAUSE);
				}
				if(this.getStatus() === this.STATUS.NONE){
					this.setStatus(this.STATUS.PLAY);
				}
			}

			if(this.getStatus() === this.STATUS.PLAY && !input.isLock){
				input.isLock = true;

				if((input.isKey('UP') || input.isKey('w')) && !this.snake.isRoute('DOWN')){
					this.setRoute('UP');
				}
				if(input.isKey('DOWN') || !this.snake.isRoute('UP')){
					this.setRoute('DOWN');
				}
				if(input.isKey('LEFT') || !this.snake.isRoute('RIGHT')){
					this.setRoute('LEFT');
				}
				if(input.isKey('RIGHT') || !this.snake.isRoute('LEFT')){
					this.setRoute('RIGHT');
				}
			}
		}
	}
};
















