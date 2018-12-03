//let game = document.getElementById("game");
/*let table = document.createElement("table");
game.appendChild(table);
row1 = document.createElement("tr");
table.appendChild(row1);
cell11 = document.createElement("td");
cell12 = document.createElement("td");
cell12.setAttribute('id', '123');
row1.appendChild(cell11);
row1.appendChild(cell12);*/
playingfield_XO = new PlayingField_XO();
playingfield_XO.CreateReloadButton();
playingfield_XO.CreateField();

function PlayingField_XO() {
	
	this.game = document.getElementById("game");
	
	this.CreateReloadButton = function(){
		var ReloadButton = document.createElement("button");
		ReloadButton.setAttribute('onclick', 'ReloadPage()');
		game.appendChild(ReloadButton);
		ReloadButton.innerHTML = 'Перезагрузить игру';
	}
	
	this.CreateField = function(){
		//let game = document.getElementById("game");
		var PlayingFieldTable = document.createElement("table");
		game.appendChild(PlayingFieldTable);
		var PlayingFieldTableCell = [[],[],[]];
		var PlayingFieldTableRow = [];
		for (let i = 0; i < 3; i++){
			//PlayingFieldTableCell[i] = [];
			PlayingFieldTableRow[i] = document.createElement("tr");
			PlayingFieldTable.appendChild(PlayingFieldTableRow[i]);			
			for (let j = 0; j < 3; j++){
				PlayingFieldTableCell[i][j] = document.createElement("td");
				PlayingFieldTableCell[i][j].setAttribute('i-position', i);
				PlayingFieldTableCell[i][j].setAttribute('j-position', j);
				//PlayingFieldTableCell[i][j].setAttribute('onclick', 'RedRed(this)');
				PlayingFieldTableRow[i].appendChild(PlayingFieldTableCell[i][j]);
			}
		}
	}

	
}
	
/*RedRed = function(elem){
	elem.style.backgroundColor = 'green';
		
}*/