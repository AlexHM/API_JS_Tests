import { verrorGeneral } from "../../../helpers/verror/verrorTypes.js";
import User from "../../../models/User.js";

export const newUserService = async (user) => {
  try {
    const newUser = new User(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    return verrorGeneral;
  }
};
