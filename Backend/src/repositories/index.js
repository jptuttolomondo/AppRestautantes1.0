


import {Mesas,Users,Items} from '../dao/factory.js';
import MesasRepository from '../repositories/mesas.repository.js';
import UsersRepository from './users.repository.js';
import ItemsRepository from './items.repository.js';
const mesasRepository = new MesasRepository(Mesas);
const usersRepository = new UsersRepository(Users);
const itemsRepository=new ItemsRepository(Items)
export {
mesasRepository,usersRepository,itemsRepository
}