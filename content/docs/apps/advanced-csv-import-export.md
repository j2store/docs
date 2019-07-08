---
path: "/docs/apps/advanced-csv-import-export"
updated: "2019-06-20"
title: "Advanced CSV import/export tool"
description: "Learn how to carry out mass changes in your products by exporting them into a CSV file."
author: "Sowbagya lakshmi"
category: "apps"
---
# Advanced CSV Import / Export

The app comes with advanced features which allows you to import / export products and options and as well as categories into J2Store. You can import product data including options,variants,advance price etc. You can also export the products / options / categories and see the fields that are supported by the app.

Export your data in following three file formats (**.csv, .xls, .xlsx**). However, you should use only **.csv** file format for **importing**.

**Error reporting must be disable. Goto system -> Global configuration -> server-> Error Reporing set to "None"**

Import file format must be .csv format

Set Batch limit in setting page.

When you import products, you must import the options and variants too. Otherwise, the app will not work properly.

**Requirements**

- PHP version 5.4 or higher
- Joomla 3.x or higher
- J2Store 3.2.15 or higher

#### Installation

1. Download the app from our site's extensions section and install it using Joomla installer.
2. In Joomla backend, go to J2Store > Dashboard > Apps and click Enable on Import J2Store Products.
3. After enabling, click Open to import / export the products.

#### How to import new options ?

Open Import J2Store Products app. You can see the active and opened tab named "Options".

Use this tab to update existing options and import new option to **J2Store > Catelog > Options**. Below step by step instructions help you to import new options.

1. Click on Export button to export the options from J2Store > Catalog > Options. Exported file contains following 5 columns :option\_unique\_name - The unique name of your new option should be entered here.option\_name - This is the place to add option name (Display / Presentation)type - Enter the type of option here (for example: select, radio, etc)ordering - You can leave this column by entering 0.option values - The structure of optionvalues field must be optionvalue\_name:optionvalue\_image:ordering, you can add multiple option value using pipe(\|) symbols.For example : Red::0\|Yellow::0
2. Save the .csv file.
3. Now go inside the Options tab and choose the file, set the delimiter, set character encoding and click Import button.
![export-import](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-opt-export.png)
![Option file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-option-file.png)
![Confirmation during import](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-option-import-confirmation.png)
#### How to import category ?

1. Click on Export button to export the categories from Content > Categories in .csv format or .xls format or .xlsx format.
2. In the categories exported file, the following columns should be filled when importing new category.Id - This is the category id. You can leave this column empty when you add new category via csv file. After importing, the category id will be updated.Parent\_id - This is the place to choose category level. Enter 1 to create a category at root.Title - Enter the name of the category hereAlias - Enter the alias name of the categoryPublished - Enter 1 to set the status of the category to Published. Otherwise it will be unpublished after importing.Access - Enter the Access level ID hereLanguage - Choose your language here. Enter '\*' for all langauge
3. Save the .csv file. Now go inside the app > Category tab and choose the file / set the delimiter / set character encoding and click Next
4. Click Import button.
![Category exported file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-category-file.png)
![Adding file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-category-add-file.png)
![Import confirmation](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-category-import-confirmation.png)

#### How to import new Products?

Import / Update **Simple, Configurable, Downloadable** product types using this tab. Variable product type cannot be imported / updated here.

1. Before importing products by creating new csv file by your own, it is better to export the existing products and see how the file structure is. Click on Export button to export the products from J2Store > Catalog > Products in .csv format or .xsl format or .xlsx format.
2. When importing new products via csv, you need minimum visibility, product source, sku, price, title, catid, product\_type otherwise you can't create new products.j2store\_product\_id - For creating new product, you can leave this column empty. The product id will be updated automatically, after importing.product\_source - Choose your content source here. For example : com\_content, com\_k2.Visibility - This is place to enable visible in storefront. Enter 1 to make this product visible in store front.SKU - It is most required field. Without this the product cannot be imported or updated properly.Price - Enter the price of the product.Title - Enter the product title.Cat ID - Enter the ID of the category to which the product should be assigned.product type - It is one of most important required field. You must enter the type of product here. For example : simple, configurable, downloadable.
3. Save the .csv file. Now go inside the app > Products tab and choose the file / set the delimiter / set character encoding and click Next.
4. Click Import button.
![Product file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-product-file.png)
![Adding product file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-product-addfile.png)
![Product-confirmation while import](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-product-import-confirmation.png)

#### How to import product options ?

Updating and adding product options and product option values can be possible by using this tab.

