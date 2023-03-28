const express = require("express");
const app = express();
const signup_data = require("./models");
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')


// get request fetching form-data
app.get('/', (req,res) => {
    res.render('index',{message: ""})
})


app.get('/signup', (req,res) => {
    res.render('signup')
})




// post request sending data to server
app.post('/login-data', async (req, res) => {

    let userEmail = await signup_data.find({email:req.body.email}, {_id: 0, email:1})
    let userPassword = await signup_data.find({password: req.body.password}, {_id: 0, password:1})
    if(userEmail.length==0 || userPassword.length ==0){
        // res.status(404).send("User Not Found in Database")
        res.render('index', {message: "*Invalid Credentials"})
        
    }else{
        console.log(userEmail[0].email)
        console.log(userPassword[0].password)
    
        try{
            if (req.body.email == userEmail[0].email && req.body.password == userPassword[0].password){
                res.send("Welcome, Logged-In Successfully")
            }
        }
        catch(e){
            res.status(404).send("Login Failed")
        }
    }
    
});

app.post('/signup-data' ,async (req,res) => {
    let form_data = new signup_data({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        dob: req.body.dob,
        profile: req.body.profile,
    });

    await form_data.save()
    console.log(req.body)
    // res.send(req.body)
    res.redirect('/')
})

//fetching signup data from MongoDB Atlas
app.get('/users', async (req,res) => {
    let usersDetails = await signup_data.find()
    res.send(usersDetails)
    // console.log(usersDetails)

    // let userEmail = await signup_data.find({email:"prashantrai642@gmail.com", password: "abc"})
    // console.log(userEmail)   


    let userEmail = await signup_data.find({}, {_id: 0, email:1})
    // console.log(userEmail)
    let userPassword = await signup_data.find({}, {_id: 0, password:1})
    // console.log(userPassword)
})

  module.exports = app;