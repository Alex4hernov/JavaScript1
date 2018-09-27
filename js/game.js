function random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
};

var game = {
	size: 20,
	snake: [],
	food: {},
	wall: {},
    score: 0, //Игровые очки
	direction: {
		row: -1,
		col: 0
	},
	createBoard: function(){
		console.log('createBoard');
		var table = document.createElement('table');
		table.classList.add('game-table');

		for ( var i = 0; i < this.size; i++ ) {
			var tr = document.createElement('tr');

			for ( var j = 0; j < this.size; j++ ) {
				td = document.createElement('td');
				td.classList.add('game-table-cell');
				td.setAttribute('id', 'cell-' + i + '-' + j);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		} 

		document.getElementById('snake-field').appendChild(table);		
	},
    createScore: function(){
        //Создаём окно с заработанными очками
        
            if(this.snake.length > 2){
                this.score++
            }

        var elem = document.getElementById('totalscore');
        elem.innerHTML = 'totalscore' + ' ' + this.score;
    },
	createSnake: function(){
		this.snake.push({row: 10, col: 10});
		this.snake.push({row: 11, col: 10});
	},
	render: function(){
		var elements = document.getElementsByTagName('td');

		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].classList.remove('snake-unit');
			elements[i].classList.remove('food-unit');
            elements[i].classList.remove('wall-unit');
		}

		for ( var i = 0; i < this.snake.length; i++ ) {
			var cell = this.snake[i];
			var id = 'cell-' + cell.row + '-' + cell.col;
			document.getElementById(id).classList.add('snake-unit');
		}

		if ( this.food.row && this.food.col ) {
			var id = 'cell-' + this.food.row + '-' + this.food.col;
			document.getElementById(id).classList.add('food-unit');
		}
        
        if ( this.wall.row && this.wall.col ) {
			var id = 'cell-' + this.wall.row + '-' + this.wall.col;
			document.getElementById(id).classList.add('wall-unit');
		}
	},
	isSnakeCell: function(row, col){
		for ( var i = 0; i < this.snake.length; i++ ) {
			var cell = this.snake[i];
			if ( cell.row == row && cell.col == col ) {
				return true;
			}
		}

		return false;
	},
	createFood: function(){
		console.log('createFood');

		var pool = [];
		for ( var i = 0; i < this.size; i++ ) {
			for ( var j = 0; j < this.size; j++ ) {
				if ( !this.isSnakeCell(i, j) ) {
					pool.push({row: i, col: j});
				}
			}
		} 

		var index = random(0, pool.length);
		this.food = pool[index];
	},
    createWall: function(){
        var a = [];
        for ( var i = 0; i < this.size; i++ ) {
			for ( var j = 0; j < this.size; j++ ) {
				if ( !this.isSnakeCell(i, j) ) {
					a.push({row: i, col: j});
				}
			}
		} 
        
        var index = random(0, a.length);
        this.wall = a[index];  
    },
	setEvents: function(){
		this.intervalId = setInterval(this.move.bind(this), 250);
		document.addEventListener('keydown', this.changeDirection.bind(this));
	},
	changeDirection: function(e){
		switch ( e.keyCode ) {
			case 37:
				//влево
				this.direction = {
					row: 0,
					col : -1
				};
				break;
			case 38:
			 	//вверх
				this.direction = {
					row: -1,
					col : 0
				};
			 	break;
			case 39:
			 	//вправо
				this.direction = {
					row: 0,
					col : 1
				};
			 	break;
			case 40:
				//вниз
				this.direction = {
					row: 1,
					col : 0
				};
				break;
			default:
				break;
		}
	},
	checkCell: function(row, col){
		if ( row < 0 || row >= this.size || col < 0 || col >= this.size ) {
			return false;
		}

		if ( this.isSnakeCell(row, col) ) {
			return false;
		}
        
        if ( this.wall == row || this.wall == col ){
            return false;
        }
    
		return true;
	},
	over: function(){
		alert('Игра завершена' + '\r\n' + 'Очков набрано' + ' ' + this.score);
		clearInterval(this.intervalId);
	},
	move: function(){
		// смотрим направление движения
		// в зависимости от направления движения
		// определить "голову змеи" и создаем новую голову
		var row = this.snake[0].row + this.direction.row;
		var col = this.snake[0].col + this.direction.col;

		if ( !this.checkCell(row, col) ) {
			return this.over();
		}

		// добавить элемент в начало змеи
		this.snake.unshift({row: row, col: col});

		// удаляем элемент из хвоста змеи - таким образом змея двигается
		if ( !this.food || this.food.row != row || this.food.col != col ) {
			// еды нет
			this.snake.pop();
		} else {
			// еду съели
			this.createFood();
            this.createScore();
            this.createWall();
		}
        

		this.render();
		console.log('move');
	},
	run: function(){
		console.log('run game!');
		this.createBoard();
		this.createSnake();
        this.createScore();
		this.createFood();
        this.createWall();
		this.render();
		this.setEvents();
	}
};


window.addEventListener('load', function(){
	game.run();
});