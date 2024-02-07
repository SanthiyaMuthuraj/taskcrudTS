import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoute';
import config from './config';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(config.mongoURI, {

});

app.use(cors());
app.use(bodyParser.json());


app.use('/customers', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
