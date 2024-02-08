import axios from 'axios';
import Cookies from 'js-cookie';


export const getSellerCurrentAuctions = async () => {
  const sellerUsername = 'hypernovasportscards';
  const proxyUrl = 'http://localhost:5000/api/ebay/buy/browse/v1/item_summary/search';
  const ebayApiUrl = 'https://api.ebay.com/buy/browse/v1/item_summary/search';
  const token = Cookies.get('ebay_token');
  // Calculate expiration time in hours (4 hours)
  const expirationHours = 2;
  // Calculate expiration date
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (expirationHours * 60 * 60 * 1000));

  try {
    let apiToken;
    if (!token) {
      console.log('fetching new token')
      // Retrieve eBay OAuth token from backend
      const response = await axios.get(`https://hypernovasportscards-e6663f71b745.herokuapp.com/get-token`);
    
      // Check if response is successful
      if (response.status !== 200) {
        throw new Error('Failed to retrieve eBay OAuth token');
      }

      // Extract the token from the response data
      apiToken = response.data.token;
      Cookies.set('ebay_token', apiToken, { expires: expirationDate });
    } else {
      console.log('using token from cookie')
      apiToken = token;
    }
    const url = process.env.NODE_ENV === 'production' ? ebayApiUrl : proxyUrl;
    console.log(`${process.env.NODE_ENV} ENV detected.`)
    // Make request to eBay API using the retrieved token
    const ebayApiResponse = await axios.get(ebayApiUrl, {
      params: {
        q: 'cards',
        filter: `sellers:{${sellerUsername}}`,
      },
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Return eBay API response data
    return ebayApiResponse.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching seller auctions:', error);
    return null;
  }
};
