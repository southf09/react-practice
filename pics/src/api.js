import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3dZHHrSg-rD2f8ZtmWj0vtzfl3t3SnIRX29gAtNG0KE'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;