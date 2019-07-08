---
path: "/docs/catalog/customizing-the-subscription-mail-templates"
updated: "2019-07-05"
title: "Customizing the subscription mail templates"
description: "Customizing the subscription mail templates"
author: "Varsha"
category: "subscriptions and memberships"
---


The email templates for the Subscription app can be found at:

/plugins/j2store/app_subscriptionproduct/app_subscriptionproduct/mailtemplates

You can customize these templates by writing a template override.

Here are the instructions

Copy the following folder

```/plugins/j2store/app_subscriptionproduct/app_subscriptionproduct/mailtemplates```

\to

```/templates/<YOUR_TEMPLATE>/html/plugins/j2store/app_subscriptionproduct/mailtemplates```

Now you can edit the each template and add your own custom wordings and styles

Example:

Edit 

```/templates/<YOUR_TEMPLATE>/html/plugins/j2store/app_subscriptionproduct/mailtemplates/notify_expire.php```


Make the changes and save.




