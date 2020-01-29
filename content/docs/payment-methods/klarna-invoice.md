---
path: "/payment-methods/klarna-invoice"
updated: "2020-01-27"
title: "Klarna invoice"
description: "Learn how to set up Klarna invoice plugin in your site."
author: "Sowbagya lakshmi"
category: "payment methods"
---

This plugin integrates Klarna invoice with your store.

### Installation

* Download the payment plugin from our site and install it via Joomla installer
* After installing the plugin, go to J2Store > Setup > Payment methods and enable Klarna invoice.
* Once activated, the next step is to configure the settings.

### Parameters

![Parameters of Klarna](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/parameters-one.png)

**Payment  option title and image** - Mention the title of the plugin and set an image that should appear as the plugin image at checkout.
**Klarna account type** - Choose the account type from the two options available namely European Account and North American account.

#### Where to fetch the API keys?

To fetch the API keys from Klarna portal, follow the below steps:

##### Step-1: Login
- If you are from European countries, sign up/login to: <link-text url="https://eu.portal.klarna.com" target="_blank">Login</link-text>
- If you are from the United States, sign up/login to: <link-text url="https://us.portal.klarna.com" target="_blank">Login</link-text>

##### Step-2: Fetching API keys

- On your Klarna portal, click on the **Home button** at the top left corner.
- Click on the **Settings** menu on the left pane.
	![Settings](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/klarna-settings.png)
    
- Click on **API credentials option -> Generate new credentials** button.
![Generate new credentials](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/generate-new-credentials.png)
- On the resulting popup, click on **Create new credentials** button.

![Create credentials](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/create-credentials.png)

- The credentials would be generated. Click on the **Download as .txt** button to save the credentials on your computer since the password would be visible only once.

![Credentials-generated](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/credentials-generated.png)


>NOTE: The password generated would only be visible while you generate the credentials. Once the popup is closed, the password wouldn't be visible.
>So, save the credentials on your computer for reference.
 
 **Merchant ID and shared secret** -The keys fetched from the Klarna Portal have to be entered here. The username field value in Klarna portal is the Merchant ID and the password is to be entered as the Shared secret.
 
 **Test mode, Test Merchant Id and Test shared secret**- If you are using the payment gateway for test purposes, then the **Test mode** option should be enabled.
 The test API keys have to be entered on the Test Merchant ID and Test shared secret fields.
 To create a test account on Klarna, click <link-text url="https://developers.klarna.com/documentation/testing-environment/#developer-signup-test-credentials" target="_blank" rel="noopener">here</link-text>
 
 **Language**- Choose the Klarna language here. The language chosen here should be matched with the Local currency set up on the store. If not, there would be Locale errors at the checkout and users wouldn't be able to pay using Klarna.
 
 **Example:** If you are from Finland for example, the language chosen here should be Finland/Finnish. This should match the currency(Euro is the currency for Finland) set up on the store. 
  
 ##### Adding Klarna Widgets on storefront:
 
 **Klarna Widget URL** - You could now display Klarna payment options as widgets on storefront. To do so, you will have to add the Klarna widget URL in this option.
  
 ##### Fetching Klarna widget URL
  - On your Klarna portal, Go to Home menu->Tools->**On-site messaging**.
  ![On-site messages](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/klarna-settings.png)
  - Select the Merchant ID and click on **Continue** button.
 ![Merchant-ID](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/merchant_id.png)
 - On the **installation** tab, copy the URL in the **src** section of the field **Add code to your site** as indicated below:

![URL](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/widget-URL.png)
> NOTE: Only the URL should be copied without the script tag and double quotes.

- The copied URL should be entered on to the **Klarna widget URL** field of the Klarna plugin settings.

##### Displaying messages on the cart page and product page

**Show widget in cart ?** - Enable the option if you wish to show messages in widgets on the Cart page as well.
**Cart placement ID** - To display the messages in the cart page, you will have to enter a placement ID. This ID can be fetched from the Klarna Portal.

![Parameters on Klarna](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/parameters-two.png)

##### Fetching cart placement ID and product placement ID

- On the On-site messaging menu, click on the **Placements** tab.
- Scroll down to the desired layout and copy the Data ID alone without the code or the Double quotes.

![Placement ID](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/placement-id.png)
- The copied Id should be entered as the cart placement ID.
> NOTE: Similar ID has to be fetched and added if you wish to display messages on the Product page as well.

- For the entered ID, the messages would show up on the storefront like this:

![Widget on store front](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/klarna-invoice/widget-frontend.png)
**Article id for thank you message**
You can create a Joomla Article to say thanks to the users, who purchased in your online store using the Klarna invoice payment. Enter the article ID here.

**Geozone**
By selecting a geozone here, you can restrict this payment method to only customers of that region. Choose All geozones to show this method to all customers.

**Display text on selection**
The text entered here will be displayed when customer selects this payment method. You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override.For example, enter a language constant:

J2STORE_TEXT_TO_DISPLAY_ON_SELECTION.

Now you can go to Joomla admin-> Language Manager->Overrides and create overrides for the language constant in all your languages.

**Display text before payment**
The text entered here will be displayed to the customer at the order summary screen before he makes the payment. You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display text on after payment**
The text entered here will be displayed when customer completes the payment.
You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display text on error in payment**
The text entered here will be displayed to the customer when there is an error in the payment process.
You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Payment button text**
Text entered here will be added as the name of the payment button.
You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override.

**Debug**
Choose YES to enable the debug mode. If you set this to yes, then debug messages will be logged and saved in the cache folder in your Joomla root directory. DO NOT select YES in the live site.