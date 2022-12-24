import { createUser } from "../repositorys/user.repositorys"; 

export const create = async (req,res) => {
    try {
        const user = await createUser(req.body)
        res.status(2000)
    } catch(e){
        res.status(400).send(e)
    }
};