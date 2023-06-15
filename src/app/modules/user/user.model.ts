import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

// creating schema using interface
const userSchema = new Schema<IUser>({
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

const User = model<IUser>('User', userSchema);

export default User;