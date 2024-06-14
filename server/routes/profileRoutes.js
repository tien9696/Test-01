const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController.js');
const authenticateToken = require('../middleware/authMiddleware.js');

router.post('/', authenticateToken, profileController.createProfile);
router.get('/', authenticateToken, profileController.getProfile);
router.put('/', authenticateToken, profileController.updateProfile);
router.delete('/', authenticateToken, profileController.deleteProfile);

module.exports = router;
