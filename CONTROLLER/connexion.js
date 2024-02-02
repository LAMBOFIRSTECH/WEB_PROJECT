// Inclure le contenu de auth.js
const auth = require('./auth.mjs');

function authentification() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('mdp').value;
    var role = document.getElementById('role').value;
    var messageElement = document.getElementById('message');

    if (login === "" || password === "") {
        return false;
    }
    if (login === "admin" && password === "admin") {
        if (role === "ADMINISTRATEUR") {
            // Mettre en place un temps de chargement de page avec une librairie
            messageElement.textContent = "AUTHENTIFICATION ACCEPTEE :)";
            setTimeout(function () {
                messageElement.textContent = "";
                window.location.href = '../Menu.html';
            }, 10000);
            return true;
        } else if (role === "UTILISATEUR") {
            // On affiche une page contenant la liste des taches pour cette utilisateur
            alert('bien')
            return true;
        } else {
            messageElement.textContent = "Cette utilisateur est valide mais ne dispose pas du bon role !!";
            setTimeout(function () {
                messageElement.textContent = "";
            }, 10000);
            return false;
        }
    } else {
        messageElement.textContent = "Identifiant ou mot de passe incorrect !!";
        setTimeout(function () {
            messageElement.textContent = "";
        }, 10000);
        return false;
    }
    role = '';
}
document.addEventListener('DOMContentLoaded', function () {
    // Appeler authentification() lorsque le document est complètement chargé
    authentification();
});

