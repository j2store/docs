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
```
    <li>
    <a href="#imagesTab" data-toggle="tab"><i class="fa fa-file-image-o"></i>
    <?php echo JText::_('J2STORE_PRODUCT_TAB_IMAGES'); ?>
    </a>
    </li>
    ```
Change with
```
<li>
<a href="#imagesTab" data-toggle="tab"><i class="fa fa-file-image-o"></i> <?php echo JText::_('J2STORE_PRODUCT_TAB_IMAGES'); ?>
</a>
</li>
<li>
<a href="#optionsTab" data-toggle="tab"><i class="fa fa-sitemap"></i> 
<?php echo JText::_('J2STORE_PRODUCT_TAB_OPTIONS'); ?>
</a>
</li>```

Find below line
```
<div class="tab-pane" id="imagesTab">
<?php echo $this->loadTemplate('images');?>
</div>```

Change with
```
<div class="tab-pane" id="imagesTab">
<?php echo $this->loadTemplate('images');?>
</div>
<div class="tab-pane" id="optionsTab">
<?php  echo $this->loadTemplate('options');?>
</div>```

Save.

Copy /components/com_j2store/templates/YOUR-SUB-LAYOUT/view_downloadable.php

to
/templates/YOUR-TEMPLATE/html/com_j2store/templates/YOUR-SUB-LAYOUT/view_downloadable.php

Edit the file and find below line
```<meta http-equiv="content-type" content="text/html; charset=utf-8">

```
<?php echo $this->loadTemplate('cart'); ?>
```
Change with
```<?php echo $this->loadTemplate('options'); ?>
<?php echo $this->loadTemplate('cart'); ?>
```
Now the downloadable products should have options tab at the back end and the options should be visible on the front end.

