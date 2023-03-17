pipeline {
  agent any
  environment {
    appName='nagp-shivam-backend'
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
    zone='us-central1-c'
    dockerPwd=credentials('dockerPwd')
    KUBECONFIG = "/home/shivamchatgpt/.kube/config"
    CLOUDSDK_CORE_PROJECT='long-way-379611'
    GCLOUD_CREDS=credentials('gcloud-creds')
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
        sh 'gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"'
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}
