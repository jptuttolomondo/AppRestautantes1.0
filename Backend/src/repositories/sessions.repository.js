import UsersDao from '../dao/classes/Sessions.dao.js';

export default class SessionsRepository {
    constructor() {
        this.dao = new SessionDao();
    }

    getUsers = async () => {
        const result = await this.dao.getUsers();
        return result;
    }
    createUser = async (mesa) => {
        const result = await this.dao.createUser(mesa);
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
getNameMozo= async (id) => {
    const result = await this.dao.getNameMozo(id);
    return result;
}



   }