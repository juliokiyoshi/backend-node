import { prisma} from "../services/prisma";

export const createUser = async(data) => {
    const post = await prisma.post.create({
        data : {
            title: data.title,
            body : data.body
        }
    });
    console.log(post)
}