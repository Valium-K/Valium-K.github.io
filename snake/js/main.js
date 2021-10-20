var interval; // 인터벌을 초기화 하기위한 주소 저장 변수
var speed = SNAKE_SPEED;

var update = function(speed, eatenFruitNum) {
	interval = window.setInterval(() => {
			ui.clearUi();
			ui.sceneUi();
			map.clearObject();
			snake.changeDirection();
			snake.setPos();
			fruit.fruitManager();
			gm.gameManager();
			map.draw();
			ui.uiTime();
			
			if(!gm.isHardModeOn &&  // 하드모드가 아닐경우를 앞에 배치해 뒤 상태는 시도도 안함
						(snake.totalEatenFruit % 5) == 0 && // 5배수의 과일을 먹으면
						snake.totalEatenFruit != eatenFruitNum) { // 이 구문이 빠지면 5개의 과일을 먹은 후 다음 과일을 먹기전까지 계속 빨라짐
				
				// 속도 빠르게
				speed = Math.floor(speed * 0.95);
				// 현재 인터벌 삭제
				clearInterval(interval);
				// 새 인터벌 등록
				update(speed, snake.totalEatenFruit);
			}
	}, speed);
};

(function main(){
	document.getElementById("body").style.background = MAP_STROKE_COLOR;
	// high score init
	if(localStorage.getItem("highScore") == null) {
		localStorage.setItem("highScore", 0);	
	}	
	if(localStorage.getItem("highScore-hard") == null) {
		localStorage.setItem("highScore-hard", 0);	
	}
	
	// audio 객체 생성
	audio = new AudioManager();
	audio.init();
	audio.loop = false;
	audio.playTitleBgm();
	
	// gameManager 객체 생성
	gm = new GameManager();
	gm.init();
	
	ui = new Ui();
	ui.init();	
	
	// 맵 객체 생성
	map = new Map();
	map.init();
	
	// 입력 버퍼생성
	queue = new Queue();
	
	// 플레이어 객체 생성
	snake = new Snake();
	snake.init();
	
	// fruit 객체 생성
	fruit = new Fruit();
	fruit.init();
	
	audio.playTitleBgm();
	map.drawMap();
	
	// 업데이트 함수
	update(speed, 0);
	
}());