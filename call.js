
var users = [];

function get_users() {
    var user_list = [];

    var matricule = "toto";
    var nom = "cameroun";

    users.push(nom);
   
    var user_list = document.getElementById('user_list');
    for (var i = 0; i < users.length; i++) {
        var option = document.createElement('option');
        option.value = users[i];
        user_list.appendChild(option);
       
    } 
    return false;
}



