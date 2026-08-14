---
layout: post
title: "Colorfully busy enough?"
date: 2019-08-25
categories: data
---

*Note: this post originally included several dashboard screenshots (figures 1–4) that couldn't be recovered during migration from Medium. The write-up below is unchanged; the images can be added back later.*

Earlier, I copied some HTML (from Bootstrap sample codes :-/) and made something like this —

I connected **Tableau** to the backend and introduced the data *(i.e. number of times the top right green* ***Feedback*** *button got clicked and the different ratings received)* in it to make the following charts:

**Stacked Bar Chart:**
This visualization represents the percentage distribution of different ratings received each month stacked together from *Apr-18 to Aug-19*. We can see from the chart that the website overall has been rated 3, 4 and 5 more number of times. Ratings 1 and 2 as you can see from their color fill up only a small portion of the chart.

**Tabular Chart:**
The chart is in the form of a table representing rating percentage distribution across months with the help of color attribute. This is another way of representing the same information that we used the stacked bar chart for.

**Pie Chart:**
This chart is showing the aggregate percentage distribution of ratings received as of yet on the website with rating 5 being the highest at 29.2%.

The charts I used are widely used in a real world setting to provide important insights. For example:

1. A stacked bar chart can be drawn to analyze traffic coming via different channels on a website. The stacked bar chart will shed light on how the traffic to the website is distributed among several channels.
2. A pie chart can be drawn in a SaaS customer success use case to dissect a client's issues by category.
3. A tabular highlight chart can represent analysis about effectiveness (Impressions, CTR or Conversions) of a search-ad across hours during a day.
