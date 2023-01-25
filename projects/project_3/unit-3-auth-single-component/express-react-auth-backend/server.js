const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

const db = mongoose.connection



app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(cors())

// const corsOptions ={
//     origin:'http://localhost:3000',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

mongoose.connect(
  'mongodb://localhost:27017/express-auth-example',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('the connection with mongod is established at', 'mongodb://localhost:27017/express-auth-example')
  }
)

db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))



const userController = require('./controllers/users_controller.js')
app.use('/', userController)

app.listen(3001, () => {
    console.log('listening...');
})
