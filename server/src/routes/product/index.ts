import { app } from '~/app';
import { productService } from '~/services';

app.get('/products/:categoryId', async ({ params: { categoryId }, query }, res) => {
  const { attributes, manufacturers } = query;

  const data = await productService.getAll(
    +categoryId,
    attributes?.length ? (attributes as Array<string>) : undefined,
    manufacturers?.length ? (manufacturers as Array<string>) : undefined
  );

  res.send(data);
});
