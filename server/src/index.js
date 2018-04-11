import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import productRouter from './modules/product/productRoutes';
import message from './modules/messages/messages';

const app = express();

// ===== LOGGER =====
app.use(morgan('dev'));

// ===== PARSE RESPONSE =====
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

// ===== CORS =====
app.use((req, res, next) => { // eslint-disable-line consistent-return
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// ===== ROUTING =====
app.use('/product', productRouter);

// ===== ERROR HANDLING =====
app.use((req, res, next) => res.status(404).json(message.error('API not found'))); // eslint-disable-line no-unused-vars

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(error.status || 500);
  res.json(message.error(error.message));
});

// ===== PORT =====
app.listen(5000, () => {
  console.log('Example app listening on port 5000');
});
