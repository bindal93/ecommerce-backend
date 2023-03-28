##Node Ecommerce Backend Server
This project is a backend server built with Node and Express for an ecommerce website. The server allows you to create, read, update and delete products, users, and orders in the database.

##Getting Started

##Prerequisites
1.Node.js installed on your local machine.\
2.Elastic search set up and running on a VM with username and password saved.\
3.A GCP Kubernetes cluster with Ingress set up.\
4.A SSL certificate for the frontend domain name.\
5.A Firebase project set up for login and configuration updated in certificate.json.\
6.Jenkins server set up for deployment.\

##Installation
1.Clone the repository to your local machine.\
2.Install the required packages using the following command:\
###`npm install`
3.To run the development server on port 5000, use the following command:\
###`npm run dev`
4.To run the production server on port 5000, use the following command:\
###`npm run start`

##Elastic Search
1.Use the ingestion-script.js file to ingest the data into Elastic with the products index.\
2.Update the Elastic URL, username, and password in the ConfigMap.yaml and config.js files.\

##SSL Certificate
Create a SSL certificate with the frontend domain name using the following command:
csharp

###`openssl req -x509 -newkey rsa:2048 -nodes -out cert.pem -keyout key.pem -days 365`

##Deployment
1.Update the required parameters in the Jenkinsfile.\
2.Deploy the project via the Jenkins server.\
