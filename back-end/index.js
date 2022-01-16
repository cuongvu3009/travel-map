const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const pinRoutes = require('./routes/pin');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

//connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

//routes
app.use('/api/pins', pinRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
