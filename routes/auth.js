const Joi = require('joi');
const bcrypt = require('bcrypt');
const config = require("config");
const jwt = require("jsonwebtoken");
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(`Authentication Request Received for email: ${req.body.email}`);
  try {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(404).send('Invalid email or password.');
  
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email
      },
      config.get("jwtPrivateKey")
    );
    console.log(`User Authenticated: ${user.email}`);
    res.status(200).send({accessToken:token});
  } catch (err) {
    console.log(`Error logging in: ${err}`);
    res.status(400).send({message: 'Internal server error'});
  }
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router; 
