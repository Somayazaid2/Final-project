const Product = require("../models/Product");
const path=require("path")
const fs = require("fs")
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


const router = require("express").Router();
const multer = require("multer")
const upload=require("./uploadFile")
const { Mongoose } = require("mongoose");
//CREATE

router.post("/add", verifyTokenAndAdmin , upload.single('image'), async function (req, res) {
  fs.rename(req.file.path, `${req.file.path}${path.extname(req.file.originalname)}`, ()=>{})
 
  //await req.user.save()
  //res.send(req.user)
  const newProduct = new Product(req.body)
  newProduct.img = `${req.file.path}${path.extname(req.file.originalname)}`

  try {
    const savedProduct = await newProduct.save()
    res.status(200).send(savedProduct)
  } catch (err) {
    res.status(500).send(err)
  }
})

//UPDATE
/*router.post("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id)
    // res.send(req.body)
   // const imgProduct=req.file
product ={_id:product._id, ...req.body}
await product.save()
      //    const updatedProduct = await Product.findByIdAndUpdate(
      // req.params.id,
      //  req.body   )
    res.status(200).send(product)
  } catch (err) {

    res.status(500).send(err.message)
  }
})*/
router.post("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set:req.body,
      },
      { new: true }
    )
    res.status(200).send(updatedProduct)
  } catch (err) {
    res.status(500).send(err.message)
  }
})


//DELETE
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...")
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//GET SINGLE PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//GET ALL PRODUCTS
router.get("/all", async (req, res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1)
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await Product.find()
    }

    res.status(200).send(products)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
