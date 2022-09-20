const { Router } = require('express');
const router = Router();


router.get('/:name/:age', (req, res, next) => {
  res.send("Hello"+ req.params.name + "you are"+ req.params.age + "years old")
})
module.exports = router;
