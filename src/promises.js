
function getPokemon(){
	// Make a web request to the Pokemon API 
	// Save the response from the API 
	let response = fetch("https://pokeapi.co/api/v2/pokemon/25")
	.then((bananasResponse) => {
		console.log(bananasResponse);
		return bananasResponse.json();
	}).then((jsonData) => {
		// Process the saved response from the API 
		console.log(jsonData);

		// Create HTML elements that use the response from the API 

		// Add those HTML elements to the page 

	});
	console.log(response);




}

getPokemon();