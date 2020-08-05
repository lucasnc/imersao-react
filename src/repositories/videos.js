import config from '../config';

const URL_CATEGORIES = `${config.BASE_URL}/videos`;

function create(request) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(request),
  })
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();

        return res;
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    });
}

export default {
  create,
};
