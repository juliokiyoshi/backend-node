import { createUser } from '../repositorys/user.repositorys';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) : Promise<Response> => {
    try {
        const user = await createUser(req.body);
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).send(e);
    }
};
