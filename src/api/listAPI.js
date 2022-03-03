import axios from 'axios'

const getListAPI = function () {
  return axios.get('/list.json')
}

export { getListAPI }
