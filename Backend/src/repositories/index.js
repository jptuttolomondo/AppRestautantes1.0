


import {Mesas,Users} from '../dao/factory.js';
import MesasRepository from '../repositories/mesas.repository.js';
import UsersRepository from './users.repository.js';

const mesasRepository = new MesasRepository(Mesas);
const usersRepository = new UsersRepositoryRepository(Users);

export {
mesasRepository
}