---
path: "/docs/catalog/translating-filters-to-your-language"
updated: "2019-02-20"
title: "translating-filters-to-your-language"
description: "This is how the filters in your multi-lingual site can be translated into the appropriate languages."
author: "Sowbagya lakshmi"
category: "catalog"
---

Let us suppose that you have already created filters in a particular language and you wish to translate the filters to another language.
This is how you could do it.

**INSTANCE:**

**Languages available on the site**: English, German.
**Filters have been created in language:** English.
**Filters to be translated in language**: German.

###### Example:

Let us assume that we have got the following filter and following values for the filter:

Gender -filter title

Male -Filter value 1

Female -Filter value 2

###### Steps to be done:

* Please navigate to J2Store->Catalog->Filters/specifications

*  Edit your filter, in our instance, it is the Filter with the title "Gender"
*  Replace the title with the following language constant(please note that this is custom-defined, you could use any constant on this. Just make sure that you have mentioned the constant in UPPERCASE letters. And make sure that you use the exact constant in the language overrides that we are going to create): J2STORE_FILTER_GENDER

![Adding language constants in your language](../../images/catalog/translating-filters-to-your-lang/filters-lang-const.png)

*  Now, replace the values of the filter with custom language constants like this: J2STORE_GENDER_MALE, J2STORE_GENDER_FEMALE

*  Now that we have defined our constants, our next step is to create the language override
*  Navigate to Extensions->Languages->Overrides->Choose the language German
![Choose the language on the language override page](../../images/catalog/translating-filters-to-your-lang/trans-fil-overr-choose-lang.png)
*  Click the new button and create a override for the constant:  J2STORE_FILTER_GENDER
*  Create an override for the other two constants as well in the same language 
![Creating overrides for the filter values in German](../../images/catalog/translating-filters-to-your-lang/trans-filt-override-german.png)
![Creating override for the other filter value in German language](../../images/catalog/translating-filters-to-your-lang/trans-filt-override-german-fil-val.png)
![Filter value override in German](../../images/catalog/translating-filters-to-your-lang/trans-filt-override-german-fil-val-1.png)

*  Choose the language as English at the languages filter
![Choose English language at the filters](../../images/catalog/translating-filters-to-your-lang/trans-filt-choose-eng-lang.png)

* Create language overrides for the three constants here as well and mention the text that has to be displayed on the English site for this filter and the values
![Overriding the filter Title](../../images/catalog/translating-filters-to-your-lang/trans-filt-override-English-fil-title.png)
![Override the filter value in English](../../images/catalog/translating-filters-to-your-lang/trans-fil-overr-eng-fil-val.png)

![Translating the filter value in English](../../images/catalog/translating-filters-to-your-lang/trans-filt-override-English-fil-val-1.png)

* Assign the filter and its values to the products you desire under the Filters tab of the product article of both the English and German language 

![Assigning filters to English language](../../images/catalog/translating-filters-to-your-lang/trans-fil-assi-filt-eng.png)
![assigning filters to German language](../../images/catalog/translating-filters-to-your-lang/trans-fil-assi-filt-Ger.png)


* Navigate to frontend and you would see the texts that you defined in each language for the constants in the place of the filters respectively

###### English language: 
![Filters in Frontend English](../../images/catalog/translating-filters-to-your-lang/trans-fil-eng-front.png)


###### German language: 

![Filters in Frontend of German language](../../images/catalog/translating-filters-to-your-lang/trans-fil-Ger-front.png)
