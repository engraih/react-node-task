const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const MONGODB_URI ='mongodb://localhost/kkkkk'

const app = express();

const Route = require('./routes/post')


app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(cors())


app.use('/api', Route)

mongoose
  .connect(
    MONGODB_URI, {
      
      
    }
  )
  .then(result => {
    const port = process.env.port || 3300
    app.listen(port, console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.log(err);
  });
