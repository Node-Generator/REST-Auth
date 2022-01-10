export const BAD_REQUEST = { status: 400, message: 'Bad Request' };
export const UNAUTHORIZED = { status: 401, message: 'Unauthorized' };

export default ({ status, message }, customMessage) => {
  const error = new Error(message || customMessage);
  error.status = status;
  throw error;
};
