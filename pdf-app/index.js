window.onload = () => {
  console.log("hello world");
};

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

    const doc = new jsPDF();
    doc.text(`Month: ${selectedMonth}`, 20, 20);
    doc.text(`Event Name: ${eventName}`, 20, 30);
    doc.text(`Event Date: ${eventDate}`, 20, 40);
    doc.save("event_info.pdf");

    alert("Form submitted!");
  } else {
    alert("Please fill in all required fields.");
  }
}
