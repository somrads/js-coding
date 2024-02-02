window.onload = function () {
  // Retrieve data from local storage
  const storedResultMessage = localStorage.getItem("resultMessage");
  const storedTeamDescription = localStorage.getItem("teamDescription");

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
        "https://pokeapi.co/api/v2/pokemon?limit=151",
        { signal }
      );
      const data = await response.json();

      console.log(data.results);
    
    } catch (error) {
      // Check if the error is due to the fetch being aborted
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching Pokemon data:", error);
      }
    }
  }
  fetchPokemonData();
};

