pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Étape pour récupérer le code depuis le référentiel Git
                // A voir tout ça 
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Étape pour compiler le code (remplacez cette section par votre propre logique de build)
                sh 'ls /var/lib/jenkins/'
            }
        }

        stage('Test') {
            steps {
                // Étape pour exécuter les tests (remplacez cette section par votre propre logique de test)
                sh 'mkdir FRUITS'
            }
        }

        stage('Deploy') {
            steps {
                // Étape pour déployer l'application (remplacez cette section par votre propre logique de déploiement)
                sh 'touch BANANE'
            }
        }
    }

    post {
        // Actions à effectuer après l'exécution du pipeline
        success {
            echo 'Le pipeline s\'est exécuté avec succès!'

            // Ajoutez ici des actions supplémentaires à effectuer en cas de succès
        }

        failure {
            echo 'Le pipeline a échoué!'

            // Ajoutez ici des actions supplémentaires à effectuer en cas d'échec
        }
    }
