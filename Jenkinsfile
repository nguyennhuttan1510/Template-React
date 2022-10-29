pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        withDockerRegistry(credentialsId: 'hub-docker', url: 'https://index.docker.io/v1/') {
          sh '''
            docker build -f Dockerfile -t docker-jenkens .
            docker push docker-jenkens
          '''
        }
      }
    }
  }
}