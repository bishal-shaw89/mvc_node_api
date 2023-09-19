const express = require('express');
const authController = require('../controllers/authContoller');
const { check } = require('express-validator');

const router = express.Router();

router.post('/register', [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Please enter a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    authController.register
)

module.exports = router;