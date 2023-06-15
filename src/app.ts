import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  // inserting a test data into mongodb

  /**
   * stpe1: Interface
   * spet2: Schema
   * step3: Model
   * step4: Database Query
   */

  //   res.send('Hello World!');

  // creating interface
  interface IUser {
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

  const createUserToDB = async () => {
    const user = new User({
      id: '778',
      role: 'student',
      password: '1234',
      name: {
        firstName: 'Mr.',
        middleName: 'John',
        lastName: 'Wick',
      },
      dateOfBirth: '01Jun,2000',
      gender: 'Male',
      email: 'jobayer.ak@gmail.com',
      constactNo: '01725008757',
      emergencyContactNo: '01814005745',
      presentAddress: 'Mymensingh',
      permanentAddress: 'Mymensingh',
    });

      await user.save();
      
      console.log(user);
  };

  createUserToDB();
});

export default app;
