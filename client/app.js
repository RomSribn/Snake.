const game = new Game();


function init() {
	game.init();
	setInterval(main, 1000/60);
}


function main(){
	game.update();
	game.render();
}


document.addEventListener('keydown', function(e){
	game.handleInput(e);
});

init();