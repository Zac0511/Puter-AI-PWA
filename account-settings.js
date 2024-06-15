window.onload = function() {
    var userInfoDiv = document.getElementById("user-info");
    var loginButton = document.getElementById("login-button");
    var logoffButton = document.getElementById("logoff-button");

    // Mise à jour du contenu des boutons et du texte d'informations
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
            // Gérer l'erreur en affichant un message approprié
            loginButton.disabled = false;
            logoffButton.disabled = true;
            userInfoDiv.innerHTML = "Not signed in a Puter account";
        });
    }

    // Appel de la fonction pour mettre à jour les informations utilisateur au chargement de la page
    updateUserInfo();

    // Ajout d'un écouteur d'événement pour les boutons de connexion et de déconnexion
    loginButton.addEventListener("click", function() {
        puter.auth.signIn().then(updateUserInfo);
    });

    logoffButton.addEventListener("click", function() {
        if (puter.auth.signOut && typeof puter.auth.signOut === 'function') {
            puter.auth.signOut();
            window.location.href = 'settings.html'; // Redirige vers la page settings.html
        } else {
            console.error("La méthode puter.auth.signOut n'est pas définie ou n'est pas une fonction.");
        }
    });
    
};
