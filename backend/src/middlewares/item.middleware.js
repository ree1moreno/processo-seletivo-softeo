const itemSchema = require("../schema/itemSchema");

const itemValidate = (req, res, next) => {
  const { error } = itemSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split("|");
    return res.status(code).json({ message });
  }

  return next();
};

module.exports = itemValidate;
