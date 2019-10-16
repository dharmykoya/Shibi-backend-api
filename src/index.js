import express from 'express';
import bodyParser from 'body-parser';

// Create global App project
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  return response.status(200).send({
    message: 'Welcome to Shibi app API'
  });
});

app.use((request, response, next) => {
  const error = new Error('You are trying to access a wrong Route');
  error.status = 404;
  next(error);
});

app.use((error, request, response) => {
  response.status(error.status || 500);
  response.json({
    status: error.status || 500,
    error: error.name,
    message: error.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(12, `Listening on port: ${PORT}`);
});

export default app;
