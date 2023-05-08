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
router.post("/user", async (req, res) => {
  const {
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
    if (!firstName || !lastName || !dni || !address || !username || !password)
      res.status(400).send({ error: "datos incompletos" });
    const users = await userModel.create({
      firstName,
      lastName,
      dni,
      address,
      username,
      password,
      inputDate,
      payDay,
    });

    res.status(200).send({ result: "success", payload: users });
  } catch (error) {
    console.error(error);
  }
});

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

export default router;
