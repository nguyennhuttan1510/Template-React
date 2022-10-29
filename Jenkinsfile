pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        withDockerRegistry(credentialsId: 'hub-docker', url: 'https://index.docker.io/') {
          sh 'docker build -t docker-jenkins .'
        }
      }
    }
  }
}