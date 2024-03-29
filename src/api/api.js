import axios from 'axios';

let prefix = 'http://127.0.0.1:8000/api';

export function getComments() {
    return axios.get(prefix + '/comments').then(response => response.data)
}
export function makeComment(data) {
    return axios.post(prefix + '/comments', data).then(response => response.data)
}