# Heroku Deployment

## Lesson Objectives

1. Make a new github repository
1. Create a basic express app
1. set up environmental variables
1. Remove `node_modules`
1. Get started with Heroku
1. Create app on heroku

## New Github Repository

https://media.git.generalassemb.ly/user/1611/files/14791858-6f94-4bbe-96cd-6cdf829a72fe

This is going to be a porfolio piece so you'll want it hosted on regular [github](https://github.com/).

Make a new repo! Click the + on the upper right navigation bar

![new repo](https://i.imgur.com/Y3IF2lF.png)

**Choose**

- a repository name
- public (let your instructors help you if you get stuck, you can always change this later)
- initialize with a README
- **VERY IMPORTANT** `Add .gitignore` scroll down and choose Node
- license - optional

Press the `Create Repository` button when you're ready!

## Clone Your New Repository to Your Computer

https://media.git.generalassemb.ly/user/1611/files/66e64d07-55c0-4e71-8ad4-eb32fe467da1

**In Terminal**

- navigate OUTSIDE the class repository
- check you are not already in a git repository
    - **GOOD** -

    ![not a repo](https://i.imgur.com/9wxsCNd.png)

    - **BAD**  -

    find a new location for your project!


    ![already a repo](https://i.imgur.com/dAxjl7t.png)

**On Github**

- click the `Clone or Download` button
- check if you are grabbing the `ssh` URL
- click the clipboard button

**In Terminal**

type `git clone`, paste the URL that you copied from github, hit `Enter`

It should look something like: `git clone git@git.generalassemb.ly:username/project2.git`

- **Important!** Don't forget to cd into your new directory/repo!
- `ls -a` - you should see your `README.md` and `.gitignore` that you created on github

## Basic Express App

https://media.git.generalassemb.ly/user/1611/files/a74c1c0d-fa15-4ad8-868b-be7638014ee7

Let's build a basic express app

- `touch server.js`
- `npm init`
	- **IMPORTANT** when asked about `entry point`, specify `server.js`
- `npm install express`

If you forgot to specify `server.js` as your `entry point`, go into package.json and update the `main` property so that it's `server.js`

Edit your server.js so it looks like this:

```javascript
const express = require('express');
const app = express();

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.get('/', (req, res)=>{
	res.send('hi');
})

app.listen(PORT, ()=>{
	console.log('listening');
})
```

Notice the code regarding `process.env.PORT` and the `let PORT` variable.  We do this because heroku doesn't allow us to start express on port 3000.  We instead need to use and environment variable that heroku has set up.  The code written will allow express to work on port 3000 locally as well as heroku's designated port.

Test this app locally, to make sure it works.  If it does, git add, commit, push.

## Get started with Heroku

https://media.git.generalassemb.ly/user/1611/files/a0a776a5-8741-48fa-890f-d76d56138f82

- [Sign up for Heroku](https://signup.heroku.com/)
    - You may need a CC at some point although you will not be charged
- [Install Heroku CLI Tools](https://toolbelt.heroku.com/)
    - Verify by typing `heroku login` anywhere in your terminal
    - Follow prompts to sync up your heroku credentials, DO NOT HEROKU CREATE yet.

## Create an app on heroku

https://media.git.generalassemb.ly/user/1611/files/46cfd4b9-bf71-49d3-bad1-1c5db4921a44

- `heroku create` from your project's root directory where you first initialized git
- Notice that if you successfully created a heroku app, you can see that the heroku remote was automatically added to your project's repo. Confirm this by typing `git remote -v`, you should see `origin` as well as `heroku`
- run `git push heroku main`
- run `heroku open` to view the app
- run `herkou logs` if something goes wrong

# Create an Atlas Hosted MongoDB

## Intro

While developing an application that requires a MongoDB, you can only connect to your local MongoDB engine for so long.  This is because the application, once deployed, will have to connect to a MongoDB engine accessible via the Internet.

Heroku, the application hosting service we deploy our projects to, is capable of supplying a MongoDB.  However, delaying connecting to a hosted database until the time of deployment is not ideal...

It makes sense to set up and connect to a hosted MongoDB sooner, rather than later.  Doing this will ensure that any data, users, etc., created will be there upon deployment.

In addition, it's advantageous to use a service to host MongoDB databases other than Heroku so that you can create databases anytime you want.

The most popular service for hosting MongoDB databases, not surprisingly, is MongoDB's own [Atlas](https://www.mongodb.com/cloud/atlas).

## Create an Atlas Account

https://media.git.generalassemb.ly/user/1611/files/e624a07d-69bd-4041-8858-b5d6d4514f38

First you will need to signup for a free account [here](https://cloud.mongodb.com/user?_ga=2.87815960.1293087282.1558635812-709388783.1558635812#/atlas/register/accountProfile):

### IMPORTANT
Be sure to assign yourself an organization/company: currently the set up will not be complete and not give you a helpful message if you don't do it... you'll just see a rocketship with a set up message ... for ... forever...

<img src="https://imgur.com/8wmhNyf.png">

## Create a New Cluster

Once logged in, Atlas will request that you select a path. In this case, the free path will more than suffice, so be sure to select the free one! 

![](https://imgur.com/wNvEJbm.png)

For the free path, Atlas allows one free cluster per account and will ask you to create one. 

A cluster can contain multiple MongoDB databases - which Atlas refers to as **namespaces**.

Be sure to select the **Cloud Provider & Region** nearest to you 

<img src="https://imgur.com/VnKNAKn.png">

Next, in the **Cluster Tier** section, select the `M0 Sandbox` tier:

<img src="https://imgur.com/n9uDA3H.png">

Finally, you can optionally change the name of the cluster, then click the `Create Cluster` button:

<img src="https://imgur.com/nTNSO4I.png">

It may take several minutes for Atlas to build your cluster.

## Add a User for the Cluster

https://media.git.generalassemb.ly/user/1611/files/60846c02-c86f-491d-8dbb-04a5761a7c63

Each cluster must have a user created whose credentials will be provided in the database connection string when connecting to a database.

First click the **Database Access** tab:

![](https://imgur.com/MR8elt6.png)

Click the `Add New Database User` button, which will open a popup. On the popup, make sure you select the "Password" authentication method, then enter a username, password, select the **Read and write to any database** option, then click the `Add User` button:

<img src="https://imgur.com/3Z4rHLx.png">

## Update the Whitelisted IPs

https://media.git.generalassemb.ly/user/1611/files/958111d1-4a0e-45bc-9d43-65e68abf8f34

Atlas has a security feature that allows the databases to be accessed by _whitelisted_ (approved) IP addresses only.

However, you must whitelist **all IPs** to ease development and deployment of your application.

Click on **Network Access**, click **IP Whitelist**, then click the `+ ADD IP ADDRESS` button.

In the dialog, first click `ALLOW ACCESS FROM ANYWHERE` then click the `Confirm` button:

<img src="https://i.imgur.com/iO7dMbz.png">

## Obtain the Connection String

To obtain the connection string for your `.env` file, first go back to the Clusters tab and click the `CONNECT` button on your cluster:

<img src="https://imgur.com/pCdX5D6.png">

Select the **Connect Your Application** option:

<img src="https://i.imgur.com/qMOAxVV.png">

Next, ensure that the **Node.js** driver and latest version is selected.  Then click the `Copy` button to add the connection string to your clipboard:

<img src="https://imgur.com/7v2M7yy.png">

## Viewing & Editing Data

You can use the Atlas app to view and edit data by clicking on the `COLLECTIONS` button.

## Connect to MongoDB

https://media.git.generalassemb.ly/user/1611/files/cf5c1061-2f5d-4f8f-bc4e-18224a43d8c4

`npm install mongoose` and add the following to your server.js:

```javascript
const mongoose = require('mongoose');

mongoose.connect('[MONGO_CONNECTION_STRING]', ()=>{
	console.log('connected to mongo');
})
```

replace `[MONGO_CONNECTION_STRING]` with the connection string you copied from Atlas in the last step

git add, commit, and push to heroku.  Test to see if `connected to mongo` is in `heroku logs`
