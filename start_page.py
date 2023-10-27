import os
import webbrowser
import http.server

# Répertoire contenant le fichier HTML
#directory = '/home/lambo-ubuntu/WEB_PROJECT'
directory = '/home/lambo-ubuntu/WEB_PROJECT/CREATE_FORM/'

# Port sur lequel le serveur web écoutera
port = 7500

os.chdir(directory)

# Lance un serveur web local
httpd = http.server.HTTPServer(('0.0.0.0', port), http.server.SimpleHTTPRequestHandler)

# Ouvrir le navigateur par défaut pour afficher une page spécifique
webbrowser.open(f'http://localhost:{port}/form_create_user.html')

# Lance le serveur
httpd.serve_forever()
# Taches prochaines
"""
 - Dispatcher les pages html
 - Gérer le problème de port et les pages qui ne s'affichent pas
"""