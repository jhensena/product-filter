import { config } from 'dotenv';

config();

(async () => {
  const [{ app }, { connection }] = await Promise.all([import('~/app'), import('~/datasources'), import('~/routes')]);

  connection.initialize().then(() => {
    app.listen(+process.env.PORT! || 8000, () => {
      console.log('⚡️ App is running on port 8000!');
    });
  });
})();
