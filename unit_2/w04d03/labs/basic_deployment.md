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
