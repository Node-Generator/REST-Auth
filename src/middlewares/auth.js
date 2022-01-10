import customError, { UNAUTHORIZED } from '../utils/customError';
import { tokenVerify } from '../utils/token';

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    customError(UNAUTHORIZED, 'User not authenticated');
  }

  try {
    tokenVerify(token);
  } catch (error) {
    customError(UNAUTHORIZED, error.message);
  }
  return next();
};
