const router = require('express').Router();
const { Client } = require('../model');

router.get('/', (req, res) => res.render('dashboard.html'));

router.get('/setting', (req, res) => res.render('setting.html'));

router.post('/setting', (req, res) => {
  const { name, description } = req.body;
  if (name) {
    new Client({ name, description }).save((err, client) => {
      if (err) {
        console.error(err);
        return res.redirect('/');
      }
      res.redirect('/setting');
    });
  } else {
    res.redirect('/');
  }
});


module.exports = router;
