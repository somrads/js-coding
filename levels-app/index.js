import User from "./classes/User.js";

window.onload = () => {
  console.log("page is fully loaded");

  const studentRegisterFormData = [];

  async function getFormData() {
    const userName = await document.getElementById("userName").value;
    const fullName = await document.getElementById("fullName").value;
    const email = await document.getElementById("email").value;
    const schoolClass = await document.getElementById("class").value;

    const user = new User(userName, fullName, email, "password", schoolClass);

    // Create an object with the form data
    const formDataObject = {
      userName: userName,
      fullName: fullName,
      email: email,
      schoolClass: schoolClass,
    };

    // Push the object into the array
    studentRegisterFormData.push(formDataObject);

    // Create a new user object and simulate a fake login
    const loginResult = user.logIn(userName, "password");

    if (loginResult.status === "OK") {
      // Successful fake login
      alert(`Login successful: ${loginResult.message}`);
      console.log("Login result:", loginResult);

      // Hide the registration form
      const registrationForm = document.querySelector(".form");
      registrationForm.style.display = "none";

      // Display the navigation
      const navigation = document.querySelector(".navigation");
      navigation.style.display = "block";

      // Navigate to the rest of the website (e.g., profile page)
      navigateToProfile();
    } else {
      // Handle fake login error
      alert(`Login failed: ${loginResult.message}`);
    }
  }

  // Attach the getFormData function to the submit button
  const registerBtn = document.querySelector(".registerbtn");
  registerBtn.addEventListener("click", getFormData);

  // Placeholder functions for navigating to different pages
  function navigateToProfile() {
    // Placeholder logic for navigating to the profile page
    console.log("Navigating to the profile page");
  }

  function navigateToLeaderboard() {
    // Placeholder logic for navigating to the leaderboard page
    console.log("Navigating to the leaderboard page");
  }
};
