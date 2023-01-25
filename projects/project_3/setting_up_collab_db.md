![](/ga_cog.png)

# Deploying your group project 

Deploying as a group is _slightly_ different than deploying an individual project when trying to set up your database. This markdown will help you get through that

**Lesson Objectives** 

- Deploy React
- Set Up the Database
- Setting up to deploy to Heroku

---

## Deploying Create React App

Set up (from anywhere):

```
sudo npm install netlify-cli -g
```

to deploy `cd` into the root of your react app and run:

```
npm run build
sudo netlify deploy --prod
```

When it asks you which directory to publish, specify `build`.  You may be prompted to log in to Netlify.  Once deployed, it should provide you with the url to your app.

---

If that doesn't work, use either:

```
heroku create
git push heroku master
heroku open
```

or

- https://stackabuse.com/how-to-deploy-a-react-app-to-heroku/

## Set Up the Database

You don't need to do anything with Atlas, this time around.  Set up your express app like in unit 2 and copy the mongoose connection string from one of your group member's unit 2 project:

```javascript
mongoose.connect('[MONGO_CONNECTION_STRING]', ()=>{
	console.log('connected to mongo');
})
```

Just make sure your model has a different name from that unit 2 project.  The easiest way to do this is to build an app based on a different concept.  If the model for the unit 2 project was fruits, use veggies this time around.

If you had users/authentication in the unit 2 project, and you want to have users/authentication in this project, use the mongoose connection string for a unit 2 project that didn't have users.

## Setting up for Heroku Deployment 

This section is almost the exact same as the previous Heroku Deployment notes. Additionally, similar to your paired homework assignment, the frontend and backend need _one_ GitHub repo.  Additionally, the backend will be deployed to heroku, and the front-end will be deployed to Netlify. Make sure you know who is in charge of creating which repos and who is in charge of deploying which part. The person (or people) who is in charge of creating a repo should share GitHub access with the other group members, and the person (or people) responsible for deploying should share Heroku app access with the other group members.
