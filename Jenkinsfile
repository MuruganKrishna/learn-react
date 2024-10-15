pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git branch: 'main', url: 'https://github.com/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                // Any commands that use the Git repository
                sh 'git status'
            }
        }
    }
}
