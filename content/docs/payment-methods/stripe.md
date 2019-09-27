---
path: "/payment-methods/stripe"
updated: "2019-06-06"
title: "Stripe"
description: "Learn how to set up Stripe payments in your site."
author: "Sowbagya lakshmi"
category: "payment methods"
---

This plugin integrates the Stripe Payment gateway with J2Store. It works and compatible with the latest Stripe API : 2014-01-31 (latest) 

> NOTE: If you are using Stripe's in built form, Please make sure that you have enabled SSL.
> If not, this might cause issues in the Stripe's Javasript from loading on the site, thus blocking the checkout process.

With the purchase of Stripe integration, you would get access to two packages namely, **Stripe direct(The default checkout) and Stirpe checkout(Hosted).**

You could download both the packages from the My downloads section of the <link-text url="https://www.j2store.org/" target="_blank" rel="noopener">J2Store site.</link-text>

### Stripe direct Vs Stripe Hosted checkout

**Stripe direct**
This is the standard version of Stripe plugin that most of you might have used until now. This integration offers three modes:
 	    1. Normal form
 	    2. Pop-up form
 	    3. In-built form(Recommended)
 	   
 Among the above three modes, only the In-built form supports SCA regulations that are in effect since September, 2019. Following is a guide on how to install and configure the Stripe Direct payment plugin.

**Stripe Hosted checkout**

The Hosted checkout transactions would take place in the Stripe payment window. So, you need not worry about SCA compliance since the transactions are handled by Stripe itself. 
Hence this integration is ideal for Merchants who wish to support both Normal and 3-D secure card payments.

### Connecting Stripe direct with your store
You could configure the Stripe direct payments on your site by following the below steps:
1. Retrieving the API keys
2. Installation 
3. Connecting your store with Stripe

#### How to retrieve your Stripe API keys
To configure the Stripe Hosted checkout, you might want to retrieve the API keys(Both Test and Live keys).

Click <link-text url="https://stripe.com/docs/keys" target="_blank" rel="noopener">here</link-text> to know how to retrieve the API keys.

### Installation of Stripe Direct

Use the Joomla extensions installer to install the plugin.

**Payments supported by J2Store Stripe direct integration**
 
J2Store's Stripe integration supports the following types of payments:

*    Credit card payment
*    Cryptocurrency

**Payments not supported by Stripe direct:**

J2Store's Stripe integration doesn't support the following payments:

*     Paypal
*     SEPA
*     SOFORT

#### Connecting your store with Stripe

Go to Joomla admin → Plugin Manager and open the Stripe plugin.
Or you could access the plugin through J2Store->Setup->Payment methods->Stripe.

The plugin has following options:
![](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/stripe-direct-params.png)


**Payment option title**
The value entered here will be used as the title for this payment method. Customer will see this value when he checks out. If you have a multi-lingual site and wish to translate the title in other languages of your site, you could mention a custom language constant like **J2STORE_PAYMENT_METHOD_STRIPE_TITLE** and create a <link-text url="https://docs.j2store.org/translation/language-overrides-in-joomla-with-examples-using-j2store/" target="_blank" rel="noopener">language override</link-text> to translate it into the other languages.

**Plugin Display Image**
Image chosen here will be displayed when the payment options are listed in the checkout page

**Surcharge percentage**
Enter the percentage here. Surcharge will be calculated based on the percentage of total order and the cost will be added to the order.

**Surcharge fixed value**
Enter the fixed value here. The value entered will be added to the total order.

**Live Secret API Key:**
   Enter your live stripe account's secret API key.

**Live Publishable Key:**
   Enter your live stripe publishable key.
   
   **Use Stripe in Test mode:**
    If you wish to test the stripe payment plugin then you can set this option which will change the  stripe to test mode instead of live mode. 

**Test Secret API Key:**
   Enter you test stripe account's secret API key.

**Test Publishable Key:**
   Enter your test stripe account's publishable API key.

**Charge mode:**
   Choose the required charge mood.
1.    SAFE - captures the amount immediately.
2.    AUTHORIZE: Charge issues an authorization and will need to be captured later.This has to be done manually.
 
