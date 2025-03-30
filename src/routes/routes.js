import userRoutes from '../controllers/user.controller.js'

export const routes = (app) => {
    app.use(userRoutes);
}


