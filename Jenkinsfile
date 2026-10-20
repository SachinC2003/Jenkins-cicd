pipeline {
    agent any

    tools {
        nodejs 'NodeJS-LTS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests'){
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-node-api:latest .'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully! Version 2'
        }
        failure {
            echo 'CI pipeline failed.'
        }
    }
}