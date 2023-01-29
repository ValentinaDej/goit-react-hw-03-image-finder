import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    per_page: 12,
  },
});
const apiKey = '31094893-91e9afbe8165d9cedcce56644';

export const searchGallery = async q => {
  const data = await instance.get('/', {
    params: {
      q,
      key: apiKey,
      image_type: 'photo',
      rientation: 'horizontal',
    },
  });

  return data;
};
