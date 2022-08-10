import { Like } from 'typeorm';
import { app } from '~/app';
import { manufacturerService } from '~/services';

app.get('/manufacturers', async ({ query }, res) => {
  const { displayName } = query;

  const data = await manufacturerService.getAll({ displayName: Like(`%${displayName ?? ''}%`) });

  res.send(data);
});
