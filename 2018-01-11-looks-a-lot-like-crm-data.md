---
layout: post
title: "Looks a lot like CRM Data"
date: 2018-01-11
categories: data
---

*Note: this post originally included several screenshots (figures 1–4) that couldn't be recovered during migration from Medium. The write-up below is unchanged; the images can be added back later.*

Recently, I worked on a customer dataset and tried to solve questions regarding segmentation and possible campaigns. So, there are 10K customers ordering a service in a given period of time (~500 days).

**We are provided with:**

1. Customer IDs
2. Their respective 1st, 2nd, 3rd and last order-dates.
3. Customer Recency
4. Average time interval between orders
5. Number of Orders / customer
6. Average Order Value (AOV)
7. Gender
8. Product Category
9. Location

**Segmentation: Part 1**

We group customers at the first level as new customers, existing customers and churned customers. Assuming this is an on-demand service with repeat value, the first level here could be: Customers who use and pay for your service for the first time, recently (new customers), Customers who would use and pay again, if they liked it their first time (repeat customers) and finally, who use and pay for the first time but for some reason unknown not use and pay again (non repeat customers). If we choose to define new customers as customers acquired within last 15–30 days, we can find out non-repeat customers in the data through number of orders and first order date. There can be customers who are acquired in last 30 days and are repeating orders. I have considered this overlap (1% in this case) between repeat and new-customers as new customers because <=30 days age on service overrules repeat orders. Here is how the grouping looks like with AOV of each highlighted.

7% of the total customer base is New customers. 80% of the new customers have ordered once and not again. Since it is less than 30 days, we can later club these users with repeat users for any suitable campaign.

**Segmentation: Part 2**

Further, we can drill down the repeat customer group that is more than 50% of the base. Repeat customers are valued customers and looking into their user behaviour would be possible if we look at the important measures like Customer Recency, Average Order Value, Frequency. We are initially not provided with frequency but we can derive it from: Customer age on service / Average time interval between orders.

All 3 metrics mentioned above give indication if a business has responsive and healthy customer base. To simultaneously look at a customer's Recency, Frequency and AOV, we can:

1. Sort all 3 measures into an order: higher to lower.
2. Assign score and its meaning by creating buckets that suggests if the customer has high, average or low Recency, Frequency and AOV, respectively.
3. Combine the 3 individual scores.
4. And then settle what campaign applies to what bucket.

For example, a customer can have a score 5, 5, 5 which would mean that the customer has recently availed the service (R=5), he frequently avails the service (F=5) and his customer value (denoted by MV in graphs: AOV multiplied by No. of orders) is the highest (5).

A quick overview on how repeat customers are using the service will be helpful in targeting based on their customer value (MV) groups and then segmentation based on Recency and Frequency. To concise our analysis, we can add the Recency and Frequency score and map it against the customer value ranges of the given customer base. It shows that close to 45% of the repeat customers within 72~295 MV range have above average Recency and Frequency i.e. 6~7.5.

MV range between 0~72.7 customers with low RF scores can be targeted for campaign where you may reach out to them and offer improved or revived services with relevant discount offers.

We can reach out and say something to the effect of: *"Dear Customer, we thought of saying hello and also letting you know that our services have an X% offer running till this month. We also have revived our services and you can also avail the discount on them. Click to know more and hope to see you soon."*

Or we can target customers with medium/high RF with medium/high MV and let them know that they have been great customers: *"Hi, thank you for using our services. We would love to know what you like and do not like about our services. Click to leave your name and feedback."*

So, here we chose to segment the customers basis their:

1. Buying behaviour: new, repeat or non repeat.
2. Segmented repeat customers based on their Recency and Frequency.
3. Lastly, added MV parameter combined with Recency and Frequency.

There are always multiple number of ways like product category, location, etc. from which we can group customers and gain more insights from the data.
