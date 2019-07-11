let straightElements = [
	{"src": "static/icons/straight-vertical.png",
	 "data-edge-1": "1",
	 "data-edge-2": "3"},
	{"src": "static/icons/straight-horizontal.png",
	 "data-edge-1": "4",
	 "data-edge-2": "2"}
];


let verticalPipes = document.getElementsByClassName("straight");

for (let pipe of verticalPipes) {
	pipe.addEventListener('click', rotateStraightPipe)
}

function rotateStraightPipe(event) {
	let pipe = event.target;
	if (pipe.dataset.direction === "0") {
		pipe.src = "static/icons/straight-horizontal.png";
		pipe.parentElement.dataset["edge-1"] = "4";
		pipe.parentElement.dataset["edge-2"] = "2";
		pipe.dataset.direction = "1"
	} else {
		pipe.src = "static/icons/straight-vertical.png";
		pipe.parentElement.dataset["edge-1"] = "1";
		pipe.parentElement.dataset["edge-2"] = "3";
		pipe.dataset.direction = "0"
	}
}

let curvedPipes = document.getElementsByClassName("curved")

for (let pipe of curvedPipes) {
	pipe.addEventListener('click', rotateCurvedPipe)
}

function rotateCurvedPipe(event) {
	let pipe = event.target;
	if (pipe.dataset.direction === "0") {
		pipe.src = "static/icons/curved3.png";
		pipe.parentElement.dataset["edge-1"] = "1";
		pipe.parentElement.dataset["edge-2"] = "4";
		pipe.dataset.direction = "1"
	} else if (pipe.dataset.direction === "1") {
		pipe.src = "static/icons/curved4.png";
		pipe.parentElement.dataset["edge-1"] = "2";
		pipe.parentElement.dataset["edge-2"] = "1";
		pipe.dataset.direction = "2"
	} else if (pipe.dataset.direction === "2") {
		pipe.src = "static/icons/curved1.png";
		pipe.parentElement.dataset["edge-1"] = "3";
		pipe.parentElement.dataset["edge-2"] = "2";
		pipe.dataset.direction = "3"
	} else if (pipe.dataset.direction === "3") {
		pipe.src = "static/icons/curved2.png";
		pipe.parentElement.dataset["edge-1"] = "4";
		pipe.parentElement.dataset["edge-2"] = "3";
		pipe.dataset.direction = "0"
	}
}