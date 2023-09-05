const express = require("express");
require("../DB/connect"); // This is used to connect this page with mongodb.
const User = require("../model/userSchema"); //this is schema
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const router = express.Router();

router.get("/", (req, resp) => {
  resp.send("Helllo from router js");
});

// --------------------------------------------------------------------------------------

router.post("/register", async (req, resp) => {
  const { name, email, phone, work, password, cpassword } = req.body;





  try {

       
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return resp.status(400).json({ error: "fill all the fields" });
  } 

    
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return resp.status(422).json({ message: "Email already exist" });
      
    } else if (password != cpassword) {
      return resp.status(422).json({ message: "password is not matching" });
    }

    //create a new user
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      work,
      password: hashedPassword,
      cpassword: hashedPassword,
    });

    await newUser.save();

    return resp.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.log(error);
    return resp.status(500).json({ message: "User registration failed." });
  }
});

// --------------------------------------------------------------------------------------

router.post("/login", async (req, resp) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return resp.status(400).json({ message: "fill the data" });
  }

  let existingUser;
  try {

 
  
    existingUser = await User.findOne({ email });

    const isMatch = await bcrypt.compare(
      password,
      existingUser ? existingUser.password : ""
    );

    //token generation
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.SECRET_KEY
    );

    existingUser.tokens.push({ token });

    //adding to cookies
    resp.cookie("jwttoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    await existingUser.save();

    if (!isMatch || !existingUser) {
      resp.status(404).json({ message: "Invaild Crediantials" });
    } else {
      resp.status(201).json({ message: "User login successfully!!!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
