async function fetchPokemonData() {
  // Create an AbortController and get its signal
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon", { signal });
    const data = await response.json();

    // Assuming you want to display all Pokemon in your HTML
    const pokemonArray = data.results;

    for (const pokemon of pokemonArray) {
      const pokemonResponse = await fetch(pokemon.url, { signal });
      const pokemonData = await pokemonResponse.json();

      // Create Pokemon card element
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "pokemon-card";

      // Create image element
      const image = document.createElement("img");
      image.src = pokemonData.sprites.front_default;
      image.alt = pokemonData.name;
      image.setAttribute("srcset", "");

      // Create name element
      const nameElement = document.createElement("h3");
      nameElement.className = "name";
      nameElement.textContent = pokemonData.name;

      // Create type dropdown
      const typeDropdown = document.createElement("select");
      typeDropdown.name = "type";
      typeDropdown.id = "type";

      // Assuming a Pokemon can have multiple types
      for (const type of pokemonData.types) {
        const option = document.createElement("option");
        option.value = type.type.name;
        option.textContent = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        typeDropdown.appendChild(option);
      }

      // Create add to team button
      const addButton = document.createElement("button");
      addButton.className = "add-button";
      addButton.textContent = "Add to team";

      // Append elements to the Pokemon card
      pokemonCard.appendChild(image);
      pokemonCard.appendChild(nameElement);
      pokemonCard.appendChild(typeDropdown);
      pokemonCard.appendChild(addButton);

      // Append the Pokemon card to the body
      document.body.appendChild(pokemonCard);
    }
  } catch (error) {
    // Check if the error is due to the fetch being aborted
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error("Error fetching Pokemon data:", error);
    }
  }
}

// Call the function to initiate the fetching process
fetchPokemonData();
