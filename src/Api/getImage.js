import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35037211-da9c7b82ee428b79405e3aed9';

function settingUrl(query, page) {
  return {
    key: API_KEY,
    q: query,
    page: page,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
}

export default async function getImages(query, page) {
  const params = new URLSearchParams(settingUrl(query, page));
  const res = await axios.get(`${BASE_URL}?${params}`);
  return res.data;
}
