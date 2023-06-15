import User from './user.model';

export const createUserToDB = async () => {
  const user = new User({
    id: '780',
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

  return user;
};
