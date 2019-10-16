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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(12, `Listening on port: ${PORT}`);
});

export default app;
