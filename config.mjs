// config.mjs
// apiUrlHttps gérer les appels vers https

const config = {
    apiUrl: process.env.API_URL || 'http://lambo.lft:5163/index.html',
    baseUrl: process.env.API_URL || 'http://lambo.lft:5163',
    apiUrlHttps: process.env.API_URL || 'https://lambo.lft:7082/index.html',
    apiKey: process.env.API_KEY || 'your-api-key'
};
const taskEndpoints = {
    geTaskByMatricule: (Matricule) => `/api/v1.0/TasksManagement/GetTaskByID/${Matricule}`,
    getAllTasks: '/api/v1.0/TasksManagement/GetAllTasks',
    createTask: '/api/v1.0/TasksManagement/CreateTask',
    updateTask: `/api/v1.0/TasksManagement/UpdateTask/`,
    deleteTask: (Matricule) => `/api/v1.0/TasksManagement/DeleteTask/${Matricule}`,
};

const userEndpoints = {
    getUserByID: (ID) => `/api/v1.0/UsersManagement/GetUserByID/${ID}`,
    getAllUsers: `/api/v1.0/UsersManagement/GetAllUsers`,
    createUser: (identifiant, nom) => `/CreateUser/${identifiant}/${nom}`,
    updateUserPassword: (userId) => `/api/v1.0/UsersManagement/SetUserPassword/${userId}`,
    deleteUser: (Id) => `/api/v1.0/UsersManagement/DeleteUser/${Id}`,
};

const accessToken={
    getAccessToken: (email) => `/api/v1.0/AccessToken/Login/?email=${email}` 

};

export default config;
export { taskEndpoints, userEndpoints,accessToken }
