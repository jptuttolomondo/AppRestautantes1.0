import { Router } from "express";
const router = Router();
import { userModel } from "./../models/users.model.js";
import session from "express-session";

router.post('/login', async (req, res) => {
    try {
        let {username, password } = req.body;
        username= username.trim();
        password = password.trim();

        if (!username && !password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tus datos para iniciar sesión' });
        if (!username) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tu correo' });
        if (!password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar la contraseña' });

        const user = await userModel.findOne( {username});
        const usernameExists = await userModel.exists({ username });

        if (!usernameExists) return res.status(201).send({ status: 'error', error: 'Usuario no registrado' });
        if (user.password!==password) return res.status(201).send({ status: 'error', error: 'Contraseña incorrecta' });

        session.user = {
            firstName: user.firstName,
            lastName:user.lastName,
            dni:user.dni,
            address:user.address,
            username:user.username,
            password: user.password,
            inputDate:user.inputDate,
            payDay:user.payDay,
            role: user.role,
            deleted:user.deleted
        }
//console.log(session.user)
//console.log(user)
        res.send(user._id);
    } catch (error) {
        res.status(500).send({ status: 'error', error });
        console.log(error);
    }
});

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     console.log('body',username,password)
  
//     try {
//       const user = await userModel.findOne({username:username});
   
//       if (!user) res.status(400).send({ status: "error", error: "Incorrect credentials" });
//       else{
//       if (user.username === "admin" && user.password === "goring2311") {
//         req.session.user = {
//           username: `${user.username}`,
//           role: "ADMIN",
//         };
//       }
//       else {
//         console.log('entro aui')
//         req.session.user = {
//           username: username,
//              role: "USER",
//         };
//         console.log(req.session.user)
//       }
//       res.send({ status: "success", message: "Login success" });
//     }} catch (error) {
//       res.status(500).send({ error: "error", error });
//     }
//   });
  
  router.get('/logout', (req, res) => {
    console.log('logout')
    req.session.destroy(err => { 
      if (err) res.status(500).send({ status: "error", error: 'logout fallido'});
      res.status(200).send({status:200,message:"logout ok"});
    });
  });
  

  export default router;


  /*
  router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email.trim();
        password = password.trim();

        if (!email && !password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tus datos para iniciar sesión' });
        if (!email) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tu correo' });
        if (!password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar la contraseña' });

        const user = await userModel.findOne({ email });
        const emailExists = await userModel.exists({ email });

        if (!emailExists) return res.status(400).send({ status: 'error', error: 'El correo que ingresaste no coincide con ningún usuario registrado' });
        if (!user) return res.status(400).send({ status: 'error', error: 'Contraseña incorrecta' });

        req.session.user = {
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            age: user.age,
            password: user.password,
            role: user.role
        }

        res.redirect('/products');
    } catch (error) {
        res.status(500).send({ status: 'error', error });
        console.log(error);
    }
});


router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.status(500).send({ status: 'error', error: 'Logout fail' });
        res.redirect('/')
    })
});
*/