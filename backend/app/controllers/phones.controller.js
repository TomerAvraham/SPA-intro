const { readJsonFileByName } = require("../helpers/json-helper");
const { FILES_NAME } = require("../constants/constants");

exports.getAllPhones = async (req, res) => {
  const phones = await readJsonFileByName(FILES_NAME.phones);
  res.send(phones);
};

exports.getPhoneById = async (req, res) => {
  const { id } = req.params;
  const phones = await readJsonFileByName(FILES_NAME.phones);
  const phoneById = phones.find((phone) => phone.id == id);
  if (phoneById === undefined) res.sendStatus(404);
  res.send(phoneById);
};
