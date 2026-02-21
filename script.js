document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    alert(`Welcome ${username}! Your account has been created.`);
    console.log("Email:", email);
});
