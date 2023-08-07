import UsersDao from '../dao/classes/Users.dao.js';

export default class UsersRepository {
    constructor() {
        this.dao = new UsersDao();
    }

    getUsers = async () => {
        const result = await this.dao.getUsers();
        return result;
    }
    createUser = async (user) => {
             const result = await this.dao.createUser(user);
           return result;
    }
        deleteUser = async (id) => {
        const result = await this.dao.deleteUser(id);
        return result;
    }
getUserById = async (id) => {
    
    const result = await this.dao.getUserById(id);
    return result;
}
// getNameMozo= async (id) => {
//     const result = await this.dao.getNameMozo(id);
//     return result;
// }
getUserByUsername= async (username) => {
    const result = await this.dao.getUserByUsername(username);
    return result;
}


   }