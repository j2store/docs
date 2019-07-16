---
path: "/docs/integrations/tz-portfolio"
updated: "2019-06-24"
title: "TZ Portfolio"
description: ""
author: "Kiruthigha"
category: "Integrations"
---

Now J2Store integrates with TZ Portfolio Content Management System. Lets start creating portfolio as J2Store Products.

**Requirements**

* PHP 5.4 or higher
* Joomla 3.x
* J2Store 3 or above
* TZ Portfolio Plus (Components, modules, plugins)

**Installation**

1. Download the TZ Portfolio Plus from Joomla Extension Directory.
2. Install the downloaded TZ Portfolio package using Joomla Installer.
3. Once installed TZ Portfolio Plus, download and install the J2Store TZ Portfolio integration.
4. After installing J2Store TZ Portfolio integration,

* Go to Extensions > Plugins
* Choose the Search type Content
* Enable ContentTzPortfolio - J2Store plugin
![tz1](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_01.png)

**Backend (Creating Portfolio)**

Go to Components > TZ Portfolio

Select Field groups and click on NEW button to create new field group.

![tz2](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_02.png)

Enter the name, add the description and set the status to Published and save the Group Field.
![tz3](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_03.png)






Open the Group Field which has just been created and go to the tab Categories Assignment and assign the group field to the category.

![tz4](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_04.png)


If you assign the group field to the category, this group field will be applied to the articles belonging to that assigned category when you select "Inherit Category".

Now Select Articles and click on NEW button to create new articles.

* Enter the Article title
* Choose the category
* Set the status to Published
* In the article right menu pane, choose J2Store Cart.
* Select YES to Treat as a Product and choose the product type.
* save
![tz05](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_05.png)
![tz06](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_06.png)
![tz7](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_07.png)
![tz8](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_08.png)



Once Saved, now you can able to set product price, images, options,etc.

![tz09](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_09.png)


**Frontend**

It is very simple to show your portfolio artciles in the frontend.

Enter the menu title.

Go to Menu Manager and add a new menu item type with TZ Portfolio > Date Articles or TZ Portfolio > Portfolio.

![tz10](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_10.png)


Choose the category and set the status to Published and save.

![tz11](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_11.png)



Now go to the site and check the menu you have created.

![tz12](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/TZportfolio/tzportfolio_12.png)

