const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/financeTracker', { useNewUrlParser: true, useUnifiedTopology: true });

// User routes
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
