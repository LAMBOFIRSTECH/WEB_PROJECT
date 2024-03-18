import { getUsers } from './auth.mjs';

var users = []
var userss = []
var user_admin = ""
userss = await getUsers()

console.log(userss)
var find = false
var users = [
    { id: 1, nom: 'admin', pass: "admin", privilege: "ADMINISTRATEUR" },
    { id: 2, nom: 'artur', pass: "artur", privilege: "UTILISATEUR" }
];



function authentification() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('mdp').value;
    var role = document.getElementById('role').value;
    var messageElement = document.getElementById('message');

    if (login === "" || password === "") { 
        return false;
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].nom === login && users[i].pass === password) {
            user_admin = users[i];
            find = true;
            break;
        }
    }

    if (find) {
        if (role === user_admin.privilege && user_admin.privilege === "ADMINISTRATEUR") {
            // Mettre en place un temps de chargement de page avec une librairie
            messageElement.textContent = "AUTHENTIFICATION ACCEPTEE :)";
            setTimeout(function () {
                messageElement.textContent = "";
                window.location.href = '../Menu.html';
            }, 10000);
            return true;
        } else if (role === user_admin.privilege && user_admin.privilege === "UTILISATEUR") {
            // On affiche une page contenant la liste des taches pour cette utilisateur
            alert('bien')
            return true;
        } else {
            messageElement.textContent = "Cette utilisateur est valide mais ne dispose pas du bon role !!";
            setTimeout(function () {
                messageElement.textContent = "";
                window.location.href = '../Menu.html';
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

// document.addEventListener('DOMContentLoaded', function () {
//     // Appeler authentification() lorsque le document est complètement chargé
//     authentification();
// });

