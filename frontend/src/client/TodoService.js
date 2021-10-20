import axios from 'axios'

export async function getAll() {
    return axios.get('http://localhost:9000/tasks/getall');
}

export async function add(taskName) {
    body = {name: taskName}
    return axios.post('http://localhost:9000/tasks/add', body);
}