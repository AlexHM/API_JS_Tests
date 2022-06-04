import {
  verrorGeneral,
  verrorNotFound,
} from "../../../helpers/verror/verrorTypes.js";
import User from "../../../models/User.js";

export const findUserService = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) return verrorNotFound;
    return user;
  } catch (error) {
    return verrorGeneral;
  }
};
