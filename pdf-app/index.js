function showForm() {
  let selectedMonth = document.getElementById("months").value;
  let dynamicForm = document.getElementById("dynamicForm");

  if (selectedMonth !== "") {
    dynamicForm.style.display = "block";
  } else {
    dynamicForm.style.display = "none";
  }
}

function submitForm() {
  let selectedMonth = document.getElementById("months").value;
  let eventName = document.getElementById("eventName").value;
  let eventDate = document.getElementById("eventDate").value;

  if (selectedMonth !== "" && eventName !== "" && eventDate !== "") {
    // Handle form submission here (e.g., send data to the server)
    alert("Form submitted!");
  } else {
    alert("Please fill in all required fields.");
  }
}
