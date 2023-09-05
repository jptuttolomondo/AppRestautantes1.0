import * as ComandasService from '../service/comandas.service.js'
import * as  ItemsService  from '../service/items.service.js'
const getComandas= async (req,res)=>{
    try{
        const result = await ComandasService.getComandas();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const getComandasForCocina= async (req,res)=>{
    try{
        const result = await ComandasService.getComandasForCocina();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}



const createComanda = async (req, res) => {
  try {
    const Comanda = req.body;
    const verify = await ComandasService.comandaCreatedVerify(Comanda); //si se creo una comanda con esa mesa hace menos de 5 minutos

    if (verify === true)
      res.send({ status: "Error", message: "La comanda ya esta registrada" });
    else {
      Comanda["deleted"] = false;

      const resultComanda = await ComandasService.createComanda(Comanda);
    
//await ItemsService.createItem(Comanda.items,resultComanda._id.toString())
      res.send({ status: "success", resultComanda });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
}; 

const deleteComanda= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await ComandasService.deleteComanda(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}



const modifyComanda= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await ComandasService.modifyComanda(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}



const getComandaById= async (req,res)=>{
    try{
        const { idcomanda } = req.params;
        const result = await ComandasService.getComandaById(idcomanda);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}
const putComanda= async (req,res)=>{
    try{
        const { _idcomanda } = req.params;
        const  comanda=req.body

        const result = await ComandasService.putComanda(_idcomanda,comanda);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


export{getComandas,createComanda,deleteComanda,modifyComanda,getComandaById,getComandasForCocina,putComanda}