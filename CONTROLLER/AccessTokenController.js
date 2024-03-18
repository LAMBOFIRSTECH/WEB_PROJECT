// import { get,post } from 'http';
// import config, { accessToken } from '../config.mjs';
import fetch from 'node-fetch'

// var email="toto@gmail.com"
// var base_url=config.baseUrl + accessToken.getAccessToken(email)
// console.log(base_url)
// try {
//     const res = await post(base_url)
//     if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     var data = await res.text()
//     console.log(data)

// } catch
// (error) {
//     console.error('Error during fetch:', error.message);

// }
const email = 'toto@gmail.com'; // Adresse e-mail à envoyer dans la requête

// URL de l'API avec le paramètre email dans l'URL
const url = `http://lambo.lft:5163/api/v1.0/AccessToken/Login/?email=${encodeURIComponent(email)}`;

// Options de la requête
const options = {
  method: 'POST', // Méthode HTTP POST
  headers: {
    'Content-Type': 'text/plain' // Type de contenu text/plain
  }
};

// Envoi de la requête POST
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status);
    }
    return response.text(); // Extraire la réponse sous forme de texte
  })
  .then(data => {
    console.log('Token:', data); // Afficher la réponse en texte
  })
  .catch(error => {
    console.error('Erreur lors de la requête:', error); // Gérer les erreurs de la requête
  });


