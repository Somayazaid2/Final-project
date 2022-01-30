const express = require("express")
const hbs = require("hbs")
const path=require("path")
const app = express()

app.use( express.urlencoded({extended:true}) )
app.use(express.json())


/*app.use( express.static(path.join(__dirname, "../frontEnd/public")))
app.set('view engine', "hbs")
app.set("views", path.join(__dirname, "../frontEnd/views"))
hbs.registerPartials(path.join(__dirname, "../frontEnd/layouts"))*/

const authRoute = require("../routes/auth")
app.use("/auth",authRoute)
const userRoutes = require('../routes/user')
app.use("/user",userRoutes)
const productRoutes = require('../routes/product')
app.use("/product",productRoutes)
const ordertRoutes = require('../routes/order')
app.use("/order",ordertRoutes)


//app.get('*', (req, res)=>res.render('err404', {pageTitle: "error Page"}))

module.exports = app