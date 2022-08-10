import { app } from '~/app';

app.get('/products', (_, res) => {
  res.send({
    data: true
  });
});
