import { Router } from "express";
const router = Router();
import { userModel } from "./../models/users.model.js";
router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({deleted:false});
    //const userFinal = users.filter((user) => user.deleted === false);
    res.send({ result: "success", payload: users });
  } catch (error) {
    console.error(error);
  }
});




router.get("/users/:uuid", async (req, res) => {
  try {
    const {uuid} = req.params
    const user = await userModel.find({_id:uuid});
    console.log(user);
    //const userFinal = users.filter((user) => user.deleted === false);
    res.send({ result: "success", payload: user });
  } catch (error) {
    console.error(error);
  }
});



router.post("/user", async (req, res) => {
  let {
    firstName,
    lastName,
    dni,
    address,
    username,
    password,
    inputDate,
    payDay,
  } = req.body;

  try {

    firstName=  firstName.trim()
    lastName=  lastName.trim()
    dni= dni.trim()
    address= address.trim()
    username= username.trim()
    password= password.trim()
    inputDate= inputDate.trim()
    payDay=   payDay.trim()



    //if (!firstName || !lastName || !dni || !address || !username || !password||!inputDate||!payDay)
    const missingFields = [];
      if (!firstName) missingFields.push('nombre');
      if (!lastName) missingFields.push('apellido');
      if (!username) missingFields.push('usuario');
      if (!dni) missingFields.push('dni');
      if (!password) missingFields.push('contraseña');
      if (!address) missingFields.push('direccion');
      if (!inputDate) missingFields.push('fecha de ingreso');
      if (!payDay) missingFields.push('día de pago');

      if (missingFields.length > 0) {
          const fields = missingFields.join(', ');
          return res.status(400).send({ status: 'warning', warning: `Debes ingresar ${missingFields.length === 1 ? 'el' : 'los'} campo${missingFields.length === 1 ? '' : 's'} ${fields}` });
      }
   
      //res.status(400).send({ error: "datos incompletos" });

      let role;
      if(username === "jptuttolomondo" && password === "goring"){
          role = "ADMIN";
      }
      else {
          role = "USER";
      }

    const users = await userModel.create({
      firstName,
      lastName,
      dni,
      address,
      username,
      password,
      role:role,
      inputDate,
      payDay,
    });

    res.status(200).send({ result: "success", payload: 'Usuario Creado correctamente' });
  } catch (error) {
    console.error(error);
  }
});



router.post('/register', async (req, res) => {
  try {

    
      let { first_name, last_name, email,  password } = req.body;
      first_name = first_name.trim();
      last_name = last_name.trim();
      email = email.trim();
      age = age.trim();
      password = password.trim();

      const missingFields = [];
      if (!first_name) missingFields.push('nombre');
      if (!last_name) missingFields.push('apellido');
      if (!email) missingFields.push('correo');
      if (!age) missingFields.push('edad');
      if (!password) missingFields.push('contraseña');

      if (missingFields.length > 0) {
          const fields = missingFields.join(', ');
          return res.status(400).send({ status: 'warning', warning: `Debes ingresar ${missingFields.length === 1 ? 'el' : 'los'} campo${missingFields.length === 1 ? '' : 's'} ${fields}` });
      }

      const exists = await userModel.findOne({ email });

      if (exists) return res.status(400).send({ status: 'warning', warning: 'Ya hay un usuario registrado con ese correo' });

      let role;
      if(email === "adminCoder@coder.com" && password === "adminCod3r123"){
          role = "admin";
      }
      else {
          role = "usuario";
      }

      const user = {
          first_name,
          last_name,
          email,
          age,
          password,
          role
      }

      await userModel.create(user);

      res.send({ status: 'success', message: 'User registered' })
  } catch (error) {
      res.status(500).send({ status: 'error', error });
  }
})













router.put("/users/:uuid", async (req, res) => {
  const { uuid } = req.params;
  let userToReplace = req.body;
  try {
    if (
      !userToReplace.firstName ||
      !userToReplace.lastName ||
      !userToReplace.dni ||
      !userToReplace.address ||
      !userToReplace.username ||
      !userToReplace.password
    )
      res.status(400).send({ error: "datos incompletos" });
    const users = await userModel.updateOne({ _id: uuid }, userToReplace);

    res.status(200).send({ result: "success", payload: users });
  } catch (error) {
    console.error(error);
  }
});
router.delete("/users/:uuid", async (req, res) => {
  const { uuid } = req.params;

  try {
    const userToLogicalDelete = await userModel.findById(uuid);
    userToLogicalDelete.deleted = true;

    const users = await userModel.updateOne({ _id: uuid }, userToLogicalDelete);

    res.status(200).send({ result: "success", payload: users });
  } catch (error) {
    console.error(error);
  }
});



// router.post('/login', async (req, res) => {
//     try {
//         let { email, password } = req.body;
//         email = email.trim();
//         password = password.trim();

//         if (!email && !password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tus datos para iniciar sesión' });
//         if (!email) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar tu correo' });
//         if (!password) return res.status(400).send({ status: 'warning', warning: 'Debes ingresar la contraseña' });

//         const user = await userModel.findOne({ email });
//         const emailExists = await userModel.exists({ email });

//         if (!emailExists) return res.status(400).send({ status: 'error', error: 'El correo que ingresaste no coincide con ningún usuario registrado' });
//         if (!user) return res.status(400).send({ status: 'error', error: 'Contraseña incorrecta' });

//         req.session.user = {
//             name: `${user.first_name} ${user.last_name}`,
//             email: user.email,
//             age: user.age,
//             password: user.password,
//             role: user.role
//         }

//         res.redirect('/comandas');
//     } catch (error) {
//         res.status(500).send({ status: 'error', error });
//         console.log(error);
//     }
// });


// router.get('/logout', (req, res) => {
//     req.session.destroy(err => {
//         if(err) return res.status(500).send({ status: 'error', error: 'Logout fail' });
//         res.redirect('/')
//     })
// });


export default router;
