import dotenv from  'dotenv';

dotenv.config();

export default {
mongoUrl: process.env.MONGO_URL,
secretPassport:process.env.PASSPORT_SECRET,
persistence:process.env.PERSISTENCE,
userAdmin:process.env.USERADMIN,
passwAdmin:process.env.PASSADMIN,
ENVIROMENT:process.env.ENVIROMENT
}