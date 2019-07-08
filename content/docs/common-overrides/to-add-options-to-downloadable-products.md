---
path: "/docs/Common-overrides/to-add-options-to-downloadable-products"
updated: "2019-05-30"
title: "To add options to downloadable products"
description: ""
author: "Kiruthigha"
category: "Common-overrides"
---
Copy 
**/administrator/components/com_j2store/views/product/tmpl/form_downloadable.php**  To ***/administrator/templates/YOUR-DEFAULT-TEMPLATE/html/com_j2store/product/form_downloadable.php**

Find  the below line

Change with
Find below line
Change with
Save.

Copy /components/com_j2store/templates/YOUR-SUB-LAYOUT/view_downloadable.php

to
/templates/YOUR-TEMPLATE/html/com_j2store/templates/YOUR-SUB-LAYOUT/view_downloadable.php

Edit the file and find below line
Change with
Now the downloadable products should have options tab at the back end and the options should be visible on the front end.

