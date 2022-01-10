import { userCollection } from '../../services/mongo';
import validateUser from '../../validators/user';
import { compare } from '../../utils/hash';
import { tokenConstruct } from '../../utils/token';
import customError, { UNAUTHORIZED } from '../../utils/customError';

export default async (user) => {
  await validateUser(user);

  const [mongoUser] = (await userCollection().find({ userName: user.userName }).toArray());
  if (!mongoUser) {
    customError(UNAUTHORIZED, 'User does not exist.');
  }

  const match = await compare(user.password, mongoUser.password);
  if (!match) {
    customError(UNAUTHORIZED, 'Wrong password.');
  }

  const token = await tokenConstruct({
    id: mongoUser._id, // eslint-disable-line no-underscore-dangle
  });

  return { token };
};
