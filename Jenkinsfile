pipeline {
  agent {
    docker { image 'node:16.13.1-alpine' }
  }
  stages {
    stage('Build image') {
      steps {
        // withDockerRegistry(credentialsId: 'hub-docker', url: 'https://index.docker.io/') {
          // sh '''
          //   docker login -u nguyentan15102000 -p 079200003738tan https://index.docker.io
            docker build -f Dockerfile -t docker-jenkens .
          //   docker push docker-jenkens
          // '''
          // sh label: '', script: 'git clone https://github.com/nguyennhuttan1510/Template-React.git'
          // sh label: '', script: 'docker build -t nguyentan15102000/docker-jenkens .'
        // }
      }
    }
  }
}