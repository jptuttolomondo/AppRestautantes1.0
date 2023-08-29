import * as usersService from "../service/users.service.js";
import session from "express-session";
import {generateToken,authToken} from '../utils/utils.js'
const logoutUser = async (req, res) => {
  try {
    const result = await sessionsService.logoutUser();
    res.send({ status: "success", result });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    let { username, password } = req.body;

    username = username.trim();
    password = password.trim();
   
    if (!username && !password)
      return res
        .status(400)
        .send({
          status: "warning",
          warning: "Debes ingresar tus datos para iniciar sesión",
        });
    if (!username)
      return res
        .status(400)
        .send({ status: "warning", warning: "Debes ingresar tu usuario" });
    if (!password)
      return res
        .status(400)
        .send({ status: "warning", warning: "Debes ingresar la contraseña" });
    const user = await usersService.getUserByUsername(username);
    console.log(user)
    if (user.length===0)
      return res
        .status(201)
        .send({ status: "error", error: "Usuario no registrado" });
    if (password !== user[0].password)
      return res
        .status(201)
        .send({ status: "error", error: "Contraseña incorrecta" });
    session.user = {
      firstName: user.firstName,
      lastName: user.lastName,
      dni: user.dni,
      address: user.address,
      username: user.username,
      password: user.password,
      inputDate: user.inputDate,
      payDay: user.payDay,
      role: user.role,
      deleted: user.deleted,
    };

    const accessToken = generateToken(user);

    //res.send({ status: 'success', access_token: accessToken ,user})
    res.send(user);
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

const currentUser=async (req,res)=>{
 
    res.send({ status: 'success', payload: req.user });

}
export { loginUser, logoutUser,currentUser };
