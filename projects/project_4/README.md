# Project #4: Django and Create React App - Group Project

## Overview

For your 4th project, you will be collaborating with a group to make a full CRUD app built with a React frontend and a *separate* Django API server.

## Attendance

There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (9AM - 5PM Eastern) for any meetings and check-ins with instructors as needed.

There are **daily attendance checks on weekdays at 9:00AM EST and 2:00PM EST**. A thread will be posted in the classroom channel at those times and you must respond to it within 2 hours or you will be marked absent. _Again, failure to make an attendance check will result in an absence_.

## Stand-ups

Not required, but a suggestion: consider having stand-ups with your group every day to keep track of how your project progress is coming along. Consider the following points to talk about:

- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

## Technical Requirements

### &#x1F534; Mandatory to pass:

#### MVP - Minimum Viable Product

For this project, you will be making another full CRUD app using the technologies outlined below.

- **Django Backend**: Serve a JSON API with all CRUD operations available across your models. The Django API must be deployed online via Heroku.
  - Your API must have at least one model.
- **React frontend**: Serve a React frontend that consumes your Django API. The React frontend must be deployed online, separately from your API, via Heroku.
- **Two git repositories** hosted on Github, with a link to the relevant live sites, and frequent commits dating back to the very beginning of the project. Commit early, commit often!
- At **least** one Github commit per day per member.
- A **daily tracker** that all group members use (Trello, github issues, or another similar tracker).
- **A `README.md` file** with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
  - Have **links to your hosted and working apps** in the **`README.md`** files in your GitHub repos.


### &#x1F535; Stretch Goals (Not Mandatory):

#### Recommended features

- Configure CORS in your Django API so that **only** your frontend app can access your API.
- Use Sass.
- Include **two or more models**.
- Include either a one-to-many or a many-to-many relationship.
- Use a **third party API**.
- What about using **graphs or visuals** on your data? Chart.js , D3.js.
- **Include portfolio-quality styling**.
- **Use a CSS framework** like Skeleton or Bootstrap.
- **Include User Stories**.
- **Include wireframes** that you designed during the planning process (uploaded to your github repo).
- **Implement React Router**.

:heavy_exclamation_mark: **If you intend to use the following two recommended _super stretch features_, please reach out to Matt first so he can walk you through using them!**

- [Authentication](./auth_example/)
- [Implement Redux (Toolkit)](https://redux-toolkit.js.org/tutorials/quick-start)

#### :heavy_exclamation_mark: Important note about External APIs!

When you are calling External APIs **server-side** that require a key, you should store those keys somewhere private like an `.env` file. They are the only proof that you are you and you are allowed to call that API, after all.

For example, it is very important that you not push your API keys to a public Github repo. Keep them in a `.env` file and make sure you add `.env` to your `.gitignore`. Note that since it won't be pushed into the github repo, your partner won't be able to pull it either. So, make sure both partners write their own local `.env` file with the key!

This is especially true when working with Amazon Web Services (AWS). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

- Approximately 5-10 minutes in length
- Shows off all features of the app
- Explains the technical details
- Explains the technical challenges
- Explains which improvements you might make

Additionally, we would like _each_ group member to answer _at least one_ of the following questions:

- What went well for your group?
- What was your groups biggest struggle?
- What was the most useful tool that your group relied on the most?
- What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate?

- What was one thing _I_ could have done better to benefit my group?

You will be sharing your app and your code. Be prepared to answer questions from the instructors and other students. _All group members should speak during presentation_.

## Meetings with instructors

**Today**<br>
Your group will talk with your dedicated project instructor for 15 minutes to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

_Your instructor will contact you to setup a meeting time for project approval._

## How to Submit Your Project
Your project is due on Monday, Jan 9th at 9:00 am Eastern. Your group will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your group project to [this google sheet](https://docs.google.com/spreadsheets/d/1PBebVv7AfDxj56hM8AMjM7IFWPk8I5_RfyZhsGp-7pI/edit?usp=sharing). Note that this is the order you will be presenting.

Please also fill out this [peer feedback form](https://forms.gle/FqNXZmDCx6P2Dtiv5) before project presentation day. You should submit one for each group mate. Your group mate(s) will **not** be able to see your feedback.

## File Setup

- Each of you, locally, should create a new folder to house your Project_4. This folder should be outside of your class repo.
- Create two new Github repositories. One will be for your front end and one will be for your backend.
- Don't clone the repos.  Instead, generate your React and Django apps inside the Project_4 directory, then use `git remote add origin [url]` to attach the remotes
- Everyone should clone these two repos from Github into the new Project_4 folder that they've created
- Add heroku following the instructions for both React and Django

### Suggested Ways to Get Started

<details><summary>List of ways to get started</summary>

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.
* Create your **user stories**.
* Create a **Trello board** and break down the user stories into cards.
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems.
* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

</details>

### Useful Resources

* **[Group Work](/projects/project_3/working_in_groups.md)**.
* **[Heroku](http://www.heroku.com)** _(for hosting your project)_.
* **[Writing Good User Stories](https://www.theinnovationmode.com/the-innovation-blog/user-stories-in-agile-the-whys-and-hows)** _(for a few user story tips)_.
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_.

## Where to go for help during project week

1. Seek out help online.
1. Seek out help with your classmates. Make sure you post in the sos channel so the instructors can keep track of who is asking for help!
1. Seek out help with our class TA.
1. After all other avenues have been exhausted, seek help from your assigned instructor. Please refer to [How to Ask a Question](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Belcher/wiki/How-To-Ask-A-Question) before you reach out.

**TA Hours** (all normal times EST)
