
// import config from "../../config/config.js";
// //import { logger } from "../utils/logger.js";

// let Mesas;
// let Products;

// const persistence = config.persistence;

// switch(persistence) {
//     case 'MONGO':
//        // logger.info('Persistence: MongoDB')
//        console.log('persistence:MONGO')
//         // const mongoose = await import("mongoose");
//         // await mongoose.connect(config.mongoUrl);
//         const mongo=await import('../DbConfig/dbConfig.js')
//         const { default: MongoMesas } = await import('../DbConfig/dbConfig.js');
   
//         Mesas =  MongoMesas;
 
//         break;
//     case 'POSTGRESQL':
//         console.log('PERSISTENCIA:POSTGRESQL')
//         //logger.info('Persistence: POSTGRESQL')


//         break;
// }
 
// export {
//     Mesas}

import config from "../../config/config.js";
//import { logger } from "../utils/logger.js";

const persistence = config.persistence;
switch (persistence) {
  case "MONGO":
    // logger.info('Persistence: MongoDB')
    console.log("persistence:MONGO");
    await import("../../config/dbConfig.js");
    break;
  case "POSTGRESQL":
    console.log("PERSISTENCIA:POSTGRESQL");
    //logger.info('Persistence: POSTGRESQL')
    break;
}