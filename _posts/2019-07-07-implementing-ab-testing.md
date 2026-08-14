---
layout: post
title: "Implementing A/B testing"
date: 2019-07-07
categories: analytics
---

*Note: this post originally included several screenshots (figures 1–7) that couldn't be recovered during migration from Medium. The write-up below is unchanged; the images can be added back later.*

We know that we do A/B testing on websites as one of the conversion rate optimization strategy. I will talk about how I ran an A/B Test on this website to test two versions of the homepage and will describe how I setup the AB test and analyzed the outcomes. I used Optimize, Tag Manager and Google Analytics for the same. To run A/B testing experiments via Google Optimize on your website and test different versions of your webpage, we need to do the following steps:

**Deploy Optimize tag via Google Tag Manager**

After we have created our Optimize account, set up container and linked it to Google Analytics, we would need to install Optimize container snippet on our website. I implemented it via Tag Manager (GTM).

We can create a new tag and choose Google Optimize as the Tag Type from the existing list of tags. And then, fill Optimize Container ID in the form field and use GA Property ID variable as Tracking ID in the Google Analytics Settings. To set the trigger for this tag, we can create a Page View trigger, by using Some Page Views setting, which fires when the homepage is viewed, as I created A/B test for the only for the home page URL of this website.

Now that the tag is created, we can preview and debug in the panel before taking it live.

**Setting A/B test experience via Optimize**

I wanted to test one variant against the original version of homepage, so I created it with the help of Optimize editor. I chose to test the position of the feedback button in the original homepage version as opposed to the feedback link in the body copy of the website.

To create the test, we can click Create Experience from the dashboard where we enter the name of the experience and specify URL of the original webpage we would like to edit to create Variant-1.

Once we use Optimize editor to create variant that will participate in the A/B test, we can set page targeting that tells on which URLs the experience will run on our website. Here, we have weighed the two possibilities equally, but the weight percentage can be customized.

Now, we can set AB test objectives. Since my AB test is about measuring number of feedbacks received on changing the feedback button position on the home page, I set the following objectives for the AB test:

I want to measure below metrics:

1. The number of feedbacks received in Original and Variant-1 version as primary objective.
2. As secondary objective, I want to measure — a) the number of bounces b) number of feedback button clicks (not submitted).
3. A user journey funnel starting from homepage visit to feedback click to feedback submitted. I will make the funnel in GA for both the variations.

We can talk about the analysis separately when the A/B test ends.
