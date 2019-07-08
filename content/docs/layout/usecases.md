---
path: "/layout/usecases"
updated: "2019-06-27"
title: "Usecases"
description: "This is used for displaying filters in a tree structure"
author: "Varsha"
category: "Layout"
---

So, what are the uses of the new menu item Product tag view?Here is all what you can achieve with the tag layout of J2Store:

* Assign a product to multiple categories
* Display brand-wise products.

**Assigning a product to multiple categories:**
With the conventional list layout, it is possible to organize products based on their categories. However, there is one catch. It is not possible to assign a product to multiple categories.

Overcoming this, now we have the tag layout where it is possible for a product to be assigned to multiple categories.

**Steps to be followed:**
* Create tags that you wish to link with the product.
* Create a product and add the tags to the product.
* Create menus and link the tags with the respective menus.

**Scenario**
Products like Coffee mugs should be available under two categories- Kitchen appliances and Gifts.

**Steps to be done:**
* Create two tags: Gifts, Kitchen appliances.
* Create a product named coffee mugs.
* Assign both the tags to the product article.
* Create menu items of the type Product tag view: Kitchen appliances associating  the tag kitchen appliancesGifts associating the tag Gifts.
* Now the product coffee mugs will be available in both Kitchen appliances and Gifts.

Likewise, we can assign products to as many categories as we wish.

Relevant Screenshots:

![usecase1](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase1.png)
![usecase2](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase2.png)

![useacse3](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase3.png)
![usecase4](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase4.png)
The front end view is like this:

![usecase5](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase5.png)

![usecase6](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecase6.png)

**Displaying products brand-wise**
If you own a multi-brand store, then this feature might help you the most.You could display your products brand-wise. All you have to do is this:

* Create tags with the brand name.
* Create products and link them to their corresponding brands(tags).
* Create menu items of the type Tag view and associate the tags with them accordingly.


**Scenario**
Our goal is to list the shirts in the store according to their brand.We have following brands:

* Huetrap
* Roadster
* Adidas

**Steps to be done:**
* Create tags of the name Huetrap, Roadster and Adidas.
* Create corresponding products and link them to the tag Huetap and repeat the similar process for other brands.
* Create menu items that associate with the brand tags respectively.

**Relevant Screenshots**

![producttag1](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo1.png)
![producttag2](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo2a.png)

![producttag3](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo2b.png)
![usecasetwo3](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo3.png)
![usecasetwo4](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo4.png)

![useacsetwo4a](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo4a.png)

![usecasetwo4b](https://raw.githubusercontent.com/j2store/doc-images/master/layout/usecases/producttagusecasetwo4b.png)

**Video tutorial:**
  
The following video illustrates how to display products brand-wise:  

[![Usecases](https://img.youtube.com/vi/51J1UkeRu3Y/0.jpg)](https://youtu.be/07tEdkEenSE "Usecases")
