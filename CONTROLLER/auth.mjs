import { get } from 'http';
import config, { taskEndpoints } from '../config.mjs';
import fetch from 'node-fetch'

//var idTask = document.getElementById('id_task').value;
var id_task = 0
function getAllEndpoint() {
    var sourceUrl = ""
    const taskUri = {}
    const regex = /^(.*)\/index\.html$/;
    const correspondre = config.apiUrl.match(regex)
    if (!correspondre) {
        console.log("La regex ne fonctionne pas")
    }
    else {
        sourceUrl = correspondre[1]
        var tasks = sourceUrl + taskEndpoints.getTasks
        var one_task = sourceUrl + taskEndpoints.select(id_task)
        var delete_one_task = sourceUrl + taskEndpoints.delete(id_task)
        const taskUri = {
            all_taks: `${tasks}`,
            one_task: `${one_task}`,
            delete_task: `${delete_one_task}`
        };
        return taskUri
    }
}

async function getTask() {
    var url = ""
    var taskUri = getAllEndpoint()
    let found = false
    Object.keys(taskUri).forEach(key => {
        if (key === 'all_taks') {
            url = taskUri[key];
            found = true
        }

    });
    
    try {
        const res = await fetch(url)
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
getTask()