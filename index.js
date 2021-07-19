const express = require('express')
const app = express()
const port = 80
const delay = 10000

app.get('*', async (req, res) => {
  await process(req, res)
})

app.post('*', async (req, res) => {
  await process(req, res)
})

app.put('*', async (req, res) => {
  await process(req, res)
})

async function process(req, res) {
  log(req)
  await sleep(delay)
  resolve(req, res)
}

function log(req) {
   console.log('---------------------------------')
   console.log('request:', req.originalUrl)
   console.log('params:', req.params)
   console.log('body:', req.body)
   console.log('query:', req.query)
}

function resolve(req, res) {
   console.log('request complete')
   res.send('request complete')
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