**Credit card form display type :**

By choosing  any of the listed option you select the payment form for stripe.

1.  Normal Form -Displays the form in the payment select page
2.  Popup Form - Displays the form in the confirm page
3.  Stripe Inbuilt form - This is the default stripe payment form and this is the most recommended(make sure SSL is enabled on your site).

**Disable Zip code in Stripe inbuilt form**
   If you set this to YES, a field would be displayed asking for the Zip code of the users while they fill in their card details at the checkout.
   This option is applicable only if you enable in-built form as the Credit card form display type.
   
 **Enable payment intent(SCA Complaints) in Inbuilt form ?**
    If you set this option to YES and the Credit card form display type to In-built form, then the in-built form would support SCA regulations and you could collect payments from 3-D secure cards.
   
 **Force URL to use latest SSL/TLS version available in the server**
     Enabling this option will force the URL to use the latest SSl or TLS version when multiple versions are available in your server.

**Enable card holder name for stripe inbuilt form:**
   Setting this to yes will help to display a text box to enter the card holder name. 

**Company or website name (Default store name will be taken) for Popup :**
    Enter company or website name. It will be displayed in the stripe pop up form page.

**Payment Description for Popup form:**
   Description text enter will be displayed in the popup form.

**Enable zip code in popup form ?**
    To display zip code in the pop-up form enable this option.
    
**Enable remember me feature:**
   If you wish to establish a remember me option then set this to yes. This will  ease the payment process for customer by saving their card details preventing them from entering again and again.
   
 **Send customer address to Stripe**
   If you enable this the customer address will be sent to the stripe.
   
  **Enable Bitcoin:**
   If you wish to allow the customer to send payment via bitcoin then set this to yes.

   **Article ID for Thanks Msg:**
   You can create an article with a thank you or instructions or information to the customer and enter its ID here. This will be displayed to the customer when he returns to the site after making payment.

**Geozone:**
    You can restrict showing this payment method only to the customers who belong to the selected geozone. Choose All in order to display this payment option to all customers.

**Display Text on Selection**
    The text entered here will be displayed when customer selects this payment method.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the tips below.

Tip - ONLY FOR MULTI-LINGUAL SITES

For example, enter a language constant:

J2STORE_TEXT_TO_DISPLAY_ON_SELECTION

Now you can go to Joomla admin-> Language Manager->Overrides and create overrides for the language constant in all your languages.

**Display Text before Payment**

The text entered here will be displayed to the customer at the order summary screen before he makes the payment.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display Text after Payment/Order**

The text entered here will be displayed to the customer after he makes the payment.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display Text on Error in Payment**

The text entered here will be displayed to the customer when there is an error in the payment process.

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Display Text on Cancel Payment**

The text entered here will be displayed to the customer when he cancels the payment at the gateway (NOT in your site).

You can enter a language constant as a value here if you are using a multi-lingual site and then write a language override. Refer the Display text on selection parameter.

**Payment Button Text**

The text of the payment button. The button will be displayed at the final checkout step.

**DEBUG :**

This option is chosen in order to enable or disable the display of log file. This should be in disable for live sites.

Thus, once you have mentioned the necessary details for the above parameters, you are ready to receive payments via Stripe on your store.


### Stripe checkout(Hosted)

As mentioned in the introduction, Stripe Checkout(Hosted) is compliant to SCA by default since the transactions are handled by Stripe itself.
Also, you need not worry about the payment method layout being responsive since users would be redirected to Stripe for the transactions.

### Configuring the Stripe Hosted checkout in your site

You could configure the Stripe Hosted payments on your site by following the below steps:
1. Retrieving the API keys
2. Installation 
3. Connecting your store with Stripe

#### Retrieving the API keys

The same keys used for Stripe direct can also be used to connect your store to Stripe hosted checkout as well.

#### Installation 
Use the Joomla extensions installer to install the plugin. 
Post installation, navigate to J2Store->Setup->Payment methods-> Enable the Stripe checkout plugin and edit the plugin to connect it with Stripe.

![Enable stripe checkout](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/stripe-hosted-enable.png)

#### Connecting your store with Stripe Checkout

