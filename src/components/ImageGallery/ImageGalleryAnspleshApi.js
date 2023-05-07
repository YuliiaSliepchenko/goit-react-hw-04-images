import axios from 'axios';

export class UnsplashApi {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '35037211-da9c7b82ee428b79405e3aed9';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      q: this.query,
      id: 'id',
      webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
      largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   safesearch: 'true',
      page: this.page,
      per_page: 12,
      key: UnsplashApi.API_KEY,
    });
    return axios.get(`${UnsplashApi.BASE_URL}?${searchParams}`);
  }
}
