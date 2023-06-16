import { NextFunction, Request, Response } from 'express';
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUserFromDB,
} from './user.service';

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  const user = await createUserToDB(data);
  res.status(200).json({
    status: 'success',
    data: user,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const users = await getUserFromDB();
  res.status(200).json({
    status: 'success',
    data: users,
  });
};

// pattern
// Route -> controller -> service

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: 'Success',
    data: user,
  });
};

export const getAdminUsers = async (req: Request, res: Response) => {
  const users = await getAdminUsersFromDB();
  
  console.log("admin users: ", users);

  res.status(200).json({
    status: "Success",
    data: users,
})
}
