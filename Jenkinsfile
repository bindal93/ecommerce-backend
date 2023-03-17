pipeline {
  agent any
  environment {
    clusterName='cluster-1'
    gcloudProject='long-way-379611'
    zone='us-central1-c'
    CLOUDSDK_CORE_PROJECT='long-way-379611'
    GCLOUD_CREDS=credentials('gcloud-creds')
    dockerUsr='nagpshivam'
    dockerPwd='dckr_pat_SHIZiJ3k32kWGJVyTN87s8Basmc'
  }
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nagpshivam/ecom-backend:latest .'
        sh 'docker login -u ${dockerUsr} -p ${dockerPwd}'
        sh 'docker push nagpshivam/ecom-backend:latest'
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        sh 'gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"'
        sh "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${gcloudProject}"
        sh 'kubectl delete -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/deployment.yaml --force --grace-period=0'
      }
    }
  }
}
