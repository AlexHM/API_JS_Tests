import { newUserJoi } from "../../../helpers/joi/users/user.joi.js";
import {
  verrorGeneral,
  verrorValidateFields,
} from "../../../helpers/verror/verrorTypes.js";
import { newUserService } from "../services/newUser.service.js";

export const newUser = async (req, res) => {
  try {
    const validation = await newUserJoi.validate({
      name: req.body.name,
      surname: req.body.surname,
    });
    if (validation.error) return res.status(400).json(verrorValidateFields);
    const newUser = await newUserService(req.body);
    if (newUser === verrorGeneral) return res.status(500).json(verrorGeneral);
    return res.status(201).json(newUser);
  } catch (error) {
    verrorGeneral;
  }
};
