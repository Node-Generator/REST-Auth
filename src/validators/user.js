import validator from './validator';

export const userSchema = {
  id: '/User',
  type: 'object',
  properties: {
    userName: { type: 'string' },
    password: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: ['string', 'object'] },
  },
  required: ['userName', 'password'],
};

export default (user) => validator(user, userSchema);
