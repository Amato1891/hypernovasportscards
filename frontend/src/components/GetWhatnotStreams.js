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
    const devUrl = 'http://localhost:5000';
    const prodUrl = 'https://hypernovasportscards-e6663f71b745.herokuapp.com';
    const url = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;

    // Make requests to your proxy server
    const response = await axios.get(`${url}/graphql`);

    if (![200, 201, 202].includes(response.status)) {
      console.error(`ERROR: Received HTTP code ${response.status}`);
      return;
    }

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
    return [];
  }
}
return getLiveStreams();
};
