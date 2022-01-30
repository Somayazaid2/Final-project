const router = require("express").Router()
const User = require("../models/User")
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken")


//UPDATE ACCOUNT
router.post("/update/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = req.body.password
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedUser)
  } catch (err) {
    res.status(500).send(err)
  }
})

//DELETE ACCOUNT
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("User has been deleted...")
  } catch (err) {
    res.status(500).send(err)
  }
})

//SHOW SINGLE USER
router.get("/single/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).send(others)
  } catch (err) {
    res.status(500).send(err)
  }
})

//SHOW ALL USERS
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new
  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
    res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err)
  }
})

//SHOW USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ])
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//LOGOUT
router.post("/out",verifyToken,async(req,res)=>{
  try{
        req.user.token != req.accessToken
       // await req.user.save()
        res.status(200).send("logged out")
}
catch(e){
    res.status(500).send({apiStatus:false, data:e.message})
}
})







module.exports = router
