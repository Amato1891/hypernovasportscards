const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const EbayAuthToken = require('ebay-oauth-nodejs-client');
require('dotenv').config()
const app = express();
const path = require('path');
const axios = require('axios');

// Enable CORS middleware
app.use(cors());

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

app.get('/graphql', async (req, res) => {
  try {
    const data = JSON.stringify({
      "operationName": "GetUserLiveStreams",
      "variables": {
        "first": 6,
        "userId": "445336"
      },
      "query": "query GetUserLiveStreams($userId: ID!, $first: Int = 6) {\n  searchLivestreams(userIds: [$userId], first: $first) {\n    edges {\n      node {\n        ... on LiveStream {\n          id\n          status\n          trailerUrl\n          trailerThumbnailUrl\n          thumbnail {\n            id\n            url\n            __typename\n          }\n          livestreamPromotion {\n            id\n            status\n            __typename\n          }\n          adCampaign {\n            id\n            status\n            __typename\n          }\n          title\n          startTime\n          activeViewers\n          categories\n          categoryNodes {\n            id\n            label\n            type\n            parent {\n              label\n              type\n              __typename\n            }\n            __typename\n          }\n          isUserOnWatchlist\n          totalWatchlistUsers\n          shippingSourceCountryCode\n          user {\n            id\n            username\n            isVerifiedSeller\n            sellerRating {\n              overall\n              shipping\n              packaging\n              accuracy\n              numReviews\n              __typename\n            }\n            profileImage {\n              id\n              bucket\n              key\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  getCategories {\n    type\n    label\n    __typename\n  }\n}"
    });

    const config = {
      method: 'post',
      url: 'https://api.whatnot.com/graphql/?operationName=GetUserLiveStreams',
      headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': 'web'
      },
      data: data
    };
    const response = await axios(config);

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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

console.log(`${process.env.NODE_ENV} ENV DETECTED ON SERVER`)
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
