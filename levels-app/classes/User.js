class User {
  constructor(userName, fullName, email, password, schoolClass) {
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.schoolClass = schoolClass;
    this.isLoggedIn = false; // Initially, the user is not logged in
    this.loginResult = null; // Property to store the login result
  }

  logIn(username, password) {
    // Dummy data for demonstration purposes
    if (username === this.userName && password === "password") {
      this.isLoggedIn = true;
      this.loginResult = {
        status: "OK",
        message: `User "${username}" logged in!`,
      };
    } else {
      this.loginResult = {
        status: "Error",
        message: "Invalid username or password. Please try again",
      };
    }

    // Return the result for potential external handling
    return this.loginResult;
  }
}

export default User;
