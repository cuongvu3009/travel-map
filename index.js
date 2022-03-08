const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins');
const path = require('path');

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
