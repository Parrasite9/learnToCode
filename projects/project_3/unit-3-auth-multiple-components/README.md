This is a very basic example of building out user auth in the MERN stack. It uses a separate front and back end. They can be found in the top level directories in this repo.


```
express-react-auth-backend
```
The backend is written in Express and uses MongoDB. In order to use it, clone it to your local machine and then `npm i` to install the required dependencies. Once that's done, run `mongod` in the terminal, open another tab and run `nodemon`. The server is now up and ready for requests.



```
cra-auth-example
```
The Create-React-App frontend is written solely in React. It uses functional components, lifting state and the useState() hook. In order to run the app, clone it to your local machine, run `npm i` to install the necessary dependencies and then `npm start` to boot up the app. You can find the app running now on localhost:3000.
