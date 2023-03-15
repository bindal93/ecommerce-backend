pipeline {
  agent any
  environment {
    scannerHome = tool 'SonarQubeScanner'
    username='admin'
    appName='nagp-shivam-backend'
    sonarAppName='sonar-shivambindal'
    clusterName='nagp-shivam-backend'
    gcloudProject='My First Project'
    zone='us-central1-c'
  }
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        bat 'npm i'
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        // bat 'gcloud auth login'
        // bat "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        bat 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}