const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let promiseResults = req.body.developers.map(async d => {
      return axios.get(`https://api.github.com/users/${d}`);
    });
    results = await getData(promiseResults)
    let out = results.map(r => ({ bio: r.data.bio, name: r.data.name }));

    return res.send(JSON.stringify(out));
  } catch(err) {
    console.log(err)
     next();
  }
});

async function getData(promiseResults) {
  let arr = []
  for (let promise of promiseResults) {
    const res = await promise
    arr.push(res)
  }
  return arr
}

app.listen(3000, function () {
    console.log('App on port 3000');
  })
