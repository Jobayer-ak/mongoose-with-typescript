import { HydratedDocument, Model } from "mongoose";





// creating interface
export interface IUser {
  id: string;
  role: 'student';
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: 'Male' | 'Female';
  email?: string;
  constactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// static
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
