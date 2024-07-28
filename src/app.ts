import express from "express";
import deviceRoutes from './routes/deviceRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', deviceRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Karaoke POS');
  });


export default app;
