![](/ga_cog.png)

<!--- Edit for each cohort
    Format: What to edit (line #)

    Class times (20)
    Attendance check times (22)
    Link to scrum/agile ME (32)
    Link to related models notes (63)
    Today's date (124)
    Due date (129)
    Google sheet link (131)
    Peer feedback form link (133)
-->

# Project #3: MERN Stack - Group Project

## Attendance

There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (9AM - 5PM Eastern) for any meetings and check-ins with instructors as needed.

There are **daily attendance checks on weekdays at 9:00AM EST and 2:00PM EST**. A thread will be posted in the classroom channel at those times and you must respond to it within 2 hours or you will be marked absent. _Again, failure to make an attendance check will result in an absence_.

## Stand-ups

Not required, but a suggestion: consider having stand-ups with your group every day to keep track of how your project progress is coming along. Consider the following points to talk about:

- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

<!-- Need a refresher? Read the morning exercise on scrum/agile development [here](/unit_3/w08d03/morning_exercise)!-->

## Technical Requirements

### &#x1F534; Mandatory to pass:

#### MVP - Minimum Viable Product

For this project, you will be making another full CRUD app using the technologies outlined below.

- A working full-stack application, built by you and your group members, using the MERN stack: **Node.js, Mongoose, Express and React**.
  - Your project should _not_ include _EJS_.
- Two applications, one for your express API and one for your React client.
- At least _one model_ with full **CRUD**.
- **Be deployed online** and accessible to the public via **Heroku**
- :heavy_exclamation_mark: **Two** git repositories **not inside the class repo**, one for your backend and one for your frontend.
  - _At least_ one GitHub commit per day _per person_.
- Use some sort of **daily tracker** that all group members use to help organize your workflow (e.g. Trello).
- **A `README.md` file** with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
  - Have **links to your hosted and working apps** in the **`README.md`** files in your GitHub repos.

### &#x1F535; Stretch Goals (Not Mandatory):

#### Recommended Features

- Pull from a 3rd party API
- Have two models that are unrelated
- Include portfolio-quality styling
- Use a CSS framework like Skeleton or Bootstrap
- Inside in your `README.md`:
  - Include User Stories
  - Include **wireframes** that you designed during the planning process

:heavy_exclamation_mark: **If you intend to use the following two recommended _super stretch features_, please reach out to Matt first so he can walk you through using them!**

- Have two models that are related
- Incorporate Google Maps
- Use `socket.io` for real-time updates (like gmail) and collaborative interaction (like chat rooms).
- User Authentication

#### :heavy_exclamation_mark: Important note about External APIs!

Do not use any APIs that request  credit card. This is especially true when working with Amazon Web Services (AWS). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).  If you are certain that you really want to use an API that requries a credit card, please reach out to your instructor

## Make Two(2) New Repos & Setup for Heroku Deployment

Before you begin coding, have one person in your group make a new GitHub repo for your project and invite the other member(s) as a collaborator. _Take the following steps to ensure you have the right file structure/set up in order to deploy your site to Heroku._

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

1. Make _two(2)_ separate repos, one for your Express API and one for your React frontend. Both of these repos should be in one of your group members' personal GitHubs and **not** in the General Assembly Enterprise GitHub. You can have the same person create both repos, or have one person create one and another person create the other. The _owner_ of each repo should add the other member(s) of the group as _collaborators_ under the `Settings` tab of the repo. The collaborator(s) should clone the repos. It's the same process as the paired homework!

2. _If you did not initialize the repo with a Node .gitignore_ make sure that inside this new repo you create a `.gitignore` file in the root of the repository directory. Put `node_modules` as the content of this file.

  - After installing express, do a `git status` before adding and committing. Make sure node_modules and .env are not being pushed up to the repo and are correctly in your `.gitignore`! You can also copy the [class repo's .gitignore](/.gitignore)
  - If you see the node_modules folder on your github repo, you haven't properly ignored it!
    - Read [here](https://github.com/Krafalski/probable-meme/blob/master/README.md) on how to get rid of node_modules if you didn't ignore properly

3. On `npm init`, specify `server.js` as your entry point

4. If you did not set up your `entry point` in `package.json` correctly, make sure that you edit your `pacakge.json` so that `main` is set to `server.js`

5. Make sure your `server.js` and `package.json` are in the **root** of your project repositories

6. **To set up your shared database for deployment, [please follow these notes](setting_up_collab_db.md). You will NEED to do this before starting anything else on your project.**

## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

- Approximately 5-10 minutes in length
- Shows off all features of the app
- Explains the technical details
- Explains the technical challenges
- Explains which improvements you might make

Additionally, we would like _each_ group member to answer _at least one_ of the following questions:

1. What went well for your group?
2. What was your groups biggest struggle?
3. What was the most useful tool that your group relied on the most?
4. What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate?

You will be sharing your app and your code. Be prepared to answer questions from the instructors and other students. _All group members should speak during presentation_.

## Meetings with instructors

**TODAY**<br>
Your group will talk with your dedicated project instructor to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project

Your project is due on Friday, Dec 16 at 9:00 am ET. Your group will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your group project to [this google sheet](https://docs.google.com/spreadsheets/d/1PBebVv7AfDxj56hM8AMjM7IFWPk8I5_RfyZhsGp-7pI/edit?usp=sharing). Note that this is the order you will be presenting.

Please also fill out this [peer feedback form](https://forms.gle/jgGius3MJkjrFz319) before project presentation day. Your group mate(s) will **not** be able to see your feedback.

## Where to go for help during project week

1. Seek out help online.
1. Seek out help with your classmates. Make sure you post in the sos channel so the instructors can keep track of who is asking for help!
1. Seek out help with our class TA.
1. After all other avenues have been exhausted, seek help from your assigned instructor

**TA Hours** (all normal times EST)

## Suggested Ways to Get Started

- **Wireframe** Make a drawing of what your app will look like in all of its stages (what does it look like as soon as you log on to the site? What does it look like once data is retrieved?).

- **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

- **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

- **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**
    Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**
    Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**
    Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Past Student Examples

- [A Novel Idea](https://infinite-stream-72673.herokuapp.com/)
- [Travelgram](https://travel-gram-app.herokuapp.com/)
- [Chisme](https://chisme-proj.herokuapp.com/)
- [console.love](https://consoledotlove.herokuapp.com/)
- [WMXN](https://polar-bayou-58001.herokuapp.com/)

## Useful Resources

* **[Trello](https://www.trello.com)**
* **[Jira](https://www.atlassian.com/software/jira)**
* **[Pivotal](https://www.pivotaltracker.com/)**
* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](../../../../wiki/Mongo-Cheatsheet)**
