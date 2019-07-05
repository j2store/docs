---

path: "/docs/apps/email-basket-issues"
updated: "2019-06-26"
title: "Email basket issues"
description: ""
author: "Kiruthigha"
category: "Apps"

---


The following might be some of the commonly faced issues in the email basket plugin.

* **The modal pop up is not opening up**

This issue can be solved by setting the modal class as **fade** instead of **fade hide**  in the app's advanced settings:
![ebi01](https://raw.githubusercontent.com/j2store/doc-images/master//apps/email-basket issues/ebi01.png)


* **The fields are not aligned properly  **


There might be difficulties in aligning the fields of the modal pop up. This happens due to bootstrap conflicts on some of the templates. Now you could choose if you wish to display the modal in a **bootstrap form** or **custom modal form** under the Layout settings of the app's settings:

![ebi02](https://raw.githubusercontent.com/j2store/doc-images/master//apps/email-basket issues/ebi02.png)

* **The email comes through with just a label Customer details**


Sometimes, the email notification that is sent to users when a quote is placed can just say Customer details without the details entered by the users. This is because the email to be sent has not been configured in the app's settings:


![ebi03](https://raw.githubusercontent.com/j2store/doc-images/master//apps/email-basket issues/ebi03.png)
