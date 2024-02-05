import Team from "./Team.js";

// Wrap your code in the window.onload event to ensure it runs after the window has loaded
window.onload = function () {
  const myTeam = new Team("Rocket", "Jessie");
  // Function to handle adding a Pokémon to the team
  function handleAddToTeam(pokemon) {
    const resultMessage = myTeam.addPokemon(pokemon);

    const addedPokemonName = resultMessage.match(/"(.*?)"/)[1];

    localStorage.setItem("resultMessage", resultMessage);

    localStorage.setItem("addedPokemonName", addedPokemonName);

    // Store the description in local storage
    localStorage.setItem("teamDescription", myTeam.describe());

    return alert(resultMessage);
  }

  // Function to create a Pokemon card and attach the event listener to the "Add to team" button
  function createPokemonCard(pokemon, index) {
    // Create Pokemon card element
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemon-card";

    // Create image element
    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    image.setAttribute("srcset", "");

    // Create name and number element
    const nameElement = document.createElement("h3");
    nameElement.className = "name";
    nameElement.textContent = `#${index + 1} ${pokemon.name}`;

    // Create type dropdown
    const typeDropdown = document.createElement("h4");
    typeDropdown.name = "type";
    typeDropdown.id = "type";

    // Assuming a Pokemon can have multiple types
    for (const type of pokemon.types) {
      const option = document.createElement("h4");
      option.value = type.type.name;
      option.textContent =
        type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
      typeDropdown.appendChild(option);
    }

    // Create add to team button
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.textContent = "Add to team";

    // Add event listener to the "Add to team" button
    addButton.addEventListener("click", function () {
      handleAddToTeam({
        name: pokemon.name,
        // Add other relevant Pokemon data if needed
      });
    });

    // Append elements to the Pokemon card
    pokemonCard.appendChild(image);
    pokemonCard.appendChild(nameElement);
    pokemonCard.appendChild(typeDropdown);
    pokemonCard.appendChild(addButton);

    // Append the Pokemon card to the body
    document.body.appendChild(pokemonCard);
  }

  async function fetchPokemonData() {
    // Create an AbortController and get its signal
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151",
        { signal }
      );
      const data = await response.json();

      // Assuming you want to display all Pokemon in your HTML
      const pokemonArray = data.results;

      for (const [index, pokemon] of pokemonArray.entries()) {
        const pokemonResponse = await fetch(pokemon.url, { signal });
        const pokemonData = await pokemonResponse.json();

        // Call the function to create Pokemon card and attach event listener
        createPokemonCard(pokemonData, index);
      }
    } catch (error) {
      // Check if the error is due to the fetch being aborted
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching Pokemon data:", error);
      }
    }
  }
  // Call the function to initiate the fetching process
  fetchPokemonData();
};
