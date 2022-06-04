import Joi from "joi";

export const findUserJoi = Joi.object({
  _id: Joi.string().required().min(24).max(24).id(),
});
export const newUserJoi = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
});
