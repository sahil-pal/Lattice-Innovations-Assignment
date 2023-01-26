require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {ROOT} = require('./utils/config').ROUTES;
const db = require('./db/connect');
const app = express();

db.connect();
app.use(cors());
app.use(express.json());
app.use('/images',express.static('images'));

app.use(ROOT+"patient",require('./api/routes/patient.js'));
app.use(ROOT+"hospital",require("./api/routes/hospital.js"));

const server = app.listen(process.env.PORT || 8080,(err)=>{
  if(err){
    console.log(`Failed to start Server`);
  }
  else{
    console.log(`Server started on port ${server.address().port}`);
  }
})



