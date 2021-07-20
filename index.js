import { env } from 'process';
import express from 'express';

const app = express();
const port = env.APP_PORT || 80;
const delay = env.API_DELAY_RESPONSE || 0;

app.get('*', async (req, res) => {
  await process(req, res);
});

app.post('*', async (req, res) => {
  await process(req, res);
});

app.put('*', async (req, res) => {
  await process(req, res);
});

app.delete('*', async (req, res) => {
    await process(req, res);
});

async function process(req, res) {
  log(req);
  if (delay>0) {
      await sleep(delay);
  }
  resolve(req, res);
}

function log(req) {
   console.log('---------------------------------');
   console.log('request:', req.originalUrl);
   console.log('method:', req.method);
   console.log('params:', req.params);
   console.log('body:', req.body);
   console.log('query:', req.query);
}

function resolve(req, res) {
   console.log('request complete');
   res.send('request complete');
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.listen(port, () => {
  console.log(`Interceptor started on port ${port}`);
})
