import { Router } from 'express';
import userServices from '../services/user.services.js'

const router = Router();

// user routes:

router.get('/users', (req, res) => {
    const users = userServices.getUsers();
    res.send(users); 
});
// productRoutes.get('/users', async (req, res) => {
//     const products = await prisma.product.findMany();
//     res.json(products);
// });

// router.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`getting user ${id}...`);   
// });

// router.post('/users/:id', (req, res) => {
//     const id = req.params.id;    
//     res.send(`creating user ${id}...`);     
// });

// router.delete('/users/:id', (req, res) => {
//     const id = req.params.id;    
//     res.send(`deleting user ${id}...`);     
// });

// router.put('/users/:id', (req, res) => {
//     const id = req.params.id;    
//     res.send(`updating user ${id}...`);     
// });


export default router;