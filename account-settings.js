window.onload = function() {
    var userInfoDiv = document.getElementById("user-info");
    var loginButton = document.getElementById("login-button");
    var logoffButton = document.getElementById("logoff-button");

    // Updated button content and information text
    function updateUserInfo() {
        puter.auth.getUser().then(function(user) {
            if (puter.auth.isSignedIn()) {
                loginButton.disabled = true;
                logoffButton.disabled = false;
                userInfoDiv.innerHTML = "Currently signed as " + user.username;
            } else {
                loginButton.disabled = false;
                logoffButton.disabled = true;
                userInfoDiv.innerHTML = "Not signed in a Puter account";
            }
        }).catch(function(error) {
            // Handle the error by displaying an appropriate message
            loginButton.disabled = false;
            logoffButton.disabled = true;
            userInfoDiv.innerHTML = "Not signed in a Puter account";
        });
    }

    // Calling function to update user information on page load
    updateUserInfo();

    // Added event listener for login and logout buttons
    loginButton.addEventListener("click", function() {
        puter.auth.signIn().then(updateUserInfo);
    });

    logoffButton.addEventListener("click", function() {
        if (puter.auth.signOut && typeof puter.auth.signOut === 'function') {
            puter.auth.signOut();
            window.location.href = 'settings.html'; // Refreshes the page
        } else {
            console.error("The puter.auth.signOut method is not defined or is not a function.");
        }
    });
    
};
