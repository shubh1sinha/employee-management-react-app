pipeline {
	agent any
    stages {
        stage('Build on k8 ') {
            steps {           
                        sh 'pwd'
                        sh 'cp -R helm/* .'
		        sh 'ls -ltr'
                        sh 'pwd'
                        sh '/usr/local/bin/helm upgrade --install emp-app petclinic --set image.repository=registry.hub.docker.com/shubh1sinha/employee-management-app --set image.tag=1.0'
              			
            }           
        }
    }
}