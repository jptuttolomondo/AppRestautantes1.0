import userModel from '../Models/users.model.js';

export default class UsersDao {
    getUsers = async () => {

         const result = await userModel.find();
        return result;
    }
    getUserById = async (id) => {
        console.log('userbyid',id)
        const result = await userModel.find({_id:id});
        return result;
    }
    deleteUser = async (id) => {
        const result = await userModel.delete(id);
        return result;
    }
// getNameMozo =async(id)=> {
//     const result = await userModel.find({_id:id})
//     return result[0].firstName
// }
    createUser = async (user) => {
        const result = await userModel.create(user);
        return result;
    }
    updateUser = async (id, user) => {
        const result = await userModel.findByIdAndUpdate(id, user);
        return result;
    }
    getUserByUsername= async (username) => {
        const result = await userModel.find({username: username});
        return result;
    }
}