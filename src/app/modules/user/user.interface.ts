/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

//17:3 video

export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number;
  isUserExistsbyCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
