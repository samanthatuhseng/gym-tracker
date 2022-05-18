const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// tell the server to use the models files
//load the routers from other files
const gymSessionRouter = require('./routes/gym-session.js');
const usersRouter = require('./routes/users.js');

// routers are added as middleware
app.use('/gym-log', gymSessionRouter);
app.use('/users', usersRouter);

//server listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});