pipeline {
  agent any
  environment {
    appName='nagp-shivam-backend'
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
    zone='us-central1-c'
    dockerPwd=credentials('dockerPwd')
  }
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
        sh 'sudo docker build -t nagpshivam/ecom-backend:latest .'
        sh "sudo docker login -u nagpshivam -p ${dockerPwd}"
        sh 'sudo docker push nagpshivam/ecom-backend:latest'
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        sh 'gcloud auth login --no-launch-browser'
        sh "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}
