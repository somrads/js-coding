async function fetchPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    // Array to store information about each Pokemon
    const pokemonInfo = [];

    // Iterate through the list of Pokemon and fetch additional details
    for (const pokemon of data.results) {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      // Extracting relevant information
      const smallPicture = pokemonData.sprites.front_default;
      const name = pokemonData.name;
      const types = pokemonData.types.map((type) => type.type.name);

      // Creating an object with the extracted information
      const pokemonDetails = {
        smallPicture,
        name,
        types,
      };

      // Pushing the details to the array
      pokemonInfo.push(pokemonDetails);
    }

    // Log the result to the console
    console.log(pokemonInfo);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

// Call the function to initiate the fetching process
fetchPokemonData();
