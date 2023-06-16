import { IUser } from './user.interface';
import User from './user.model';

export const createUserToDB = async (payload:IUser): Promise<IUser> => {
  const user = new User(payload); // User -> class user -> instance
  await user.save(); //builtin instace methods .save() -> instance method // custom instance method

  // while using post method we can use instance method
  console.log(user.fullName());
  return user;
};

export const getUserFromDB = async(): Promise<IUser[]> => {
  const users = await User.find();

  
  return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, {name: 1, email: 1});
  return user;
}

// export const getAllAdminUsers = async (payload: string): Promise<IUser | null> => {
//   const user1 = new User() // static User
// }