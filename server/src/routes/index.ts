import { app } from '~/app';
import './product.routes';

app.get('/health', (_, res) => {
  res.sendStatus(200);
});
