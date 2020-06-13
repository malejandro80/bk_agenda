/** @format */

const { Router } = require('express');
const contactsController = require('./controllers/contactsController');
const validators = require('./middlewares/validations');

const router = Router();

router.post(
  '/create',
  [validators.rules, validators.exec],
  contactsController.create
);

router.get('', contactsController.list);
router.post(
  '/getContact',
  [validators.id, validators.exec],
  contactsController.get
);

router.post(
  '/delete',
  [validators.id, validators.exec],
  contactsController.delete
);

router.post(
  '/update',
  [validators.update, validators.exec],
  contactsController.update
);
module.exports = router;
