import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';


const options = {
  method: 'GET',
//   url: BASE_URL,
  params: {
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}`, options);

    return data;
    
}