Once the API keys are retrieved, and the plugin is installed, the next step is to connect the store with your Stripe account.

Stripe Hosted checkout uses almost the same parameters as the Stripe direct payment method described above, except for the **Create/Update Webhook** parameter

![Parameters stripe hosted](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/stripe-checkout-params.png)

**Purpose of Webhooks on Stripe**

As mentioned above, with Stripe Hosted checkout, all the transactions occur in the Stripe window, so the merchant site has to be informed of the changes that occur with the transaction. Only then the corresponding orders can be updated on the merchant site.
Webhooks are for this purpose. They are similar to IPN callbacks that are used as a communication between the Payment gateway and your ecommerce store.

**Update/ Create webhook**
This option in the Stripe checkout wouldn't have any values initially when you have just installed the plugin. However, after you enter the API keys in the plugin and save, a value would apear.

![No options in webhook](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/no-options-stripe-hosted.png)
Once you entered the credentials and saved the plugin, an **Update webhook** button would show up as follows:

![Update webhook](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/update-webhook.png)
**Where to find your site's webhook in Stripe dashboard**
Once you connect your store with Stripe by entering the API keys, there would be a webhook created in the Stripe dashboard.
For the transactions to be updated in your J2Store orders, you will have to ensure that a webhook is created on your stripe dashboard.

To check this, navigate to Stripe dashboard->Developers->Webhooks.

![Webhooks in stripe](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/webhooks-stripe.png)

In the above screenshot, a webhook is created once for the corresponding store as indicated. 
This means that the transactions would be successfully communicated to the store that is connected to this account.

**When should you update your webhook?**
If you have re-generated your Stripe API keys, then it means that your webhook should be updated. 
So, everytime you regenerate your Stripe API keys, make sure that you have updated the Webhook in your Stripe Checkout plugin.

**NOTE:** Without the webhook being generated, the status of the transactions would not be communicated with the J2Store orders. Hence, your order statuses would not be updated accordingly.

### SCA compliance

#### Enabling SCA Compliance for Stripe direct 

For the Stripe direct payment method, only the in-built mode supports SCA compliance.
To enable SCA on Stripe direct, follow the below steps:
1. Navigate to J2Store->Setup->Payment methods->Stripe.
2. Set the option **Credit card form display type** to **Stripe in-built form**

![SCA in built mode](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/stripe-in-built-mode.png)

3. After choosing the Display mode as In-built form, enable the option **Enable payment intent(SCA Complaints) in Inbuilt form ?** to **YES**.


![Enabling payment intent](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/payment-intent.png)

Now, Stripe direct is compliant with SCA regulations.

### Testing SCA compliance

After enabling Payment intent on your Stripe direct plugin settings, you could test if the payment method is compatible with 3-D secure cards.
Follow the below steps to test SCA compliance

1. Enable Sandbox mode in Stripe plugin.
2. Navigate to the storefront. Add a product to cart and initiate checkout process.
3. At the checkout, choose Stripe as your payment method.

![Testing Stripe SCA](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/test-SCA-stripe.png)

4. Use the following cards:

 <cta-box>
    4000 0025 0000 3155
    4000 0027 6000 3184	
    4000 0082 6000 3178	
    4000 0000 0000 3055	
</cta-box>

![3-d secure card](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/3-d-secure-card.png)
<highlight>NOTE: You will not be able to test SCA Compliance if you use normal test cards. SCA compliance can be tested only with 3-D secure test cards.</highlight>

5. Click on the Place order button to see the 3-D secure popup as follows:

![3-d secure popup](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/3-d-secure-popup.png)

6. Click on **Complete authentication** to approve the transaction and complete the purchase.
7. The order should be placed and should be in **Confirmed** status as follows:

![Completed order](https://raw.githubusercontent.com/j2store/doc-images/master/payment-methods/stripe/completed-order.png)

Now, we have tested that your Stripe payment method is compliant with the SCA regulations.

**Still got questions?**

In case of any further queries, please feel free to reach us via the <link-text url="https://www.j2store.org/my-account/priority-ticket-system.html" target="_blank" rel="noopener">Priority ticket system</link-text>

