---
layout: post
title: "Cohort Analysis"
date: 2018-02-10
categories: data
---

*Note: this post originally included several screenshots (figures 1–5) that couldn't be recovered during migration from Medium. The write-up below is unchanged; the images can be added back later.*

If we have a data that comprises of user-ids and their respective single or repeat product order dates (let's say they ordered food) spanning across two months then we can use cohort analysis to find out their user behaviour and hence, product performance trends by determining and comparing retention rate of users.

We determine retention rates of the users across subsequent time-frames (days, weeks or months or more) depending upon the need of the analysis and data available. And then compare retention rate exhibited by users in the time frame.

We call these time-frames — Cohorts, because we have grouped users sharing the common characteristic of having — ordered/transacted/used a feature/on-boarded — in the same day or week or month. The available data is close to 50 days. Therefore, it looks suitable to use weekly cohorts here as it would make the analysis simpler and presentable.

So, the objective is that we should be able to pinpoint:

1. How acquisitions vary across different weekly user cohorts? Do we see any change?
2. How each user cohort behaves during next 7 weeks? How many of the users are retained on weekly basis? Can we see a trend?

**Excel calculations to further the analysis** — As we only have 1) user ids and 2) order dates for a given time period, we will derive more fields so that this analysis can be drawn.

1. **Order Counter:** We can start by first sorting the user ids so that similar user ids can be stacked together with each other and then do a second ascending sort on the ordering dates. We do this to create a 3rd column — Order Counter that would mention the nth count of order made by the specific user id. Post the two sorts, you can apply an IF condition which will check the logic of — the current user id column cell value equals to the previous cell's or not — If True, Order Counter column current cell gets its value by adding 1 to it's previous cell's value. If False, it should set it to 1.

2. **Acquisition Date:** We calculated Order Counter to find out the Join Date/Acquisition Date. It's the date when user ordered for the first time irrespective of any time-frame. Similar IF statement can be applied here by using Order Date column and Order Counter. If Order Counter equals to 1 then the Acquisition Date column cell value would be equal to the respective Order Date column cell value, otherwise it would remain same as it's previous cell value.

3. Now that we have Order Date and Join Date, we can easily find out Order Week and Acquisition Week for each user id. That means now we know which user made his first or repeat order in what week. If we subtract the Acquisition Week from the Order Week, we get 8 values ranging from 0–7 signifying total number of weeks. These are our weeks during which we analyze all Cohorts and they will be drawn on X-axis. On Y-axis we would have our Cohorts. We can change Y-axis with actual acquisition date ranges or for example, any product feature that we launched in that date range depending upon the data we have and analysis we are carrying out.

**Using Tableau for analysis**

We can import this excel in Tableau and make quick cohort graphs now. However, we always have the choice of doing the above calculations in Tableau itself or analyze everything in excel through pivots. Though, we could face one problem of not being able to show distinct/unique counts of orders by users/week in excel for some reason. Analysis in Tableau can save time and solve that.

Post you introduce the data in Tableau, Cohorts as a dimension can be drawn to the columns and Acquisition Week can be put in the rows for visualization. To make it more descriptive, you can also use Acquisition Date put out in rows expressed as Week start dates like in this visualization.

Let us look at weekly acquisition cohort numbers first:

1. It is evident that acquisition is continuously declining for all 7 weekly cohorts.
2. It's interesting to note that the week is starting from Sunday and if we look at the day wise acquisition cohort numbers, it presents a good food ordering story. There is a weekend spike that sandwiches the downfall plateauing on the weekdays.
3. There is an anomaly in the 1st cohort, where we have a Wednesday spike that is the highest in the available data.

Unless these numbers represent a limited time deal that is supposed to end prior to year end holidays, I would be worried about the decline or the data is insufficient enough to be non-conclusive.

Now, let us look into the weekly retention rates of these acquisition cohorts.

1. We have stable retention rates for all cohorts until 4th week of 1st cohort, 3rd week of 2nd cohort, 2nd week of 3rd cohort where we see a slight surge before dropping in the second last week and sharply dropping in the last week of all cohorts.
2. The upsurge is probably because of the second month beginning.
3. The sharp retention drops in the last week are indicative of — a) Insufficient data: The data has only 5 days of records for this week excluding a Friday and Saturday but the data also has 1st cohort comprising of 4 days boasting of highest acquisition and retention sans a Sunday. b) Again, may be a deal coming to a closure or also the beginning of important year end vacation where chances of food ordering could reduce. But then, food ordering by new year's eve should increase.

May be, we can conclude that weekly analysis to find out main trends pertaining to a specific service isn't the best way to understand trends. It would be interesting to note the behavior assuming there is no deal running. Or more data can corroborate the fact that there is always an upsurge of transactions when the month starts. How is traffic impacted when there are cultural holidays or sudden events that are instrumental in diminishing food ordering?

We tried answering some obvious questions with the help of available data and the tools used for this analysis only to understand cohort analysis and how useful it is for user growth and retention. Perhaps, that's exactly why it is a very important and must have report for any product alive and kicking in the market.
