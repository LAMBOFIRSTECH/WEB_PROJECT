function succes_form() {

    // Si tous les champs sont correctement remplis, retardez l'appel à envoyer_formulaire()
    var messageElement = document.getElementById('message');
    messageElement.textContent = "Formulaire envoyé avec succès !!";
    setTimeout(function () {
        messageElement.textContent = "";

    }, 7000);
}

function envoyer_formulaire() {
    // Récupérez les valeurs des champs de texte
    var idTask = document.getElementById('id_task').value;
    var title = document.getElementById('title').value;
    var userTask = document.getElementById('user').value;
    var dateDebut = document.getElementById('dateDebut').value;
    var dateFin = document.getElementById('dateFin').value;

    // Effectuez la validation (par exemple, vérifiez si les champs ne sont pas vides)
    if (idTask === "" || title === "" || userTask === "" || dateDebut === "" || dateFin === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
    else if (dateDebut > dateFin) {
        alert("La date de debut de tache doit etre inférieure à la date de fin de tache.");

    } else {
        succes_form()

    }
    // Réinitialisation des champs 
    idTask = '';
    title = '';
    userTask = '';
    dateDebut = '';
    dateFin = '';
    return false;

}
var users = [];

function get_users() {
    var matricule = document.getElementById('id_user').value;
    var nom = document.getElementById('nom').value;

    if (matricule === "" || nom === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
    } else {
        users.push(nom);
        // succes_form();
        matricule = '';
        nom = '';
    }
    return true;
}

function update_user_list() {
    var user_list = document.getElementById('user_list');
    if (get_users() == true) {
        for (var i = 0; i < users.length; i++) {
            var option = document.createElement('option');
            option.value = users[i];
            user_list.appendChild(option);
        }
        document.addEventListener("DOMContentLoaded", function () {
            user_list; // Affichez la liste des utilisateurs au chargement de la page
        });
    }
}


/* 
- Ces utilisateurs doivent etre récupérer depuis un script python (plustard)$
- Les champs de textes ne sont tjrs pas supprimés après l'envoi d  u formulaire.
*/
