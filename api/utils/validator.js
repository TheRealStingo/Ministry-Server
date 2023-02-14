const Joi = require("joi");

const signInUpValidation = (payload) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email().messages({
      "string.min": "Email must be at least 6 characters",
      "string.max": "Email must be less than 255 characters",
      "string.email": "Email must be a valid email",
      "any.required": "Email is required",
    }),
    password: Joi.string().min(6).max(255).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be less than 255 characters",
      "any.required": "Password is required",
    }),
  });
  return schema.validate(payload);
};

const innovantValidation = (payload) => {
  const schema = Joi.object({
    type: Joi.string().valid("PI").required(),
    num_label: Joi.string().min(6).max(255).required(),
    year: Joi.string().length(4).required(),
    role: Joi.string().valid("founder", "coFounder").required(),
    first_name: Joi.string().min(6).max(255).required(),
    last_name: Joi.string().min(6).max(255).required(),
    sex: Joi.string().valid("male", "female").required(),
    coFounders: Joi.array(),
    email: Joi.string().min(6).max(255).email().required().messages({
      "string.min": "Email must be at least 6 characters",
      "string.max": "Email must be less than 255 characters",
      "string.email": "Email must be a valid email",
      "any.required": "Email is required",
    }),
    phone: Joi.string().min(8).max(12).required(),
    website: Joi.string().min(6).max(255),
    project_name: Joi.string().min(6).max(255).required(),
    activity: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(6).max(255).required(),
    presentation: Joi.string().min(6).max(255).required(),
    advancement: Joi.string().min(6).max(255).required(),
    cv: Joi.string().min(6).max(255),
    certificate: Joi.string().min(6).max(255),
    recompense: Joi.string().min(6).max(255),
    state: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(150).required(),
    other: Joi.string().min(10).max(255),
  });
  return schema.validate(payload);
};
const startupValidation = (payload) => {
  const schema = Joi.object({
    type: Joi.string().valid("ST").required(),
    num_label: Joi.string().min(6).max(255).required(),
    year: Joi.string().length(4).required(),
    creation_date: Joi.string().length(10).required(),
    num_employees: Joi.number().required(),
    first_name: Joi.string().min(6).max(255).required(),
    last_name: Joi.string().min(6).max(255).required(),
    sex: Joi.string().valid("male", "female").required(),
    qualifications: Joi.string().min(6).max(255),
    email: Joi.string().min(6).max(255).email().required().messages({
      "string.min": "Email must be at least 6 characters",
      "string.max": "Email must be less than 255 characters",
      "string.email": "Email must be a valid email",
      "any.required": "Email is required",
    }),
    phone: Joi.string().min(8).max(12).required(),
    website: Joi.string().min(6).max(255),
    startup_name: Joi.string().min(6).max(255).required(),
    activity: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(6).max(255).required(),
    juridic_status: Joi.string().min(6).max(255).required(),
    nif: Joi.string().min(6).max(255).required(),
    presentation: Joi.string().min(6).max(255).required(),
    register: Joi.string().min(6).max(255).required(),
    advancement: Joi.string().min(6).max(255).required(),
    certificate: Joi.string().min(6).max(255),
    recompense: Joi.string().min(6).max(255),
    state: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(150).required(),
    other: Joi.string().min(10).max(255),
  });
  return schema.validate(payload);
};

module.exports = {
  signInUpValidation,
  startupValidation,
  innovantValidation,
};
