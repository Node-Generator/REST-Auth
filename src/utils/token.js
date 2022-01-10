import jwt from 'jsonwebtoken';
import config from '../config';

export function tokenConstruct(data) {
  return jwt.sign(data, config?.JWT?.secret || '', { expiresIn: config?.JWT?.expiresIn || '24h' });
}

export function tokenVerify(token) {
  return jwt.verify(token, config?.JWT?.secret || '');
}
