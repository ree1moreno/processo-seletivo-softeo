const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required().messages({
    "any.required": '400|"name" is required',
    "string.base": '422|"name" must be a string',
  }),
  treatment: Joi.string().required().messages({
    "any.required": '400|"treatment" is required',
    "string.base": '422|"treatment" must be a string',
  }),
  date: Joi.string().required().messages({
    "any.required": '400|"date" is required',
    "string.base":
      '422|"treatment" must be a string with format ("YYYY-MM-DD")',
  }),
  value: Joi.number().positive().required().messages({
    "any.required": '400|"value" is required',
    "number.base": '422|"value" must be a number',
    "number.positive": '422|"value" must be greater than or equal to 1',
  }),
  portion: Joi.number().positive().max(12).required().messages({
    "any.required": '400|"portion" is required',
    "number.base": '422|"portion" must be a number',
    "number.positive": '422|"portion" must be greater than or equal to 1',
    "number.max": '422|"portion" must be less or equal 12',
  }),
});
