window.onload = function() {
    var userInfoDiv = document.getElementById("user-info");
    var loginButton = document.getElementById("login-button");
    var logoffButton = document.getElementById("logoff-button");
    var buttonContainer = document.querySelector(".button-container");
    var userInfo = document.querySelector(".user-info");

    // Check value for "puter.env" to remove login/logout buttons and display a message
    if (puter.env === "app") {
        buttonContainer.innerHTML = "PWA is running in a Puter app, cannot manage account settings";
        userInfo.remove();
        return;
    }

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
