pipeline {
  agent any
  environment {
    appName='nagp-shivam-backend'
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
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
        // 'gcloud auth login'
        // "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        kubectl apply -f k8s/deployment.yaml
      }
    }
  }
}
