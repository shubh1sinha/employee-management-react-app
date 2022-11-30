pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                bat "git clone https://github.com/shubh1sinha/employee-management-react-app.git"
            }
        }
        
         stage("docker-build"){
            steps{
            bat "docker build -t shubh1sinha/employee-management-react:1.0 ."
            }
        }

    }
 }