import { app } from '~/app';
import './category';
import './manufacturer';
import './product';

app.get('/health', (_, res) => {
  res.sendStatus(200);
});
