
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

    } else {
        // Si tous les champs sont correctement remplis, retardez l'appel à envoyer_formulaire()
        var messageElement = document.getElementById('message');
        messageElement.textContent = "Formulaire envoyé avec succès !!";
        setTimeout(function () {
            messageElement.textContent = "";
            
        }, 7000);
    }
    // Réinitialisation des champs (à s'assurer)
    document.getElementById('id_task').value = '';
    document.getElementById('title').value = '';
    document.getElementById('user').value = '';
    document.getElementById('dateDebut').value = '';
    document.getElementById('dateFin').value = '';
    return false;

}


function get_users() { 
    /* 
    - On recupère l'id de la datalist -> script HTML
    - On définie une liste de personnes -> script javascript
    - On boucle dessus et on affiche chaque élément de la liste dans la liste déroulante. De javascript à html
    - Ces utilisateurs doivent etre récupérer depuis un script python (plustard)
    */
}
