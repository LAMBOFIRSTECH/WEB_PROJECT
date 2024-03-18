import config, { taskEndpoints,userEndpoints } from '../config.mjs';
import fetch from 'node-fetch'

//var idTask = document.getElementById('id_task').value;
var matricule = 0
function getAllEndpoint() {
    var sourceUrl = ""
    const taskUri = {}
    var urls=[]
    var url_all_tasks = ""
    var url_one_task = ""
    let found = false

    const regex = /^(.*)\/index\.html$/;
    const correspondre = config.apiUrl.match(regex)
    console.log(correspondre)
    if (!correspondre) {
        console.log("La regex ne matche pas")
    }
    else {
        sourceUrl = correspondre[1]
        var tasks = sourceUrl + taskEndpoints.getAllTasks()
        var one_task = sourceUrl + taskEndpoints.geTaskByMatricule(matricule)
        var delete_one_task = sourceUrl + taskEndpoints.deleteTask(matricule)
        const taskUri = {
            all_tasks: `${tasks}`,
            one_task: `${one_task}`,
            delete_task: `${delete_one_task}`
        };
       
        Object.keys(taskUri).forEach(key => {
            if (key === 'all_tasks') {
                url_all_tasks = taskUri[key];
                found = true
            }
            if (key === 'one_task') {
                url_one_task = taskUri[key];
                found = true
            }
            
        });
        var users_url=sourceUrl + userEndpoints.getAllUsers()
        urls.push(url_all_tasks)
        urls.push(url_one_task)
        urls.push(users_url)
        return urls
    }
}

async function getTasks() {
    var urls=getAllEndpoint()
    try {
        const res = await fetch(urls[0])
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        var data = await res.json()
        console.log(data)

    } catch
    (error) {
        console.error('Error during fetch:', error.message);

    }

}
export async function getUsers() {
    var urls=getAllEndpoint()
    try {
        const res = await fetch(urls[2])
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        var data = await res.json()
        return data

    } catch
    (error) {
        console.error('Error during fetch:', error.message);

    }

}

export async function getAccessToken(){

}
