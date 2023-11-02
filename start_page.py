import os
import webbrowser
import http.server
import subprocess

# Répertoire contenant le fichier HTML
#directory = '/home/lambo-ubuntu/WEB_PROJECT'
directory = '/home/lambo-ubuntu/WEB_PROJECT/'

# Port sur lequel le serveur web écoutera
port = 8888
os.chdir(directory)

# Lance un serveur web local
httpd = http.server.HTTPServer(('0.0.0.0', port), http.server.SimpleHTTPRequestHandler)

# Ouvrir le navigateur par défaut pour afficher une page spécifique
# webbrowser.open(f'http://localhost:{port}/form_create_user.html')

url = f'http://localhost:{port}/index.html'

subprocess.Popen(['xdg-open', url])  # Pour Linux
# Lance le serveur
httpd.serve_forever()
# Taches prochaines
"""
 - Dispatcher les pages html
 - Gérer le problème de port et les pages qui ne s'affichent pas
 - Pour identifier sur quel processus tourne l'app :  lsof -i :8888
 - kill -9 <pid> 
"""