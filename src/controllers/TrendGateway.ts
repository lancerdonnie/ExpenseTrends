import { Router } from 'express';
import api from '../apiAdapter';

const router = Router();

const baseUrl = 'http://localhost:5001';

router.get('/', (req, res) => {
  api
    .get(baseUrl + req.originalUrl.split('/api')[1])
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((e) => {
      console.error(e.message);
      res.status(400).send();
    });
});

export default router;
