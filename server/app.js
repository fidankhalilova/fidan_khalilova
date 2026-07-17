const express = require('express');
const cors = require('cors');
const connectDb = require('./db/ConnectDb');
const path = require('path');
require('dotenv').config();

const app = express();

// Step 1: Connect Database
connectDb();

//Step 2: Middleware
app.use(cors());
app.use(express.json());

//Step 3: Routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillsRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));

app.get('/', (req, res) => {
    res.send('Backend server is running perfectly!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}. Success!`)
});

module.exports = app;