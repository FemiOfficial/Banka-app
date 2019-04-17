/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import indexRoute from './routes/index.route';
import UserRoute from './routes/user.auth.routes';
import AccountRoute from './routes/accounts.route';
import TransactionsRoute from './routes/transactions.route';

require('dotenv').config();

const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/v1', indexRoute);
app.use('/api/v1/auth', UserRoute);
app.use('/api/v1/accounts', AccountRoute);
app.use('/api/v1/transactions', TransactionsRoute);


const { PORT } = process.env;

app.listen(PORT, () => console.log(`App is running from PORT ${PORT}`));

export default app;
