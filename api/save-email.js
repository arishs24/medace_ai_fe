const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).send('Email saved');
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).send('Server error');
  }
};
