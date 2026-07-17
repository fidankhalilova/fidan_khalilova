const express = require('express');
const cors = require('cors');
const connectDb = require('./db/ConnectDb');
const path = require('path');
require('dotenv').config();

const app = express();

// Step 1: Connect Database
connectDb();

//Step 2: Middleware
const allowedOrigins = [
    'http://localhost:3000',
    'https://fidan-khalilova.vercel.app' 
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
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