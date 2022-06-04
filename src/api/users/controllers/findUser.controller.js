import { findUserJoi } from "../../../helpers/joi/users/user.joi.js";
import { findUserService } from "../services/findUser.service.js";
import {
  verrorGeneral,
  verrorValidateFields,
  verrorNotFound,
} from "../../../helpers/verror/verrorTypes.js";

export const findUser = async (req, res) => {
  try {
    const validation = await findUserJoi.validate({
      _id: req.params.idUser,
    });
    if (validation.error) return res.status(400).json(verrorValidateFields);
    const user = await findUserService(req.params.idUser);
    if (user === verrorNotFound) return res.status(404).json(verrorNotFound);
    return res.status(200).json(user);
  } catch (error) {
    verrorGeneral;
  }
};
