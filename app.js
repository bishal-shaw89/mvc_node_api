const express = require('express');
const mongoose = require('mongoose');
const config = require("./src/config");
const authRoutes = require('./src/routes/authRoutes');

const app = express();

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
})

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(config.post, () => console.log(`Server started on port ${config.post}`));