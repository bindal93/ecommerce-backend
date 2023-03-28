Node Ecommerce Backend Server
This project is a backend server built with Node and Express for an ecommerce website. The server allows you to create, read, update and delete products, users, and orders in the database.

Getting Started

Prerequisites
Node.js installed on your local machine.
Elastic search set up and running on a VM with username and password saved.
A GCP Kubernetes cluster with Ingress set up.
A SSL certificate for the frontend domain name.
A Firebase project set up for login and configuration updated in certificate.json.
Jenkins server set up for deployment.

Installation
Clone the repository to your local machine.
Install the required packages using the following command:
npm install
To run the development server on port 5000, use the following command:
npm run dev
To run the production server on port 5000, use the following command:
npm run start

Elastic Search
Use the ingestion-script.js file to ingest the data into Elastic with the products index.
Update the Elastic URL, username, and password in the ConfigMap.yaml and config.js files.

SSL Certificate
Create a SSL certificate with the frontend domain name using the following command:
csharp

openssl req -x509 -newkey rsa:2048 -nodes -out cert.pem -keyout key.pem -days 365

Deployment
Update the required parameters in the Jenkinsfile.
Deploy the project via the Jenkins server.
