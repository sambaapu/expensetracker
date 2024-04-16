function saveToken(token) {
    localStorage.setItem("jwtToken", token);
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you would make a request to your JWT API to authenticate the user
    // For demonstration purposes, let's assume we're using fetch API
    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (response.ok) {
            // Save the JWT token to local storage
            response.json().then(data => {
                console.log(data);
                const token = data.accessToken;
                console.log(token);
                if (token) {
                    saveToken(token);
                    // Redirect to another page or perform other actions
                    if (username === 'shivam') {
                        window.location.href = "./users.html";
                    }else{
                        window.location.href = "./expenses.html";
                    }
                    
                } else {
                    console.error("Token not found in response data");
                }
            });
        } else {
            // If authentication fails, display an error message
            document.getElementById("message").innerText = "Invalid username or password.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("message").innerText = "An error occurred. Please try again later.";
    });
});
