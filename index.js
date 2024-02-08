const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const EbayAuthToken = require('ebay-oauth-nodejs-client');
require('dotenv').config()
const app = express();
const path = require('path');

// Enable CORS middleware
app.use(cors());

console.log(`${process.env.NODE_ENV} ENV DETECTED ON SERVER`)
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('/build'));

  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.get('/get-token', async (req, res) => {
  console.log('getting token')
  try {
    // Create a new instance of EbayAuthToken
    const ebayAuthToken = new EbayAuthToken({
      clientId: process.env.REACT_APP_EBAY_CLIENT_ID,
      clientSecret: process.env.REACT_APP_EBAY_CLIENT_SECRET,
      redirectUri: 'https://www.hypernovasportscards.com/'
    });
    // Get the eBay OAuth token
    const token = await ebayAuthToken.getApplicationToken('PRODUCTION');
    console.log('CREATED TOKEN')
    console.log(token)
    // Send the token in the response
    res.json({ token });
    return token;
  } catch (error) {
    // Log the error
    console.error('Error obtaining eBay OAuth token:', error);
    // Send an error response
    res.status(500).json({ error: 'Failed to obtain eBay OAuth token' });
  }
});

app.get('/getToken', async (req, res) => { 
  res.json({ name:'Jim' });
});

// Define the target URL for the eBay API
const ebayApiUrl = 'https://api.ebay.com';

// Create a proxy middleware instance
const ebayProxy = createProxyMiddleware({
  target: ebayApiUrl,
  changeOrigin: true, // Needed for virtual hosted sites
  pathRewrite: {
    '^/api/ebay': '', // Remove '/api/ebay' from the beginning of URL path
  },
});

// Use the proxy middleware for requests to '/api/ebay'
app.use('/api/ebay', ebayProxy);



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
