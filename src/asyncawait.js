
async function getPokemon() {
	// Make a web request to the Pokemon API 
	// Save the response from the API 

	// await fetch is ASYNC BLOCKING 
	try {
		let randomNumber = await delayedRandomNumber();
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber);
		let bodyData = await response.json();
		// Process the saved response from the API 
		console.log(bodyData);

		// Create HTML elements that use the response from the API 
		let pokemonContainer = document.getElementById("pokemonDataContainer");
		let pokemonNameHeader = document.createElement("h2");
		pokemonNameHeader.innerText = bodyData.name;

		// Add those HTML elements to the page 
		pokemonContainer.appendChild(pokemonNameHeader);

	} catch (error) {
		console.log(error);
	}
}

getPokemon();


async function delayedRandomNumber(){

	// Async blocking delay within the function 
	await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
	return Math.floor(Math.random() * 1025) + 1;

	// setTimeout is non-blocking asynchronous 
	// setTimeout(() => {
	// 	return Math.floor(Math.random() * 1025) + 1;
	// }, Math.random() * 2000)
}


// Create an event listener for the click on the button
// to get a random Pokemon on every button click 