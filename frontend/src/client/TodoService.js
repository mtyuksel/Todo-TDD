// import axios from 'axios'

export async function getAll() {
    return [{id: "1", name: "test1"},{id: "2", name: "test2"}]
    // return axios.get('http://localhost:9000/tasks/getall');
}

export async function add(task) {
    return {
        id: "1123",
        name: task
    }
    // return axios.post('http://localhost:9000/tasks/add', task);
}