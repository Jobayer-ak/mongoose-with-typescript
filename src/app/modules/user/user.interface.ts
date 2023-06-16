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

export interface IUserMethods {
  fullName(): string;
}