import axios from "axios"

const accessKey = 'gwxpI3F4pGKGGrX6FdTgEE1qsnBur6ZK3ZY59oPXIrc';

export const fetchImage = async (searchQuery: string | null) => {
    if (!searchQuery) return
    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}&per_page=1&orientation=portrait`;

    try {
        const response = await axios.get(url);
        return response.data.results[0].urls.regular
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
