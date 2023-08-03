//Валидация ДжоиСхемы (выдаеи правильный статус при ошибке - 400)
const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      throw error;
    }
    next();
  };
};
module.exports = validation;
