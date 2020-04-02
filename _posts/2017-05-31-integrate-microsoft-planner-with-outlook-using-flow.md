---
layout: post
title: "How to integrate Microsoft Planner with Outlook using Microsoft Flow"
category: Blog
description: Integrate Planner with Outlook to create Planner task and Calendar event from Outlook.
brief: As we receive most of tasks via email, it is necessary to have Outlook integrated with a task management system.
keywords: []
tags: [Planner Manager]
image: /assets/img/integrate-microsoft-planner-with-outlook-using-flow/header-image.png
---

As we receive most of tasks via email, it is necessary to have Outlook
integrated with a task management system. Microsoft Planner is the easy
to go task management tool for users and they would love to integrate it
with Outlook for easy task creation. Microsoft recently announced the
availability of Planner in Microsoft Flow. Using this we can integrate
Outlook and Planner. Let's see how we have done this with a scenario.

### Scenario: 

When an email is flagged from Outlook, a task will be created in Planner
and similarly an event will be created for the task in users calendar.

### How to create Flow for this? 

Creating a task in Planner does not require Start or Due date. But in
order to create a calendar event for the task a date is necessary. So we
have used email received date time as Start date and we have added +12
hours as Due date time for the event.

In order to achieve this, we need to use 'Compose' section to write
formulae to calculate end time for the task.

“@addhours(triggerBody()['DateTimeReceived'],12)”

Now follow the steps as numbered in below screenshot to create this
flow.

![](/assets/img/integrate-microsoft-planner-with-outlook-using-flow/planner-integration-with-outlook-using-flow.png)


