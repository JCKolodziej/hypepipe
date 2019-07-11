let cell = document.querySelectorAll('[data-position-x="1"][data-position-y="1"]')[0];
let nextcell = document.querySelectorAll('[data-position-x="1"][data-position-y="2"]')[0];

const connectionPairs = {'1':'3', '2':'4', '3':'1', '4':'2'};
const numberOfTilesToWin = 4;




function findNextCell(currentCell) {
	let currentCellConnectionEdge = currentCell.firstElementChild.dataset['edge-2'];
	let currentCellPositionX = parseInt(currentCell.dataset.positionX, 10);
	let currentCellPositionY = parseInt(currentCell.dataset.positionY, 10);

	let nextCellPositionY;
	let nextCellPositionX;

	if (currentCellConnectionEdge === "1") {
		nextCellPositionX = currentCellPositionX;
		nextCellPositionY = currentCellPositionY - 1;

	} else if (currentCellConnectionEdge === "2") {
		nextCellPositionX = currentCellPositionX + 1;
		nextCellPositionY = currentCellPositionY;

	} else if (currentCellConnectionEdge === "3") {
		nextCellPositionX = currentCellPositionX;
		nextCellPositionY = currentCellPositionY + 1;

	} else if (currentCellConnectionEdge === "4") {
		nextCellPositionX = currentCellPositionX - 1;
		nextCellPositionY = currentCellPositionY;

	}

	return document.querySelectorAll(`[data-position-x="${nextCellPositionX}"][data-position-y="${nextCellPositionY}"]`)[0]

}

function isValidConnection(currentCell, nextCell) {
	let currentCellConnectionEdge = currentCell.firstElementChild.dataset['edge-2'];
	let nextCellConnectionEdge = nextCell.firstElementChild.dataset['edge-1'];

	return connectionPairs[currentCellConnectionEdge] === nextCellConnectionEdge
}


function checkWin() {
	// debugger;
	let correctTileCount = 0;
	let currentCell = document.getElementById('21');

	try {
		while (correctTileCount < numberOfTilesToWin) {
			let nextCell = findNextCell(currentCell);
			if (isValidConnection(currentCell, nextCell)) {
				currentCell = nextCell;
				correctTileCount++
			} else {
				break
			}
		}
	} catch(error) {

	}

	if (correctTileCount === numberOfTilesToWin && currentCell.id === '510'){
		window.location.href = "/win"
	}
}


// checkWin();

let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', checkWin);