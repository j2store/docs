---

path: "/docs/integrations/dj-catalog2"
updated: "2019-06-24"
title: "DJ catalog2"
description: ""
author: "Kiruthigha"
category: "DJ catalog2"

---

Introduction

This plugin integrates the popular joomla catalog extension DJ-Catalog2 with J2Store enabling users to create a powerfull and full fledged online store.

Requirements

* PHP 5.3 or higher
* Joomla v-3.x
* J2Store v-3.1.6 or above
* DJ-Catalog2 v-3.5.2
* J2StoreDJ-Catalog2 integration plugin

Installation

As shown in the image below, use joomla installer to install DJ-Catalog2:

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-menu-1.png)
1. Go to Extension Manager in control panel.

2. Select the plugin using the Choose File button and click Upload &Install

3. Go to Extensions -> Plugin Manager -> Filter : Select type "content" -> Select the Plugin J2Store - DJCatalog2 and enable the content plugin as shown in the image:


![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-enable2.png)

4. Hide the DJ Catalog's Add to quote button and Price. Price and cart will be displayed in J2Store cart section.


![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-install-hide-price-2.png)

Create a product

1. Go to Components -> DJ-Catalog2.

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-product-1.png)

2. From DJCatalog2 Control panel, Choose New Product icon.

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-product-1.png)
4. You can find J2Store Tab as shown in the image, indicating that J2Store is integrated with DJ-Catolog2.
![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-new-product-3.png)

6. Enter the required fields and click on the J2Store Tab, set Yes to Treat as a product option and click on Save.

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-new-product-4.png)

8. Now the product is created and will have the configuration options enabled. Enter the product details like, images, prices, options, filters, relations etc., and save the configuration.
![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-new-product-pricing-tab.png)


![product](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-new-product-5.png)
10. The product is created using DJ-Catalog2. To display the product in the frontend, a menu is to be created.
11. To create menu, follow the illustrative steps. Go to Menus -> Add New Menu Item, as shown below:
![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-menu-1.png)

13. Enter a name for the menu and click on the Select button to select the menu item type.

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-menu-2.png)

15. Click on DJ-Catalog2 and a list of options will be shown. From the list, select List of items. Now the menu item with details will look like the one below:

![](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-create-menu-3.png)

17. Save the menu item and go to site. You can see the menu item displayed below the Home menu item.

![djc-site](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-site.png)
19. Click on the DJ Catalog Products item. The products created using this extension will be displayed in the site, as shown below:

![product](https://raw.githubusercontent.com/j2store/doc-images/master/integrations/DJcatalog2/djc-site-with-product.png)
