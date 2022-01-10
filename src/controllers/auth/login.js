import { userCollection } from '../../services/mongo';
import validateUser from '../../validators/user';
import { compare } from '../../utils/hash';
import { tokenConstruct } from '../../utils/token';

export default async (user) => {
  await validateUser(user);

  const [mongoUser] = (await userCollection().find({ userName: user.userName }).toArray());
  if (!mongoUser) {
    throw new Error('User does not exist');
  }

  const match = await compare(user.password, mongoUser.password);
  if (!match) {
    throw new Error('Wrong password');
  }

  const token = await tokenConstruct({
    id: mongoUser._id, // eslint-disable-line no-underscore-dangle
  });

  return { token };
};
