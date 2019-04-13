const router = (require('express')).Router();
const Index = require('../controllers/index');

/* GET home page. */
router.get('/', Index.home);

module.exports = router;
