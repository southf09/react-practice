import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3dZHHrSg-rD2f8ZtmWj0vtzfl3t3SnIRX29gAtNG0KE'
        },
        params: {
            query: 'hockey'
        }
    });

    console.log(response);
    return response;
}

export default searchImages;