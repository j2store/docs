---
path: "/docs/integrations/rs-events-pro-for-j2store"
updated: "2019-06-24"
title: "RS-events-pro-for-j2store"
description: ""
author: "Kiruthigha"
category: "Integartions"
---

This plugin integrates RS Events PRO with J2Store. With this plugin, you can treat your events as products.

**Requirements**

* PHP 5.3 or higher
* Joomla 3.x
* J2Store 3 or above
* RS Events PRO (Component, Modules, Plugins)

**Installation**

1. Download the RS Events PRO from Joomla extension directory http://extensions.joomla.org/extension/rsevents-pro
2. Extract the downloaded package RSEventsPro[UNZIPME_1ST].zip
3. Open the component folder inside the extracted package. Inside the component folder, you can see the com_rseventspro_2.5-3.x-v1.9.25.zip.
4. Install the above mentioned package using joomla installer.
5. Once installed the RS Events PRO component, download and install J2Store RS Events Pro integration.
6. After installing the J2Store RS Events Pro integration, Go to Extenisons > Plugins. Choose the search type system and enable the J2Store RSEvents plugin.
![rs1](../../images/integrations/RSevents/rs_01.png)

**Backend (Creating Events)**

Go to Components > RSEvents PRO > Dashboard

![RS02](../../images/integrations/RSevents/rs_02.png)

Before start creating Events, you must have to save the location and category.
To create the Location, select Location in the dashboard.


![rs03](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_03.png)
Click NEW on top left
Status should be set to Published. Enter the name, address and save the location. Refer the below screen


![rs04](../../images/integrations/RSevents/rs_04.png)
![rs05](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_05.png)
![rs06](../../images/integrations/RSevents/rs_06.png)
Now select categories from left pane and click NEW to create new category.
![rs07](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_07.png)
Enter the name for the category and set the status to Published and save.
![rs08](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_08.png)
Now select Events from the left pane and click NEW to create new event.

![rs09](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_09.png)

Fill all the informations required for your event and navigate to the J2Store tab in left menu pane.
![rs10](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_10.png)
Choose YES to treat Event as Product and select the product type and save.


![rs11](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_11.png)
Once saved, now you can able to set product price, images, options, etc.

![rs12](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_12.png)
**Frontend**

It is very simple to show your evens in frontend.

Go to Menu manager and add a new menu item with menu type as RSEvents PRO > Events.

![rs13](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_13.png)
Now go to your site frontend and check the menu you have created

![rs14](/home/flycart/Desktop/j2dc/content/images/integrations/RSevents/rs_14.png)
