const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin:req.body.isAdmin,
     
  })

  try {
    const savedUser = await newUser.save()
    res.status(200).send(savedUser)
  } catch (err) {
    res.status(500).send(err)
  }
})

//LOGIN

router.get('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        if(!user)  res.status(404).send("Wrong User Name");
        const originalPassword = user.password
        const inputPassword = req.body.password
        if(originalPassword != inputPassword) res.status(404).send("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,{expiresIn:"3d"}
        )
        const { password, ...others } = user._doc;  
        res.status(200).send({...others, accessToken});
         
    }catch(err){
        res.status(500).send(err)
    }

})

module.exports = router
