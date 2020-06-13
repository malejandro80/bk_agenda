/** @format */

const conexion = require('../db');
const model = {};

model.getAll = () => {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM contacts`, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

model.get = (id) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      `SELECT * FROM contacts
                    WHERE id = ${id} `,
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
};

model.create = (param) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      `INSERT INTO contacts 
                    SET ?`,
      [param],
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
};

model.delete = (id) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      `DELETE FROM contacts
                    WHERE id = ${id} `,
      (err, res) => {
        if (err) reject(err);
        else {
          response = {
            status_code: '200',
            query_information: res,
          };
          resolve(response);
        }
      }
    );
  });
};

model.update = (req) => {
  let id = req.id;
  let data = {
    name: req.name,
    surname: req.surname,
    country_code: req.country_code,
    phone: req.phone,
    description: req.description,
  };
  return new Promise((resolve, reject) => {
    conexion.query(
      `UPDATE contacts SET ?
                    WHERE id = ?`,
      [data, id],
      (err, res) => {
        if (err) reject(err);
        else {
          response = {
            status_code: '200',
            query_information: res,
          };
          resolve(response);
        }
      }
    );
  });
};

module.exports = model;
