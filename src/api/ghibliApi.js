const BASE_URL = `https://ghibliapi.herokuapp.com`
const RECORD_LIMIT = 250

function getUrlMethod(name, all = false) {
  return all
    ? (fields = '', limit = RECORD_LIMIT) =>
        `${BASE_URL}/${name}?limit=${limit}${
          fields && fields.trim() ? `&fields=${fields}` : ''
        }`
    : (id, fields = '') =>
        `${BASE_URL}/${name}/${id}${
          fields && fields.trim() ? `?fields=${fields}` : ''
        }`
}

function getSimpleUrlMethod(name, all = false) {
  return all
    ? () => `${BASE_URL}/${name}/`
    : (id) => `${BASE_URL}/${name}/${id}`
}

export const url = {
  films: {
    getAll: getUrlMethod('films', true),
    getOne: getUrlMethod('films'),
    getSimpleAll: getSimpleUrlMethod('films', true),
    getSimpleOne: getSimpleUrlMethod('films'),
  },
  people: {
    getAll: getUrlMethod('people', true),
    getOne: getUrlMethod('people'),
    getSimpleAll: getSimpleUrlMethod('people', true),
    getSimpleOne: getSimpleUrlMethod('people'),
  },
  species: {
    getAll: getUrlMethod('species', true),
    getOne: getUrlMethod('species'),
    getSimpleAll: getSimpleUrlMethod('species', true),
    getSimpleOne: getSimpleUrlMethod('species'),
  },
  locations: {
    getAll: getUrlMethod('locations', true),
    getOne: getUrlMethod('location'),
    getSimpleAll: getSimpleUrlMethod('locations', true),
    getSimpleOne: getSimpleUrlMethod('locations'),
  },
  vehicles: {
    getAll: getUrlMethod('vehicles', true),
    getOne: getUrlMethod('vehicles'),
    getSimpleAll: getSimpleUrlMethod('vehicles', true),
    getSimpleOne: getSimpleUrlMethod('vehicles'),
  },
}
