const express = require('express');
const router = express.Router();

const ItemController = require('../controller/ItemController');
const ItemValidation = require('../middlewares/ItemValidation');

router.post('/', ItemValidation, ItemController.create);

router.put('/:id', ItemController.update);
router.put('/:id/:comprado', ItemController.done);

router.get('/filter/all',ItemController.all);
router.get('/filter/tipo',ItemController.type);
router.get('/:id',ItemController.show);


router.delete('/:id',ItemController.delete);

module.exports = router;