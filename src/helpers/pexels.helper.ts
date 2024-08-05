import axios from "axios"

const API_KEY = 'uWY6M1nUlaROfdFpxnVnsSLf152ajOcXP5wC2II9vCUf1UDfdaPs4dAF';

export const fetchVideo = async (searchQuery: string | null) => {
    if (!searchQuery) return
    const url = ` https://api.pexels.com/videos/search?query=${searchQuery}&per_page=1&orientation=portrait&size=medium`;

    try {
        const { data } = await axios.get(url, { headers: { Authorization: API_KEY } });
        // const videos = data.videos[0].video_files[0].link;
        return data.videos[0].video_files[0].link
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
