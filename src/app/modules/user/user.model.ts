import { Model, Schema, model } from 'mongoose';
import { IUser, IUserMethods } from './user.interface';

type UserModel = Model<IUser, {}, IUserMethods>;

// creating schema using interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  email: {
    type: String,
    required: true,
  },
  constactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
})

const User = model<IUser, UserModel>('User', userSchema);

export default User;



// isntance methods --> instance's methods
// class -> instance + methods -> instance methods