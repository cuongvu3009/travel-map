const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins');

dotenv.config();

app.use(express.json());

//connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

//routes
app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
