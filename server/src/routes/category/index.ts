import { app } from '~/app';
import { categoryService } from '~/services';

app.get('/categories/get-one', async (_, res) => {
  const data = await categoryService.getOne();

  res.send(data);
});
