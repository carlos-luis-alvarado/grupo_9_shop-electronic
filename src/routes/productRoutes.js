const express = require('express');
const router = express.Router();
//const { renderCrearProducto } = require('../controllers/productoController');
let productController = require('../controllers/productController');
const rememberUserMiddleware = require('../middlewares/rememberUserMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const validations = require('../middlewares/validationProductRegister');
const upload = require('../middlewares/userAvatar');


router.get('/', rememberUserMiddleware, productController.index)

router.get('/search', productController.search);
router.get('/filter/:category', productController.filterByCategory);

router.get('/create', rememberUserMiddleware, guestMiddleware, productController.create);
router.post('/create', upload.single('img'), validations, rememberUserMiddleware, productController.store);

router.get('/detail/:id', rememberUserMiddleware, guestMiddleware, productController.detail);

router.get('/edit/:id', rememberUserMiddleware, guestMiddleware, productController.edit);
router.put('/edit/:id', upload.single('img'), validations, rememberUserMiddleware, guestMiddleware, productController.update);

router.delete('/delete/:id', rememberUserMiddleware, guestMiddleware, productController.destroy);


module.exports = router;






