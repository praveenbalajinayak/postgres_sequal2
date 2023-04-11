const express = require('express');
var bodyParser = require('body-parser');
const app = express()

const usersRoutes = require('./routes/users1.js')
//const User = require('./models/user');
//const Contact = require('./models/contact');

//var userCtrl = require('./controllers/userController');


require('./models')


app.use(bodyParser.json())
app.get('/', function(req,res){
    res.send('Hello world')
})

//app.get('/add',userCtrl.addUser);

//app.get('/users',userCtrl.getUsers);

//app.get('/users/:id',userCtrl.getUser);

//app.post('/users',userCtrl.postUsers);

//app.delete('/users/:id',userCtrl.deleteUsers);






//User.sync({force : true});
//Contact.sync({force:true});
//User.drop();

app.use("/", usersRoutes);


app.listen(8888, ()=>{
    console.log('App will run on http://localhost:8888')
})


