var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:id', function (req, res, next) {
  let id = req.params.id
  fs.readFile(`./files/${id}.json`, function (err, data) {
    if (err) {
      res.status(500).json({ "error": "File not found." });
    }else{
      res.json(JSON.parse(data));
    }
  })
});
router.post('/:id', function (req, res, next) {
  let id = req.params.id
  fs.writeFile(`./files/${id}.json`, JSON.stringify(req.body), function (err) {
    if (err) {
      res.status(500).json({ "error": "Unable to save data." });
    }
  })
  res.json({ "message": "Success" });
});

module.exports = router;
