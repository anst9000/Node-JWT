// create variables for express, mongoose and app
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/authRotes')
const cookieParser = require('cookie-parser');
// const randomstring = require('randomstring');

const app = express()
const port = 3000

require('dotenv').config()


// Create middleware for cors and express.static
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser());


// Define the view engine (ejs)
app.set('view engine', 'ejs')



// Setup the DB connection and run server
const dbURI = process.env.DB_URI
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
  .then((result) => {
		 app.listen(port, () => {
			//  console.log('Random String =', randomstring.generate())
			 console.log(`Server listening to port ${ port }`)
			 console.log('Connected to DB')
		 })
	})
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
	res.render('home')
})

app.get('/smoothies', (req, res) => {
	res.render('smoothies')
})

app.use(authRoutes)

