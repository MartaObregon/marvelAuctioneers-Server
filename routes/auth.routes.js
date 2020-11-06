const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const UserModel = require('../models/User.model')



router.post('/register', (req, res)=>{
  const{email, username, password} = req.body
  if (!username || !email || !password) {
    res.status(500)
      .json({
        errorMessage: 'Please enter username, email and password'
      });
    return;  
  }
  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500)
          .json({
            errorMessage: 'Email format not correct'
        });
        return;  
    }
    console.log('Hello')
    bcrypt.genSalt(12)
      .then((salt)=>{
        bcrypt.hash(password, salt)
          .then((passwordHash)=>{
            UserModel.create({email,username,password: passwordHash})
              .then((user)=>{
                user.passwordHash = "***";
                req.session.loggedInUser = user;
                res.status(200).json(user);
              })
              .catch((err)=>{
                if(err.code === 11000){
                  res.status(500).json({
                    errorMessage: 'username or email entered already exists!'
                  });
                  return;
                }
                else{
                  res.status(500).json({
                    errorMessage: 'Something went wrong!'
                  });
                  return;
                }
              })
          })
      })
});

router.post('/login', (req, res)=>{
  const {email, password} = req.body;
  if ( !email || !password) {
    res.status(500).json({
        error: 'Please enter Username. email and password',
   })
  return;  
  }

  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
            error: 'Email format not correct',
        })
        return;  
    }

  UserModel.findOne({email})
    .then((userData)=>{
      console.log(userData)
      bcrypt.compare(password, userData.password)
        .then((doesItMatch)=>{
          if (doesItMatch){
            userData.passwordHash = '***';
            req.session.loggedInUser = userData
            console.log('Signin', req.session.loggedInUser)
            res.status(200).json(userData)
          }
          else{
            res.status(500).jason({
              error: 'Passwords don\'t match',
            })
            return;
          }
        })
        .catch(()=>{
          res.status(500).json({
            error: 'No user with this email',
        })
        return; 
        })
      
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'Email format not correct',
        message: err
    })
      return;  
    })
})

router.post('/logout', (req, res)=>{
  req.session.destroy();
  res
    .status(204)
    .send()
})





module.exports = router