let cell = document.querySelectorAll('[data-position-x="1"][data-position-y="1"]')[0];

function findNextCell(currentCell) {
	let currentCellConnectionEdge = currentCell.dataset['edge-2'];

	let nextCellPositionY;
	let nextCellPositionX;

	if (currentCellConnectionEdge === "1") {
		nextCellPositionX = parseInt(currentCell.dataset.positionX, 10)
		nextCellPositionY = parseInt(currentCell.dataset.positionY, 10) - 1;

	} else if (currentCellConnectionEdge === "2") {
		nextCellPositionX = parseInt(currentCell.dataset.positionX, 10) + 1
		nextCellPositionY = parseInt(currentCell.dataset.positionY, 10);

	} else if (currentCellConnectionEdge === "3") {
		nextCellPositionX = parseInt(currentCell.dataset.positionX, 10)
		nextCellPositionY = parseInt(currentCell.dataset.positionY, 10) + 1;

	} else if (currentCellConnectionEdge === "4") {
		nextCellPositionX = parseInt(currentCell.dataset.positionX, 10) - 1;
		nextCellPositionY = parseInt(currentCell.dataset.positionY, 10);

	}

	return document.querySelectorAll(`[data-position-x="${nextCellPositionX}"][data-position-y="${nextCellPositionY}"]`)[0]

}

console.log(findNextCell(cell));