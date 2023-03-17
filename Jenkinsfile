pipeline {
  agent any
  environment {
    appName='nagp-shivam-backend'
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
    zone='us-central1-c'
    dockerPwd=credentials('dockerPwd')
    KUBECONFIG = "/home/shivamchatgpt/.kube/config"
  }
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
        // sh 'docker build -t nagpshivam/ecom-backend:latest .'
        // withCredentials([string(credentialsId: 'dockerPwd', variable: 'dockerhubpwd')]) {
        //  sh 'docker login -u nagpshivam -p ${dockerhubpwd}'
        // }
        // sh 'sudo docker push nagpshivam/ecom-backend:latest'
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        //sh 'gcloud auth login --no-launch-browser'
        //sh "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        sh 'sudo kubectl --kubeconfig=${KUBECONFIG} apply -f k8s/deployment.yaml'
      }
    }
  }
}
