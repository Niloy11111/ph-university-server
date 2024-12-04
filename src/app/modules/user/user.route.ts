import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const validateRequest = (name) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //validation
    // next();
  };
};

router.post(
  '/create-student',
  validateRequest('validateRequest'),
  UserControllers.createStudent,
);

export const UserRoutes = router;
