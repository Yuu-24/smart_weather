const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000; // or any other port you prefer

app.use(cors());

app.get('/get-all-assets', async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:3000/query?channelid=mychannel&chaincodeid=basic&function=GetAllAssets'
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
