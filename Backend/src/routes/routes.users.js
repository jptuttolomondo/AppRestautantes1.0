import { Router } from "express";

const router = Router();

import{ 
    getUsers,
    createUser,
    deleteUser,
    getUserById,
  //  getNameMozo,
  
}from '../controllers/users.controllers.js'

router.get('/users',getUsers)
router.post('/users',createUser)
router.delete('/users',deleteUser)
router.get('/users/:uuid',getUserById)
//router.get('/users/username/:uuid',getNameMozo)


export default router