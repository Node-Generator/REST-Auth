import { tokenVerify } from '../utils/token';

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'User not authenticated',
    });
  }

  try {
    tokenVerify(token);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
  return next();
};
