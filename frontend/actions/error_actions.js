export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (typeErrors, errors) => ({
  type: RECEIVE_ERRORS,
  typeErrors,
  errors
});

export const clearErrors = typeErrors => ({
  type: CLEAR_ERRORS,
  typeErrors
});
