const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users.route.js')

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
