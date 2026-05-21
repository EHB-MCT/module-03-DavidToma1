let container = document.querySelector("#canvas-container");

let buildings = [];
let numBuildings = 10;
let buildingWidth;
let groundLevel;
let startX;

function setup() {
	let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
	canvas.parent(container);

	// Calculate layout
	buildingWidth = (width * 0.8) / numBuildings;
	startX = width * 0.1;
	groundLevel = height * 0.8;

	// Initialize data
	resetData();

	// 2. Add Event Listeners
	// Select the buttons and add 'click' listeners to call the functions below
	let growBtn = document.querySelector("#btn-grow");
	growBtn.addEventListener("click", growCity);

	let shrinkBtn = document.querySelector("#btn-shrink");
	shrinkBtn.addEventListener("click", shrinkCity);

	document.querySelector("#btn-reset").addEventListener("click", resetData);
}

function draw() {
	background(255);
	buildings.forEach(function (building, index) {
		fill(0, 0, 50 + building);
		rect(
			startX + index * buildingWidth,
			groundLevel,
			buildingWidth - 2,
			-building,
		);
	});
	// Draw ground line
	stroke(0);
	//draw line
	noStroke();

	// 3. Visualize the Loop
	// Use forEach to loop through the buildings array
	// Calculate x and y positions
	// Draw a rect() for each building
	// Challenge: Set fill() based on height (taller = darker)
	// Bonus: Apply animationOffset to height
}

function resetData() {
	// empty buildings array
	buildings = [];
	// use a loop to create random heights
	for (let i = 0; i < numBuildings; i++) {
		let randomHeight = random(50, 200);
		buildings.push(randomHeight);
	}

	updateDOM();
}

function growCity() {
	// 4. Grow the City

	let newHeights = buildings.map(function (building) {
		return building * 1.1;
	});
	// Use .map() to create a new array where buildings are 10% taller
	console.log("Grow city");
	updateDOM();
	buildings = newHeights;
}

function shrinkCity() {
	// 5. Shrink the City

	let newHeights = buildings.map(function (building) {
		return building * 0.9;
	});
	// Use .map() to create a new array where buildings are 10% smaller
	console.log("Shrink city");
	updateDOM();
	buildings = newHeights;
}

function updateDOM() {
	let output = document.getElementById("data-output");
	output.innerText = buildings.join(", ");
}
