import { userCollection } from '../../services/mongo';
import validateUser from '../../validators/user';
import { hash } from '../../utils/hash';

export default async (user) => {
  let password;

  await validateUser(user);
  password = await hash(user.password);

  return await userCollection().insert({ ...user, password });
}
