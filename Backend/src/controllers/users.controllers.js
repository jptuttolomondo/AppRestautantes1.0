import * as usersService from '../service/users.service.js'

const getUsers= async (req,res)=>{
    try{
        const result = await usersService.getUsers();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createUser= async (req,res)=>{
    try{
        const user = req.body;
        const result = await usersService.createUser(user);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteUser= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await usersService.deleteUser(id);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

// const getNameMozo= async (req,res)=>{
//     try{
//         const {uuid} = req.params;
//         const result = await usersService.getNameMozo(uuid);
//         res.send({ status: 'success', result });

//     }
// catch(error){
//     res.status(500).send({ status: 'error', message: error.message });
// }
// }


const getUserById= async (req,res)=>{
    try{
        const { uuid } = req.params;
  
        const result = await usersService.getUserById(uuid);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}





export {
    getUsers,
    deleteUser,
    createUser,
 //   getNameMozo,
    getUserById,

}

