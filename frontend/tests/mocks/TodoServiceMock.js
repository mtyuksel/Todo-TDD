import axios from 'axios'

export async function getAll() {
    return axios.get('http://localhost:9001/tasks/getall');
}

export async function add(taskName) {
    let body = {name: taskName}
    return axios.post('http://localhost:9001/tasks/add', body);
}