import { config } from 'dotenv';

config();

(async () => {
  const [{ app }] = await Promise.all([import('~/app'), import('~/routes')]);

  app.listen(+process.env.PORT! || 8000, () => {
    console.log('⚡️ App is running on port 8000!');
  });
})();
