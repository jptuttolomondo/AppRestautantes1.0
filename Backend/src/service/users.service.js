import UsersRepository from '../repositories/users.repository.js';

const usersRepository = new UsersRepository();

const createUser = async(user) => {

    const result = await usersRepository.createUser(user);
    return result;
}

const getUsers = async () => {
    const result = await usersRepository.getUsers();
    return result;
}
const getUserById = async (id) => {
   
    const result = await usersRepository.getUserById(id);
    return result;
}

// const getNameMozo = async (id) => {
//     const result = await usersRepository.getNameMozo(id);
//     return result;
// }

const getUserByUsername = async (username) => {
    const result = await usersRepository.getUserByUsername(username);
    return result;
}

const deleteUser = async (id) => {
    const result = await usersRepository.deleteUser(id);
    return result;
}

export {
    createUser,
    getUsers,
    deleteUser,
    getUserById,
   // getNameMozo,
    getUserByUsername
}