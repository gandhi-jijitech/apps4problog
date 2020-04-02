---
layout: post
title: "Office365 Planner now available in Microsoft Flow"
category: Blog
description: Create Planner tasks from Outlook using Microsoft Flow.
brief: Finally, Microsoft achieved its great millstone by making Office 365 Planner available in Microsoft Flow.
keywords: []
tags: [Planner Manager]
image: /assets/img/office365-planner-available-in-microsoft-flow/planner-available-in-flow-header.png
---

Finally, Microsoft achieved its great millstone by making Office 365
Planner available in Microsoft Flow. Now we can create and modify the
Planner task from different work environment. For example, task can be
created from user email based on **User From**, **Flag Mail**, when
**list item added** in SharePoint List, **import task** from SharePoint
list and sync from Trello.

The following Planner Fields are supported in Flow.

-   Plan Name
-   Bucket
-   Title
-   Start Date
-   Due Date
-   Assign to

In this blog, we will see how to use Planner in Microsoft flow with
below samples.

#### Samples: 

1.  Create Planner task when an email flagged in office 365
2.  Create Planner task when email is received from selective user
3.  Import task from SharePoint list
4.  Create new Planner task when a new card is added in Trello.

#### Create Planner task when an email flagged in office 365 

When an email is flagged from Outlook / OWA, the Flow will get triggered
and a new Planner task is created. You can set multiple filters like
Folder, Importance, To, From, Attachment, Subject contains word.

![]( /assets/img/office365-planner-available-in-microsoft-flow/flagged-mail.png)

#### Create Planner task when email is received from selective user 

In this method, you can trigger flow when a new email is received from a
selective user. This filter is based on the **From** field in email and
it will automatically create task in Planner and it has multiple filter
options Like Folder, Importance, Attachment, Subject contains word.

![]( /assets/img/office365-planner-available-in-microsoft-flow/email-from-selective-user.png)

#### Import Tasks from Sharepoint list 

You can refer the following screenshot for creating flow for **Import
tasks from SharePoint list**.

![]( /assets/img/office365-planner-available-in-microsoft-flow/import-tasks.png)

#### Create new Planner task when a new card is added in Trello. 

Please follow the below screenshot which explains the steps to create
this Flow.

![]( /assets/img/office365-planner-available-in-microsoft-flow/new-card-added-in-trello.png)
