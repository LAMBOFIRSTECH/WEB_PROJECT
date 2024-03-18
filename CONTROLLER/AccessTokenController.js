// import { get,post } from 'http';
import config, { accessToken } from '../config.mjs';
import fetch from 'node-fetch'


const email = 'toto@gmail.com'; // Adresse e-mail à envoyer dans la requête

// URL de l'API avec le paramètre email dans l'URL
var base_url=config.baseUrl + accessToken.getAccessToken(email)

// Options de la requête
const options = {
  method: 'POST', // Méthode HTTP POST
  headers: {
    'Content-Type': 'text/plain' // Type de contenu text/plain
  }
};

// Envoi de la requête POST
fetch(base_url, options)
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


