import os
import webbrowser
import http.server

# Répertoire contenant le fichier HTML
directory = '/home/lambo-ubuntu/WEB_PROJECT'

# Port sur lequel le serveur web écoutera
port = 2000

os.chdir(directory)

# Lance un serveur web local
httpd = http.server.HTTPServer(('0.0.0.0', port), http.server.SimpleHTTPRequestHandler)

# Ouvrir le navigateur par défaut pour afficher la page
webbrowser.open(f'http://localhost:{port}/page.html')

# Lance le serveur
httpd.serve_forever()

