// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = 'mongodb+srv://root:qwerty1234@cluster0.pnhu24p.mongodb.net/dumpdb'; // Replace this with your connection string

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
