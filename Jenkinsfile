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
            // docker build -f Dockerfile -t docker-jenkens .
          //   docker push docker-jenkens
          // '''
          // sh label: '', script: 'git clone https://github.com/nguyennhuttan1510/Template-React.git'
          // sh label: '', script: 'docker build -t nguyentan15102000/docker-jenkens .'
          sh label: '', script: 'curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz && tar xzvf docker-17.04.0-ce.tgz && mv docker/docker /usr/local/bin && rm -r docker docker-17.04.0-ce.tgz'
        // }
      }
    }
  }
}