/** @format */

const { check, validationResult } = require('express-validator');
const validator = {};

validator.rules = [
  check('name').notEmpty().withMessage('name must have a value'),
  check('country_code')
    .notEmpty()
    .withMessage('country_code must have a value'),
  check('phone').notEmpty().withMessage('phone must have a value'),
];

validator.id = [
  check('id')
    .notEmpty()
    .withMessage('id must have a value')
    .isNumeric()
    .withMessage('id must be numeric'),
];

validator.update = [
  check('id').exists().withMessage('this field does not exist'),
  check('name').exists().withMessage('this field does not exist'),
  check('surname').exists().withMessage('this field does not exist'),
  check('country_code').exists().withMessage('this field does not exist'),
  check('phone').exists().withMessage('this field does not exist'),
  check('description').exists().withMessage('this field does not exist'),
];

validator.exec = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};
module.exports = validator;
