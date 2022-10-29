pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          // docker.withRegistry('https://index.docker.io/', 'docker') {
            docker.build('myapp').push('latest')
          // }  
        }
        
        // withDockerRegistry(credentialsId: 'hub-docker', url: 'https://index.docker.io/') {
          // sh '''
          //   docker login -u nguyentan15102000 -p 079200003738tan https://index.docker.io
            // docker build -f Dockerfile -t docker-jenkens .
          //   docker push docker-jenkens
          // '''
          // sh label: '', script: 'git clone https://github.com/nguyennhuttan1510/Template-React.git'
          // sh label: '', script: 'docker build -t nguyentan15102000/docker-jenkens .'
          // sh label: '', script: 'curl -fsSLO https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz && tar xzvf docker-18.03.1-ce.tgz --strip 1 -C /usr/local/bin docker/docker && rm docker-18.03.1-ce.tgz'
        // }
      }
    }
  }
}