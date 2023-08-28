import { fileURLToPath } from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'JuanPablo';

export const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
};

export const authToken = (req, res, next) => {
    const authToken = req.headers.authorization; //traigo  la cadena del token
    
    if(!authToken) return res.status(401).send({error: 'Not authenticated'});

    const token = authToken.split(' ')[1]; //separo en el token la palabra bearer del token

    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if (error) return res.status(403).send({error: 'Not authorized'});
        req.user = credentials.user;
        next();
    })
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;