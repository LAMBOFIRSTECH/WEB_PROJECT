function succes_form() {
    // Si tous les champs sont correctement remplis, retardez l'appel à envoyer_formulaire()
    var messageElement = document.getElementById('message');
    messageElement.textContent = "Formulaire envoyé avec succès !!";
    setTimeout(function () {
        messageElement.textContent = "";

    }, 10000);
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
var users = []
function get_users() {
    var matricule = document.getElementById('id_user').value;
    var nom = document.getElementById('nom').value;

    if (matricule === "" || nom === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
    } else {
        users.push(nom)
        nom = "";
        succes_form()
    }

}

document.addEventListener("DOMContentLoaded", function () {
    var user_list = document.getElementById('user_list');
    var a = ["popo", "titi", "tutu", "tata", "tete", "tyty"];
    a.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item;
        user_list.appendChild(option);
    });
});
/* 
- Ces utilisateurs doivent etre récupérer depuis un script python (plustard)
*/
