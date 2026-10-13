
require('dotenv').config();
const express=require("express");
const app=express();
const port=3000;
const mongoose = require('mongoose');
const User = require('./model/user.model');
const dns = require('node:dns');


dns.setServers(['8.8.8.8', '8.8.4.4']);
const DBurl = process.env.MONGO_URI;

if (!DBurl) {
  throw new Error('MONGO_URI environment variable is required');
}

app.use(express.json());


mongoose.connect(DBurl)
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });


app.get("/",(req,res)=>{
  res.send("Hello World");
    
});
//post users route
app.use("/api/users",require("./routes/user.routes"));



app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});
