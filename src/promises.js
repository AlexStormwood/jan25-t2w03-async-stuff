
function getPokemon(){
	// Make a web request to the Pokemon API 
	// Save the response from the API 
	let response = fetch("https://nonexistenturlforcoderclass.co/api/v2/pokemon/25")
	.then((bananasResponse) => {
		console.log(bananasResponse);
		return bananasResponse.json();
	})
	.then((jsonData) => {
		// Process the saved response from the API 
		console.log(jsonData);

		// Create HTML elements that use the response from the API 
		let pokemonContainer = document.getElementById("pokemonDataContainer");
		let pokemonNameHeader = document.createElement("h2");
		pokemonNameHeader.innerText = jsonData.name;

		// Add those HTML elements to the page 
		pokemonContainer.appendChild(pokemonNameHeader);

	})
	.catch((error) => {
		console.log(error);
		return;
	});


	console.log(response);




}

getPokemon();