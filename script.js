playingfieldXO = new PlayingFieldXO();
playingfieldXO.createReloadButton();
playingfieldXO.createField();
//let a = PlayingFieldXO.getPlayingField(); //эти две закомментированные строки чисто для проверки, что таблица значений игрового поля доступна. но она почему-то недоступна.
//console.log(a[1][1].value);

function PlayingFieldXO() {
	
	this.game = document.getElementById("game");	
	
	this.createReloadButton = function(){
		let reloadButton = document.createElement("button");
		reloadButton.setAttribute('onclick', 'playingfieldXO.reloadPage()');
		game.appendChild(reloadButton);
		reloadButton.innerHTML = 'Перезагрузить игру';
	}
	
	this.createField = function(){
		//let game = document.getElementById("game");
		let playingFieldTable = document.createElement("table");
		game.appendChild(playingFieldTable);
		let playingFieldTableCell = [[],[],[]];
		let playingFieldTableRow = [];
		/*function Cell(td, value){
			this.value = value;
			this.td = td;
		};*/
		for (let i = 0; i < 3; i++){
			//playingFieldTableCell[i] = [];
			playingFieldTableRow[i] = document.createElement("tr");
			playingFieldTable.appendChild(playingFieldTableRow[i]);			
			for (let j = 0; j < 3; j++){
				let td1 = document.createElement("td");
				td1.setAttribute('positionI', i);
				td1.setAttribute('positionJ', j);
				td1.setAttribute('onclick', 'RedRed(this)');
				playingFieldTableRow[i].appendChild(td1);
				//let cell1 = new Cell(td, 'white');
				let cell1 = {
					td: td1,
					value: 'white'
				};
				playingFieldTableCell[i][j] = cell1;
				console.log(playingFieldTableCell[i][j].value);	//этот лог чисто чтобы убедиться, что массив успешно создан.			
			}
		};
		
		console.log(playingFieldTableCell[1][1].value); //этот лог чисто чтобы убедиться, что массив успешно создан.			
		//this.getPlayingField1 = playingFieldTableCell; //это попытка вытащить массив значений из функции создания поля.
	
	};
	
	/*this.getPlayingField = function(){
		let s = this.CreateField.getPlayingField1;
		return s;
	};*/ //вытаскиваем игрокое поле из функции создания его
	

	this.reloadPage = function() {
		window.location.reload(true);
	};
	
	
	this.moveOnField = function(){
		//меняет игровое поле при ходе игрока
	};
	
	this.winCheck = function(){		
		return win;
	};	
	
};

/*function PlayerXO() {
	
	
	this.moveCalculations = function(){
		//тут будут подсчеты. эту сущность я пока не написала.
	}
};*/

	
RedRed = function(elem){
	elem.style.backgroundColor = 'green';//это пока что чисто проверочная функция, нужна, чтобы видеть, что навешанные атрибуты работают. кстати, если раскомментировать верхние строки с кодом, который должен добывать таблицу из PlayingFieldXO(), она отрубается тоже. я хз почему.
}