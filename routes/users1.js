
const express = require('express');
//const app = express()

const { addUser, getUsers , getUser , postUsers , deleteUsers} = require('../controllers/userController');





//var userCtrl = require('./controllers/userController');
const router = express.Router();
 
router.get('/add',addUser);

router.get('/users',getUsers);

router.get('/users/:id',getUser);

router.post('/users',postUsers);

router.delete('/users/:id',deleteUsers);


module.exports = router;