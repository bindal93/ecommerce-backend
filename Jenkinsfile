pipeline {
  agent any
  environment {
    appName='nagp-shivam-backend'
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
    zone='us-central1-c'
    DOCKERHUB_CREDENTIALS=credentials('dockerPwd')
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
        sh 'docker build -t nagpshivam/ecom-backend:latest .'
        // sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW'
        sh 'docker login -u nagpshivam -p dckr_pat_SHIZiJ3k32kWGJVyTN87s8Basmc'
        sh 'docker push nagpshivam/ecom-backend:latest'
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        //sh 'gcloud auth login --no-launch-browser'
        sh 'gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"'
        sh 'gcloud compute zones list'
        sh "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}
