window.onload = async function () {
  console.log("page loaded");
  // Retrieve data from local storage
  const storedResultMessage = localStorage.getItem("resultMessage");
  const storedTeamDescription = localStorage.getItem("teamDescription");

  console.log("1",storedResultMessage, "2",storedTeamDescription);

  const storedPokemonData =
    JSON.parse(localStorage.getItem("addedPokemonName")) || [];

  console.log("Stored Pokemon Data:", storedPokemonData);

  async function fetchPokemonData(pokemonName) {
    // Create an AbortController and get its signal
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        {
          signal,
        }
      );
      const data = await response.json();

      // Assuming the data is an object with relevant information
      const { id, name, types, sprites } = data;

      // Create Pokemon card element
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "pokemon-card";

      // Create image element
      const image = document.createElement("img");
      image.src = sprites.front_default;
      image.alt = name;

      // Create number element
      const numberElement = document.createElement("h4");
      numberElement.textContent = `#${id}`;

      // Create name element
      const nameElement = document.createElement("h3");
      nameElement.textContent = name;

      // Create type element
      const typeElement = document.createElement("h4");
      typeElement.textContent =
        "Types: " + types.map((type) => type.type.name).join(", ");

      // Create remove button
      const removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.textContent = "Remove from team";

      // Add event listener to the "Remove from team" button
      removeButton.addEventListener("click", function () {
        // Add your logic here for removing the Pokemon from the team
        // For example, you can call a function like handleRemoveFromTeam(id);
        // where id is the unique identifier for the Pokemon
        // handleRemoveFromTeam(id);
        alert("Remove button clicked");
      });

      // Append elements to the Pokemon card
      pokemonCard.appendChild(image);
      pokemonCard.appendChild(numberElement);
      pokemonCard.appendChild(nameElement);
      pokemonCard.appendChild(typeElement);
      pokemonCard.appendChild(removeButton);

      // Append the Pokemon card to the "pokemonCard" div
      const pokemonCardContainer = document.getElementById("pokemonCard");
      pokemonCardContainer.appendChild(pokemonCard);
    } catch (error) {
      // Check if the error is due to the fetch being aborted
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching Pokemon data:", error);
      }
    }
  }

  // Loop through stored Pokemon data and fetch/display each Pokemon
  for (const storedPokemonName of storedPokemonData) {
    await fetchPokemonData(storedPokemonName);
  }
};
