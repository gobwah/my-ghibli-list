const BASE_URL = `https://ghibliapi.herokuapp.com`
const RECORD_LIMIT = 250

export function getAllFilmsUrl(fields = '', limit = RECORD_LIMIT) {
  return `${BASE_URL}/films?limit=${limit}${
    fields && fields.trim() ? `&fields=${fields}` : ''
  }`
}

export function getFilmUrl(id, fields = '') {
  return `${BASE_URL}/films/${id}${
    fields && fields.trim() ? `?fields=${fields}` : ''
  }`
}
