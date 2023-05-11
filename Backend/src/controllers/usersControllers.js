import { userModel } from "../models/users.model.js";
export async function getNameMozo (IdUser){return (await userModel.findOne({_id: IdUser})).firstName}

