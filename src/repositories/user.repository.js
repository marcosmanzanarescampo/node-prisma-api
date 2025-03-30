import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

const userRepository = {
    async getUsers(){
        const products = await prisma.product.findMany();
        return (products);
    }
}

export default userRepository;