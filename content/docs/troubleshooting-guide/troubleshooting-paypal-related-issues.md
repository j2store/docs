---
path: "/docs/catalog/troubleshooting-paypal-related-issues"
updated: "2019-07-02"
title: "Troubleshooting Payapal related Issues"
description: "troubleshooting paypal related issues"
author: "Varsha"
category: "troubleshooting guide"
---

There could be many reasons why your Paypal Plugin is not working. This guide lists most common reasons and solutions for them.

* Orders not confirmed. Status shows as incomplete or new
* Order status Failed
* Currency is wrong. Paypal payment screen shows USD while my currency is different
* paypal duplicate invoice ID and how to solve it
* Paypal option not showing at checkout
* Is your order still not auto confirming the status
* Make order status confirmed immediately

### 1. Orders not confirmed. Status shows as incomplete or new

It means you are not getting the Instant Payment Notification (IPN) from Paypal.The IPN may not reach your site, if :

* The Site is offline
* The Site is in local server / local host / live in your local machine
* You have created a menu for the Checkout and set its access level to Registered or Special or Something other than public.
* You have a firewall installed either in your site or by your host
* You have disabled IPN in your Paypal account.

#### Solutions to above issues :

1. Go to Joomla adminGlobal configuration. Set Site Offline to No
2. Host your site
3. Set the Checkout menu access level to Public
4. If you have a firewall like Admin Tools, then you can add Exceptions. Please consult with your firewall provider or with your host.

if your site or your hosting server has a firewall (you can check with your host), then you may have to whitelist the Paypal's server IPs

Here you can get a list of IPs used by the Paypal servers <link-text url ="https://ppmts.custhelp.com/app/answers/detail/a_id/92" target = "_blank" rel = "noopener"> click here </link-text>

Paypal makes a remote post (IPN) to your site when a payment is made to inform us that payment has been made and you can mark the order complete. Firewalls normally block remote posts. So we may have to whitelist the IPs allowing them to do the remote post.

#### Enable the IPN in your Paypal account

Login to your Paypal account

Click Profile on the My Account tab.

Click Instant Payment Notification Preferences in the Selling Preferences column.

Click Choose IPN Settings to specify your listener's URL and activate the listener.

In the Listener's url enter the following url

> http://<YOUR_DOMAIN>/index.php?option=com_j2store&view=checkout&task=confirmPayment&orderpayment_type=payment_paypal&paction=process&tmpl=component

NOTE: Replace <YOUR_DOMAIN> with your website. E.g:<link-text url="www.example.com" target="_blank" rel="noopener"> click here </link-text>

Still no luck, check the IPN HistoryLogin to your paypal account and go to History -> IPN history. Check the recent IPN history and check the status.If possible take a screenshot and contact our support team.

### 2. Order status Failed

Are you using your Primary Paypal Email as your merchant email? If your order status says failed, then chances are that you are using a secondary email of your Paypal account.

Paypal allows you to add multiple emails in an account to accept payments. With the Paypal plugin for J2Store, make sure you are using your primary Paypal account email. You can check which is your primary email by signing into your Paypal account and then going to Profile -> Add / Edit emails page.

![paypal primary](https://raw.githubusercontent.com/j2store/doc-images/master/troubleshooting-guide/troubleshooting-paypal-related-issues/paypal_primary_email1.png)

### 3. Currency is wrong. Paypal payment screen shows USD while my currency is different

Paypal supports multiple currencies. However, it does not support all currencies of the world. Please ensure that your currency is supported by checking this page: <link-text url="https://www.paypal.com/multicurrency" target="_blank" rel="noopener"> click here </link-text>

If your currency is not supported, Paypal will automatically assume the currency as USD.

A workaround to this problem : Allow customers to shop in your currency and convert it to USD when they are redirected to paypal for payment.

Here is a step by step guide to set up auto conversion of your currency to USD.

Let us assume, your store is located in India and your currency is INR. But Paypal does not support INR.

Here is how you can overcome the issue.

Step 1: Enable Auto currency update

![selection](https://raw.githubusercontent.com/j2store/doc-images/master/troubleshooting-guide/troubleshooting-paypal-related-issues/Selection_048.png)

Go to Joomla admin - j2store - set up - > configuration -> Store tabSet your Default Currency as INRSet Auto update currency to YES

Step 2: Create multiple currencies

Go to Joomla admin - j2store - set up - currencies

You might have already created the INR currency. Open it and make sure its value is set to 1

**Now, create a new currency**

![currency](https://raw.githubusercontent.com/j2store/doc-images/master/troubleshooting-guide/troubleshooting-paypal-related-issues/Selection_050.png)
Currency Name: USDCurrency Code: USDCurrency Symbol: $Decimal places: 2Decimal Separator: .Thousands separator: ,Value: 0.061 (You can enter any value less than 1. Once saved, J2Store will automatically contact Yahoo Financial services and update the correct exchange value )Status: Published

Save now.

![selection49](https://raw.githubusercontent.com/j2store/doc-images/master/troubleshooting-guide/troubleshooting-paypal-related-issues/Selection_049.png)
You are all set now. Prices in your store will now display in INR. When the customer is redirected to paypal, he will be asked to pay in USD.J2Store will automatically do the currency conversion depending on the prevailing exchange rate.

### 4. Paypal duplicate invoice ID and how to solve it

Paypal by default does not allow duplicate invoices. When you try to pay for a duplicate invoice id, Paypal will produce the following error:

The transaction was refused as a result of a duplicate invoice ID supplied. Attempt with a new invoice ID

If this were to happen, one of the reasons could be that the configuration in Paypal is set to not accept duplicate invoices. You may receive orders from various places and if the invoice numbers are the same, Paypal recognises there is an invoice duplication.

There are two ways, by which you can fix this.

**Solution 1: Set the Invoice Prefix**

Please follow the steps:

1. From your J2Store Dashboard, go to - Set Up -> Configuration -> Order

> Note: This step is for V3. If you are using v2, then go to Set Up -> Store Profiles -> your store profile

2. Set the Invoice Prefix in the textbox provided, for e.g., INV-2015- or INV/2015/
3. Save & Close.

**Solution 2: Change settings in Paypal**

Please try the following:

1. Log-in to your Paypal account
2. Click Profile
3. Under Selling Preferences, click Payment Receiving Preferences
4. Under Block Accidental Payments choose "No, allow multiple payments per invoice ID".
5. Save.

### 5. Paypal option not showing at checkout?

Make sure the Geozone field at paypal plugin configuration page is set to ALL.

By selecting a geozone here, you can restrict this payment method to only customers of that geo-region. Choose All geozones to show this method to all customers.

Go to J2Store > Setup > Payment methodsOpen Paypal payment pluginSet Geozone to ALLSave.

### 6. Is your order still not auto confirming the status?

Here is one more troubleshooting stepGo to Joomla administration -> Global config -> Server -> Database settingsMake sure your Database driver is NOT set to MySQL PDO.

### 7. Make order status confirmed immediately

Is your PayPal's account default currency is different from your store currency ?Only if the currency is different, PayPal will send the payment status as Pending.

Login to your PayPal account -> profile -> Selling preferences.

You will find a switch:

Allow payments sent to me in a currency I do not hold:Set this to: Yes, accept and convert them to US Dollars. Additional charges apply.

Otherwise, your PayPal account requires you to manually accept each transaction (by logging in to your Paypal Acount)

If PayPal sends the payment status as Completed, J2Store will automatically mark the transaction as Confirmed.



