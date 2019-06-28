---
path: "/docs/catalog/setting-up-tax-for-your-products"
updated: "2019-02-25"
title: "Setting up tax for your products"
description: "Know how to setup tax rates for your products"
author: "Sowbagya lakshmi"
category: "catalog"
---
# Setting up tax for your products

**Requirement for the tax to take effect:**
- Geozone has to be set up for which the tax has to apply.
- Tax rate has to be set up.
- Tax profile has to be created.
- Tax rate has to be associated with the tax profile.
- Tax profile has to be assigned to the products for which tax has to be levied.

**Instance: 

Tax geozone: USA

Tax rate: 10%

Tax profile name: US-TAX**

**Steps: **

- Navigate to J2Store->Localisation->Geozones and create a new geozone.

![Creating a new geozone](../../images/catalog/setting-up-tax-for-your-products/setting-tax-new-geozone.png)

- Type in a name for the geozone, add the countries for which the tax has to be applied.

1. Case A: Apply tax only for few zones within USA.

![Filling in details on the newly created geozone](../../images/catalog/setting-up-tax-for-your-products/setting-tax-geozone-details.png)
 2. Case B: Apply tax for all zones within USA. 

![Adding country](../../images/catalog/setting-up-tax-for-your-products/setting-tax-adding-country.png)
- Navigate to J2Store-> Localisation->Tax rates->Click new. 
![Adding a new tax rate](../../images/catalog/setting-up-tax-for-your-products/setting-tax-new-tax-rate.png)

-  Fill in the name, tax percentage, geozone and publish the tax rate.
![Filling in the tax details in a tax rate](../../images/catalog/setting-up-tax-for-your-products/setting-tax-rate-details.png)
- Navigate to J2Store->Localisation->Tax profile->New.
![Adding a new tax profile](../../images/catalog/setting-up-tax-for-your-products/setting-tax-adding-tax-profile.png)

Fill in the profile name, set the status and map the tax rate on the profile, choose the associated address.

![Adding details to tax profiles](../../images/catalog/setting-up-tax-for-your-products/setting-tax-tax-profile-details.png)
- Navigate to J2Store->Catalog->Products(Or Content->Articles).
![Navigate to Product manager](../../images/catalog/setting-up-tax-for-your-products/setting-tax-nav-to-pro.png)



- Edit the products for which you wish to collect tax. Navigate to the J2Store cart tab. Choose the tax profile and save.
![Setting tax profile in product](../../images/catalog/setting-up-tax-for-your-products/setting-tax-profile-in-pro.png)

- Frontend:
![Tax rate in frontend](../../images/catalog/setting-up-tax-for-your-products/setting-tax-front.png)
![Tax rate in cart page](../../images/catalog/setting-up-tax-for-your-products/setting-tax-in-cart-page.png)

Thus tax would be levied on the product as per the configuration. 

**Issues:**

Please refer the following list of troubleshooting steps:

**[http://docs.j2store.org/troubleshooting-guide/troubleshooting-tax-issues](<http://docs.j2store.org/troubleshooting-guide/troubleshooting-tax-issues>)






