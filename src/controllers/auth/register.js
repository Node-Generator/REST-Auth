import { userCollection } from '../../services/mongo';
import validateUser from '../../validators/user';
import { hash } from '../../utils/hash';

export default async (user) => {
  await validateUser(user);
  const password = await hash(user.password);

  return userCollection().insertOne({ ...user, password });
};
