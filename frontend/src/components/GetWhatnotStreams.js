import axios from 'axios';

export const getUpcomingStreams = async () => {

const getLiveStreams = async () => {
  const formatTime = (inputTime) => {
    const date = new Date(inputTime);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const oneWeekFromToday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  
    // Check if the date is today
    if (date.toDateString() === today.toDateString()) {
      const hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      return `Today - ${hours}`;
    }
    
    // Check if the date is 7 or more days in the future
    if (date > oneWeekFromToday) {
      const monthDay = date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
      const hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      return `${monthDay} - ${hours}`;
    }
  
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    const hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    return `${dayOfWeek} - ${hours}`;
  };
  
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

    const upcomingStreams = response.data.data.searchLivestreams.edges.map(edge => {
      const streamNode = edge.node;
      return {
        image: streamNode.thumbnail.url,
        time: formatTime (new Date(streamNode.startTime).toLocaleString()),
        description: streamNode.title,
        href: 'https://www.whatnot.com/user/hypernovasports'
      };
    });
    return upcomingStreams;
  } catch (error) {
    console.error(error);
  }
}
return getLiveStreams();
};
