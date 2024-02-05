window.onload = function () {
  // Retrieve data from local storage
  const storedResultMessage = localStorage.getItem("resultMessage");
  const storedTeamDescription = localStorage.getItem("teamDescription");
  const storedPokemonName = localStorage.getItem("pokemonName");

  // Display the retrieved data in the corresponding div boxes
  const resultDiv = document.getElementById("resultMessage");
  resultDiv.textContent = storedResultMessage;

  const descriptionDiv = document.getElementById("teamDescription");
  descriptionDiv.textContent = storedTeamDescription;

  async function fetchPokemonData() {
    // Create an AbortController and get its signal
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${storedPokemonName}`,
        {
          signal,
        }
      );
      const data = await response.json();

      // Assuming the data is an object with relevant information
      const { id, name, types, sprites } = data;

      // Log the details
      console.log("Number:", id);
      console.log("Name:", name);
      console.log("Types:", types);

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
      pokemonCard.appendChild(numberElement);
      pokemonCard.appendChild(nameElement);
      pokemonCard.appendChild(typeElement);
      pokemonCard.appendChild(removeButton);

      // Append the Pokemon card to the body
      document.body.appendChild(pokemonCard);
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
