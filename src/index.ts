import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import './models';


const app = express();
const { PORT } = process.env;


app.get('/', (req, res) => {
  res.send('Well done!');
})

app.listen(PORT, () => {
  console.log('The application is listening on port 3000!');
})