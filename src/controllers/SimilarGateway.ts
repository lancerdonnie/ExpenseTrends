import { Router } from 'express';
import api from '../apiAdapter';

const router = Router();

const baseUrl = 'http://expensetrendssimilar.herokuapp.com';

router.post('/', (req, res) => {
  api
    .post(baseUrl + req.originalUrl.split('/api')[1], req.body)
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((e) => {
      console.error(e.message);
      res.status(400).send();
    });
});

export default router;
