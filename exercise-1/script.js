window.onload = () => {
    console.log("page is fully loaded");

    const form = document.getElementById("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let order = document.getElementById("order").value;
        
        console.log("Submit event called");
        console.log(name, email, order);
        document.getElementById("result").innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Order: ${order}</p>`;
    });


};
