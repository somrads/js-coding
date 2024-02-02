window.onload = function () {
  // Retrieve data from local storage
  const storedResultMessage = localStorage.getItem("resultMessage");
  const storedTeamDescription = localStorage.getItem("teamDescription");

  // Display the retrieved data in the corresponding div boxes
  const resultDiv = document.getElementById("resultMessage");
  resultDiv.textContent = storedResultMessage;

  const descriptionDiv = document.getElementById("teamDescription");
  descriptionDiv.textContent = storedTeamDescription;
};
