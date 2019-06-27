---
path: "/payment-methods/mollie-payment-plugin"
updated: "2019-06-24"
title: "Mollie payment plugin"
description: "Learn how to set up Mollie payments in your site."
author: "Varsha"
category: "payment methods"
---
This plugin integrates mollie payment gateway with J2Store Joomla eCommerce solution.

Process secure iDEAL, credit card, bank transfer, SOFORT payments, paysafecard, Belfius Direct and other more payments with J2Store's Mollie payment plugin.

**Requirements**
1. PHP version 5.4 or higher
2. Joomla 3.x and above
3. J2Store 3.2.7 +

**Installation**
1. Download Mollie payment plugin package from our site's extensions section and install it using Joomla installer.
2. After installing plugin, go to J2Store > Setup > Payment methods and enable Mollie for J2Store.
3. Once enabled, open / edit the plugin and configure the basic settings of the app.

**Setup Mollie API key**
1. Log in to your Mollie account here <linl-text url =¨https://www.mollie.nl/¨ target = ¨_blank¨ rel = ¨noopener¨> click here </link-text>
2. After log in, click on "Settings" under your profile name on top right of the page.
3. In the resulting page, you will have to look at your website profile details or to create a new website profile if you don't have any existing web profiles. Click on Create new website profile.


![](../../images/payment-methods/mollie payment plugin/website-profiles.png)
4. If you are creating a new website profile enter your store's details including your website URL and company name and select your payments and click save.

5. Your website profile page has all the information needed to integrate your mollie account with J2Store's Mollie payment plugin. Copy your live or Test API key (depending on the environment you are using) and paste it in plugin's settings.

![api](../../images/payment-methods/mollie payment plugin/mollie-api.png)

**Webhook url **

In some cases, the J2Store sends request to Mollie with Webhook url which is not acceptable by Mollie API. In that case, you would not receive IPN notifications properly to your website and so the order status remains Incomplete even the payment is successful.

In this case, you could set the following webhook url in your Mollie account's backend that should solve the problem.


https://www.example.com/index.php?option=com_j2store&view=checkout&task=confirmPayment&orderpayment_type=payment_mollie&paction=process

**Configuration**
**Payment option title**

The text entered here will be displayed at checkout payment steps.

**Image or Logo**

The image added here will be displayed along with payment title. You could see this at checkout payment method step.

**API Key**

Find and enter the API key associated with your Mollie payment account and click save button to get the list of payment methods.

**Order**

This is the place to add a description. The description will appear on the bank / card statement of your customer. You may use a maximum of 29 characters. You can use the following tag to get the invoice number in the description [INVOICE]

**Mollie methods**

This will list all the available payment methods you have in your mollie dashboard.

**Article ID for Thanks Msg**

You can create a Joomla Article to say thanks to the users, who purchased in your online store. Enter the article ID here.

**Surcharge**

Do you want to apply a additional fee for choosing mollie as payment ? If yes, enter your fee in number in the text box provided.

**Percentage**

 If you would like to apply surcharge in percentage (for example, 5%), enter your charge(5) in this text box.

**Fixed value**

 If you would like to apply surcharge as fixed value (for examplem $5), enter your charge(5)in this text box.

**Display text on selection**

The text entered here will be displayed when customer selects this payment method. You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. For example, enter a language constant:

J2STORE_TEXT_TO_DISPLAY_ON_SELECTION.

Now you can go to Joomla admin-> Language Manager->Overrides and create overrides for the language constant in all your languages.

**Display text before payment**

The text entered here will be displayed to the customer at the order summary screen before he makes the payment. You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display text on after payment**

The text entered here will be displayed when customer completes the payment.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**On pending payment**

The text entered here will be displayed when customer completes the payment.

**Display text on error in payment**

The text entered here will be displayed to the customer when there is a technical error in the payment process. This error message would only come up when there are any errors due to API issues. 

**NOTE: **This error would not be displayed when the user reaches the payment gateway and returns to the merchant site without initiating the payment process.
 
You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Payment button text**

Text entered here will be added as the name of the payment button.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override.

**Debug**

Choose YES to enable the debug mode. If you set this to yes, then debug messages will be logged and saved in the cache folder in your Joomla root directory. DO NOT select YES in the live site.


![mollie settings](../../images/payment-methods/mollie payment plugin/mollie-settings.png)

**Frontend screen shots**

![](../../images/payment-methods/mollie payment plugin/frontend-mollie.png)


![](../../images/payment-methods/mollie payment plugin/mollie-order.png)

![](../../images/payment-methods/mollie payment plugin/mollie-payment.png)
