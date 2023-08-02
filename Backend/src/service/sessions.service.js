import SessionsRepository from '../repositories/sessions.repository.js';

const sessionsRepository = new SessionsRepository();

const loginUser = async(user) => {

    const result = await sessionsRepository.loginUser(user);
    return result;
}

const logoutUser = async (user) => {
    const result = await sessionsRepository.logoutUser(user);
    return result;
}

export {
    loginUser,
    logoutUser,
 
}