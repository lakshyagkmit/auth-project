const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

routes.registerRoutes(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
