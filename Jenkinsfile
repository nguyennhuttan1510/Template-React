pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        withDockerRegistry(credentialsId: 'hub-docker', url: 'https://index.docker.io/') {
          sh 'docker build -t nguyentan15102000/docker-jenkins:v1 .'
        }
      }
    }
  }
}