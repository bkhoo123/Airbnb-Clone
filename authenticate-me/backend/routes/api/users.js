const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// backend/routes/api/users.js
// ...
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// ...

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// // Get Current User by Id
// router.get('/:id', validateLogin, async (req, res, next) => {
//   let userId = req.params.id

//   let user = await User.findByPk('userId')

//   if (user) {
//     res.statusCode(200)
//     return res.json(user)
//   }
// })



// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user: {
          id, 
          firstName,
          lastName,
          email,
          userName // could be userName was userName
        }
      });
    }
  );

// backend/routes/api/users.js
// ...

module.exports = router;