1. Click on Export button to export the product options from J2Store > Catalog > Products in .csv format.
2. If you would like to add new option to any one of your products, you must set 1 to has\_options field when importing products using products csv file.
3. Now open the product\_options.csv file. When importing product options via csv, you should need atleast SKU, option\_unique\_name, product\_optionvalue.
4. When you enter product\_optionvalue field, keep in mind that field must be in following format

```
optionvalue_name:price prefix:price:weight prefix:weight:default value:ordering:productoption params<br>
```

1. You can add multiple product option value using pipe(\|) symbol Example: Black:+:2.00000000:+:0.00000000:0:0:{}\|Blue:+:3.00000000:+:0.00000000:0:0:{}
2. Save the .csv file. Now go inside the app > Products tab and choose the file / set the delimiter / set character encoding and click Next.
3. Click Import button.
![Product options file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-prodopt-file.png)
![Product file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-prodopt-addfile.png)
![Product options import](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-prodopt-import.png)

#### How to import downloadable product files ?

Do you have 100+ downloadable products and want to change downloadable files are all products ? It is very frustrating to open / edit each product for changing downloadable files right ? Don't worry about that. You can easily do this by our Advance CSV import / export app.

Open the app and move to Downloadable Product Files tab where you can export all your downloadable files in .csv format or .xls format or .xlsx format.

To update downloadable files or to import new downloadable files, you should know below three things

- SKU - SKU of the downloadable product
- Product file display name - Enter the name of the file
- File path - Enter the valid path of your file.
![Digital file](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-digital-file.png)

#### How to import variable product ?

Importing variable product possess three following steps:

1. Creating variable product
2. Importing variable product options
3. Variable variant (update only)

#### Creating variable product

1. Before importing variable products by creating your own csv file, it is better to export the existing variable products to see how the file structure is.
2. To import variable product, you don't need any variant related fields (sku, price,etc). The following are minimum required fields to create variable product.j2store\_product\_id - You can leave this column empty. The product id will be updated automatically, after importing.product\_source - Choose your content source here. For example : com\_content, com\_k2.has\_options - This should be set to 1.Visibility - This is place to enable visible in storefront. Enter 1 to make this product visible in store front.Title - Enter the product title.Cat ID - Enter the ID of the category to which the product should be assigned.
3. Save the .csv file. Now go inside the app > variable products tab and choose the file / set the delimiter / set character encoding and click Next.
4. Click Import button.

#### Importing variable product options

After creating variable product, you should add variants to the product. Use this tab to import options to the variable product.

1. Click on Export button to export the product options from J2Store > Catalog > Products in one of the following three formats (.csv, .xls, .xlsx)
2. If you would like to import / update product variants, open the csv file and enter the following required fields.Product Id - Enter the ID of the variable product to which the options should be added.option unique name - Enter the unique name of the option.product option value - Add the option value. The option value should be in below formatoptionvalue\_name:price\_prefix:price:weight\_prefix:weight:default\_value:ordering:productoption\_paramsFor example,L:+:0.00000000:+:0.00000000:0:0:{}\|M:+:0.00000000:+:0.00000000:0:0:{}\|S:+:0.00000000:+:0.00000000:0:0:{}
3. Save the .csv file. Now go inside the app > variable product options tab and choose the file / set the delimiter / set character encoding and click Next.
4. Click Import button.
5. After importing successfully, the regenerate button will be shown to generate variants for the options imported. See below image.
![Variable product options](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-add-variants-file.png)
![variants import](https://raw.githubusercontent.com/j2store/doc-images/master/apps/advanced-csv-import-export/csv-variants-import.png)
#### Variable variant

1. After generaing variants, use this tab to update SKU, price, stock, dimensions, image, etc for variants. New variant cannot be created here.
2. Click on export button to see the newly generated variants.
3. Once exported, open the exported file and change field values(sku, price, stock, shipping dimensions, etc)
4. Save the .csv file. Now go inside Variants tab and choose the file / set the delimiter / set character encoding and click Next.
5. Click Import button.

#### Advanced Price and Base price

If you would like to update product's base price and advanced price alone, you can do this in **Advanced price tab** (to update advanced price) and **Base price tab** (to update base price).

1. Move to respective tab. For example, if you wants to update advanced price, navigate to Advanced price tab
2. Click on Export button to export the price from your Products in .csv format.
3. If you would like to import / update pricing, open the csv file and change the field values. You should have the product sku to update / import price.
4. Save the .csv file. Now go inside the respective tab (for importing advance price, go to Advance price tab. For importing base price, go to Base price tab) and choose the file / set the delimiter / set character encoding and click Next.
5. Click Import button.









