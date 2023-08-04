import axios from 'axios';

const pageSize = 10;
// const apiKey = '99c94c4706bc4b3a84a73e98c1c9442f';
const apiKey = 'c6786256472e4801a0977ddc36798a2a';

export const fetchDataFromApi = (page = 1) => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=ua&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`)
    .then(data => {
      if (!data) {
        throw new Error();
      }

      return data.data.articles;
    });
};
