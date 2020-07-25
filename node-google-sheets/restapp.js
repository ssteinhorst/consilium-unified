const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// let allProviders = require('./data/seed-data').providers;
let gsUtil = require('./index-auth');

// re-examine cors usage in production
let cors = require('cors');
app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));

app.get('/providers', async (req, res) => {
  if(!req.query.specialty) {
    res.statusMessage = "Specialty is required";
    return res.status(400).end();
  }
  // get sheets data here and filter results
  console.log("before")
  let allProviders = await gsUtil.getSheetsProviders(req.query.specialty);
  console.log("after")
  let filters = { };
  if(req.query.zone) {
      filters.zone = req.query.zone;
  }
  if(req.query.name) {
    filters.name = req.query.name;
  }
  if(req.query.type) {
    filters.type = req.query.type;
  }

  let providers = allProviders.filter(function (item) {
    for (let key in filters) {
      if (key == 'zone') {
        if (item[key] === undefined || item[key] != req.query[key])
          return false;
      } else {
        if (item[key] === undefined || !item[key].toLowerCase().includes(req.query[key].toLowerCase()))
          return false;
      }
    }
    return true;
  });

  // providers = allProviders.filter(function (item) {
  //     return item.population > 3000000;
  // });
  // console.dir(providers);
  // }
  return res.json(providers);
});

app.post('/providers', (req, res) => {
  return res.send('Unimplmimented, sorry pal.');
});

app.put('/providers', (req, res) => {
  return res.send('Unimplmimented, sorry pal.');
});

app.delete('/providers', (req, res) => {
  return res.send('Unimplmimented, sorry pal.');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);