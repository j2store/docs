---
path: "/docs/apps/vm-migration-app-for-j2store"
updated: "2019-06-26"
title: "VM Migration App for J2Store"
description: ""
author: "Kiruthigha"
category: "Apps"
---



This app imports store data from Virtuemart 2.x or 3.x to J2Store 3.x.

**Note:** This migration tool / app is in BETA stage and should only be used in TEST sites. It SHOULD NOT BE USED IN LIVE sites.

This app is compatible only with J2Store 3.x and Joomla 3.x.

If you run virtuemart in a Joomla 2.5 then you may copy all the virtuemart tables to a Joomla 3 test site, install J2Store 3.x and install this VM migration app and start the migration process.

## Requirements

- PHP 5.4 or higher
- Joomla 3.3 or above
- J2Store 3.1.10 or above



## Installation Instructions

1. Use the Joomla installer to install the app.
2. In the backend, go to J2Store Dashboard -> Apps as shown in the image below.
3. Click Enable in the Acymailing plugin. (type=j2store).
4. After the app is enabled, click on Open to set the configuration for the app.


## Parameters

The below image illustrates the settings of parameters:

![vm01](https://raw.githubusercontent.com/j2store/doc-images/master/apps/Vm migration app/app_vmmig_01.png)

**Language**: Select your primary language from the list. This language is selected from the current Joomla installtion. If you do not find your preferred language, then configure the language in the currenct site.

**Path to copy all the images:

The new path where the product and the category images should reside. The path should start with the 'images/'.The product images needs to be copied into the image\_path/products folder. Later during the migration process you will be prompted to do this yourself manually.

If you do not want the image path to be changed, then enter the default Virtuemart image path in this location.

**Select Table List:

The import tool automatically detects the possible virtuemart tables and lists in the dropdown.If you do not find any tables or entries in the dropdown, then you have not copied the virtuemart tables in the current database.

Copy the virtuemart tables to the current DB and then reload this script so it could list the available Virtuemart tables. Make sure you copy all the virtuemart tables. Missing some tables could break the migration in the middle.**



**Preferred Currency:**

Please make sure you select the setting 3 (table list) and save the changes. Then you could find a dropdown listing all the preferred currencies. Refer below screen,

![vm02](https://raw.githubusercontent.com/j2store/doc-images/master/apps/Vm migration app/app_vmmig_02.png)

**Terms and Conditions:

This plugin should not be used in live sites They must only be used in Test sites / staging sites / local copy. Even though, please make sure to take atleast an SQL backup before migration.

## Launch migration

Click the launch migration button to start the migration and follow the on screen instructions.

![vm03](/home/flycart/Desktop/j2dc/content/images/apps/Vm migration app/app_vmmig_03.png)
![vmm04](https://raw.githubusercontent.com/j2store/doc-images/master/apps/Vm migration app/app_vmmig_04.png)
