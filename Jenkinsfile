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
          sh label: '', script: 'echo "hello"'
          // sh label: '', script: 'docker build -t nguyentan15102000/docker-jenkens .'
          sh label: '', script: 'curl -fsSLO https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz && tar xzvf docker-${DOCKERVERSION}.tgz --strip 1 -C /usr/local/bin docker/docker && rm docker-${DOCKERVERSION}.tgz'
        // }
      }
    }
  }
}