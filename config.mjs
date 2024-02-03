// config.mjs
// apiUrlHttps gérer les appels vers https

const config = {
    apiUrl: process.env.API_URL || 'http://lambo.lft:5163/index.html',
    apiUrlHttps: process.env.API_URL || 'https://lambo.lft:7082/index.html',
    apiKey: process.env.API_KEY || 'your-api-key'
};
const taskEndpoints = {
    select: (Matricule) => `/SelectTask/${Matricule}`,
    getTasks: '/GetTasks',
    // createUser: '/users',
    // updateUser: (userId) => `/users/${userId}`,
    delete: (Id) => `/DeleteTask/${Id}`,
};

const userEndpoints = {
    select: (ID) => `/SelectUser/${ID}`,
    get: '/GetUsers',
    createUser: (identifiant ,nom) =>`/CreateUser/${identifiant}/${nom}`,
    updateUser: (userId) => `/UpdateUser/${userId}`,
    deleteUser: (Id) => `/DeleteUser/${Id}`,
};

export default config;
export { taskEndpoints ,userEndpoints}
