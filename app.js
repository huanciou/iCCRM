import express from 'express';
import './config/dotenv.js';
import './config/db.js';
import profileRouter from './routes/profile.js';
import adminRouter from './routes/admin.js';

const app = express();
const { SERVER_PORT } = process.env;

app.use('/api', profileRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('homepage');
});

app.listen(SERVER_PORT, () => {
  console.log('Server is running on port: 3000');
});
