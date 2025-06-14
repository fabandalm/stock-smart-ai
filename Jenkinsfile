pipeline {
    agent any

    environment {
        REGISTRY_URL = 'docker.io'
        IMAGE_NAME = 'your-docker-username/stock-smart-backend'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        OPENSHIFT_PROJECT = 'stock-smart'
        DEPLOYMENT_NAME = 'stock-smart-backend'
        CDD_API_URL = 'https://cddirector.io/cdd'
        CDD_USERNAME = credentials('cdd-username')
        CDD_PASSWORD = credentials('cdd-password')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/fabandalm/stock-smart-ai.git'
                dir('backend') {
                    echo "Checked out to backend directory"
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                dir('backend') {
                    sh './gradlew test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('backend') {
                    sh "docker build -t ${REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh "docker push ${REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Create CDD Release') {
            steps {
                script {
                    def payload = """{
                      "application": "stock-smart-backend",
                      "release": {
                        "name": "Release ${env.BUILD_NUMBER}",
                        "description": "Automated release from Jenkins",
                        "status": "IN_PROGRESS"
                      }
                    }"""
                    sh """
                        curl -X POST "${CDD_API_URL}/api/v1/releases" \
                        -H "Content-Type: application/json" \
                        -u "${CDD_USERNAME}:${CDD_PASSWORD}" \
                        -d '${payload}'
                    """
                }
            }
        }
    }
}
