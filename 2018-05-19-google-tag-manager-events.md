---
layout: post
title: "Google Tag Manager & Events"
date: 2018-05-19
categories: analytics
---

*Note: this post originally included two screenshots (figures 1–2) that couldn't be recovered during migration from Medium. The write-up below is unchanged; the images can be added back later.*

This post is about how I accounted for a specific action done by the user on the website and how I passed that information in the reporting tool for measuring purposes.

So, I chose to record this action that comprised of the events occurring in the order of — *1) a button click, 2) a radio option check and 3) a final submit;* happening on the web page through Data Layer to Google Tag Manager (GTM) and eventually passed it to Google Analytics (GA). I am going to explain the first event of this action.

And, it required me to do undermentioned things:

Initializing data layer on the page that above mentioned events correspond to by adding a code snippet that declares the data layer variable named as dataLayer just above the GTM container tag implemented on the same webpage as per Google directives.

Now, one can reference this variable in their code to send anything to data layer.

Sending the information of the event as 'key': 'value' pairs to the data layer in the script using push method on dataLayer variable. For example — In case of my first event: an HTML button click, using 'event' as key and 'Read.clicked' i.e. event's name as key's value, I am pushing my first user interaction data related to the button click event into the dataLayer like this:

```js
dataLayer.push({
  'event': 'Read.clicked',
  'category': 'Home'
});
```

In addition to 'event' field, I am sending a 'category' field also, in order to categorize events based on the name of my pages. So, for example if I have the same event in one of my other pages, category will help me in finding on which page this event was triggered by the user. This implementation can be validated or not in Dataslayer tab of your chrome developer console while reproducing the click event on the page. Dataslayer is a tool to debug your datalayer implementation and it can access your dataLayer.

Provisioning tag, trigger and variables in GTM to pass the data to Google Analytics —

**a. Configuring tag that will send all the data to GA pertaining to button click event.** In the GTM interface we need to choose:

- **Tag type** as Universal Analytics since we are sending data to GA.
- **Track type** as Event as this is an event data.
- **Category** as `{{PageType}}` as a newly configured Data Layer variable. As explained earlier, I chose 'category' to have the name of webpage where the user interaction is happening.
- **Tracking id** as `{{GA-PropertyId}}` which is a variable for holding your Google Analytics property id value which will remain constant. The double curly bracket is the notation for a variable in GTM.

**b. Setting up a trigger that will check for the main condition to be met in order to fire this tag and send data to GA.** In order to create the trigger, we opt:

- **Trigger type** as Custom Event as we are receiving the data via data layer.
- **Event name** as 'read.clicked' as this is the event this trigger correlates to.

Post these steps, GTM has a preview mode where you can check if the implemented tag is getting fired on the page while iterating the event again on the webpage and it can help debug in case of any discrepancy. GTM would render a de-bugger panel on the webpage in question where your data layer would come alive and will list all the user interaction data that is passed during using data layer to GA via GTM.

Finally, the events/user interaction data can be seen in Google Analytics's left panel's Behaviour Tab > Events > Top Events where you would find — Event Category and Event Action as primary dimensions. If everything goes right, test clicks data can be seen under Event Category: Home > Event Action: Read.clicked.

You can add as many key-value pairs as data for several simple and complex user interactions happening on your webpage using dataLayer push combined with your JavaScript or HTML event attributes in general.
