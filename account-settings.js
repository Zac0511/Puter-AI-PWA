window.onload = function() {
    // Get references to the DOM elements
    var userInfoDiv = document.getElementById("user-info");
    var loginButton = document.getElementById("login-button");
    var logoffButton = document.getElementById("logoff-button");

    // Function to update the user interface based on the user's authentication state
    function updateUserInfo() {
        // Get the current user from the authentication system
        puter.auth.getUser().then(function(user) {
            // Check if the user is signed in
            if (puter.auth.isSignedIn()) {
                // If signed in, disable the login button, enable the logout button, and display the user's username
                loginButton.disabled = true;
                logoffButton.disabled = false;
                userInfoDiv.innerHTML = "Currently signed as " + user.username;
            } else {
                // If not signed in, enable the login button, disable the logout button, and display a "not signed in" message
                loginButton.disabled = false;
                logoffButton.disabled = true;
                userInfoDiv.innerHTML = "Not signed in a Puter account";
            }
        // Handle error when we are unable to get the user
        }).catch(function(error) {
            // Handle error by displaying a not signed message
            loginButton.disabled = false;
            logoffButton.disabled = true;
            userInfoDiv.innerHTML = "Not signed in a Puter account";
        });
    }

    // Call the function to update user information when the page loads
    updateUserInfo();

    // Add an event listener to the login button
    loginButton.addEventListener("click", function() {
        // When the login button is clicked, attempt to sign in the user
        // After successful sign in, update the user information
        puter.auth.signIn().then(updateUserInfo);
    });

    // Add an event listener to the logout button
    logoffButton.addEventListener("click", function() {
        // Check if the signOut method exists and is a function
        if (puter.auth.signOut && typeof puter.auth.signOut === 'function') {
            // If so, call the signOut method
            puter.auth.signOut().then(updateUserInfo);
        } else {
            console.error("The puter.auth.signOut method is not defined or is not a function.");
        }
    });
    
};
