import express from 'express';
import { PORT } from './config.js';
import { routes } from './routes/routes.js';

const app = express();
app.use(express.json());
routes(app);
app.listen(PORT);

console.log(`Server on http://localhost:${ PORT }`);

