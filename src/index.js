import express from 'express';
import { db } from './config/db.js';
import { PORT } from './config/index.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, async () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});