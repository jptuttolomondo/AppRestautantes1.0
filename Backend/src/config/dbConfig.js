import mongoose from 'mongoose';
import config from './config.js';

const MONGO_URL = config.mongoUrl;

try {
    await mongoose.connect(MONGO_URL);
    console.log('***Conectado a la BDD con dbconfig***');
} catch (error) {
    console.log(error);
}
 

