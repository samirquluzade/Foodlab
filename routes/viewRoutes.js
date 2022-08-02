const express = require("express");
const views =  require("../controllers/Views.js");
const auth =  require("../controllers/Auth.js");
// const auth = require("../controllers/Auth");
const router = express.Router();

router.get('/',views.getHome);
router.get('/about',views.getAbout);
router.get('/enrollKitchen',views.getEnrollKitchen);
router.get('/solutions',views.getSolutions);
router.get('/property',views.getProperty);
router.get('/restaurant',views.getRestaurant);
router.get('/store',views.getStore);
router.get('/login',auth.isLoggedIn,views.getLogin);
router.get('/dashboard',auth.protect,views.getDashboard);
// router.post('/:id',views.deleteItemId);
router.post('/add_restaurant_comment',views.addRestaurantComment);
router.post('/add_property_comment',views.addPropertyComment);
router.post('/add_kitchen_comment',views.addEnrollKitchen);
router.post('/add_business_comment',views.addBusinessComment);
router.post('/add_solutions_comment',views.addSolutionsComment);

module.exports = router;