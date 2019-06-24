---
path: "/docs/apps/amazon-s3"
updated: "2019-06-21"
title: Amazon S3"
description: "Sell your digital files in a secure way using Amazon s3. Learn how to configure amazon s3."
author: "Sowbagya lakshmi"
category: "apps"
---
# Amazon S3

Sell your files stored in Amazon S3 drive with J2Store Joomla eCommerce platform. The app enables you to connect your Amazon S3 bucket and sell the files securely.

Never worry about your files being shared in the vastness of Internet. The app generates a temproary url which will expire within minutes (you can control its expiry from the app settings), thus effectively preventing direct access to your files. The download url is also well masked. The app is suitable for those selling PDFs, Images, Audio and Videos, Extensions, Apps and more.

**Key Features**

- Sell any file stored in Amazon S3
- Enables you to retrive the files from the Amazon S3 bucket remotely.
- Generates a temproary url for the downlodable files, which expires within minutes
- Allows you to control the expiry of the url from settings


**Requirements**

- PHP 5.4 or higher
- Joomla 3.3 or above
- J2Store 3.2.x or above

**Installation Instructions**

1. Use the Joomla installer to install the app.
2. In the backend, go to J2Store Dashboard -> Apps as shown in the image below.
![Enabling the plugin](../../images/apps/amazon-s3/amazons3_enable.png)

3\. Click Enable in the Amazon S3 app.

4\. Once the app is enabled, click on Open to set the configuration for the app.

**Parameters**

- API Access keyEnter the Access key ID provided by Amazon.
- Access secret keyEnter Access secret key provided by Amazon.Once you entered Access key ID and Access secret key, save it. You will get your bucket list.
![Amazon s3 settings](../../images/apps/amazon-s3/amazons3_settings.png)

#### How to find your AWS Access Key ID and Secret Access Key

- Login into your Amazon web services account.
- Open the IAM console and under Security and Identity.

![Iam console](../../images/apps/amazon-s3/amazons3_iam_console.png)

- In the navigation pane, choose Users.

![User](../../images/apps/amazon-s3/amazons3_user.png)

- Choose your IAM user name (not the check box).

![Users select](../../images/apps/amazon-s3/amazons3_userselect.png)

- Choose the Security Credentials tab and then choose Create Access Key.
![Create access key](../../images/apps/amazon-s3/amazons3_createkey.png)

- To see your access key, choose Show User Security Credentials.

![Access key](../../images/apps/amazon-s3/amazons3_showkey.png)

- Choose Download Credentials, and store the keys in a secure location.Your secret key will no longer be available through the AWS Management Console; you will have the only copy. Keep it confidential in order to protect your account, and never email it. Do not share it outside your organization, even if an inquiry appears to come from AWS or Amazon.com. No one who legitimately represents Amazon will ever ask you for your secret key.

<link-text url="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html" target="_blank" rel="noopener">Please refer here for generating API key and secret key</link-text>

- **Get Bucket name options:**

1. **Specify Bucket name - ** option allows you to enter the bucket name based on your desire.
3. **List bucket name option -** will display all the Bucket names in a list format and enables to choose one.
- **Amazon Bucket name -** Displays the specified or choosen bucket name .
- **Signature version** enables user to choose the Amazon web service version used by them. 
- **Region - **Select the current region specified in your zone else the products wont be displayed.
- **Expiry for temporary download URL-**Set the expiration time to download URL.

![Basic settings](../../images/apps/amazon-s3/amasons3-basic-settings.png)

#### How to sell the files using Amazon S3 ?

- Create a downloadable product and start selling. Create a J2Store product with product type as "Downloadable product". Configure all basic options such as price and navigate to the Files tab.

*Note :* Make sure you have set path to **Folder path for digital goods** in J2store configuration basic settings.
![Folder path](../../images/apps/amazon-s3/amazons3_download_folderpath.png)
![Product files](../../images/apps/amazon-s3/amazons3_setproductfiles.png)
![Adding File](../../images/apps/amazon-s3/amazons3_addfile.png)
![Choosing files](../../images/apps/amazon-s3/amazons3_choosefile.png)
![Create file](../../images/apps/amazon-s3/amazons3_createfile.png)

Save and close it.

**Video Tutorial**

[![Amazon s3](https://img.youtube.com/vi/51J1UkeRu3Y/0.jpg)](https://youtu.be/Rh7tUtI7eMI "Amazon s3")





