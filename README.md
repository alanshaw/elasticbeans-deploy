# elasticbeans-deploy

* Create an elasticbeanstalk Node.js app
* Get the name of the S3 bucket it creates
* Create a `.travis.yml` add the following:

```
language: node_js

node_js:
  - '4'

```

* Run `travis setup elasticbeanstalk`

```sh
$ travis setup elasticbeanstalk
Access key ID: AKIAIYE5GN7RNPZSZELA
Secret access key: ****************************************
Elastic Beanstalk region: |us-east-1| eu-west-1
Elastic Beanstalk application name: Default-Environment
Elastic Beanstalk environment to update: e-egar7awqmx
Encrypt secret access key? |yes|
Deploy only from alanshaw/elasticbeans-deploy? |yes|
```

* Put the S3 bucket name in the deploy config `bucket_name: elasticbeanstalk-eu-west-1-431258931377`

* Done?
