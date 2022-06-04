import VError from "verror";

//Mongo general error
export const verrorGeneral = new VError.WError(
  { name: "ErrorMongoGeneral" },
  "Something was worng"
);
export const verrorNotFound = new VError.WError(
  { name: "ErrorNotFound" },
  "Resource not found"
);
export const verrorValidateFields = new VError.WError(
  { name: "ErrorValidateFields" },
  "Error validating fields"
);
