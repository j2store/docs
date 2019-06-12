---
path: "/frequently-asked-questions/not-able-to-save-the-settings-in-any-app"
updated: "2019-06-11"
title: "Unable to save the settings in any app"
description: "Reasons on not being able to save the settings on any of the apps"
author: "Sowbagya lakshmi"
category: "Frequently asked questions"
---
# Not able to save the settings in any app

If you are not able to save the settings at the backend of the site, it might be because of the following reasons:

- Database type 
- Browser 

**Database type:**

Please make sure that you have set the Database type as MySQLi and not MySQL(PDO).

MySQLi is the supported database type.

You could check this under System->Global configuration->Server tab->Database type.

![Database type in Joomla configuration](../../images/frequently-asked-questions/not-able-to-save-settings/database-type.png)

**Browser type:**

Please make sure that the browser you are using is not Safari.

There is a joomla issue while trying to save settings with Safari.

There has been an issue in the core.js file of Joomla which causes this issue.

We have this issue raised in the Joomla forum and we are yet to receive a solution for this concern.

If issue prevails, you could reach us through the <link-text url="https://www.j2store.org/support/support-request-form.html" target="_blank" rel="noopener">support form</link-text> or <link-text url="https://www.j2store.org/my-account/priority-ticket-system.html" target="_blank" rel="noopener">ticket system </link-text>available for PRO users.
