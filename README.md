# elasticbeans-deploy

* Create an elasticbeanstalk Node.js app
* Get the name of the S3 bucket it creates
* Create IAM user and group
* Add the following inline DeployPolicy:

```
{
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "elasticbeanstalk:Check*",
                "elasticbeanstalk:Describe*",
                "elasticbeanstalk:List*",
                "elasticbeanstalk:RequestEnvironmentInfo",
                "elasticbeanstalk:RetrieveEnvironmentInfo",
                "ec2:Describe*",
                "elasticloadbalancing:Describe*",
                "autoscaling:Describe*",
                "cloudwatch:Describe*",
                "cloudwatch:List*",
                "cloudwatch:Get*",
                "s3:Get*",
                "s3:List*",
                "sns:Get*",
                "sns:List*",
                "cloudformation:Describe*",
                "cloudformation:Get*",
                "cloudformation:List*",
                "cloudformation:Validate*",
                "cloudformation:Estimate*",
                "rds:Describe*",
                "sqs:Get*",
                "sqs:List*"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::elasticbeanstalk-eu-west-1-431258931377",
                "arn:aws:s3:::elasticbeanstalk-eu-west-1-431258931377/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": "elasticbeanstalk:*",
            "Resource": "arn:aws:elasticbeanstalk:eu-west-1:431258931377:*"
        },
        {
            "Effect": "Allow",
            "Action": "elasticbeanstalk:UpdateEnvironment",
            "Resource": "arn:aws:elasticbeanstalk:eu-west-1:431258931377:environment/Default-Environment/My First Elastic Beanstalk Application"
        },
        {
            "Effect": "Allow",
            "Action": "cloudformation:*",
            "Resource": "arn:aws:cloudformation:eu-west-1:431258931377:*"
        },
        {
            "Effect": "Allow",
            "Action": "autoscaling:*",
            "Resource": "arn:aws:autoscaling:eu-west-1:431258931377:*"
        }
    ]
}
```

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
Elastic Beanstalk application name: My First Elastic Beanstalk Application
Elastic Beanstalk environment to update: Default-Environment
Encrypt secret access key? |yes|
Deploy only from alanshaw/elasticbeans-deploy? |yes|
```

* Put the S3 bucket name in the deploy config `bucket_name: elasticbeanstalk-eu-west-1-431258931377`

* Done?

---

* elasticbeanstalk:CreateApplicationVersion
* elasticbeanstalk:UpdateEnvironment
