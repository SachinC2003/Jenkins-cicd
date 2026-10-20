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