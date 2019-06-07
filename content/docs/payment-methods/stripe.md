---
path: "/payment-methods/stripe"
updated: "2019-06-06"
title: "Stripe"
description: "Learn how to set up Stripe payments in your site."
author: "Sowbagya lakshmi"
category: "payment methods"
---

# Stripe

This plugin integrates the Stripe Payment gateway with J2Store. It works and compatible with the latest Stripe API : 2014-01-31 (latest) 

***NOTE: If you are using Stripe's in built form, Please make sure that you have enabled SSL.
If not, this might cause issues in the Stripe's Javasript from loading on the site, thus blocking the checkout process.***

#### Installation

Use the Joomla extensions installer to install the plugin.

#### Plugin Configuration

Go to Joomla admin → Plugin Manager and open the Stripe plugin.
Or you could access the plugin through J2Store->Setup->Payment methods->Stripe.

The plugin has following options:

#### Payment option title

The value entered here will be used as the title for this payment method. Customer will see this value when he checks out.

#### Plugin Display Image

Image chosen here will be displayed when the payment options are listed in the checkout page

#### Surcharge percentage

Enter the percentage here. Surcharge will be calculated based on the percentage of total order and the cost will be added to the order.

#### Surcharge fixed value

Enter the fixed value here. The value entered will be added to the total order.

#### Force URL to use latest SSL/TLS version available in the server

Enabling this option will force the URL to use the latest SSl or TLS version when multiple versions are available in your server.

#### Credit card form display type :

By choosing  any of the listed option you select the payment form for stripe.
** Normal Form** -Displays the form in the payment select page

**Popup Form** - Displays the form in the confirm page

**Stripe Inbuilt form(supports SCA regulation of EU)** - This is the default stripe payment form and this is the most recommended(make sure SSL is enabled on your site).

#### Enable card holder name for stripe inbuilt form:

Setting this to yes will help to display a text box to enter the card holder name. 

#### Company or website name (Default store name will be taken) for Popup :

Enter company or website name. It will be displayed in the stripe pop up form page.

#### Payment Description for Popup form:

Description text enter will be displayed in the popup form.

#### Enable zip code in popup form ?

To display zip code in the pop-up form enable this option.

#### Live Secret API Key:

Enter your live stripe account's secret API key.

#### Live Publishable Key:

Enter your live stripe publishable key.

#### Charge mode:

Choose the required charge mood.

**SAFE** - captures the amount immediately.

**AUTHORIZE: **Charge issues an authorization and will need to be captured later.This has to be done manually.

#### Enable remember me feature:

If you wish to establish a remember me option then set this to yes. This will  ease the payment process for customer by saving their card details preventing them from entering again and again.

#### Send customer address to Stripe 

If you enable this the customer address will be sent to the stripe.

#### Send shipping address to Stripe 

If you enable this , the shipping address will be sent to the stripe.

#### Enable Bitcoin:

If you wish to allow the customer to send payment via bitcoin then set this to yes.

#### Use Stripe in Test mode:

If you wish to test the stripe payment plugin then you can set this option which will change the  stripe to test mode instead of live mode. 

#### Test Secret API Key:

Enter you test stripe account's secret API key.

#### Test Publishable Key:

Enter your test stripe account's publishable API key.

#### Article ID for Thanks Msg:

You can create an article with a thank you or instructions or information to the customer and enter its ID here. This will be displayed to the customer when he returns to the site after making payment.

#### Geozone:

You can restrict showing this payment method only to the customers who belong to the selected geozone. Choose All in order to display this payment option to all customers.

#### Display Text on Selection

The text entered here will be displayed when customer selects this payment method.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the tips below.

        Tip - ONLY FOR MULTI-LINGUAL SITES

        For example, enter a language constant:

        J2STORE_TEXT_TO_DISPLAY_ON_SELECTION

        Now you can go to Joomla admin-> Language Manager->Overrides and create overrides for the language constant in all your languages.

#### Display Text before Payment

The text entered here will be displayed to the customer at the order summary screen before he makes the payment.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

#### Display Text after Payment/Order

The text entered here will be displayed to the customer after he makes the payment.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

#### Display Text on Error in Payment

The text entered here will be displayed to the customer when there is an error in the payment process.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

#### Display Text on Cancel Payment

The text entered here will be displayed to the customer when he cancels the payment at the gateway (NOT in your site).

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

#### Payment Button Text

The text of the payment button. The button will be displayed at the final checkout step.

#### DEBUG :

This option is chosen in order to enable or disable the display of log file. This should be in disable for live sites.

#### SCA compliance:

To know more information about the SCA compliance, please click here
 
#### Support

Still have questions? You can post your questions in our support forum:http://j2store.org/forum/index.html