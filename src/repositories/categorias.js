import config from '../config';

const URL_CATEGORIES = `${config.BASE_URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();

        return res;
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();

        return res;
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    });
}

export default {
  getAllWithVideos,
  getAll,
};
