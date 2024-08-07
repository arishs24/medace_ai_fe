const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001; // Changed from 5000 to 5001

app.use(cors());
app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection string
const mongoUri = 'mongodb+srv://arishshahab1:mrbgnIdHquMZD1kR@cluster0.o4clj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Create a schema and model for the email addresses
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

const Email = mongoose.model('Email', emailSchema);

// Endpoint to save the email
app.post('/api/save-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).send('Email saved');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
