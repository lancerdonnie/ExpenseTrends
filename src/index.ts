import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import { config } from 'dotenv';
config();

import SimilarGateway from './controllers/SimilarGateway';
import TrendGateway from './controllers/TrendGateway';

const app = express();

app.use(json());
app.use(cors());

app.use('/api/similar*', SimilarGateway);
app.use('/api/trend*', TrendGateway);

app.use(express.static(path.join(__dirname, '../frontend', 'out')));

app.get('/*', function (_, res) {
  res.sendFile(path.join(__dirname, '../frontend', 'out', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log('\x1b[36m%s\x1b[0m', `Running server on port ${PORT}`)
);
