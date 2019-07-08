---
path: "/docs/apps/ask-question-quote"
updated: "2019-06-20"
title: "Ask quote"
description: "Know how to allow customers to request a quote, by emailing their desired products."
author: "Sowbagya lakshmi"
category: "apps"
---
# Ask question / quote
This app allows customer to enquire a product or to ask quote for a product through mail. Using this app itself you can use your store as catalog mode since this app has an option to hide the add to cart button. Clicking on single button will enable the communication between store owner and customer.

**Requirements**

- PHP 5.4 or higher
- Joomla 3.3 or above
- J2Store 3.2.x or above

Site in catalog mode:

NOTE: **If you are having the shop in catalog mode, the ask quote button wouldn't come up on the storefront.

Alternatively, you could turn off the catalog mode and hide the add to cart buttons in the site using the** ****Hide add to cart button for all products? **in the basic settings of the Ask quote plugin.**

**Installation**

1. Use the Joomla installer to install the app.
2. In the backend, go to J2Store Dashboard -> Apps as shown in the image below.
3. Click Enable in the Ask question / quote app.

![Ask quote](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-dashboard.png)


4\. Once the app is enabled, open the app to configure the settings.

**Basic Settings**

- **Enable Ask quote button for all products**

Select YES or NO to enable and disable the Ask quote button for all products.

- **Hide add to cart button for all products**

Select YES or NO to hide the Add to cart button.

- **Hide Zero Price Cart Button: **

Select yes or no to hide the cart if the the price of the product in the cart is zero

- **Display form style: **

Select the view of the Ask Quote form.

POP-UP: Select this to display the ask quote form in a separate pop-up window.

Accordion: Select this to display the ask quote form in an accordian view

- **Display position **

Choose whether you wish to have the add to quote form before or after the cart.

- **Display button / link in**

Select the location (Product view, category view, Both views) where the Ask Quote button should be displayed.

- **Display button/link**

Selecting display type here will make the text to be displayed in button / link.

![Ask quote settings](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-settings.png)

   - **Display text for button/link**

Change the button text / link text by entering custom text here.Use the language constant PLG_J2STORE_PRODUCTQUOTE_LINK_TEXT to translate the text when you are using multilingual site.

**Email Configuration
**
    - **Include label for custom fields : **

Enter the label of  custom field which you wish include the email 

    - **Email Body**

Enter the body of the email here. You can use the below shortcodes in the text editor:

[SITENAME]<br>
[FIRST_NAME]<br>
[LAST_NAME]<br>
[PHONE_1]<br>
[PHONE_2]<br>
[EMAIL]<br>
[COMPANY]<br>
[TAX_NUMBER]<br>
[ADDRESS_1]<br>
[ADDRESS_2]<br>
[CITY]<br>
[ZIP]<br> 
[COUNTRY_NAME]<br>
[ZONE_NAME]<br>
[PRODUCT_NAME]<br>
[PRODUCT_SKU]<br> 
[PRODUCT_PRICE]<br>


To display the custom field information enterd by the user when filling form in an email the customer and admin receive, it is possible by adding the shortcode of respective custom field in the Email body editor. For example, if you are having text area as a custom field in your product quote form, then copy the field name(you can get it in custom field section J2Store > Setup > Custom fields) and paste it in Email body editor. The custom field shortcode should be enclosed with square braces. For example, [message].

**Email Subject:**

Enter the subject of the email here.

 Refer the image below,

![Ask quote email config](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-email-config.png)

**Layout**

If you would like to add / remove the fields in product quote form without affecting checkout form fields, it is possible in this section.

In this section, you can create the custom form by adding field shortcode given in the top of the layout tab page and display that field in the form.

To add any new fields, go to J2Store > Setup > Custom fields. Click NEW to create new field.

Here is how you could create a new cuso

Now, in form layout add the shortcodes of fields you want to display in product quote form.

To add the custom field shortcode, copy the field name in J2Store > Setup > Custom fields section and paste it in the form. The field name should be enclosed with square braces. For example, [message].

![Ask quote custom field](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-custom-field.png)
![Ask quote custom field list](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-cust-fiel-list.png)
![Layout of the fields](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-layout.png)

Enable quote for per product

1. This app allows you to enable Ask quote button for specific product.
2. Go to Article manager and open the article.
3. Under the J2Store cart tab, navigate to the Apps menu.
4. Enable the Ask quote button by setting YES to Enable ask question / quote. Refer the image below.

**Frontend**

**SINGLE PRODUCT**

![Ask quote frontend](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-frontend.png)
![Ask quote enabled on all products](https://raw.githubusercontent.com/j2store/doc-images/master/apps/ask-quote/ask-quote-all-pro-front.png)
**Support**

Still have questions? You can post your questions in our support forum: [http://j2store.org/forum/index.html](<http://j2store.org/forum/index.html>)




