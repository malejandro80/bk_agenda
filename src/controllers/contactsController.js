/** @format */

const ContactsController = {};

const Contact = require('../models/Contacs');

ContactsController.create = (req, res) => {
  try {
    Contact.create(req.body)
      .then((data) => {
        return res.status(200).json({ response: 'success' });
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

ContactsController.list = (req, res) => {
  try {
    Contact.getAll()
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

ContactsController.get = (req, res) => {
  try {
    Contact.get(req.body.id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

ContactsController.delete = (req, res) => {
  try {
    Contact.delete(req.body.id)
      .then((data) => {
        return res.status(200).json({ response: 'success' });
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

ContactsController.update = (req, res) => {
  try {
    Contact.update(req.body)
      .then((data) => {
        return res.status(200).json({ response: 'success' });
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = ContactsController;
