pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                // Example build commands
                sh 'echo "Building..."'
                // sh 'npm install && npm run build'
            }
        }
    }
}