const router = require("express").Router();
const path = require('path');

// ROUTING

router.get('/exercise', (req, res) => {
  console.log('exercise');
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  console.log('stats');
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;