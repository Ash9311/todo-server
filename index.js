const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());

// Define routes here (CRUD operations for tasks)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
