const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

const searchAudio = async () => {
  try {
    const query = 'piano'; // Example search query
    const url = `https://freesound.org/apiv2/search/text/?query=${query}&token=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data.results); // Array of search results
  } catch (error) {
    console.error('Error searching for audio:', error);
  }
};

searchAudio();